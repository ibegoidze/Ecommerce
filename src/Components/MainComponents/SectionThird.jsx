import "./SectionThird.scss";

import styled from "styled-components";
import { Link } from "react-router-dom";


const SectionThird = ({ img, Pdata, LPdata, title }) => {
  const newLParray = LPdata.slice(0, 5);
  const newParaay = Pdata.slice(0, 3);

  return (
    <div className="LPmain">
      <div className="LPcontainer">
        <div className="imageBox" style={{ backgroundImage: `url(${img})` }}>
          <h3>{title}</h3>
          <button className="LPbutton">Source now</button>
        </div>
        <div className="LPboxes">
          
          {newLParray.map((item) => {
            return (
                <li key={item.id}>
                  <Link className="RIimg" to={`/Detail/${item.id}`}>
                  <div className="LPsingleBox">
                    <div className="LPtextBox">
                      <h5>{item.name.slice(0, 10)}</h5>
                      <p>
                        from <br /> USD{item.price}$
                      </p>
                    </div>
                    <div className="LPimgBox">
                      <img src={item.images[1]} />
                    </div>
                  </div>
                  </Link>
                </li>
            );
          })}{" "}
          {newParaay.map((item) => {
            return (
              <li key={item.id + 1}>
                <Link className="RIimg" to={`/Detail/${item.id}`}>
                <div className="LPsingleBox">
                  <div className="LPtextBox">
                    <h5>{item.name.slice(0, 10)}</h5>
                    <p>
                      from <br />
                      USD{item.price}$
                    </p>
                  </div>
                  <div className="LPimgBox">
                    <img src={item.images} />
                  </div>
                </div>
                </Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionThird;

const styledImageBox = styled.div`
  background-color: black;
`;
