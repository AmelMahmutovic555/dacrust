import "./MoveImages.css";

const takeAwayArr = [
  "take-away.jpg",
  "take-away2.jpg",
  "take-away3.jpg",
  "take-away4.jpg",
  "take-away5.jpg",
];
export default function MoveImages() {
  return (
    <section className="moveImagesSection">
      <div className="moveImages">
        <h1>FOLLOW @DACRUST</h1>
        {takeAwayArr.map((takeAway, index) => (
          <img
            src={"/takeAway/" + takeAway}
            key={index}
            width={"300px"}
            height={"500px"}
            style={{ display: "inline-block" }}
          />
        ))}
      </div>
    </section>
  );
}
