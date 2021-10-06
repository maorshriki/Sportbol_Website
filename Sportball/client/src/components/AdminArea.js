import React, { Component } from "react";
import { onLogOut } from "../api/auth";
import "./AdminArea.css";

class AdminArea extends Component {
  constructor() {
    super();
    this.state = { wells: [], search: "" };
  }
  componentDidMount() {
    const adedItems = [];
    const purCas = [];
    const userRole = "";
    const userName = "";
    const userEmail = "";
    const inTime = "";
    const OutTime = "";
    const flag = true;
    const data = {
      adedItems,
      userRole,
      userName,
      userEmail,
      purCas,
      inTime,
      OutTime,
      flag,
    };

    onLogOut(data).then((response) =>
      this.setState({ wells: response.data.orders })
    );
  }
  onSearch = async (value) => {
    this.searchDebounce = setTimeout(async () => {
      this.setState({
        search: value,
      });
    });
  };

  render() {
    const { wells } = this.state;
    return (
      <div>
        <div>
          <input
            type="search"
            placeholder="Search by orders"
            onChange={(e) => this.onSearch(e.target.value)}
          />
        </div>
        <div>
          <h3 className="header">Orders Details</h3>
        </div>
        <div className="main-style">
          {wells
            .filter((order) =>
              (order.userName ? order.userName : "")
                .toLowerCase()
                .includes(this.state.search.toLowerCase())
            )
            .map(
              (ord) =>
                ord.userRole !== "admin" && (
                  <div className="style">
                    <div className="card w-75">
                      <div className="card-body">
                        <br></br>
                        <h5 className="card-title">
                          User Name : {ord.userName}
                        </h5>
                        <h5 className="card-title">
                          User Email : {ord.userEmail}
                        </h5>
                        <p className="card-text">
                          <li>
                            Login Time :{" "}
                            {JSON.stringify(ord.inTime.toLocaleString())}
                          </li>
                          <li>
                            Logout Time :{" "}
                            {JSON.stringify(ord.OutTime.toLocaleString())}
                          </li>
                        </p>
                        <h5 className="card-title">Add to cart items : </h5>
                        <React.Fragment>
                          <div className="edit">
                            <ul>
                              {ord.adedItems.map((e) => (
                                <div className="row">
                                  <li className="style2">
                                    <br></br>
                                    <h3 className="main-strong">{e.Name}</h3>
                                  </li>
                                  <li className="style2">
                                    <br></br>
                                    <strong>{"סוג המגרש"}</strong>
                                    <br></br>
                                    {e.Type}
                                  </li>
                                  <li className="style2">
                                    <strong>{"שם המגרש"}</strong>
                                    <br></br>
                                    {e.Name}
                                  </li>
                                  <li className="style2">
                                    <strong>{"רחוב"}</strong>
                                    <br></br>
                                    {e.street}
                                  </li>
                                  <li className="style2">
                                    <strong> {"מספר רחוב"}</strong>
                                    <br></br>
                                    {e.HouseNumbe}
                                  </li>
                                  <li className="style2">
                                    <strong> {"בעלים"}</strong>
                                    <br></br>
                                    {e.Owner}
                                  </li>
                                  <br></br>
                                  <br></br>
                                </div>
                              ))}
                            </ul>
                          </div>
                          <h5 className="card-title">User purchases : </h5>
                          <div className="edit">
                            <ul>
                              {ord.purCas.map((e) => (
                                <div className="row">
                                  <li className="style2">
                                    <br></br>
                                    <h3 className="main-strong">{e.Name}</h3>
                                  </li>
                                  <li className="style2">
                                    <br></br>
                                    <strong>{"סוג המגרש"}</strong>
                                    <br></br>
                                    {e.Type}
                                  </li>
                                  <li className="style2">
                                    <strong>{"שם המגרש"}</strong>
                                    <br></br>
                                    {e.Name}
                                  </li>
                                  <li className="style2">
                                    <strong>{"רחוב"}</strong>
                                    <br></br>
                                    {e.street}
                                  </li>
                                  <li className="style2">
                                    <strong> {"מספר רחוב"}</strong>
                                    <br></br>
                                    {e.HouseNumbe}
                                  </li>
                                  <li className="style2">
                                    <strong> {"בעלים"}</strong>
                                    <br></br>
                                    {e.Owner}
                                  </li>
                                  <br></br>
                                  <br></br>
                                </div>
                              ))}
                            </ul>
                          </div>
                        </React.Fragment>
                        <br></br>
                      </div>
                    </div>
                  </div>
                )
            )}
        </div>
      </div>
    );
  }
}
export default AdminArea;
