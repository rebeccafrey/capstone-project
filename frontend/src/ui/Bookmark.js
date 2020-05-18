import PropTypes from 'prop-types'
import React from 'react'
import { RiPlayListAddLine as AddToCollection } from 'react-icons/ri'
import styled from 'styled-components/macro'

export default function Bookmark({ onClick, bookmarked }) {
  return (
    <AddToCollectionStyled
      role="bookmark"
      onClick={onClick}
      bookmarked={bookmarked}
      aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
    />
  )
}

Bookmark.propTypes = {
  onClick: PropTypes.func.isRequired,
  bookmarked: PropTypes.bool.isRequired,
}

const AddToCollectionStyled = styled(AddToCollection)`
  box-sizing: content-box;
  padding: 4px;
  color: ${(props) =>
    props.bookmarked ? 'var(--secondary)' : 'var(--primary-light)'};
`
