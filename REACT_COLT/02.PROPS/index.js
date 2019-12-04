class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          to="Nitesh"
          from="Kumar"
          num={3}
          data={[1, 2, 3, 4, 5]}
          isFunny={true}
          bangs={4}
        />

        <Machine s1="x" s2="x" s3="x" />
      </div>
    );
  }
}



ReactDOM.render(<App />, document.getElementById("root"));
