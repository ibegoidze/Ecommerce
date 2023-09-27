import "./SectionThird.scss";

import styled from "styled-components";

const SectionThird = ({ img, Pdata, LPdata, title }) => {
  const newLParray = LPdata.slice(0, 5);
  const newParaay = Pdata.slice(0, 3);
  console.log(newLParray);

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
                <div className="LPsingleBox">
                  <div className="LPtextBox">
                    <h5>Item name</h5>
                    <p>
                      from <br /> USD{item.price}$
                    </p>
                  </div>
                  <div className="LPimgBox">
                    <img src={item.image} />
                  </div>
                </div>
              </li>
            );
          })}{" "}
          {newParaay.map((item) => {
            return (
              <li key={item.id + 1}>
                <div className="LPsingleBox">
                  <div className="LPtextBox">
                    <h5>Item name</h5>
                    <p>
                      from <br />
                      USD{item.price}$
                    </p>
                  </div>
                  <div className="LPimgBox">
                    <img src={item.images} />
                  </div>
                </div>
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
