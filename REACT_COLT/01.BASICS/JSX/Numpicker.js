class NumPicker extends React.Component {
  render() {
    const num = getNum();

    return (
      <div>
        <h1>Your Num is : {num}</h1>
        <p>{num === 7 ? "Congrats" : "Unlucky"}</p>
        {num === 7 ? (
          <img src="https://media1.giphy.com/media/nXxOjZrbnbRxS/giphy.webp?cid=790b76114635a230b1d3532d9c4b3e3163735329fd9f3e73&rid=giphy.webp" />
        ) : null}
      </div>
    );
  }
}
