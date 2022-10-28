import React from "react";
import { useNavigate } from "react-router-dom";
import Web_image from "../../Assets/login_image.jpg";
import WebLogo from "../../Assets/weblogo.png";
import "../../Components/Login/ForgotPassword.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const loginForward = (location) => {
    let path = location;
    navigate(path);
  };
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Username Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="website">
      <div className="website_image">
        <img src={Web_image} className="whole_image" />
        <div className="login_buttonDetails">
          <h4 style={{ fontSize: "15px" }}>Already have an account?</h4>
          <button
            className="login_Button"
            onClick={() => loginForward("/login")}
          >
            LOGIN
          </button>
        </div>
      </div>

      <div className="website_data">
        <img className="website_logo" src={WebLogo} alt="" />
        <hr />
        <div className="reset_passwordData">
          <h2
            style={{ color: "#4b627e", fontSize: "25px", marginLeft: "20px" }}
          >
            Reset Your Password
          </h2>
          <div className="inputDetails">
            <label>Username /ID</label>
            <input
              id="username"
              type="text"
              placeholder="Username / ID"
              name="username"
              autoComplete="off"
              className="input_data"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.username && formik.errors.username ? (
            <div className="validate_message">{formik.errors.username}</div>
          ) : null}
          <div className="forward_details" style={{ color: "#007bff" }}>
            <h5 className="login_text" onClick={() => loginForward("/login")}>
              Go back to login
            </h5>
            <button type="submit" className="submit_button">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
