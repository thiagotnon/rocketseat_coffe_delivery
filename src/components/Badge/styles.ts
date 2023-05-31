import styled from 'styled-components'

export const BadgeBox = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.pallete.yellow.dark};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.pallete.white};
  font-weight: bold;
  font-size: ${(props) => props.theme.typography.button.sm};
  position: absolute;
  right: -0.5rem;
  top: -0.5rem;
`
