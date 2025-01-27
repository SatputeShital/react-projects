
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  // Sample data to search through
  const items = [
    { name: "JavaScript", path: "/javascript" },
    { name: "CSS", path: "/css" },
    { name: "HTML", path: "/html" },
    { name: "Bootstrap", path: "/bootstrap" },
  ];

  // State for managing search input and filtered items
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  const navigate = useNavigate();

  // Handle search input change
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter items based on query
    const results = items.filter((item) =>
      item.name.toLowerCase().includes(query)
    );
    setFilteredItems(results);
  };

  // Handle item click to navigate
  const handleItemClick = (path) => {
    navigate(path); // Navigate to the specified route
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Let's take a Step...</h1>
      <input
        type="text"
        placeholder="Search items..."
        value={searchQuery}
        onChange={handleSearch}
        style={styles.searchInput}
      />
      {/* Only display results if searchQuery is not empty */}
      {searchQuery && (
        <ul style={styles.resultsList}>
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li
                key={index}
                style={styles.listItem}
                onClick={() => handleItemClick(item.path)} // Navigate on click
              >
                {item.name}
              </li>
            ))
          ) : (
            <li style={styles.noResults}>No results found</li>
          )}
        </ul>
      )}
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
  },
  resultsList: {
    listStyleType: "none",
    padding: 0,
    marginTop: "20px",
  },
  listItem: {
    cursor: "pointer",
    padding: "10px",
    fontSize: "18px",
    color: "blue",
    textDecoration: "underline",
  },
  noResults: {
    fontSize: "18px",
    color: "red",
  },
};

export default SearchPage;




















