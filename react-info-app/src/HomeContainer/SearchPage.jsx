import React, { useState } from "react";

const SearchPage = () => {
  // Sample data to search through
  const items = [
    
    "JavaScript",
    "CSS",
    "HTML",
   
    "Bootstrap",
  ];

  // State for managing search input and filtered items
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  // Handle search input change
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter items based on query
    const results = items.filter((item) =>
      item.toLowerCase().includes(query)
    );
    setFilteredItems(results);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Lets take Step...</h1>
      <input
        type="text"
        placeholder="Search items..."
        value={searchQuery}
        onChange={handleSearch}
        style={styles.searchInput}
      />
      {/* <button style={styles.search}>Search</button> */}
      <ul style={styles.resultsList}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  searchInput: {
    padding: "10px",
    fontSize: "1rem",
    width: "400px",
    borderRadius: "12px",
    border: "3px solid black",
    // color:"Red"
  },
  // search:{
  //   marginleft:"0px",
  //   height:"45px",
  //   backgroundImage: `url("search-icon.png")`,
  //   backgroundSize: "cover", // Ensures the image covers the entire area
  //   backgroundPosition: "center", // Centers the image
  //   backgroundRepeat: "no-repeat" ,// Prevents image repetition
  //   border:"none",
  //   borderRadius:"3px"
  // },
  resultsList: {
    listStyleType: "none",
    padding: 0,
    marginTop: "20px",
  },
};

export default SearchPage;
