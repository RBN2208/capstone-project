import styled from 'styled-components/macro'
import Icon from 'supercons'
import Images from '../Images/Images'

export default function HistoryDetails({ toggleDetails, id, urls }) {
  return (
    <>
      <DetailsWrapper>
        <CloseButton
          glyph="view-close"
          width={'25'}
          height={'25'}
          viewBox="6 6 20 20"
          onClick={() => toggleDetails(!toggleDetails)}
        />
        <ImageWrapper>
          {urls.map(({ url }) => (
            <Images key={id} url={url} />
          ))}
        </ImageWrapper>
      </DetailsWrapper>
    </>
  )
}
const DetailsWrapper = styled.section`
  width: 100%;
  padding: 10px;
  background-color: lightgray;
`
const CloseButton = styled(Icon)`
  display: block;
`

const ImageWrapper = styled.div`
  width: 300px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  margin: 0 auto;
`
