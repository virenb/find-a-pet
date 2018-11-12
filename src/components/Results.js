import React from 'react';

const Results = (props) => {
  const { results } = props

  return (
    <div>
      <div>{results.map(animal => {
        return (
          <div key={animal.id.$t} style={{ maxWidth: '480px', margin: '0 auto', borderBottom: '5px solid cornflowerblue', borderRadius: '4px' }}>
            <h3>Meet {animal.name.$t}</h3>
            {animal.media.photos === undefined ? <div></div> :
            <a href={animal.media.photos.photo[3].$t} target="_blank" rel="noopener noreferrer"><img src={animal.media.photos.photo[3].$t} alt="animal" /></a>
            }
            
            <p>Age: {animal.age.$t}</p>
            <p>Breed(s): {animal.breeds.breed.$t || animal.breeds.breed[0].$t + ', ' + animal.breeds.breed[1].$t}</p>
            <p>{animal.description.$t}</p>
            <p>Contact: <a href={"mailto:" + animal.contact.email.$t}>{animal.contact.email.$t}</a></p>
          </div>
        )
      }
      )}</div>
    </div>
  );
};

export default Results;
