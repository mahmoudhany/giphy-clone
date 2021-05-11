import React from 'react';
import { Link } from 'react-router-dom';

class Gif extends React.Component {
  state = {
    spans: 0,
    isLoading: true,
    height: 0
  }
  imageRef = React.createRef();
  componentDidMount() {
    this.imageRef.current.addEventListener('load', () => this.setSpans());
  }
  componentWillUnmount() {
    this.imageRef.current.removeEventListener('load', () => this.setSpans());
  }
  setSpans = () => {
    const height = this.imageRef.current?.clientHeight;
    const spans = Math.floor(height / 10);
    this.setState({ spans, height });
    this.setState({ isLoading: false })
  };
  randomBg = () => {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";
  }
  render() {
    const { imageUrl, title, height, id } = this.props;
    const { isLoading, spans } = this.state
    return (
      <div
        className='img-wrapper rounded'
        style={{
          gridRowEnd: `span ${spans}`,
          background: isLoading ? this.randomBg() : 'transparent',
          minHeight: `${isLoading ? height : this.state.height}px`
        }}
      >
        <Link to={`/gifs/${id}`}>
          <img
            className='rounded'
            src={imageUrl}
            alt={title}
            ref={this.imageRef}
            loading='lazy'
          />
        </Link>
      </div >
    );
  }
}

export default Gif;
