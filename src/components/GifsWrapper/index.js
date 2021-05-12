import InfiniteScroll from 'react-infinite-scroll-component';
import Gif from '../Gif';
import Loading from '../Loading';
import './gifWrapper.scss'


const GifsWrapper = ({ data, isLoading, changeOffset, title }) => {

  const renderList = () => {
    return (
      <InfiniteScroll
        //This is important field to render the next data
        dataLength={data.length}
        next={changeOffset}
        hasMore={true}
        className='list'
        // loading indicator
        loader={isLoading && <Loading />}
        // scroll to top
        id="scrollableDiv"
        scrollableTarget="scrollableDiv"
        endMessage={
          < p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        style={{ overflow: 'hidden' }}
      >
        {
          // render single gif component
          data.map((gif) => {
            return <Gif
              key={gif.id}
              id={gif.id}
              imageUrl={gif.images?.downsized_medium?.url}
              title={title}
              height={gif.images?.downsized_medium?.height}
              gif={gif}
            />
          })
        }
      </InfiniteScroll >
    )
  }
  return (
    <div className='container'>
      <div className="list-wrapper">
        {title ? <h1><span>{title}</span></h1> : ''}
        {
          data.length > 0 ?
            renderList() :
            (!isLoading ?
              <p className='text-center'> No GIFs found for: {title}</p> :
              <Loading />
            )
        }
      </div>
    </div >
  )
}

export default GifsWrapper
