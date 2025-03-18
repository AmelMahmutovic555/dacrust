import Link from "next/link";
import "./Header.css";

export default function Header({
  header1,
  header2,
  btn,
  h1Style1,
  h1Style2,
  btnStyle,
}) {
  return (
    <header>
      <div>
        {/* <div>
          <img src="HeaderChicken.jpg" alt="chicken-wings" />
        </div> */}
        <div>
          <h1 style={h1Style1}>{header1}</h1>
          <h1 style={h1Style2}>{header2}</h1>
          <button style={btnStyle}>
            <Link href={"/order"}>{btn}</Link>
          </button>
        </div>
      </div>
    </header>
  );
}
