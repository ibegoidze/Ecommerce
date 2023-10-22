import Register from "../Components/SigninComponents/Register";
import LogIn from "../Components/SigninComponents/LogIn";
import "../Components/SigninComponents/SignIn.scss";
import { useState } from "react";

import sally from "../images/Saly-14.png";
import { useNavigate, useParams } from "react-router-dom";

const SignIn = (loginSuccess) => {
  const [currentForm, setCurrentForm] = useState("login");

  const params = useParams()
  const navigate = useNavigate()

  console.log(params.method)

  const toggleForm = (formName) => {
    navigate(`/auth/${formName}`)
  };

  return (
    <div className="SImain">
      <div className="SIleftSide">
        <div className="SIheader">Sign in to</div>
        <div className="SIleftp">your Brand account</div>
        <div className="SIregister">
          If you have an account{" "}
          <span onClick={() => toggleForm("login")}> Log in here</span>
          <br />
          Or you can{" "}
          <span onClick={() => toggleForm("register")}> Register</span>
        </div>
      </div>
      <div className="SIsally">
        <img src={sally} alt="sally" />
      </div>
      <div className="SIrightSide">
        {params.method === "login" ? (
          <LogIn onFormSwitch={toggleForm} />
        ) : (
          <Register onFormSwitch={toggleForm} />
        )}
      </div>
    </div>
  );
};

export default SignIn;
