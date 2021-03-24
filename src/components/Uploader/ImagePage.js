import styled from 'styled-components/macro'
import Uploader from './Uploader'
import Images from './Images'

export default function ImagePage({ images, setImages }) {
  return (
    <Wrapper>
      <ImageWrapper>
        {images.map(({ id, url }, index) => (
          <Images id={id} index={index} url={url} />
        ))}
      </ImageWrapper>
      <Uploader images={images} setImages={setImages} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  height: 100vh;
`
const ImageWrapper = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
`
