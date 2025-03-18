import Link from "next/link";
import "./DeliverSection.css";

export default function DeliverSection() {
  return (
    <section id="shippingSection">
      <div className="shippingBox">
        <div>
          <h1>WE DELIVER</h1>
          <h2>SATISFYING YOUR CRAVING JUST GOT EASIER</h2>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>
          <button>
            <Link href={"/order"}>Order Online</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
