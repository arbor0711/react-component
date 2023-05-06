const goodstyle = { backgroundColor: "green", color: "White" };
const badstyle = { backgroundColor: "red", color: "white" };

function Btn1() {
  return (
    <button
      onClick={function () {
        console.log("Btn1 clicked");
      }}
      style={badstyle}
    >
      inline anonymous ES5 function 
    </button>
  );
}

function Btn2() {
  return (
    <button onClick={() => console.log("Btn2 clicked")} style={goodstyle}>
      inline anonymous ES6 functions
    </button>
  );
}

function Btn3() {
  function OnClick() {
    console.log("Btn3 clicked");
  }
  return <button onClick={OnClick}>separate function declarations</button>;
}

function Btn4() {
  const OnClick = () => console.log("Btn4 clicked");
  return (
    <button onClick={OnClick} style={goodstyle}>
      separate function expressions
    </button>
  );
}

export { Btn1, Btn2, Btn3, Btn4 };
