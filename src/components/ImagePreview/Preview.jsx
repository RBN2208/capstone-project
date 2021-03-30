import styled from 'styled-components'
import Icon from 'supercons'

export default function Preview({ index, url, onDeleteImage }) {
  return (
    <Wrapper>
      <Whitebox></Whitebox>
      <DeleteIcon
        glyph="post-cancel"
        width={'30'}
        height={'30'}
        viewBox="1.5 1.5 30 30"
        onClick={() => onDeleteImage(index)}
      />
      <img key={index} src={url} alt="" width="55" height="55" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  position: relative;
  img {
    margin: 5px;
    border-radius: 5px;
  }
`
const Whitebox = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: white;
  top: 3px;
  left: 3px;
`

const DeleteIcon = styled(Icon)`
  position: absolute;
  top: -5px;
  left: -5px;
  fill: var(--color-red);
  z-index: 1;
`
