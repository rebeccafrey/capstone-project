import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import { Divider } from '../components/Divider'

export default function Entries({ entry }) {
  return (
    <>
      <Divider />
      <ListStyled>
        {entry.map((entry) => (
          <label key={entry.id}>
            <li>
              <h2>{entry.topic}</h2>
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
  id: PropTypes.number,
}

const ListStyled = styled.ul`
  margin-bottom: 100px;
  height: 100%;
`
