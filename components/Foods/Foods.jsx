"use client";
import { useEffect, useState } from "react";
import "./Foods.css";

export default function Foods() {
  const [showRecipe1, setShowRecipe1] = useState(0);

  useEffect(() => {
    //   window.onscroll = () => {
    window.addEventListener("scroll", function () {
      const recipeView1 = document.querySelectorAll(".foodsSection > div")[0];
      const topRecipe1 = recipeView1.getBoundingClientRect().top;
      if (window.pageYOffset > topRecipe1) {
        setShowRecipe1((prevShowRecipe) => {
          if (prevShowRecipe >= 1) {
            return prevShowRecipe;
          }

          prevShowRecipe + 0.1;
        });
      }
    });
    //   };
  }, []);

  useEffect(() => {
    if (window.location.pathname === "/menu") {
      document.getElementsByClassName("foodsSection")[0].scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);
  return (
    <>
      <section className="foodsSection">
        <div
          style={{ opacity: showRecipe1, transition: "opacity 1s ease-in-out" }}
        >
          <div>
            <h1 style={{ color: "black" }}>CHICKEN SANDWICH</h1>
            <hr />
            <h2>Classic Chicken Sandwich</h2>
            <p>
              I’m a dish description. Click “Edit Menu” to open the Restaurant
              Menu editor and change my text.
            </p>
            <p>$9.00</p>
            <hr />
            <h2>Mega Chicken Sandwich</h2>
            <p>
              I’m a dish description. Click “Edit Menu” to open the Restaurant
              Menu editor and change my text.
            </p>
            <p>$12.00</p>
          </div>
          <div>
            <h1 style={{ color: "black" }}>SPECIAL OFFERS</h1>
            <hr />
            <h2>Da Crust Combo</h2>
            <p>
              I’m a dish description. Click “Edit Menu” to open the Restaurant
              Menu editor and change my text.
            </p>
            <p>$19.99</p>
            <hr />
            <h2>Family Meal</h2>
            <p>
              I’m a dish description. Click “Edit Menu” to open the Restaurant
              Menu editor and change my text.
            </p>
            <p>$19.99</p>
          </div>
          <div>
            <h1 style={{ color: "black" }}>TENDERS</h1>
            <hr />
            <h2>Chicken Tenders - 6pcs</h2>
            <p>
              I’m a dish description. Click “Edit Menu” to open the Restaurant
              Menu editor and change my text.
            </p>
            <p>$9.00</p>
            <hr />
            <h2>Chicken Tenders - 9pcs</h2>
            <p>
              I’m a dish description. Click “Edit Menu” to open the Restaurant
              Menu editor and change my text.
            </p>
            <p>$12.00</p>
          </div>
          <div>
            <h1 style={{ color: "black" }}>SIDES</h1>
            <hr />
            <h2>French Fries</h2>
            <p>$4.00</p>
            <hr />
            <h2>Mac & Cheese</h2>
            <p>$4.00</p>
            <hr />
            <h2>Coleslaw</h2>
            <p>$4.00</p>
            <hr />
            <h2>Mix Greens</h2>
            <p>$4.00</p>
          </div>
          <div>
            <h1 style={{ color: "black" }}>WINGS</h1>
            <hr />
            <h2>Hot & Spicy Wings - 6pcs</h2>
            <p>
              I’m a dish description. Click “Edit Menu” to open the Restaurant
              Menu editor and change my text.
            </p>
            <p>$9.00</p>
            <hr />
            <h2>Hot & Spicy Wings - 9pcs</h2>
            <p>
              I’m a dish description. Click “Edit Menu” to open the Restaurant
              Menu editor and change my text.
            </p>
            <p>$12.00</p>
          </div>
          <div>
            <h1 style={{ color: "black" }}>DESSERTS</h1>
            <hr />
            <h2>★ Bubble Waffle</h2>
            <p>$4.00</p>
            <hr />
            <h2>Milkshake</h2>
            <p>$4.00</p>
          </div>
        </div>
      </section>
    </>
  );
}
