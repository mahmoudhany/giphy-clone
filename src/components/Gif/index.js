import React from 'react';
import { Link } from 'react-router-dom';
import FavouriteBtn from '../FavouriteBtn';
import './gif.scss'

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

  // render only needed height
  setSpans = () => {
    const height = Math.floor(this.imageRef.current?.clientHeight);
    const spans = Math.floor(height / 10);
    this.setState({ spans, height, isLoading: false });
  };

  // random background color 
  randomBg = () => {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";
  }
  render() {
    const { imageUrl, title, height, id, gif } = this.props;
    const { isLoading, spans } = this.state
    return (
      <div
        className='img-wrapper rounded position-relative'
        style={{
          gridRowEnd: `span ${spans}`,
          background: `${isLoading ? this.randomBg() : 'transparent'}`,
          marginBottom: '5px'
        }}
      >
        <div className="add-to-fav">
          <FavouriteBtn gif={gif} />
        </div>
        <Link to={`/gifs/${id}`}
          style={{
            minHeight: `${isLoading ? height : spans * 10}px`
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
      </div >
    );
  }
}

export default Gif;
