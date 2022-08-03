import classes from "./AvailableMeals.module.css";
import DUMMY_MEALS from "./dummy-meals";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal, index) => {
    return (
      <MealItem
        description={meal.description}
        price={meal.price}
        name={meal.name}
        key={index}
        id={meal.id} 
      >
      </MealItem>
    );
  });
  return (
    <section className={classes.meals}>
      <Card>{mealsList}</Card>
    </section>
  );
}
export default AvailableMeals;
