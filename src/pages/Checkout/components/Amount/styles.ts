import styled from 'styled-components'

export const AmountContainer = styled.div`
  width: 100%;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: ${(props) => props.theme.pallete.base.text};
    }

    strong {
      color: ${(props) => props.theme.pallete.base.subtitle};
    }
  }
`
