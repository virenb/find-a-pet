import React from 'react';

const Header = () => (
  <div style={{
    backgroundColor: 'cornflowerblue',
    maxWidth: '960px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '4px',
  }}
  >
    <h1 style={{
      color: 'white',
      fontSize: '3em',
      fontFamily: 'Patrick Hand, cursive',
    }}
    >
      Find A Pet
      <span role="img" aria-label="dog-emoji"> 🐶</span>
    </h1>
  </div>
);

export default Header;
