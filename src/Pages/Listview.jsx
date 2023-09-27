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
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useSearchParams } from "react-router-dom";

const Listview = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsData());
  }, [dispatch]);
  const { products } = useSelector((state) => state.products);

  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);

  let currentProducts = products;

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
  // Price Range Filter Logic

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
            <GVbar />
            <ProductsList currentProducts={currentProducts} />
          </div>
          <div className="LVproductsList"></div>
        </div>
      </div>
    </div>
  );
};

export default Listview;
