import styled from 'styled-components'

export const ProductCartContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: start;
  justify-content: space-between;
  padding: 1.5rem 0;
  border-bottom: 1px solid ${(props) => props.theme.pallete.base.button};
  grid-gap: 1.25rem;
  &:first-child {
    padding-top: 0;
  }

  img {
    width: 4rem;
  }
`
export const ProductCartContent = styled.div`
  p {
    padding-bottom: 0.4rem;
  }
  div {
    display: flex;
    gap: 0.5rem;
    width: 7rem;
    height: 2rem;
    align-items: center;
    input {
      display: flex;
      align-items: center;
    }
    button {
      display: flex;
    }
  }
`
