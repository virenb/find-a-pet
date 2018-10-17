import React from 'react';

const Results = (props) => {
  const { results } = props;
  return (
    <div>
      <div>{results.map(animal => {
        return (
          <div>
            <h3 key={animal.id.$t}>Meet {animal.name.$t}</h3>
            <a href={animal.media.photos.photo[1].$t} target="_blank"><img src={animal.media.photos.photo[1].$t} alt="Picture of animal" /></a>
            <p>Age: {animal.age.$t}</p>
            <p>Breed: {animal.breeds.breed.$t}</p>
            <p>{animal.description.$t}</p>
            <p>{animal.contact.email.$t}</p>
          </div>
        )
      }
      )}</div>
    </div>
  );
};

export default Results;
