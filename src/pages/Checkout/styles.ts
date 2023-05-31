import styled from 'styled-components'

interface BoxProps {
  gridColumns?: string
}

export const CheckoutContainer = styled.div`
  width: 100%;
  max-width: 70rem;
  padding: 2rem 0.5rem;

  form {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`

export const InputComponent = styled.input`
  color: ${(props) => props.theme.pallete.base.text};
  border: 2px solid ${(props) => props.theme.pallete.base.button};
  background: ${(props) => props.theme.pallete.base.input};
  padding: 12px;
  border-radius: 4px;
  position: relative;
  width: 100%;

  &::placeholder {
    color: ${(props) => props.theme.pallete.base.label};
  }
`

export const Box = styled.div<BoxProps>`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: ${(props) => props.gridColumns};
  margin: 1rem 0;

  @media (max-width: 768px) {
    gap: 0;
    grid-template-columns: 1fr;
  }
`

export const FormControl = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  small {
    color: ${(props) => props.theme.pallete.yellow.dark};
  }
  i {
    font-size: ${(props) => props.theme.typography.regular.sm};
    position: absolute;
    right: 1rem;
    top: 1rem;
    color: ${(props) => props.theme.pallete.base.label};
  }
`

export const EmptyCartMessage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  text-align: center;
  padding: 1rem;
  background-color: ${(props) => props.theme.pallete.base.input};
  border: 2px dotted ${(props) => props.theme.pallete.yellow.light};
`
