import React from "react";
import "./PageDesign/ListView.scss";
import Category from "../Components/ListViewComponents/FilterSection/Category";
import Brands from "../Components/ListViewComponents/FilterSection/Brands";
import PriceRangeSlider from "../Components/ListViewComponents/FilterSection/PriceRangeSlider";
import Raitings from "../Components/ListViewComponents/FilterSection/Raitings";
import GVbar from "../Components/ListViewComponents/ProductsSection/GVbar";
import ProductsList from "../Components/ListViewComponents/ProductsSection/ProductsList";
import { useState } from "react";
import { productsData } from "../Store/Products";
import { latestProductsData } from "../Store/LatestProducts";
import { mostDemandProductsData } from "../Store/MostDemandProducts";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useSearchParams } from "react-router-dom";

const Listview = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(latestProductsData());
    dispatch(mostDemandProductsData());
  }, [dispatch]);
  const { products } = useSelector((state) => state.products);
  const { latestProducts } = useSelector((state) => state.latestProducts);
  const { mostDemandProducts } = useSelector(
    (state) => state.mostDemandProducts
  );
  const newMostDemant = mostDemandProducts.slice(0, 2);

  // const mergedArray = [...products, ...latestProducts, ...newMostDemant];

  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);

  // let currentProducts = mergedArray;

  let asyncParams = {
    category: params.category,
    priceFrom: params.priceFrom,
    priceTo: params.priceTo,
  };

  useEffect(() => {
    dispatch(productsData(asyncParams));
  }, [dispatch, searchParams]);

  // if (params.brand) {
  //   currentProducts = currentProducts.filter((item) => {
  //     return item.brandId === params.brand;
  //   });
  // }

  // if (params.category) {
  //   currentProducts = currentProducts.filter((item) => {
  //     return item.categoryId === params.category;
  //   });
  // }



  const [dataFromProductsList, setDataFromProductsList] = useState(null);
  const handleDataFromProductsList = (productsNumber) => {
    setDataFromProductsList(productsNumber);
  };

  return (
    <div className="LVmain">
      <div className="LVcontainer">
        <div className="LVfilterSection">
          <Category />
          <Brands />
          <PriceRangeSlider />
          <Raitings />
        </div>
        <div className="LVproductSection">
          <div className="LVGVbar">
            <GVbar dataFromParent={dataFromProductsList} />
            <ProductsList
              // currentProducts={products}
              sendDataToParent={handleDataFromProductsList}
            />
          </div>
          <div className="LVproductsList"></div>
        </div>
      </div>
    </div>
  );
};

export default Listview;
