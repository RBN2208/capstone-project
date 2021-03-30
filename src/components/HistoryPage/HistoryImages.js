import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function HistoryImages({ urls }) {
  const NO_IMAGES = urls.length === 0 ? true : false
  return (
    <>
      <ContentWrapper>
        <ImageWrapper>
          {urls.map(({ url }, index) => (
            <Images key={index} src={url} alt="" width="300" />
          ))}
        </ImageWrapper>
        <ReplacedWrapper>
          <Replaced empty={NO_IMAGES}>Keine Bilder vorhanden.</Replaced>
        </ReplacedWrapper>
      </ContentWrapper>
    </>
  )
}

HistoryImages.propTypes = {
  urls: PropTypes.array,
}

const ContentWrapper = styled.section`
  width: 100%;
  padding: 10px;
  background: white;
  box-shadow: 0 0 10px var(--color-dark);
  border-radius: 5px;
  display: grid;
  justify-items: flex-start;
`

const ImageWrapper = styled.div`
  width: 300px;
  margin: 0 auto;
`

const Images = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
  border: 2px solid white;
`
const ReplacedWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: black;
`
const Replaced = styled.p`
  ${props => (props.empty ? 'display: block;' : 'display: none;')}
`
