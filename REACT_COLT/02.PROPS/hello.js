class Hello extends React.Component {

  static defaultProps = {
    from: 'Anonymous'
  }

  render() {

    let bangs = "!".repeat(this.props.bangs);
    console.log(this.props);
    return (
      <div>
        <h1>
          Hello {this.props.to} from {this.props.from} {bangs} 
        </h1>
      </div>
    );
  }
}
