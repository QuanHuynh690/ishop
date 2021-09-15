import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
function SideBar(props: any) {
  const sortAToZ = () => {
    return props.onSortAZ(props);
  };
  const [search, setSearch] = useState("");
  const inputSearch = (event: any) => {
    setSearch(event.target.value);
    // console.log(event.target.value)
  };
  const submit = (e: any) => {
    e.preventDefault();
    console.log(search);
  };
  return (
    <>
      {/*SideBar */}
      <div className="sidebar-container">
        <form
          role="search"
          method="get"
          className="product-search"
          action="https://websitedemos.net/furniture-store-03/"
        >
          <input
            className="search-field"
            placeholder="Search products…"
            name="s"
          />
          <button type="submit" value="Search" className="search-button">
            Search
          </button>
          <input type="hidden" name="post_type" defaultValue="product" />
        </form>
        <div className="category-container">
          <h2 className="sidebar-title">Product categories</h2>
          <ul className="product-categories">
            <li className="cat-item cat-item-22">
              <Link to="/store?cat=dien-thoai-smartphone">
                Smart Phone
              </Link>{" "}
              <span className="count">(2)</span>
            </li>
            <li className="cat-item cat-item-23">
              <Link to="/store?cat=May-tinh-bang">
                Tablet
              </Link>{" "}
              <span className="count">(7)</span>
            </li>
            <li className="cat-item cat-item-24">
              <Link to="/store?cat=May-Anh">
                Camera
              </Link>{" "}
              <span className="count">(2)</span>
            </li>
          </ul>
        </div>
        <div className="widget woocommerce widget_price_filter">
          <h2 className="sidebar-title">Filter by price</h2>
        </div>
      </div>

      {/* /SideBar */}
    </>
  );
}
export default SideBar;
