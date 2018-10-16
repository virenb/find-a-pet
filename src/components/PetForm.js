import React from 'react';
import PropTypes from 'prop-types';

const PetForm = (props) => {
  const { zip, handleChange } = props;
  return (
    <div>
      <form>
        <input zip={zip} onChange={handleChange} />
        <select multiple>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

PetForm.propTypes = {
  zip: PropTypes.string.isRequired,
  handleChange: PropTypes.function.isRequired,
};

export default PetForm;
