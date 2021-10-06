import fields from "./field-items";
import "../InsidePages/insidePages_cssFiels/CartScreen.css";
import FieldCard from "./FieldCard";
import { useState } from "react";

const Cart = () => {
  const [searchTerm, setserchTerm] = useState("");
  const [Type, setType] = useState("");
  return (
    <div>
      <div className="search">
        <input
          className="form-control me-2"
          type="text"
          placeholder="Search by field name"
          aria-label="Search"
          onChange={(e) => {
            setserchTerm(e.target.value);
          }}
        />
      </div>

      <div className="search">
        <input
          className="form-control me-2"
          type="text"
          placeholder="Search by type"
          aria-label="Search"
          onChange={(e) => {
            setType(e.target.value);
          }}
        />
      </div>

      <div className="fields_wrapper">
        {fields
          .filter((field) => {
            if (Type === "") return field;
            else if (field.Type.includes(Type)) {
              return field;
            }
          })
          .filter((field) => {
            if (searchTerm === "") return field;
            else if (field.Name.includes(searchTerm)) {
              return field;
            }
          })
          .map((field) => (
            <FieldCard key={field.Name.includes(searchTerm)} field={field} />
          ))}
      </div>
    </div>
  );
};
export default Cart;
