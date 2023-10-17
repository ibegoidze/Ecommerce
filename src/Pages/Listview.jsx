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
    dispatch(productsData());
    dispatch(latestProductsData());
    dispatch(mostDemandProductsData());
  }, [dispatch]);
  const { products } = useSelector((state) => state.products);
  const { latestProducts } = useSelector((state) => state.latestProducts);
  const { mostDemandProducts } = useSelector(state => state.mostDemandProducts);
  const newMostDemant = mostDemandProducts.slice(0, 2)


  const mergedArray = [...products, ...latestProducts, ...newMostDemant];


  console.log(mostDemandProducts)

  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);

  let currentProducts = mergedArray;

  if (params.brand) {
    currentProducts = currentProducts.filter((item) => {
      return item.brandId === params.brand;
    });
  }

  if (params.category) {
    currentProducts = currentProducts.filter((item) => {
      return item.categoryId === params.category;
    });
  }

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handlePriceRangeChange = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  currentProducts = currentProducts.filter((item) => {
    const itemPrice = parseFloat(item.price);
    return itemPrice >= minPrice && itemPrice <= maxPrice;
  });

  const [dataFromProductsList, setDataFromProductsList] = useState(null);
  const handleDataFromProductsList = (productsNumber) => {
    setDataFromProductsList(productsNumber);
  };

  console.log(mergedArray)
  return (
    <div className="LVmain">
      <div className="LVcontainer">
        <div className="LVfilterSection">
          <Category />
          <Brands />
          <PriceRangeSlider onPriceRangeChange={handlePriceRangeChange} />
          <Raitings />
        </div>
        <div className="LVproductSection">
          <div className="LVGVbar">
            <GVbar dataFromParent={dataFromProductsList} />
            <ProductsList
              currentProducts={currentProducts}
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
