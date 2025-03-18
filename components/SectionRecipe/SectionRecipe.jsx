import "./SectionRecipe.css";

export default function SectionRecipe({ name, paragraph }) {
  return (
    <section>
      <div>
        <h1
          className="orderColor"
          style={{
            width: "100%",
          }}
        >
          ORDER ON THE GO
        </h1>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. Let your
          users get to know you.
        </p>
      </div>
      <div>
        <h1 className="orderColor">DOORSTEP DELIVERY</h1>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. Let your
          users get to know you.
        </p>
      </div>
      <div>
        <h1 className="orderColor">CURBSIDE PICKUP</h1>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. Let your
          users get to know you.
        </p>
      </div>
      <div>
        <h1>ORIGINAL RECIPE SINCE 2035</h1>
      </div>
    </section>
  );
}
