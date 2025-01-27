// {/* <><NavbarPage/>
//       <BrowserRouter>
//        <div id='header2'>
       
//        <Navbar bg="dark" data-bs-theme="dark" >
//         <Container style={{marginLeft:"10px"}}>
      
//           <Nav id='head2Link' >
//           <NavLink to='/home' style={{marginLeft:"80px"}}>HOME</NavLink>
//             <NavLink to='/html' style={{marginLeft:"80px"}}>HTML</NavLink>
//             <NavLink to='/css'  style={{marginLeft:"80px"}}>CSS</NavLink>
//             <NavLink to='/javascript' style={{marginLeft:"80px"}}>JAVASCRIPT</NavLink>
//             <NavLink to='/bootstrap' style={{marginLeft:"80px"}}>BOOTSTRAP</NavLink>
//             <NavLink to='/mongodb' style={{marginLeft:"80px"}}>MONGODB</NavLink>
//             </Nav>
//             </Navbar>
           
//           <Routes>
//             <Route exact path='/home' element={<HomeContainer/>}/>
//             <Route exact path='/html' element={<Html/>}/>
//             <Route exact path='/css' element={<CSS/>}/>
//             <Route exact path='/javascript' element={<JavaScript/>}/>
//             <Route exact path='/bootstrap' element={<BootStrap/>}/>
//             <Route exact path='/mongodb' element={<MongoDB/>}/>
//         </Routes>
        
        
       
   
//         </Container>
//        </div> </BrowserRouter>
//        </> */}





//This is serchPge Code 1. without link 2.not hide items


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const SearchPage = () => {
//   // Sample data to search through
//   const items = [
//     { name: "JavaScript", path: "/javascript" },
//     { name: "CSS", path: "/css" },
//     { name: "HTML", path: "/html" },
//     { name: "Bootstrap", path: "/bootstrap" },
//   ];

//   // State for managing search input and filtered items
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredItems, setFilteredItems] = useState(items);

//   const navigate = useNavigate();

//   // Handle search input change
//   const handleSearch = (e) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQuery(query);

//     // Filter items based on query
//     const results = items.filter((item) =>
//       item.name.toLowerCase().includes(query)
//     );
//     setFilteredItems(results);
//   };

//   // Handle item click to navigate
//   const handleItemClick = (path) => {
//     navigate(path); // Navigate to the specified route
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>Let's take a Step...</h1>
//       <input
//         type="text"
//         placeholder="Search items..."
//         value={searchQuery}
//         onChange={handleSearch}
//         style={styles.searchInput}
//       />
//       <ul style={styles.resultsList}>
//         {filteredItems.length > 0 ? (
//           filteredItems.map((item, index) => (
//             <li
//               key={index}
//               style={styles.listItem}
//               onClick={() => handleItemClick(item.path)} // Navigate on click
//             >
//               {item.name}
//             </li>
//           ))
//         ) : (
//           <li>No results found</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// // Inline styles
// const styles = {
//   container: {
//     textAlign: "center",
//     marginTop: "50px",
//   },
//   title: {
//     fontSize: "2rem",
//     marginBottom: "20px",
//   },
//   searchInput: {
//     padding: "10px",
//     fontSize: "1rem",
//     width: "400px",
//     borderRadius: "12px",
//     border: "3px solid black",
//   },
//   resultsList: {
//     listStyleType: "none",
//     padding: 0,
//     marginTop: "20px",
//   },
//   listItem: {
//     cursor: "pointer",
//     padding: "10px",
//     fontSize: "18px",
//     color: "blue",
//     textDecoration: "underline",
//   },
// };

// export default SearchPage;
























// import React, { useState } from "react";


// const SearchPage = () => {
//   // Sample data to search through
//   const items = [
    
//     "JavaScript",
//     "CSS",
//     "HTML",
   
//     "Bootstrap",
//   ];
 

//   // State for managing search input and filtered items
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredItems, setFilteredItems] = useState(items);

//   // Handle search input change
//   const handleSearch = (e) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQuery(query);

//     // Filter items based on query
//     const results = items.filter((item) =>
//       item.toLowerCase().includes(query)
//     );
//     setFilteredItems(results);
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>Lets take Step...</h1>
//       <input
//         type="text"
//         placeholder="Search items..."
//         value={searchQuery}
//         onChange={handleSearch}
//         style={styles.searchInput}
//       />
//       {/* <button style={styles.search}>Search</button> */}
//       <ul style={styles.resultsList}>
//         {filteredItems.length > 0 ? (
//           filteredItems.map((item, index) => <li key={index}>{item}</li>)
//         ) : (
//           <li>No results found</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// // Inline styles
// const styles = {
//   container: {
//     textAlign: "center",
//     marginTop: "50px",
//   },
//   title: {
//     fontSize: "2rem",
//     marginBottom: "20px",
//   },
//   searchInput: {
//     padding: "10px",
//     fontSize: "1rem",
//     width: "400px",
//     borderRadius: "12px",
//     border: "3px solid black",
//     // color:"Red"
//   },
//   // search:{
//   //   marginleft:"0px",
//   //   height:"45px",
//   //   backgroundImage: `url("search-icon.png")`,
//   //   backgroundSize: "cover", // Ensures the image covers the entire area
//   //   backgroundPosition: "center", // Centers the image
//   //   backgroundRepeat: "no-repeat" ,// Prevents image repetition
//   //   border:"none",
//   //   borderRadius:"3px"
//   // },
//   resultsList: {
//     listStyleType: "none",
//     padding: 0,
//     marginTop: "20px",
//   },
// };

// export default SearchPage;
