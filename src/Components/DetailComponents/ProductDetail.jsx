import React from "react";
import "./ProductDetail.scss";

const ProductDetail = ({SingleProduct}) => {
  console.log()
  return (
    <div className="PDmain">
      <div className="PDcontainer">
        <div className="PDinstock">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M8.79508 15.875L4.62508 11.705L3.20508 13.115L8.79508 18.705L20.7951 6.70504L19.3851 5.29504L8.79508 15.875Z"
              fill="#00B517"
            />
          </svg>{" "}
          in stock
        </div>
        <h1 className="DPproductName">
          {SingleProduct.name}
        </h1>
        <div className="DPraitingBar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="15"
            viewBox="0 0 80 15"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M72 12.0553L76.944 15L75.632 9.45L80 5.71579L74.248 5.23421L72 0L69.752 5.23421L64 5.71579L68.368 9.45L67.056 15L72 12.0553Z"
              fill="#D5CDC5"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M56 12.0553L60.944 15L59.632 9.45L64 5.71579L58.248 5.23421L56 0L53.752 5.23421L48 5.71579L52.368 9.45L51.056 15L56 12.0553Z"
              fill="#FF9017"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M40 12.0553L44.944 15L43.632 9.45L48 5.71579L42.248 5.23421L40 0L37.752 5.23421L32 5.71579L36.368 9.45L35.056 15L40 12.0553Z"
              fill="#FF9017"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 12.0553L28.944 15L27.632 9.45L32 5.71579L26.248 5.23421L24 0L21.752 5.23421L16 5.71579L20.368 9.45L19.056 15L24 12.0553Z"
              fill="#FF9017"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 12.0553L12.944 15L11.632 9.45L16 5.71579L10.248 5.23421L8 0L5.752 5.23421L0 5.71579L4.368 9.45L3.056 15L8 12.0553Z"
              fill="#FF9017"
            />
          </svg>
          <p>7.5</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
          >
            <circle cx="3" cy="3" r="3" fill="#DBDBDB" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M3.33317 3.33329H16.6665V13.3333H4.30817L3.33317 14.3083V3.33329ZM3.33317 1.66663C2.4165 1.66663 1.67484 2.41663 1.67484 3.33329L1.6665 18.3333L4.99984 15H16.6665C17.5832 15 18.3332 14.25 18.3332 13.3333V3.33329C18.3332 2.41663 17.5832 1.66663 16.6665 1.66663H3.33317ZM4.99984 9.99996H14.9998V11.6666H4.99984V9.99996ZM4.99984 7.49996H14.9998V9.16663H4.99984V7.49996ZM4.99984 4.99996H14.9998V6.66663H4.99984V4.99996Z"
              fill="#8B96A5"
            />
          </svg>
          <span>32 reviews</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
          >
            <circle cx="3" cy="3" r="3" fill="#DBDBDB" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M18.3335 7.90834H14.3418L10.6918 2.44167C10.5335 2.20834 10.2668 2.09167 10.0002 2.09167C9.7335 2.09167 9.46683 2.20834 9.3085 2.45001L5.6585 7.90834H1.66683C1.2085 7.90834 0.833496 8.28334 0.833496 8.74167C0.833496 8.81667 0.841829 8.89167 0.866829 8.96667L2.9835 16.6917C3.17516 17.3917 3.81683 17.9083 4.5835 17.9083H15.4168C16.1835 17.9083 16.8252 17.3917 17.0252 16.6917L19.1418 8.96667L19.1668 8.74167C19.1668 8.28334 18.7918 7.90834 18.3335 7.90834ZM10.0002 4.40834L12.3335 7.90834H7.66683L10.0002 4.40834ZM15.4168 16.2417L4.59183 16.25L2.7585 9.57501H17.2502L15.4168 16.2417ZM10.0002 11.2417C9.0835 11.2417 8.3335 11.9917 8.3335 12.9083C8.3335 13.825 9.0835 14.575 10.0002 14.575C10.9168 14.575 11.6668 13.825 11.6668 12.9083C11.6668 11.9917 10.9168 11.2417 10.0002 11.2417Z"
              fill="#8B96A5"
            />
          </svg>
          <span>154 sold</span>
        </div>
        <div className="DPorangeBar">
          <div className="DPOBsingle">
            <h5 style={{ color: "#FA3434" }}>${SingleProduct.price}</h5>
            <span>50-100 pcs</span>
          </div>
          <div className="DPOBsingle">
            <h5>${Math.floor(SingleProduct.price - 5)}</h5>
            <span>100-700 pcs</span>
          </div>
          <div style={{ border: "none" }} className="DPOBsingle">
            <h5>${Math.floor(SingleProduct.price - 10)}</h5>
            <span>700+ cs</span>
          </div>
        </div>
        <div className="DPpriceBar">
          <p>Price:</p>
          <span>${SingleProduct.price}</span>
        </div>
        <div className="DPtypeBar">
          <div className="DPTB">
            <p>Type:</p>
            <p>Design:</p>
            <p>Material:</p>

          </div>
          <div className="DPDB">
            <span>Classic shoes</span>
            <span>Plastic material</span>
            <span>Modern nice</span>
          </div>
          
        </div>

        <div className="DPtypeBar2">
          <div className="DPTB2">
            <p>Costumization:</p>
            <p>Protection:</p>
            <p>Warranty:</p>

          </div>
          <div className="DPDB2">
            <span>Customized logo and <br/> design custom packages</span>
            <span>Refund Policy</span>
            <span>2 years full warranty</span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
