"use client";
import Link from "next/link";
import "./FoodName.css";
import { useEffect, useRef, useState } from "react";

export default function FoodName({
  heading1,
  heading2,
  heading3,
  text,
  price,
  heading11,
  heading22,
  heading33,
  text1,
  price1,
}) {
  const [quantity, setQuantity] = useState(1);
  const [isBought, setIsBought] = useState(false);
  const [isBought1, setIsBought1] = useState(false);
  const ref = useRef(null);
  const ref1 = useRef(null);
  const [showRecipe1, setShowRecipe1] = useState(0);

  useEffect(() => {
    //   window.onscroll = () => {
    window.addEventListener("scroll", function () {
      const recipeView1 = document.querySelectorAll(
        ".sectionOrderHeader > div"
      )[0];
      const topRecipe1 = recipeView1.getBoundingClientRect().bottom;
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
    if (window.location.pathname === "/order") {
      document.getElementsByClassName("sectionOrderHeader")[0].scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);

  function incrementPrice() {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setIsBought(false);
    setIsBought1(false);
  }

  function decrementPrice() {
    setQuantity((prevQuantity) => prevQuantity - 1);
    setIsBought(false);
    setIsBought1(false);
  }

  async function buyFood(e, foodName, foodPrice) {
    e.preventDefault();

    const orderedData = {
      foodName: foodName,
      numFood: quantity,
      price: parseFloat(foodPrice * quantity),
    };

    try {
      const response = await fetch(
        "https://dacrust.onrender.com/api/foods/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderedData),
        }
      );

      if (response.ok) {
        console.log("Order placed successfully!");
      } else {
        console.error("Failed to place order");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function boughtBtn() {
    setIsBought(true);
  }

  function boughtBtn1() {
    setIsBought1(true);
  }
  return (
    <>
      <dialog ref={ref}>
        <div
          style={{
            color: "red",
            fontWeight: "900",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          {quantity === 1 && isBought && (
            <p>
              You added {quantity} piece of {heading3} in the cart
            </p>
          )}{" "}
          {quantity !== 1 && isBought && (
            <p>
              You added {quantity} pieces of {heading3} in the cart
            </p>
          )}
        </div>
        <div className="foodsDivDialog">
          <h3>{heading3}</h3>
          <p>{text}</p>
          {/* <p>{parseFloat(price)}</p> */}
        </div>
        <div
          style={{
            display: "grid",
            gridGap: "30px",
          }}
        >
          <div className="minPlus">
            {quantity === 1 ? (
              <input
                type="button"
                value={"-"}
                onClick={decrementPrice}
                disabled
              />
            ) : (
              <input type="button" value={"-"} onClick={decrementPrice} />
            )}
            <span>{quantity}</span>
            <input type="button" value={"+"} onClick={incrementPrice} />
          </div>
          <form onSubmit={(e) => buyFood(e, heading3, price)}>
            <button
              type="submit"
              style={{
                marginTop: "10px",
                width: "100%",
              }}
              onClick={boughtBtn}
            >
              Add to cart | ${parseFloat(price * quantity)}
            </button>
          </form>
          <button onClick={() => ref.current?.close()}>Close</button>
        </div>
      </dialog>
      <dialog ref={ref1}>
        <div
          style={{
            color: "red",
            fontWeight: "900",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          {quantity === 1 && isBought1 && (
            <p>
              You added {quantity} piece of {heading11} in the cart
            </p>
          )}{" "}
          {quantity !== 1 && isBought1 && (
            <p>
              You added {quantity} pieces of {heading11} in the cart
            </p>
          )}
        </div>
        <div className="foodsDivDialog">
          <h3>{heading11}</h3>
          <p>{text}</p>
          {/* <p>{price1}</p> */}
        </div>
        <div
          style={{
            display: "grid",
            gridGap: "30px",
          }}
        >
          <div className="minPlus">
            {quantity === 1 ? (
              <input
                type="button"
                value={"-"}
                onClick={decrementPrice}
                disabled
              />
            ) : (
              <input type="button" value={"-"} onClick={decrementPrice} />
            )}
            <span>{quantity}</span>
            <input type="button" value={"+"} onClick={incrementPrice} />
          </div>
          <form onSubmit={(e) => buyFood(e, heading11, price1)}>
            <button
              type="submit"
              style={{
                marginTop: "10px",
                width: "100%",
              }}
              onClick={boughtBtn1}
            >
              Add to cart | ${parseFloat(price * quantity)}
            </button>
          </form>
          <button onClick={() => ref1.current?.close()}>Close</button>
        </div>
      </dialog>
      <section className="sectionOrderHeader">
        <div
          style={{
            marginBottom: "0",
            paddingBottom: "0",
            paddingRight: "0",
            opacity: showRecipe1,
            transition: "opacity 1s ease-in-out",
          }}
        >
          <h1 id="orderHeading">{heading1}</h1>
          <h2 id="orderHeading1">{heading2}</h2>
        </div>
      </section>
      <section className="sectionOrder">
        <div
          style={{ opacity: showRecipe1, transition: "opacity 1s ease-in-out" }}
        >
          <div>
            <button
              className="menuBtn"
              onClick={() => ref.current?.showModal()}
            >
              <div className="foodsDiv">
                <h3>{heading3}</h3>
                <p>{text}</p>
                <p>${price}</p>
              </div>
            </button>
          </div>
          <div>
            {/* <Link href={"#"}> */}
            <button
              className="menuBtn"
              onClick={() => ref1.current?.showModal()}
            >
              <div className="foodsDiv">
                <h3>{heading11}</h3>
                <p>{text}</p>
                <p>${price1}</p>
              </div>
            </button>
            {/* </Link> */}
          </div>
        </div>
      </section>
    </>
  );
}
