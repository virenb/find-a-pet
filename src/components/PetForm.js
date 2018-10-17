import React from 'react';
import PropTypes from 'prop-types';

const PetForm = (props) => {
  const {
    zip, handleAnimalChange, handleZipChange, handleSubmit, animal,
  } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input zip={zip} onChange={handleZipChange} placeholder="Enter valid US zipcode" />
        <select animal={animal} onChange={handleAnimalChange}>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
        </select>
        <input type="submit" value="Submit" onSubmit={handleSubmit} />
      </form>
    </div>
  );
};

PetForm.propTypes = {
  zip: PropTypes.string.isRequired,
  animal: PropTypes.string.isRequired,
  handleZipChange: PropTypes.func.isRequired,
  handleAnimalChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default PetForm;
