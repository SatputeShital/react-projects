import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import './ProductApi.css'

class ProductApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  fetchProductData = async () => {
    const productData = await axios.get("https://fakestoreapi.com/products");
    console.log(productData.data);
    this.setState({ products: productData.data });
  };
  render() {
    return (
      < >
        <h1 >Product API</h1>
       
        <Table variant solid bordered hover>
          <thead>
            <tr>
              <th rowSpan={2}>ID</th>
              <th rowSpan={2}>Title</th>
              <th rowSpan={2}>Price</th>
              <th rowSpan={2}>Description</th>
              <th rowSpan={2}>Category</th>
              <th rowSpan={2}>Image</th>
              <th colSpan={2}>Rating</th>
            </tr>
            <tr>
              
              <th>Rate</th>
              <th>Count</th>
            </tr>
          </thead>

          <tbody>
            {this.state.products.map((product) => (
              <tr key={product.id}>
                <td style={{width:"40px"}}>{product.id}</td>
                <td style={{width:"150px"}}>{product.title}</td>
                <td style={{width:"60px"}}>${product.price}</td>
                <td style={{width:"650px"}}>{product.description}</td>
                <td style={{width:"80px"}}>{product.category}</td>
                <td style={{width:"120px"}}>
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ width: "100px", height: "100px" }}
                  />
                </td>
                <td style={{width:"50px"}}>{product.rating.rate }</td>
                <td style={{width:"50px"}}> {product.rating.count }</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }

  componentDidMount() {
    console.log("componentDidMount called");
    this.fetchProductData();
  }
}
export default ProductApi;
