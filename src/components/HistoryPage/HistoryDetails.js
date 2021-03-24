import styled from 'styled-components/macro'
import Icon from 'supercons'
import Images from '../Uploader/Images'

export default function HistoryDetails({ toggleDetails, url }) {
  return (
    <>
      <DetailsWrapper>
        <CloseButton
          glyph="view-close"
          width={'25'}
          height={'25'}
          viewBox="6 6 20 20"
          onClick={() => toggleDetails(true)}
        />
        <ImageWrapper>
          {url.map(({ url }) => (
            <Images id={url} url={url} />
          ))}
        </ImageWrapper>
      </DetailsWrapper>
    </>
  )
}
const DetailsWrapper = styled.section`
  width: 100%;
  height: min-content;
  padding: 10px;
  background-color: lightgray;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`
const CloseButton = styled(Icon)`
  display: block;
`

const ImageWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x;
  scroll-behavior: smooth;
  border: 5px solid white;
`
