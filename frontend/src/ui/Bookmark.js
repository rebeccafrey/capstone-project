import { RiPlayListAddLine } from 'react-icons/ri'
import styled from 'styled-components/macro'

export default styled(RiPlayListAddLine)`
  box-sizing: content-box;
  padding: 4px;
  color: ${(props) =>
    props.bookmarked ? 'var(--secondary)' : 'var(--primary-light)'};
`
