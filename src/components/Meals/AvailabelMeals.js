import classes from "./AvailabelMeals.module.css";
import DUMMY_MEALS from "./DUMMY_MEALS";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const AvailabelMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailabelMeals;
