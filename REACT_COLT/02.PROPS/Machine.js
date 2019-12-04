class Machine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    const winner = s1 === s2 && s2 === s3 ? "winner" : "looser";

    return (
      <div>
        <p>
          {s1} {s2} {s3}
        </p>
        <p>{winner}</p>
      </div>
    );
  }
}
