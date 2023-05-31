import styled from 'styled-components'

export const NumericInputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.pallete.base.button};
  border: 0;
  padding: 0.6rem;
  border-radius: 6px;
`

export const NumericInputComponent = styled.input`
  width: 100%;
  min-width: 30px;
  text-align: center;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -moz-appearance: textfield;
  background: transparent;
  border: 0;

  &:focus {
    box-shadow: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const NumericInputButton = styled.button`
  border: 0;
  background: transparent;
  color: ${(props) => props.theme.pallete.purple.main};
  cursor: pointer;
  border-radius: 50%;
  transition: 0.2s;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    color: ${(props) => props.theme.pallete.base.subtitle};
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme.pallete.purple.main};
    color: ${(props) => props.theme.pallete.white};
  }
`
