import styled from 'styled-components'

export const SuccessContainer = styled.div`
  width: 100%;
  max-width: 70rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    img {
      width: 200px;
      margin-bottom: 1rem;
    }
  }
`

export const SuccessContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h1 {
    color: ${(props) => props.theme.pallete.yellow.dark};
  }
  p {
    color: ${(props) => props.theme.pallete.base.subtitle};
  }
`

export const SuccessBoxInfo = styled.div`
  border: double 2px transparent;
  border-radius: 0.375rem 2.75rem;
  background-image: linear-gradient(
      ${(props) => props.theme.pallete.background},
      ${(props) => props.theme.pallete.background}
    ),
    radial-gradient(
      circle at top left,
      ${(props) => props.theme.pallete.yellow.main},
      ${(props) => props.theme.pallete.purple.main}
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;
  padding: 2.5rem;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      display: grid;
      grid-template-columns: 2rem auto;
      grid-gap: 0.5rem;
      align-items: center;
      margin-bottom: 2rem;
      &:last-child {
        margin-bottom: 0;
      }
      p {
        color: ${(props) => props.theme.pallete.base.text};
        font-size: ${(props) => props.theme.typography.regular.sm};
        span {
          font-weight: bold;
        }
      }
    }
  }
`
