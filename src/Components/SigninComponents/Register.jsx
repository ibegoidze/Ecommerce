import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://amazon-digital-prod.azurewebsites.net/api/user/registerUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userName: name, email, password }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Registration successful", data, name, email, password);
        alert("you registered successfully");
      } else {
        const errorData = await response.json();
        console.error("Registration error", errorData);
      }
    } catch (error) {
      console.error("Network error", error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label htmlFor="name">Full name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>
        <div className="SIorContinue"> or continue with</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="43"
            viewBox="0 0 42 43"
            fill="none"
          >
            <ellipse
              cx="20.7287"
              cy="19.7286"
              rx="18.1376"
              ry="18.1376"
              fill="url(#paint0_linear_2_49)"
            />
            <path
              d="M27.4832 26.9339L28.2889 21.8146H23.2488V18.494C23.2488 17.0931 23.9515 15.7268 26.209 15.7268H28.5019V11.3685C28.5019 11.3685 26.4219 11.0226 24.4342 11.0226C20.2815 11.0226 17.5697 13.475 17.5697 17.9129V21.8146H12.9554V26.9339H17.5697V39.3101C18.4961 39.4519 19.4438 39.5245 20.4092 39.5245C21.3747 39.5245 22.3224 39.4519 23.2488 39.3101V26.9339H27.4832Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2_49"
                x1="20.7287"
                y1="1.59108"
                x2="20.7287"
                y2="37.7586"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#18ACFE" />
                <stop offset="1" stopColor="#0163E0" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
          >
            <path
              d="M39.0521 20.7286C39.0521 30.7406 30.9356 38.8662 20.9146 38.8662C10.8936 38.8662 2.77701 30.7406 2.77701 20.7286C2.77701 10.7076 10.8936 2.59108 20.9146 2.59108C30.9356 2.59108 39.0521 10.7076 39.0521 20.7286Z"
              fill="#283544"
            />
            <path
              d="M29.416 16.1391C29.317 16.1968 26.9609 17.4153 26.9609 20.117C27.072 23.1981 29.9342 24.2786 29.9833 24.2786C29.9342 24.3363 29.5512 25.7505 28.4166 27.233C27.5162 28.5099 26.5167 29.7974 24.9991 29.7974C23.5555 29.7974 23.0373 28.9464 21.3716 28.9464C19.5828 28.9464 19.0766 29.7974 17.707 29.7974C16.1894 29.7974 15.116 28.441 14.1664 27.176C12.9328 25.5203 11.8843 22.9221 11.8473 20.4274C11.8224 19.1054 12.0944 17.806 12.7848 16.7022C13.7593 15.1613 15.499 14.1152 17.3989 14.0807C18.8545 14.035 20.1501 15.012 21.0384 15.012C21.8898 15.012 23.4815 14.0807 25.2824 14.0807C26.0597 14.0815 28.1325 14.2997 29.416 16.1391ZM20.9153 13.8168C20.6562 12.6095 21.3716 11.4023 22.0379 10.6322C22.8892 9.7009 24.2338 9.06879 25.3934 9.06879C25.4674 10.276 24.9983 11.46 24.1598 12.3224C23.4074 13.2537 22.1119 13.9548 20.9153 13.8168Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
          >
            <path
              d="M39.4108 21.1315C39.4108 19.6402 39.2873 18.5519 39.02 17.4234H21.6434V24.1543H31.8431C31.6375 25.8271 30.5271 28.3462 28.0593 30.0389L28.0247 30.2643L33.5189 34.4354L33.8996 34.4727C37.3954 31.3086 39.4108 26.6533 39.4108 21.1315Z"
              fill="#4285F4"
            />
            <path
              d="M21.6422 38.8662C26.6392 38.8662 30.8342 37.2539 33.8984 34.4728L28.0581 30.0391C26.4953 31.1072 24.3977 31.8528 21.6422 31.8528C16.748 31.8528 12.5941 28.6889 11.1133 24.3157L10.8963 24.3338L5.18338 28.6667L5.10867 28.8702C8.15212 34.7952 14.4036 38.8662 21.6422 38.8662Z"
              fill="#34A853"
            />
            <path
              d="M11.1144 24.3158C10.7237 23.1873 10.4976 21.978 10.4976 20.7286C10.4976 19.479 10.7237 18.2699 11.0939 17.1414L11.0835 16.901L5.29899 12.4986L5.10973 12.5868C3.85537 15.0455 3.13562 17.8064 3.13562 20.7286C3.13562 23.6508 3.85537 26.4116 5.10973 28.8703L11.1144 24.3158Z"
              fill="#FBBC05"
            />
            <path
              d="M21.6423 9.60422C25.1176 9.60422 27.4619 11.0754 28.7986 12.3048L34.0219 7.30685C30.814 4.38469 26.6393 2.59108 21.6423 2.59108C14.4037 2.59108 8.15214 6.66192 5.10867 12.5868L11.0928 17.1414C12.5941 12.7683 16.7481 9.60422 21.6423 9.60422Z"
              fill="#EB4335"
            />
          </svg>
        </div>
      </form>
    </div>
  );
};

export default Register;
