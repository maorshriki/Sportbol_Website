import axios from "axios";

export const onSignUp = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await axios.post("/api/auth/onSignUp", data, config);
  return res;
};

export const onSignIn = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await axios.post("/api/auth/onSignIn", data, config);
  return res;
};

export const onLogOut = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await axios.post("/api/auth/onLogOut", data, config);
  return res;
};
