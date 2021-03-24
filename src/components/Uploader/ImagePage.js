import styled from 'styled-components/macro'
import Uploader from './Uploader'
import Images from './Images'

export default function ImagePage({ images, setImages }) {
  return (
    <Wrapper>
      <ImageWrapper>
        {images.map(({ id, url }) => (
          <Images id={id} url={url} />
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
  width: 350px;
  height: 450px;
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x;
  scroll-behavior: smooth;
  border: 2px solid black;
`
