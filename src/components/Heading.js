function Heading() {
  const headingStyle = {
    padding: "10px",
    gridArea: "header",
    backgroundColor: "rgb(162, 219, 253)",
    width: "100%",
    margin: "10px",
  };
  return (
    <div style={headingStyle}>
      <h1>Header content here</h1>
    </div>
  );
}

export default Heading;
