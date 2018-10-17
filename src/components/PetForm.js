import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const PetForm = (props) => {
  const {
    zip, handleAnimalChange, handleZipChange, handleSubmit, animal,
  } = props;
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto'}}>
      <Form onSubmit={handleSubmit} style={{ marginTop: '20px'}}>
        <Input zip={zip} onChange={handleZipChange} placeholder="Enter valid US zipcode" required />
        <Input type="select" animal={animal} onChange={handleAnimalChange}>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
        </Input>
        <Button className="btn" style={{ marginTop: '20px', backgroundColor: 'cornflowerblue', color: 'white' }}>Submit</Button>
      </Form>
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
