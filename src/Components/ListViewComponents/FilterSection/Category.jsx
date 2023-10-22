import React, { useState } from "react";
import "./Category.scss";
import { categoriesData } from "../../../Store/Categories";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoriesData());
  }, [dispatch]);
  const { categories } = useSelector((state) => state.categories);
  const navigate = useNavigate();

  const [wrapCategories, setWrapCategories] = useState(true);
  const [seeAll, setSeeAll] = useState(false);
  const [all, setAll] = useState("more");
  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);

  const handleChangeCategory = (categoriesId) => {
    setSearchParams({
      ...params,
      category: categoriesId,
      searchKey: "",
      pageNumber: 1,
    });
  };

  return (
    <div className="LVCmain">
      <div className="LVCcontainer">
        <div className="LVCcategory">
          <h4>Category</h4>
          <svg
            onClick={() => {
              setWrapCategories((preVlaue) => !preVlaue);
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
        <div>
          {wrapCategories && (
            <div className="LVClist">
              <div
                className="LVCfirstAll"
                onClick={() => navigate("/Listview")}
              >
                All categories
              </div>
              <ul className={`${seeAll ? "LVClistUl" : ""}`}>
                {categories.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => handleChangeCategory(item.id)}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
              <div
                className={`${!seeAll ? "LVCseeall" : "oxsioli"}`}
                onClick={() => {
                  setSeeAll((pre) => !pre);
                  seeAll ? setAll("more") : setAll("less");
                }}
              >
                See {all}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
