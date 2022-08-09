import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import useFetch from "../../hook/use-fetch";
import { useEffect, useState } from "react";

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const applyData = (data) => {
    let mMeals = [];
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        const element = data[key];
        mMeals.push({...element,id:key});
      }
    }
    setMeals(mMeals);
  };

  const { isLoading, error, sendRequestFn } = useFetch(
    {
      url: "https://hoc-reactjs-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json",
      method: "GET",
    },
    applyData
  );

  useEffect(() => {
    sendRequestFn();
  }, []);

  const mealsList = meals.map((meal, index) => {
    return (
      <MealItem
        description={meal.description}
        price={meal.price}
        name={meal.name}
        key={index}
        id={meal.id}
      ></MealItem>
    );
  });
  if(error){
    return (
      <section className={classes.mealsError}>
        <p>Error</p>
      </section>
    );
  }
  return (
    <section className={classes.meals}>
      {!isLoading && <Card>{mealsList}</Card>}
      {isLoading && <p>Is loading</p>}
    </section>
  );
}
export default AvailableMeals;
