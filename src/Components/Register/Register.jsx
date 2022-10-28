import React, { useState, useEffect } from "react";
import "./Register.css";
import WebLogo from "../../Assets/weblogo.png";
import Image from "../../Assets/login_image.jpg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useFormik } from "formik";
import * as Yup from "yup";

const Register = () => {

  const handleSubmit = (values) => {
    let oldData = JSON.parse(localStorage.getItem("UserInfo"));
    console.log("abcd", [...oldData, ...values]);
    let currentData = [values];
    // const finalData = [...data, ...currentData];
    localStorage.setItem("UserInfo", JSON.stringify([...oldData, ...[values]]));
    let path = "/login";
    navigate(path);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      firstname: "",
      middlename: "",
      lastname: "",
      phonenumber: "",
      email: "",
      username: "",
      password: "",
      confirmpassword: "",
      checkbox: "false",
    },
    validationSchema: Yup.object({
      title: Yup.string(),
      firstname: Yup.string()
        .max(8, "must be 8 characters or less")
        .required("Firstname Required"),
      middlename: Yup.string()
        .max(5, "Must be 5 characters or less")
        .required("Middlename Required"),
      lastname: Yup.string()
        .max(6, "must be 6 characters or less")
        .required("Lastname Required"),
      phonenumber: Yup.string()
        .max(20, "Must be 10 characters")
        .required("Phonenumber Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email Required"),
      username: Yup.string()
        .max(10, "Must be 20 characters or less")
        .required("Username Required"),
      password: Yup.string()
        .max(
          10,
          "Must be 10 characters or less",
          "Must be one Capital letter and a special character"
        )
        .required("Password Required"),
      confirmpassword: Yup.string()
        .max(10, "Password should match ")
        .required("Confirm Password Required"),
      checkbox: Yup.string().required("Checkbox Required"),
    }),
    onSubmit: (values) => handleSubmit(values),
  });
  const navigate = useNavigate();
  const loginForward = (location) => {
    let path = location;
    navigate(path);
  }; 

  return (
    <div className="containee">
      <div className="photo1">
        <div>
          <img className="web_image" src={Image} alt="" />
          <div className="account1">
            <h5 className="text1">Already have an Account?</h5>

            <button
              type="button"
              onClick={() => loginForward("/login")}
              className="btn btn-primary btn-lg bttn"
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
      <div className="form1">
        <div className="logo1">
          <img className="imggg" src={WebLogo} alt="" />
        </div>
        <hr />
        <div className="inputContainer1">
          <div className="reg-form1">
            <h5>Let us know the personal details</h5>
            <small className="">
              <i>
                *The information that you provide will be kept secure and will
                not be share for any other purpose.
              </i>
            </small>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="title1">
              <div className="titleinput1">
                <label placeholder="select" name="title" className="titleText1">
                  Title
                </label>
                <select className="inputstyle1">
                  <option value="">Select</option>
                  <option value="Mr.">Mr.</option>
                  <option value="Mrs.">Mrs.</option>
                  <option value="Miss.">Miss.</option>
                  <option value="Miss.">Ms.</option>
                </select>
                {formik.touched.title && formik.errors.title ? (
                  <div className="title_message" style={{ color: "red" }}>
                    {formik.errors.title}
                  </div>
                ) : null}
              </div>
              <div className="firstName1">
                <label htmlFor="" className="titleText1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="inputstyle1"
                  name="firstname"
                  onChange={formik.handleChange}
                  value={formik.values.firstname}
                  autoComplete="off"
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.firstname && formik.errors.firstname ? (
                <div className="firstname_message" style={{ color: "red" }}>
                  {formik.errors.firstname}
                </div>
              ) : null}
            </div>

            <div className="title">
              <div className="titleinput1">
                <label className="titleText1">Middle Name</label>
                <input
                  type="text"
                  placeholder="Middle Name"
                  onChange={formik.handleChange}
                  value={formik.values.middlename}
                  className="inputstyle"
                  autoComplete="off"
                  onBlur={formik.handleBlur}
                  name="middlename"
                />
              </div>
              {formik.touched.middlename && formik.errors.middlename ? (
                <div style={{ color: "red" }}>{formik.errors.middlename}</div>
              ) : null}
              <div className="lastName1">
                <label htmlFor="" className="titleText1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="inputstyle1"
                  name="lastname"
                  onChange={formik.handleChange}
                  value={formik.values.lastname}
                  autoComplete="off"
                />
              </div>
            </div>
            {formik.touched.lastname && formik.errors.lastname ? (
              <div style={{ color: "red" }}>{formik.errors.lastname}</div>
            ) : null}

            <div className="title1">
              <div className="titleinput1">
                <label
                  htmlFor=""
                  placeholder="select"
                  name="phonenumber"
                  className="titleText1"
                >
                  Phone Number
                </label>
                <select className="inputstyle1">
                  <option value="Mr.">Mob</option>
                  <option value="Mrs.">land line</option>
                  <option value="Miss.">official</option>
                  <option value="Miss.">satelaite</option>
                </select>
              </div>
              <div className="firstName1">
                <label htmlFor="" className="titleText1"></label>
                <input
                  type="Number"
                  placeholder="Phone Number"
                  className="inputstylePhone1"
                  name="phonenumber"
                  onChange={formik.handleChange}
                  value={formik.values.phonenumber}
                  autoComplete="off"
                />
              </div>
            </div>
            {formik.errors.phonenumber ? (
              <div style={{ color: "red" }}>
                {formik.touched.phonenumber && formik.errors.phonenumber}
              </div>
            ) : null}

            <div className="title1">
              <div className="firstName1">
                <label htmlFor="" className="titleText1">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="inputstyle1"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  autoComplete="off"
                />
              </div>
            </div>
            {formik.errors.email ? (
              <div style={{ color: "red" }}>
                {formik.touched.email && formik.errors.email}
              </div>
            ) : null}

            <div className="title1">
              <div className="firstName1">
                <label htmlFor="" className="titleText1">
                  User Name / Id
                </label>
                <input
                  type="text"
                  placeholder="Enter"
                  className="inputstyle1"
                  name="username"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  autoComplete="off"
                />
              </div>
            </div>
            {formik.errors.username ? (
              <div style={{ color: "red" }}>
                {formik.touched.username && formik.errors.username}
              </div>
            ) : null}

            <div className="title1">
              <div className="titleinput1">
                <label htmlFor="" placeholder="select" className="titleText1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="inputstyle1"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  autoComplete="off"
                />
                {formik.errors.password ? (
                  <div className="password_message" style={{ color: "red" }}>
                    {formik.touched.password && formik.errors.password}
                  </div>
                ) : null}
              </div>

              <div>
                <div className="lastName1">
                  <label htmlFor="" className="titleText1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="inputstyle1"
                    name="confirmpassword"
                    onChange={formik.handleChange}
                    value={formik.values.confirmpassword}
                    autoComplete="off"
                  />
                </div>
                {formik.touched.confirmpassword &&
                formik.errors.confirmpassword ? (
                  <div className="password_message" style={{ color: "red" }}>
                    {formik.errors.confirmpassword}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="terms1">
              <label htmlFor="acceptTerms" className="labelInput1">
                {/* <input
                  type="checkbox"
                  name="checkbox"
                  onChange={formik.handleChange}
                  value={formik.values.checkbox}
                  className="checkBox"
                /> */}
                <input
                  type="checkbox"
                  // onChange={(e) => handleCheck(e.target.checked)}
                  name="toggle"
                />
                I have read and accepted
                {/* <small className="sm_Text"></small> */}
                <span>Terms & Conditions</span>
              </label>
            </div>
            {formik.touched.checkbox ? (
              <div style={{ color: "red" }}>{formik.errors.checkbox}</div>
            ) : null}

            <div className="button1">
              <button type="submit" className="button_Details1">
                NEXT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
