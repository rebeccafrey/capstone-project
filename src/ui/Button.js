import styled from 'styled-components/macro'

export default styled.button`
  min-width: 300px;
  height: 48px;
  border-radius: 8px;
  box-shadow: -4px 5px 8px 0 rgba(67, 86, 100, 0.12),
    -1px 2px 4px 0 rgba(67, 86, 100, 0.1);
  margin: 24px auto;
  color: var(--primary-light-8) !important;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-align: center;
  line-height: 48px;
  text-decoration: none;
  background: var(--secondary);
  display: inline-block;
  padding: 0 16px;
  cursor: default;

  &:active {
    background: var(--primary-light);
    color: var(--secondary) !important;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
