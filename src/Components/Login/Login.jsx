import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Web_image from "../../Assets/login_image.jpg";
import WebLogo from "../../Assets/weblogo.png";
import { Button } from "bootstrap";
import { useNavigate } from "react-router-dom";
import "../Login/Login.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();
  const loginSubmit = (location) => {
    let path = location;
    navigate(path);
  };

  const [userInfo, setUserInfo] = useState([]);

  // const filterUserId = () => {
  //   let dataLocal = JSON.parse(localStorage.getItem("UserInfo"));
  //   const filterData = dataLocal.map((values, username) => {
  //     return values.username;
  //   });
  //   const filterDetails = dataLocal.map((values) => {
  //     return values.password;
  //   });

  //   console.log("username", filterData);
  //   console.log("password", filterDetails);
  // };

  useEffect(() => {
    // console.log("userinfo", localStorage.getItem("UserInfo"));
    setUserInfo(JSON.parse(localStorage.getItem("UserInfo")));
    // filterUserId();

  }, []);

  const handleSubmit = (values) => {
    let dataLocal = JSON.parse(localStorage.getItem("UserInfo"));
    const filterData = dataLocal.map((values, username) => {
      return values.username;
    });
    const filterDetails = dataLocal.map((values) => {
      return values.password;
    });
    console.log("username", filterData);
    console.log("password", filterDetails);

    // if(filterData.includes(values.username) && filter )

    // if (userInfo === null) {
    //   alert("User is not existing, Please Register");
    // } else if (
    //   filterData.includes(values.username) &&
    //   filterDetails.includes(values.password)
    // ) {
    //   navigate("/dashboard");
    //   alert("Login Successful");
    // } else if (
    //   !filterData.includes(values.username) &&
    //   !filterDetails.includes(values.password)
    // ) {
    //   alert("Invalid UserID/Password");
    // } else if (!filterData.includes(values.username)) {
    //   alert("Invalid Username");
    // } else if (!filterDetails.includes(values.password)) {
    //   alert("Invalid Password");
    // } else {
    //   alert("Invalid User");
    // }
    userInfo === null
      ? alert("User is not existing, Please Register")
      : filterData.includes(values.username) &&
        filterDetails.includes(values.password)
      ? navigate("/dashboard")
      : !filterData.includes(values.username) &&
        !filterDetails.includes(values.password)
      ? alert("Invalid UserID/Password")
      : !filterData.includes(values.username)
      ? alert("Invalid Username")
      : !filterDetails.includes(values.password)
      ? alert("Invalid Password")
      : alert("Invalid User");
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(10, "Must be 10 chraracters or less")
        .required("Username Required"),
      password: Yup.string()
        .max(
          10,
          "Must be one Capital letter and a special character",
          "Must be 10 characters or less"
        )
        .required("Password Required"),
    }),

    onSubmit: (values) => {
      handleSubmit(values);
      console.log("abde", values);
      // alert(JSON.stringify(values, null, 2));
      // console.log(JSON.stringify(values));
    },
  });

  return (
    <>
      <div className="abcd">
        <div className="web_image">
          <div>
            <img className="whole_image" src={Web_image} alt="" />
            <div className="account">
              <h5 className="text">Don't have an Account?</h5>

              <Link to="/registerCheckin">
                <button
                  className="register_button"
                  style={{
                    backgroundColor: "#002e83",
                    width: "170px",
                    height: "54px",
                    fontWeight: "800",
                    color: "white",
                    padding: "13px 26px",
                    borderRadius: "5px",
                  }}
                >
                  REGISTER
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="login_details">
          <div className="logo">
            <img className="imagility_logo" src={WebLogo} />
            <hr />
          </div>
          <hr />
          <div className="inputContainer">
            <div className="reg-form">
              <h2 className="loginInput">LOGIN</h2>
              <form onSubmit={formik.handleSubmit}>
                <div className="title">
                  <div className="titleinput">
                    <label
                      htmlFor=""
                      placeholder="select"
                      className="titleText"
                    >
                      Username/Id
                    </label>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      className="username"
                      placeholder="Username/ID"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    />
                  </div>
                </div>
                {formik.touched.username && formik.errors.username ? (
                  <div
                    style={{
                      color: "red",
                      marginTop: "-15px",
                      marginLeft: "16px",
                    }}
                  >
                    {formik.errors.username}
                  </div>
                ) : null}

                <div className="titleinput">
                  <label htmlFor="" placeholder="select" className="titleText">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    className="Password"
                    placeholder="Password"
                    autoComplete="off"
                  />
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <div
                    style={{
                      color: "red",
                      marginTop: "-15px",
                      marginLeft: "16px",
                    }}
                  >
                    {formik.errors.password}
                  </div>
                ) : null}

                <div className="forgetDetails">
                  <div className="forgetUsername">
                    <h6 onClick={() => loginSubmit("/forgotUsername")}>
                      Forgot my User Name/ID
                    </h6>
                  </div>
                  <div className="forgetPassword">
                    <h6 onClick={() => loginSubmit("/forgotPassword")}>
                      I forgot my password
                    </h6>
                  </div>
                </div>
                <button
                  className="signin"
                  type="submit"
                  style={{ fontWeight: "900" }}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
