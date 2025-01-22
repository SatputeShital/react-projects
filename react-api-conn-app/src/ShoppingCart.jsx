import React, { Component } from 'react';
import axios from 'axios';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      products: [],
      userId: 1, // Example: Show cart for userId 1
    };
  }

  async componentDidMount() {
    try {
      // Fetch products and cart data
      const productResponse = await axios.get('https://fakestoreapi.com/products'); // Replace with your API
      const cartResponse = await axios.get('https://fakestoreapi.com/carts'); // Replace with your API

      // Filter the cart for the current user
      const userCart = cartResponse.data.find(cart => cart.userId === this.state.userId);

      this.setState({
        products: productResponse.data,
        cart: userCart ? userCart.products : [],
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Helper method to calculate the total price
  calculateTotal() {
    const { cart, products } = this.state;
    return cart.reduce((total, cartItem) => {
      const product = products.find(p => p.id === cartItem.productId);
      return total + (product?.price || 0) * cartItem.quantity;
    }, 0).toFixed(2);
  }

  render() {
    const { cart, products } = this.state;

    return (
      <div style={{ padding: '20px' }}>
        <h1>Shopping Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <div>
            {cart.map(cartItem => {
              const product = products.find(p => p.id === cartItem.productId);

              if (!product) return null;

              return (
                <div
                  key={cartItem.productId}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    borderBottom: '1px solid #ccc',
                    padding: '10px 0',
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ width: '100px', height: '100px', objectFit: 'cover', marginRight: '20px' }}
                  />
                  <div style={{ flex: 1 }}>
                    <h3>{product.title}</h3>
                    <p>Price: ₹{product.price.toFixed(2)}</p>
                    <p>Quantity: {cartItem.quantity}</p>
                  </div>
                  <div>
                    <p>Total: ₹{(product.price * cartItem.quantity).toFixed(2)}</p>
                  </div>
                </div>
              );
            })}
            <h2>Grand Total: ₹{this.calculateTotal()}</h2>
          </div>
        )}
      </div>
    );
  }
}

export default ShoppingCart;
