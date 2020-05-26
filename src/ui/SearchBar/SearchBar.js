import PropTypes from 'prop-types'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import styled from 'styled-components/macro'

SearchBar.propTypes = {
  setSearchResult: PropTypes.func.isRequired,
}

export default function SearchBar({ setSearchResult }) {
  return (
    <SearchSection>
      <FilterInputStyled
        className="input__style"
        id="topic-filter"
        type="search"
        placeholder="Suche nach Themen..."
        onChange={(e) => setSearchResult(e.target.value)}
      />
      <SearchIconStyled size="32px" color="var(--primary-light)" />
    </SearchSection>
  )
}

const SearchSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 8fr;
  align-items: center;
  margin-bottom: 24px;
`
const FilterInputStyled = styled.input`
  padding-left: 38px !important;
  grid-column: 1 / 3;
  grid-row: 1;
  scroll-snap-align: start;
`
const SearchIconStyled = styled(AiOutlineSearch)`
  grid-column: 1 / 2;
  grid-row: 1;
  margin-left: 4px;
`
