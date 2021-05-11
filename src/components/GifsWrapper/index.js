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
          data.map(({ id, title, images: { downsized_large } }) => {
            return <Gif
              key={id}
              id={id}
              imageUrl={downsized_large.url}
              title={title}
              height={downsized_large.height}
            />
          }
          )
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
            <p className='text-center'> No GIFs found for: {title}</p>
        }
      </div>
    </div >
  )
}

export default GifsWrapper
