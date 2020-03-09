class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          to="Nitesh"
          from="Kumar"
          num={3} // number being passed in props
          data={[1, 2, 3, 4, 5]} // array being passed in props
          isFunny={true} // boolean being passed in props
          bangs={4}
        />

        <Machine s1="🍓" s2="🍓" s3="🍓" />
        <Machine s1="🍓" s2="🍓" s3="🍔" />
        <Machine s1="🍓" s2="🍓" s3="🍟" />

        <Friend name="Elton" hobbies={["Piano", "Singing", "Dancing"]} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
