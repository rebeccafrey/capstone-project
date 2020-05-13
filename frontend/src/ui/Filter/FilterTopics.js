import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import { AiOutlineSearch } from 'react-icons/ai'

export default function FilterTopics({ setSearchResult }) {
  return (
    <SearchSection>
      <FilterInputStyled
        id="topic-filter"
        type="search"
        placeholder="Suche nach Themen..."
        onChange={(e) => filterTopics(e)}
      />
      <SearchIconStyled size="32px" color="var(--primary-light)" />
    </SearchSection>
  )
  function filterTopics(e) {
    setSearchResult(e.target.value)
  }
}

FilterTopics.propTypes = {
  setSearchResult: PropTypes.func,
  filterTopics: PropTypes.func,
}

const SearchSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 8fr;
  align-items: center;
  margin-bottom: 24px;
`
const FilterInputStyled = styled.input`
  font-size: 16px;
  font-weight: 300;
  color: var(--primary-dark);
  width: 95%;
  height: 48px;
  border-radius: 4px;
  border: solid 1px var(--secondary-40);
  line-hight: 1.5em;
  padding: 12px;
  padding-left: 38px;
  grid-column: 1 / 3;
  grid-row: 1;
  scroll-snap-align: start;

  ::placeholder {
    color: var(--primary-light);
  }
`
const SearchIconStyled = styled(AiOutlineSearch)`
  grid-column: 1 / 2;
  grid-row: 1;
  margin-left: 4px;
`
