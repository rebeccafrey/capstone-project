import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import Divider from '../ui/Divider'

export default function Entries({ entry }) {
  return (
    <>
      <ListStyled>
        {entry.map((entry) => (
          <label key={entry.id}>
            <Divider />
            <li>
              <TopicStyled>{entry.topic}</TopicStyled>
              <p>{entry.description}</p>
            </li>
          </label>
        ))}
      </ListStyled>
    </>
  )
}

Entries.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
}

const ListStyled = styled.ul`
  list-style: none;
`
const TopicStyled = styled.h2`
  font-size: 18px;
`
