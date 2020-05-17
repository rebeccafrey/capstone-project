import React from 'react'
import { RiPlayListAddLine as AddToCollection } from 'react-icons/ri'
import styled from 'styled-components/macro'

export default function Bookmark() {
  return (
    <AddToCollectionStyled
    // onClick={handleBookmarkClick}
    // active={isBookmarked}
    // aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
    />
  )
}

const AddToCollectionStyled = styled(AddToCollection)`
  box-sizing: content-box;
  padding: 4px;
  color: ${(props) =>
    props.selected ? 'var(--secondary)' : 'var(--primary-light)'};
`
