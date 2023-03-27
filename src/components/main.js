function Main(props) {
  return (
    <div className="main">
      <div>
        <h1>Hello, {props.name}</h1>
      </div>
      <div>
        <p>You are in position no. {props.position}</p>
      </div>
    </div>
  );
}

export default Main;
