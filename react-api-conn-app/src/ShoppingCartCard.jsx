import { Card } from "react-bootstrap";
import React, { Component } from "react";
import axios from "axios";

class ShoppingCartCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carts: [],
      products: [],
    };
  }

  async componentDidMount() {
    await this.fetchProductData();
  }

  fetchProductData = async () => {
    try {
      const cartResponse = await axios.get("https://fakestoreapi.com/carts");
      const productResponse = await axios.get("https://fakestoreapi.com/products");

      // Assuming you are working with userId = 1 for now
      const userCart = cartResponse.data.find((cart) => cart.userId === 1);

      this.setState({
        carts: userCart ? userCart.products : [],
        products: productResponse.data,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  calculateTotal() {
    const { carts, products } = this.state;
    return carts.reduce((total, cartItem) => {
      const product = products.find((p) => p.id === cartItem.productId);
      return total + (product?.price || 0) * cartItem.quantity;
    }, 0).toFixed(2);
  }

  render() {
    const { carts, products } = this.state;

    return (
      <>
        <div style={{ display: "flex", flexDirection: "row", fontFamily: "Cambria" }}>
          {/* Left Card (Cart Details) */}
          <div id="Card1">
            <h2>Shopping Cart</h2>
            <Card
              style={{
                border: "3px solid black",
                width: "1000px",
                padding: "20px",
                marginLeft: "80px",
              }}
            >
              {carts.length === 0 ? (
                <p>Your cart is empty!</p>
              ) : (
                carts.map((cartItem, index) => {
                  const product = products.find((p) => p.id === cartItem.productId);

                  if (!product) return null;

                  return (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        borderBottom: "1px solid #ccc",
                        marginBottom: "10px",
                        paddingBottom: "10px",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src={product.image}
                        alt={product.title}
                        style={{
                          width: "200px",
                          height: "150px",
                          objectFit: "cover",
                          marginRight: "20px",
                        }}
                      />
                      <Card.Body>
                        <Card.Title>
                          <b>{product.title}</b>
                        </Card.Title>
                        <hr />
                        <Card.Text>{product.description}</Card.Text>
                        <Card.Text>Price: ${product.price.toFixed(2)}</Card.Text>
                        <Card.Text>Quantity: {cartItem.quantity}</Card.Text>
                      </Card.Body>
                    </div>
                  );
                })
              )}
            </Card>
          </div>

          {/* Right Card (Summary and Grand Total) */}
          <div
            id="Card2"
            style={{
              border: "3px solid black",
              borderRadius: "5px",
              width: "400px",
              padding: "20px",
              marginTop: "47px",
              marginLeft: "20px",
              height: "400px",
            }}
          >
            <h3>Order Summary</h3>
            <hr />
            <table style={{ width: "100%", textAlign: "left", marginBottom: "20px" }}>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {carts.map((cartItem, index) => {
                  const product = products.find((p) => p.id === cartItem.productId);
                  if (!product) return null;

                  return (
                    <tr key={index}>
                      <td>{product.title}</td>
                      <td>${product.price.toFixed(2)}</td>
                      <td style={{
                        textAlign:"center"
                      }}>{cartItem.quantity}</td>
                    <hr />

                    </tr>
                  );
                })}
              </tbody>
            </table>
            <hr />
            <h3>Grand Total: ${this.calculateTotal()}</h3>
          </div>
        </div>
      </>
    );
  }
}

export default ShoppingCartCard;


// import { Card, Button } from "react-bootstrap";
// import React, { Component } from "react";
// import axios from "axios";

// class ShoppingCartCard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       carts: [],
//       products: [],
//     };
//   }

//   async componentDidMount() {
//     await this.fetchProductData();
//   }

//   fetchProductData = async () => {
//     try {
//       const cartResponse = await axios.get("https://fakestoreapi.com/carts");
//       const productResponse = await axios.get("https://fakestoreapi.com/products");

//       // Assuming you are working with userId = 1 for now
//       const userCart = cartResponse.data.find((cart) => cart.userId === 1);

//       this.setState({
//         carts: userCart ? userCart.products : [],
//         products: productResponse.data,
//       });
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   calculateTotal() {
//     const { carts, products } = this.state;
//     return carts.reduce((total, cartItem) => {
//       const product = products.find((p) => p.id === cartItem.productId);
//       return total + (product?.price || 0) * cartItem.quantity;
//     }, 0).toFixed(2);
//   }

//   render() {
//     const { carts, products } = this.state;

//     return (
//       <><div style={{display:"flex", flexDirection:"row", fontFamily:"cambria"}}>
//         <div id="Card1">
//         <h2>Shopping Cart</h2>
//         <Card style={{border:"3px solid black", width: "1000px", padding: "20px", marginLeft:"80px" }}>
//           {carts.length === 0 ? (
//             <p>Your cart is empty!</p>
//           ) : (
//             carts.map((cartItem, index) => {
//               const product = products.find((p) => p.id === cartItem.productId);

//               if (!product) return null;

//               return (
//                 <div
//                   key={index}
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     borderBottom: "1px solid #ccc",
//                     marginBottom: "10px",
//                     paddingBottom: "10px",
//                   }}
//                 >
//                   <Card.Img
//                     variant="top"
//                     src={product.image}
//                     alt={product.title}
//                     style={{
//                         // border:"3px solid black",
//                       width: "200px",
//                       height: "150px",
//                       objectFit: "cover",
//                       marginRight: "20px",
//                     }}
//                   />
//                   <Card.Body>
//                     <Card.Title><b>{product.title}</b></Card.Title>
//                     <hr></hr>
//                     <Card.Text>{product.description}</Card.Text>
//                     <Card.Text>Price: ₹{product.price.toFixed(2)}</Card.Text>
//                     <Card.Text>Quantity: {cartItem.quantity}</Card.Text>
//                     {/* <Button variant="primary">Add</Button> */}
//                   </Card.Body>
//                 </div>
//               );
//             })
//           )}
          
//         </Card>
//         </div>
//         <div id="Card2" style={{border:"3px solid black", borderRadius:"5px", width: "400px", padding: "20px",marginTop:"47px", marginLeft:"20px", height:"auto"}}>
//         <div>
//             <h3>Grand Total  </h3>
//               <table>
//                 <tr>
//                     <th>
//                     <th>Title</th>
//                     <th >Price</th>
//                     </th>
//                 </tr>
//                 <tr>
//                 <td style={{width:"150px"}}>{product.title}</td>
//                 <td style={{width:"60px"}}>${product.price}</td>
//                 </tr>
              
//               </table>
//                <h3>  ₹{this.calculateTotal()}</h3>
//         </div>
//         </div>
//       </div>
       
//       </>
//     );
//   }
// }

// export default ShoppingCartCard;


// import { Card, Button } from "react-bootstrap";
// import React, { Component } from "react";
// import axios from "axios";


// class ShoppingCartCard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         carts:[],
//         products:[],
//     };
//   }

//   fetchProductData= async () => {
//     const cartData=await axios.get("https://fakestoreapi.com/carts");
//     const productData=await axios.get("https://fakestoreapi.com/products");
//     console.log(cartData.data);
//     console.log(productData.data);
//     this.setState({products:productData.data});
//     this.setstate({carts:cartData.data});
    
//   }

//   calculateTotal() {
//     const { carts, products } = this.state;
//     return cart.reduce((total, cartItem) => {
//       const product = products.find(p => p.id === cartItem.productId);
//       return total + (product?.price || 0) * cartItem.quantity;
//     }, 0).toFixed(2);
//   }
//   render() {
//     return (
//       <>
//       <h2> Shopping Cart</h2>
//         <Card style={{ width: "800px" }}>
//             <table>
//                 <tr>
//                     <th><Card.Header>Name of Product</Card.Header></th>
//                 </tr>
//                 <tr>
//                     <th><Card.Header>Price</Card.Header></th>
//                 </tr>

//             </table>
        
//         {this.state.carts.map((carts)=> (
//           <Card.Img variant="top" src={{carts.image}} alt={products.title}
//           style={{ width: '100px', height: '100px', objectFit: 'cover', marginRight: '20px' }} />
//           <Card.Body>
//             <Card.Title>{product.title}</Card.Title>
//             <Card.Text>{products.description}</Card.Text>
//             <Card.Text>Price: ₹{product.price.toFixed(2)}</Card.Text>
//             <Card.Text>Quantity: {cartItem.quantity}</Card.Text>
//             <Button variant="primary">Add</Button>

//           </Card.Body>
//         ))}
          
//           <div>
//              <p>Total: ₹{(product.price * cartItem.quantity).toFixed(2)}</p>
//           </div>
//         </Card>
//         <div>
//         <h2>Grand Total: ₹{this.calculateTotal()}</h2>
//         </div>
//       </>
//     );
//   }
// }

// export default ShoppingCartCard;


