import "./productlist.css";
import { Link } from "react-router-dom";
import Chart from "../../components/charts/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";


export default function ProductList() {
  return <div className="products">
    <div className="productTitleContainer">
      <h1 className="productTitle">Product</h1>
      <Link to="/newproducts">
      <button className="productAddButton">Create</button>
      </Link>
    </div>
    <div className="productTop">
      <div className="productTopLeft">
        <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
      </div>
      <div className="productTopRight">
        <div className="productInfoTop">
          <img src="https://images.unsplash.com/photo-1610438235354-a6ae5528385c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="productInfoImg" />
          <span className="productName">Apple Airpods</span>
        </div>
        <div className="productInfoBottom">
          <div className="productInfoItem">
            <span className="productInfoKey">id:</span>
            <span className="productInfoValue">123</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">sales:</span>
            <span className="productInfoValue">5123</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">active:</span>
            <span className="productInfoValue">yes</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">in stock:</span>
            <span className="productInfoValue">no</span>
          </div>
        </div>
      </div>
    </div>
    <div className="productBottom">
      <form  className="productForm">
        <div className="productFormLeft">
          <label htmlFor="">Product</label>
          <input type="text" name="" id="" placeholder="Apple Airpod" />
          <label htmlFor="">In Stock</label>
          <select name="inStock" id="inStock">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <label htmlFor="">Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="productFormRight">
          <div className="productUpload">
            <img className="productUploadImg" src="https://images.unsplash.com/photo-1610438235354-a6ae5528385c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
            <label htmlFor="file">
              <Publish/>
            </label>
            <input type="file" name="" id="file" style={{display:"none"}} />
          </div>
          <button className="productButton">Update</button>
        </div>
      </form>
    </div>
  </div>;
}
