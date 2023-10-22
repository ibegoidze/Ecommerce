import React from "react";
import "./PDSection.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DPhotos from "./DPhotos";
import ProductDetail from "./ProductDetail";
import SupplierBox from "./SupplierBox";
import DescriptionSection from "./DescriptionSection";
import YouMayLike from "./YouMayLike";
import RelatedProducts from "./RelatedProducts";
import { offersData } from "../../Store/Offers/index";
import { latestProductsData } from "../../Store/LatestProducts/index";
import { useParams } from "react-router-dom";
import { SingleProductData } from "../../Store/SingleProduct/SingleProduct";

const DPSection = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(offersData()); // 5
    dispatch(latestProductsData()); // 6
  }, [dispatch]);

  const { offers } = useSelector((state) => state.offers);
  const { latestProducts } = useSelector((state) => state.latestProducts);
  const { SingleProduct, images } = useSelector((state) => state.SingleProduct);

  const { id } = useParams();
  useEffect(() => {
    dispatch(SingleProductData(id));
  }, [dispatch, id]);

  return (
    <div className="PVmain">
      <div className="PVcontainer">
        <DPhotos product={SingleProduct} SingleProduct={images} />
        <ProductDetail SingleProduct={SingleProduct} />
        <SupplierBox singleProduct={SingleProduct} />
      </div>
      <div className="PVdescription">
        <DescriptionSection SingleProduct={SingleProduct} />
        <YouMayLike data={offers} />
      </div>
      <div className="PVlastElements">
        <RelatedProducts latestProducts={latestProducts} />
      </div>
    </div>
  );
};

export default DPSection;
