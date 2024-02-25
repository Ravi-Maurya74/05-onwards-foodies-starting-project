import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

export default function Meals() {
  const meals = getMeals();
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals created{" "}
          <span className={classes.highlight}>by you.</span>
        </h1>
        <p>
          Choose you favourite recipie and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your Favourite Recipie</Link>
        </p>
      </header>
      <main className={classes.main}></main>
      <MealsGrid meals={meals} />
    </>
  );
}
