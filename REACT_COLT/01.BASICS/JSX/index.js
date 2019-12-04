function currentMood() {
  const moods = ["Happy", "Angry", "Awesome"];
  return moods[Math.floor(Math.random() * moods.length)];
}

function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>Nitesh Kumar</h1>
        <h2>My current mood is: {currentMood()}</h2>
        <img
          width="200px"
          src="https://images.unsplash.com/photo-1575081151297-19c23575e91b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <JSXDemo />
        <NumPicker />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
