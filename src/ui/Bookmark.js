import { MdSpeakerNotes as OpenTopicsIcon } from 'react-icons/md'
import styled from 'styled-components/macro'

export default styled(OpenTopicsIcon)`
  box-sizing: content-box;
  padding: 4px;
  color: ${(props) =>
    props.bookmarked ? 'var(--secondary)' : 'var(--primary-light)'};
`
