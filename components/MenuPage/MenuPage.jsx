"use client";
import FoodName from "./FoodName/FoodName";
import "./MenuPage.css";

export default function MenuPage() {
  return (
    <>
      <FoodName
        heading1={"MENU"}
        heading2={"CHICKEN SANDWICH"}
        heading3={"Classic Chicken Sandwich"}
        text={
          "I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text."
        }
        price={9.0}
        heading11={"Mega Chicken Sandwich"}
        // price1={"$12.00"}
        price1={12.0}
      />
      <FoodName
        heading2={"TENDERS"}
        heading3={"Chicken Tenders - 6pcs"}
        text={
          "I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text."
        }
        price={9.0}
        heading11={"Chicken Tenders - 9pcs"}
        price1={12.0}
      />
      <FoodName
        heading2={"WINGS"}
        heading3={"Hot & Spicy Wings - 6pcs"}
        text={
          "I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text."
        }
        price={9.0}
        heading11={"Hot & Spicy Wings - 9pcs"}
        price1={12.0}
      />
      <FoodName
        heading2={"SPECIAL OFFERS"}
        heading3={"Da Crust Combo"}
        text={
          "I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text."
        }
        price={19.0}
        heading11={"Family Meal"}
        price1={19.0}
      />
      <FoodName
        heading2={"SIDES"}
        heading3={"French Fries"}
        price={4.0}
        heading11={"Mac & Cheese"}
        price1={4.0}
      />
      <FoodName
        heading2={"DESSERTS"}
        heading3={"★ Bubble Waffle"}
        price={4.0}
        heading11={"Milkshake"}
        price1={4.0}
      />
    </>
  );
}
