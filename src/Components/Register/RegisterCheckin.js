import React from "react";
import Web_image from "../../Assets/login_image.jpg";
import WebLogo from "../../Assets/weblogo.png";
import { Link } from "react-router-dom";
import "../Register/RegisterCheckIn.css";
import { useNavigate } from "react-router-dom";
const RegisterCheckin = () => {
  const navigate= useNavigate();
  const loginForward = (location) => {
    let path= location;
    navigate(path)
  }
  
  return (
    <>
      <div className="check_whole">
        <div className="col-md-9" style={{ background: "red" }}>
          <img src={Web_image} alt="" />
          <div className="reg_forward">
            <h4>Already Have an account?</h4>
            <button className="reg_button" onClick={() => loginForward("/login")}>LOGIN</button>
          </div>
        </div>
        <div className="col-md-3" style={{ background: "white" }}>
          <img src={WebLogo} alt="" className="regCheck_logo" />
          <hr />
          <h2>WELCOME!</h2>
          <h6>Let's get to know you...</h6>
          <form>
            <h6 className="reg_select">
              Select for whom you want to use Imagility
            </h6>
            <div className="reg_checking">
              <div className="reg_label">
                <input type="checkbox" />
                <label htmlFor="">For Self</label>
              </div>
              <div className="reg_text">
                <p>
                  <i>
                    If you are the beneficiary and need to apply for a visa for
                    yourself then select and proceed.
                  </i>
                </p>
              </div>
            </div>
            <div className="reg_checking">
              <div className="reg_label">
                <input type="checkbox" />
                <label htmlFor="">As a Sponsor</label>
              </div>
              <div className="reg_text">
                <p>
                  <i>
                    If you are a Green Card holder or a U.S. Citizen holding a
                    valid visa and trying to apply for other family members Eg:
                    Spouse, Children, Parents and siblings select and proceed to
                    register.
                  </i>
                </p>
              </div>
            </div>
            <div className="reg_checking">
              <div className="reg_label">
                <input type="checkbox" />
                <label htmlFor="">For Self</label>
              </div>
              <div className="reg_text">
                <p>
                  <i>
                    If you want to apply for a visa on behalf of some applicant
                    select and proceed to register.
                  </i>
                </p>
              </div>
            </div>
            <button className="reg_proceed">PROCEED</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterCheckin;
