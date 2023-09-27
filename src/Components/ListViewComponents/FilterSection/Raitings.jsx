import React from "react";
import { useState } from "react";
import "./Raitings.scss";

const Raitings = () => {
  const [wrapRaitings, setWrapRaitings] = useState(true);

  return (
    <div className="Rmain">
      <div className="Rcontainer">
        <div className="Rheader">
          <h4>Raitings</h4>
          <svg
            onClick={() => {
              setWrapRaitings((preVlaue) => !preVlaue);
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 8.29504L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.29504Z"
              fill="#8B96A5"
            />
          </svg>
        </div>
        {wrapRaitings && (
          <div className="Rstars">
            <div>
              <input className="Rcheckbox" type="checkbox" id={Math.random()} />{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="93"
                height="18"
                viewBox="0 0 93 18"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M83.7 14.4663L89.4474 18L87.9222 11.34L93 6.85895L86.3133 6.28105L83.7 0L81.0867 6.28105L74.4 6.85895L79.4778 11.34L77.9526 18L83.7 14.4663Z"
                  fill="#FF9017"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M65.1 14.4663L70.8475 18L69.3223 11.34L74.4001 6.85895L67.7134 6.28105L65.1 0L62.4867 6.28105L55.8 6.85895L60.8778 11.34L59.3526 18L65.1 14.4663Z"
                  fill="#FF9017"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M46.5 14.4663L52.2474 18L50.7221 11.34L55.7999 6.85895L49.1133 6.28105L46.5 0L43.8867 6.28105L37.2 6.85895L42.2778 11.34L40.7526 18L46.5 14.4663Z"
                  fill="#FF9017"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27.9 14.4663L33.6474 18L32.1222 11.34L37.2 6.85895L30.5133 6.28105L27.9 0L25.2867 6.28105L18.6 6.85895L23.6778 11.34L22.1526 18L27.9 14.4663Z"
                  fill="#FF9017"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.3 14.4663L15.0474 18L13.5222 11.34L18.6 6.85895L11.9133 6.28105L9.3 0L6.6867 6.28105L0 6.85895L5.0778 11.34L3.5526 18L9.3 14.4663Z"
                  fill="#FF9017"
                />
              </svg>
            </div>

            <div>
              <input className="Rcheckbox" type="checkbox" id={Math.random()} />{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="93"
                height="18"
                viewBox="0 0 93 18"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M83.7 14.4663L89.4474 18L87.9222 11.34L93 6.85895L86.3133 6.28105L83.7 0L81.0867 6.28105L74.4 6.85895L79.4778 11.34L77.9526 18L83.7 14.4663Z"
                  fill="#BDC4CD"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M65.1 14.4663L70.8475 18L69.3223 11.34L74.4001 6.85895L67.7134 6.28105L65.1 0L62.4867 6.28105L55.8 6.85895L60.8778 11.34L59.3526 18L65.1 14.4663Z"
                  fill="#FF9017"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M46.5 14.4663L52.2474 18L50.7221 11.34L55.7999 6.85895L49.1133 6.28105L46.5 0L43.8867 6.28105L37.2 6.85895L42.2778 11.34L40.7526 18L46.5 14.4663Z"
                  fill="#FF9017"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27.9 14.4663L33.6474 18L32.1222 11.34L37.2 6.85895L30.5133 6.28105L27.9 0L25.2867 6.28105L18.6 6.85895L23.6778 11.34L22.1526 18L27.9 14.4663Z"
                  fill="#FF9017"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.3 14.4663L15.0474 18L13.5222 11.34L18.6 6.85895L11.9133 6.28105L9.3 0L6.6867 6.28105L0 6.85895L5.0778 11.34L3.5526 18L9.3 14.4663Z"
                  fill="#FF9017"
                />
              </svg>
            </div>

            <div>
              <input className="Rcheckbox" type="checkbox" id={Math.random()} />{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="93"
                height="18"
                viewBox="0 0 93 18"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M83.7 14.4663L89.4474 18L87.9222 11.34L93 6.85895L86.3133 6.28105L83.7 0L81.0867 6.28105L74.4 6.85895L79.4778 11.34L77.9526 18L83.7 14.4663Z"
                  fill="#BDC4CD"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M65.1 14.4663L70.8475 18L69.3223 11.34L74.4001 6.85895L67.7134 6.28105L65.1 0L62.4867 6.28105L55.8 6.85895L60.8778 11.34L59.3526 18L65.1 14.4663Z"
                  fill="#BDC4CD"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M46.5 14.4663L52.2474 18L50.7221 11.34L55.7999 6.85895L49.1133 6.28105L46.5 0L43.8867 6.28105L37.2 6.85895L42.2778 11.34L40.7526 18L46.5 14.4663Z"
                  fill="#FF9017"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27.9 14.4663L33.6474 18L32.1222 11.34L37.2 6.85895L30.5133 6.28105L27.9 0L25.2867 6.28105L18.6 6.85895L23.6778 11.34L22.1526 18L27.9 14.4663Z"
                  fill="#FF9017"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.3 14.4663L15.0474 18L13.5222 11.34L18.6 6.85895L11.9133 6.28105L9.3 0L6.6867 6.28105L0 6.85895L5.0778 11.34L3.5526 18L9.3 14.4663Z"
                  fill="#FF9017"
                />
              </svg>
            </div>

            <div>
              <input className="Rcheckbox" type="checkbox" id={Math.random()} />{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="93"
                height="18"
                viewBox="0 0 93 18"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M83.7 14.4663L89.4474 18L87.9222 11.34L93 6.85895L86.3133 6.28105L83.7 0L81.0867 6.28105L74.4 6.85895L79.4778 11.34L77.9526 18L83.7 14.4663Z"
                  fill="#BDC4CD"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M65.1 14.4663L70.8475 18L69.3223 11.34L74.4001 6.85895L67.7134 6.28105L65.1 0L62.4867 6.28105L55.8 6.85895L60.8778 11.34L59.3526 18L65.1 14.4663Z"
                  fill="#BDC4CD"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M46.5 14.4663L52.2474 18L50.7221 11.34L55.7999 6.85895L49.1133 6.28105L46.5 0L43.8867 6.28105L37.2 6.85895L42.2778 11.34L40.7526 18L46.5 14.4663Z"
                  fill="#BDC4CD"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27.9 14.4663L33.6474 18L32.1222 11.34L37.2 6.85895L30.5133 6.28105L27.9 0L25.2867 6.28105L18.6 6.85895L23.6778 11.34L22.1526 18L27.9 14.4663Z"
                  fill="#FF9017"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.3 14.4663L15.0474 18L13.5222 11.34L18.6 6.85895L11.9133 6.28105L9.3 0L6.6867 6.28105L0 6.85895L5.0778 11.34L3.5526 18L9.3 14.4663Z"
                  fill="#FF9017"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Raitings;
