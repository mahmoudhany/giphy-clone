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
    const { imageUrl, title, height } = this.props;
    const { isLoading, spans } = this.state
    return (
      <Link
        className='img-wrapper rounded'
        to='/hi'
        style={{
          gridRowEnd: `span ${spans}`,
          background: isLoading ? this.randomBg() : 'transparent',
          minHeight: `${isLoading ? height : this.state.height}px`
        }}
      >
        <img
          className='rounded'
          src={imageUrl}
          alt={title}
          ref={this.imageRef}
          loading='lazy'
        />
      </Link>
    );
  }
}

export default Gif;
