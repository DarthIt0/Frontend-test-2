import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Col, Table } from 'reactstrap';
import { Button, Message } from 'semantic-ui-react';

interface Props {
  category: string;
  people: number;
  setPage: (page: number) => void;
  place: string;
  selectedDishes: { [key: string]: number };
  setSelectedDishes: (selectedDishes: { [key: string]: number }) => void;
  options: { id: number; name: string; restaurant: string; availableMeals: string[] }[];
}

const Step3: React.FC<Props> = (props) => {
  const {
    category,
    people,
    setPage,
    place,
    selectedDishes,
    setSelectedDishes,
    options,
  } = props;

  const [error, setError] = useState<string | null>(null);

  const filteredOptions = options
    .filter((option) => option.availableMeals.includes(category))
    .filter((option) => option.restaurant === place)
    .map((option) => option.name);

  const [selectedDish, setSelectedDish] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState(0);

  const handleAddDish = () => {
    if (!selectedDish || !selectedQuantity) {
      return;
    }
    
    const updatedDishes = {
      ...selectedDishes,
      [selectedDish]: selectedDish in selectedDishes ? selectedDishes[selectedDish] + selectedQuantity : selectedQuantity,
    };
    
    setSelectedDishes(updatedDishes);
    setSelectedDish('');
    setSelectedQuantity(0);
  };

  const handleRemoveDish = (dish: string) => {
    const updatedDishes = { ...selectedDishes };
    delete updatedDishes[dish];
    setSelectedDishes(updatedDishes);
  };

  const handleClickNext = () => {
    let sum = 0;
    for (const quantity of Object.values(selectedDishes)) {
      sum += quantity;
    }
    
    if (sum >= people && sum < 11) {
      setError(null);
      setPage(4);
    } else {
      setError('The total quantity should be greater or equal to the number of people (maximum of 10)');
    }
  };
  
  const handleClickOne = () => {
    setError(null);
    setPage(1);
  };
  
  const handleClickTwo = () => {
    setError(null);
    setPage(2);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1> </h1>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Button onClick={handleClickOne}>STEP 1</Button>
        <Button onClick={handleClickTwo}>STEP 2</Button>
        <Button disabled style={{ color: "blue" }} >STEP 3</Button>
        <Button onClick={handleClickNext}>REVIEW</Button>
      </div>
      <h1> </h1>
      <h2>Step 3</h2>
      <p>Choose dishes and their quantities:</p>
      <p>(The total being greater or equal to {people} and less than 11)</p>
      {error && (
        <p style={{ color: 'red' }}>
          {error}
        </p>
      )}
      <Form>
        <FormGroup row>
          <Label for="dish" sm={2}>
            Dish
          </Label>
          <Col sm={10}>
            <Input
              type="select"
              name="dish"
              id="dish"
              value={selectedDish}
              onChange={(e) => setSelectedDish(e.target.value)}
            >
              <option value="" disabled>
                Select a dish
              </option>
              {filteredOptions.map((dish) => (
                <option key={dish} value={dish}>
                  {dish}
                </option>
              ))}
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="quantity" sm={2}>
            Quantity
          </Label>
          <Col sm={10}>
            <Input
              type="number"
              name="quantity"
              id="quantity"
              min="1"
              max="10"
              value={selectedQuantity}
              onChange={(e) => setSelectedQuantity(parseInt(e.target.value))}
            />
          </Col>
        </FormGroup>
      </Form>
      <div>
        <button onClick={handleAddDish}>Add dish</button>
      </div>
      <br />
      <Table>
        <thead>
          <tr>
            <th>Dish</th>
            <th>Quantity</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {Object.entries(selectedDishes).map(([dish, quantity]) => (
            <tr key={dish}>
              <td style={{ textAlign: "center"}}>{dish}</td>
              <td style={{ textAlign: "center"}}>{quantity}</td>
              <td>
                <button onClick={() => handleRemoveDish(dish)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h1> </h1>
      <button onClick={handleClickTwo}>Previous</button>
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

export default Step3;
