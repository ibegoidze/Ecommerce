import Register from "../Components/SigninComponents/Register";
import LogIn from "../Components/SigninComponents/LogIn";
import "../Components/SigninComponents/SignIn.scss";
import { useState } from "react";

import sally from "../images/Saly-14.png"

const SignIn = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="SImain">
      <div className="SIleftSide">
        <div className="SIheader">Sign in to</div>
        <div className="SIleftp">your Brand account</div>
        <div className="SIregister">
          If you have an account <span onClick={() => setCurrentForm('login')}> Log in here</span><br />
          Or you can <span onClick={() => setCurrentForm('register')}> Register</span>
        </div>
      </div>
      <div className="SIsally"><img src={sally} alt="sally" /></div>
      <div className="SIrightSide">
        {currentForm === "login" ? <LogIn onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm} />}
      </div>
    </div>
  );
};

export default SignIn;
