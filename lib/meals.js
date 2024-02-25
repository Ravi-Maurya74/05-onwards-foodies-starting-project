import sql from "better-sqlite3";
const db = new sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //   throw new Error("Failed to fetch meals data. Please try again later.");
  return db.prepare("SELECT * FROM meals").all();
}
