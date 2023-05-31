import styled from 'styled-components'

export const ProductsContainer = styled.div`
  background: ${(props) => props.theme.pallete.base.card};
  border-radius: 0.375rem 2.25rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  & > img {
    margin: -2.25rem 0 0.75rem 0;
  }

  & > h3 {
    margin-bottom: 0.5rem;
  }

  & > p {
    margin-bottom: 2.063rem;
    text-align: center;
    color: ${(props) => props.theme.pallete.base.label};
  }

  footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    p {
      display: flex;
      gap: 0.1rem;
      align-items: end;
      font-size: ${(props) => props.theme.typography.regular.sm};
      margin: 0;
      color: ${(props) => props.theme.pallete.base.text};

      span {
        font-size: ${(props) => props.theme.typography.header.md};
        font-weight: 800;
      }
    }

    button {
      display: block;
      line-height: 0;
      width: auto;
    }
  }
`

export const TagsList = styled.span`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
`

export const Tag = styled.span`
  padding: 0.25rem 0.5rem;
  font-size: ${(props) => props.theme.typography.tag};
  font-weight: 700;
  border-radius: 100px;
  text-transform: uppercase;
  background: ${(props) => props.theme.pallete.yellow.light};
  color: ${(props) => props.theme.pallete.yellow.dark};
`
