import React, { useState } from 'react';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  // Sample database of products with names and categories
  const productDatabase = [
    { id: 1, name: 'Laptop', category: 'Electronics' },
    { id: 2, name: 'Running Shoes', category: 'Footwear' },
    { id: 3, name: 'Smartphone', category: 'Electronics' },
    { id: 4, name: 'Backpack', category: 'Fashion' },
    { id: 5, name: 'Headphones', category: 'Electronics' },
  ];

  const search = () => {
    const filteredResults = productDatabase.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredResults);
  };

  const clearResults = () => {
    setSearchTerm('');
    setResults([]);
  };

  return (
    <div>
      {/* Input box and buttons */}
      <input
        type="text"
        placeholder="Search by product or category"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={search}>Search</button>
      <button onClick={clearResults}>Clear</button>

      {/* Display the results in a list */}
      <ul>
        {results.map((product) => (
          <li key={product.id}>
            {product.name} - {product.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
