class Hello extends React.Component {
  render() {
    return <h1>Hello Nitesh</h1>;
  }
}


//FUNCTION COMMPONENT
function HelloWorld() {
  return (
    <div>
      <h1> Hello There </h1>
      <h1> Hello There </h1>
      <h1> Hello There </h1>
    </div>
  );
}

ReactDOM.render(<Hello />, document.getElementById("content"));
ReactDOM.render(<HelloWorld />, document.getElementById("root"));
