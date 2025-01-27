import React, { Component } from 'react';
import axios from 'axios';
// import Table from 'react-bootstrap/Table';

class ProductDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  fetchProductData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      this.setState({ products: response.data });
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  render() {
    return (
      <>
        <h1>Product Display</h1>
        {this.state.products.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {this.state.products.map((product) => (
              <div
                key={product.id}
                style={{
                  border: "3px solid black",
                  marginLeft:"50px",
                  padding: "6px",
                  borderRadius: "5px",
                  width: "300px",
                  textAlign: "center",
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
                <h5>{product.title}</h5>
                <p>{product.description} </p>
                <p>Price: ₹{product.price.toFixed(2)}</p>
                <p>
                  Rating: {product.rating.rate }  ({product.rating?.count} reviews)
                </p>
                <p>{product.category}</p>
                {/* <p style={{ color: "red" }}>Limited Time Deal</p> */}
                <button style={{ padding: "5px 10px", background: "#007bff", color: "#fff", border: "none", borderRadius: "5px" }}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </>
    );
  }

  componentDidMount() {
    this.fetchProductData();
  }
}

export default ProductDisplay;
