import React from "react";
import WebLogo from "../Assets/weblogo.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {GrNotification} from  "react-icons/fc"
import {FcApproval} from  "react-icons/fc"
const Dashboard = () => {
  const navigate = useNavigate();
  const redirect = (location) => {
    let path = location;
    navigate(path);
  };
  return (
    <div>
      <div className="topbar">

        <img src={WebLogo} alt="" style={{ padding: "23px" }} />
        <FcApproval />

      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <Link to="navbar" className="navbar-brand">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/dashboard">DASHBOARD</Link>
              <Link to="myPetitions">MY PETITIONS</Link>
              <Link to="myForms">MY FORMS</Link>
              <Link to="petitioners">PETITIONERS</Link>
              <Link to="situations">SITUATIONS</Link>
              <Link to="compliance">COMPLIANCE</Link>
              <Link to="resources">RESOURCES</Link>
              {/* <button onClick={() => redirect("/login")}>LOGIN</button>
              <button onClick={() => redirect("/register")}>REGISTER</button> */}
            </div>
          </div>
        </div>
      </nav>
      <h2>Welcome</h2>
      <div className="journey">
        <h4>Shape Your Journey</h4>
        <hr />

        <div className="timeline">
          <div className="petition">
            <h3>Petition Timeline</h3>
          </div>
          <div className="immigration">
            <h3>Petition Timeline</h3>
          </div>
          <div className="project">
            <h3>Project Timeline</h3>
          </div>
        </div>
        <div className="current_petition">
          <lebel>Select Current Open Petition:</lebel>
          <select name="" id="">
            <option value="">
              Asylum Affirmative: PETITION :- NRN Law Firm
            </option>
          </select>
        </div>
        <div className="progress">
          <div className="beneficiary">
            <span>Beneficiary Actions</span>
          </div>
          <div className="petitioner">
            <span>Petitioner / Attorney Actions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
