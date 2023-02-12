import React, { useState } from 'react';
import { Button, Message } from 'semantic-ui-react';

interface Props {
  category: string;
  setCategory: (category: string) => void;
  people: number;
  setPeople: (people: number) => void;
  setPage: (page: number) => void;
}

const Step1: React.FC<Props> = (props) => {
  
  const { category, setCategory, people, setPeople, setPage } = props;
  
  const [error, setError] = useState<string | null>(null);

  const handleClickNext = () => {
    if (!category) {
      setError('Please select a meal category.');
      return;
    }
    if (!people) {
      setError('Please select the number of people.');
      return;
    }

    setError(null);
    setPage(2);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1> </h1>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Button disabled style={{ color: "blue" }} >STEP 1</Button>
        <Button onClick={handleClickNext}>STEP 2</Button>
        <Button disabled>STEP 3</Button>
        <Button disabled>REVIEW</Button>
      </div>
      <h1> </h1>
      <h2>Step 1</h2>
      <p>Choose a required meal category:</p>
      <label htmlFor="size-select">Category:</label>
      <select
        id="size-select"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
      </select>
      <h3> </h3>
      <p>Choose the required number of people (1-10):</p>
      <label htmlFor="people-input">People:</label>
      <input
        type="number"
        id="people-input"
        min="1"
        max="10"
        value={people}
        onChange={(e) => setPeople(Number(e.target.value))}
      />
      <h1> </h1>
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

export default Step1;
