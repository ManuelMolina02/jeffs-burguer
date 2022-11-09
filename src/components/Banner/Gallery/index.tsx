import Carousel from 'better-react-carousel'

export function Gallery() {
  return (
    <Carousel cols={1} rows={1} gap={10} loop={true} hideArrow={false} autoplay={0} >
      <Carousel.Item>
        <img width="100%" height={'600px'} src="https://picsum.photos/800/600?random=1" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" height={'600px'} src="https://picsum.photos/800/600?random=2" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" height={'600px'} src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      {/* ... */}
    </Carousel>
  )
}