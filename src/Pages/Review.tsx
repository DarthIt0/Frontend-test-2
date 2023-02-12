import React from 'react';
import { Button } from 'semantic-ui-react';

interface Props {
  category: string;
  setCategory: (category: string) => void;
  people: number;
  setPeople: (people: number) => void;
  setPage: (page: number) => void;
  place: string;
  setPlace: (place: string) => void;
  selectedDishes: { [key: string]: number };
  setSelectedDishes: (selectedDishes: { [key: string]: number }) => void;
}

const Review: React.FC<Props> = (props) => {
  const {
    category,
    setCategory,
    people,
    setPeople,
    setPage,
    place,
    setPlace,
    selectedDishes,
    setSelectedDishes,
  } = props;
  
  const handleSubmit = () => {
    console.log({ category, people, place, selectedDishes });
    setCategory("");
    setPeople(0);
    setPlace("");
    setSelectedDishes({});
    setPage(1);
  };
  
  const handleClickOne = () => {
    setPage(1);
  };
  
  const handleClickTwo = () => {
    setPage(2);
  };
  
  const handleClickThree = () => {
    setPage(3);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1> </h1>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Button onClick={handleClickOne}>STEP 1</Button>
        <Button onClick={handleClickTwo}>STEP 2</Button>
        <Button onClick={handleClickThree}>STEP 3</Button>
        <Button disabled style={{ color: "blue" }} >REVIEW</Button>
      </div>
      <h1> </h1>
      <h2>Review</h2>
      <h1> </h1>
      <div>
        <h3><strong>Meal category:&nbsp;&nbsp;&nbsp;{category}</strong></h3>
        <br />
        <h3><strong>Number of people:&nbsp;&nbsp;&nbsp;{people}</strong></h3>
        <br />
        <h3><strong>Restaurant:&nbsp;&nbsp;&nbsp;{place}</strong></h3>
        <br />
      </div>
      <table style={{ fontSize: "20px"}}>
        <thead>
          <tr>
            <th style={{ padding: "20px"}}>Dishes</th>
            <th style={{ padding: "20px"}}>Quantities</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(selectedDishes).map(([dish, quantity]) => (
            <tr key={dish}>
              <td style={{ padding: "20px", textAlign: "center"}}>{dish}</td>
              <td style={{ padding: "20px", textAlign: "center"}}>{quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1> </h1>
      <button onClick={handleClickThree}>Previous</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Review;

