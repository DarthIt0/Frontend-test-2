import React, { useState } from 'react';
import { Button, Message } from 'semantic-ui-react';

interface Props {
  category: string;
  setPage: (page: number) => void;
  place: string;
  setPlace: (place: string) => void;
  options: { id: number; name: string; restaurant: string; availableMeals: string[] }[];
}

const Step2: React.FC<Props> = (props) => {
  
  const [error, setError] = useState<string | null>(null);

  const { category, setPage, place, setPlace, options } = props;
  
  const filteredOptions = Array.from(new Set(options
    .filter(option => option.availableMeals.includes(category))
    .map(option => option.restaurant)
  ));
  
  const handleClickNext = () => {
    if (!place) {
      setError('Please select a restaurant.');
      return;
    }
    setError(null);
    setPage(3);
  };
  
  const handleClickOne = () => {
    setError(null);
    setPage(1);
  };
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1> </h1>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Button onClick={handleClickOne}>STEP 1</Button>
        <Button disabled style={{ color: "blue" }} >STEP 2</Button>
        <Button onClick={handleClickNext}>STEP 3</Button>
        <Button disabled>REVIEW</Button>
      </div>
      <h1> </h1>
      <h2>Step 2</h2>
      <p>Choose a required restaurant:</p>
      <select onChange={(event) => setPlace(event.target.value)}>
        {filteredOptions.map((place, index) => (
          <option key={index} value={place}>
            {place}
          </option>
        ))}
      </select>
      <h1> </h1>
      <button onClick={handleClickOne}>Previous</button>
      <button onClick={handleClickNext}>Next</button>
      {error && (
        <Message
          error
          header='Error'
          content={error}
          style={{ marginTop: '1rem' }}
        />
      )}
    </div>
  );
};

export default Step2;

