import React, { useState } from 'react';
import { Dropdown, Card } from 'react-bootstrap';

const CountrySelectPreview = () => {
  // Sample countries list
  const countries = [
    { code: "US", name: "United States" },
    { code: "CA", name: "Canada" },
    { code: "IN", name: "India" },
    { code: "GB", name: "United Kingdom" },
    { code: "AU", name: "Australia" },
  ];

  const [selectedCountry, setSelectedCountry] = useState(null);

  // Handle country selection
  const handleSelect = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="container mt-5">
      <h2>Select a Country</h2>

      {/* Country Dropdown */}
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedCountry ? selectedCountry.name : "Select a country"}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {countries.map((country) => (
            <Dropdown.Item key={country.code} eventKey={country}>
              {country.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      {/* Preview Box */}
      {selectedCountry && (
        <Card className="mt-4">
          <Card.Body>
            <Card.Title>Selected Country</Card.Title>
            <Card.Text>
              <strong>Country Name:</strong> {selectedCountry.name}
            </Card.Text>
            <Card.Text>
              <strong>Country Code:</strong> {selectedCountry.code}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default CountrySelectPreview;
