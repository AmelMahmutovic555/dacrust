import Link from "next/link";
import "./SectionFavorites.css";

export default function SectionFavorites() {
  return (
    <section className="favoriteSection">
      <div>
        <div>
          <img
            src="/food/crispy-chicken-sandwich-recipe.jpg"
            alt="crispy-chicken-sandwich"
            width={"200"}
            height={"200"}
          />
          <h1>CRISPY CHICKEN SANDWICH</h1>
        </div>
        <div>
          <p>ALL TIME FAVORITES</p>

          <img
            src="/food/spicy-wings.jpg"
            alt="crispy-chicken-sandwich"
            width={"200"}
            height={"200"}
          />
          <h1>HOT & SPICY WINGS</h1>
          <Link href={"/menu"}>
            <button style={{ marginBottom: "30px" }}>Full Menu</button>
          </Link>
        </div>
        <div>
          <img
            src="/food/french-fries.jpg"
            alt="crispy-chicken-sandwich"
            width={"200"}
            height={"200"}
          />
          <h1>FRENCH FRIES</h1>
        </div>
      </div>
    </section>
  );
}
