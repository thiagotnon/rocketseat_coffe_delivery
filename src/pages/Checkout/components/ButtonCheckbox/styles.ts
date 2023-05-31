import styled from 'styled-components'

export const ButtonRadioContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  user-select: none;

  &:hover span {
    background: ${(props) => props.theme.pallete.base.hover};
  }

  & input:checked + span {
    background: ${(props) => props.theme.pallete.purple.light};
    box-shadow: 0 0 0 2px ${(props) => props.theme.pallete.purple.main};
  }

  span {
    width: 100%;
    height: 3.188rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: ${(props) => props.theme.typography.button.sm};
    transition: 0.2s;
    border-radius: 6px;
    padding: 1rem;
    gap: 0.5rem;
    background: ${(props) => props.theme.pallete.base.button};

    svg {
      color: ${(props) => props.theme.pallete.purple.main};
    }
  }
`
export const ButtonRadioGroup = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  gap: 0.75rem;
`
export const InputRadio = styled.input`
  display: none;
  width: 100%;
`
