import React from "react";

export default class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = {
      spans: 0,
    };
  }

  setSpan = () => {
    const height = this.imageRef.current.clientHeight;
    this.setState({ spans: Math.ceil(height / 10) });
  };

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpan);
  }

  render() {
    const { altText, url } = this.props.image;
    return (
      <li style={{ gridRowEnd: `span ${this.state.spans}` }}>
        {
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img ref={this.imageRef} src={url} alt={altText} />
          </a>
        }
      </li>
    );
  }
}
