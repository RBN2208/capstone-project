import styled from 'styled-components/macro'
import Icon from 'supercons'

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
        Hier kommen die history details
        <img src={url} alt="" />
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
`
const CloseButton = styled(Icon)``
