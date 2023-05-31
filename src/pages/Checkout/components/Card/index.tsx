import styled from 'styled-components'

export interface CardBodyProps {
  rounded?: boolean
}

export const CardContainer = styled.div`
  h3 {
    margin-bottom: 0.938rem;
  }
`

export const CardBody = styled.div<CardBodyProps>`
  background: ${(props) => props.theme.pallete.base.card};
  padding: 2.5rem;
  border-radius: 6px;
  margin-bottom: 1rem;

  ${(props) =>
    props.rounded === true &&
    `
    border-radius: 0.375rem 2.75rem;
  `}
`

export const SectionTitle = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: start;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  div {
    h4 {
      color: ${(props) => props.theme.pallete.base.subtitle};
      font-weight: 400;
    }
    p {
      color: ${(props) => props.theme.pallete.base.text};
    }
  }
`
