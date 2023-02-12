import React, { useState } from "react";
import Step1 from "./Pages/Step1";
import Step2 from "./Pages/Step2";
import Step3 from "./Pages/Step3";
import Review from "./Pages/Review";
import Data from './Data/dishes.json';

const options = Data.dishes;

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedPeople, setSelectedPeople] = useState<number>(0);
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [selectedPlace, setSelectedPlace] = useState<string>("");
  const [selectedDishes, setSelectedDishes] = useState({});
  
  const handleCategorySelection = (category: string) => {
    setSelectedCategory(category);
    setSelectedDishes({});
  };
  
  const handlePeopleSelection = (people: number) => {
    setSelectedPeople(people);
  };
  
  const handlePageSelection = (page: number) => {
    setSelectedPage(page);
  };
  
  const handlePlaceSelection = (place: string) => {
    setSelectedPlace(place);
    setSelectedDishes({});
  };

  return (
    <div>
      {selectedPage === 1 && (
        <Step1
          category={selectedCategory}
          setCategory={handleCategorySelection}
          people={selectedPeople}
          setPeople={handlePeopleSelection}
          setPage={handlePageSelection}
        />
      )}
      {selectedPage === 2 && (
        <Step2
          category={selectedCategory}
          setPage={handlePageSelection}
          place={selectedPlace}
          setPlace={handlePlaceSelection} 
          options={options} 
        />
      )}
      {selectedPage === 3 && (
        <Step3
          category={selectedCategory}
          people={selectedPeople}
          setPage={handlePageSelection}
          place={selectedPlace}
          selectedDishes={selectedDishes}
          setSelectedDishes={setSelectedDishes}
          options={options}
        />
      )}
      {selectedPage === 4 && (
        <Review
          category={selectedCategory}
          setCategory={handleCategorySelection}
          people={selectedPeople}
          setPeople={handlePeopleSelection}
          setPage={handlePageSelection}
          place={selectedPlace}
          setPlace={handlePlaceSelection}
          selectedDishes={selectedDishes}
          setSelectedDishes={setSelectedDishes}
        />
      )}
    </div>
  );
};

export default App;

