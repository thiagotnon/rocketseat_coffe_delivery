import { ButtonHTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'info'
  full?: boolean
}

export const ButtonBase = styled.button<ButtonProps>`
  border: 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  transition: all 0.2s;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  text-transform: uppercase;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  background: ${(props) => props.theme.pallete.base.button};
  color: ${(props) => props.theme.pallete.base.text};
  svg {
    color: ${(props) => props.theme.pallete.purple.main};
  }
  &:not(:disabled):hover {
    background: ${(props) => props.theme.pallete.base.hover};
  }
`

export const ButtonContainer = styled(ButtonBase)`
  ${(props) =>
    props.full === true &&
    `
      width: 100%;
    `}
  ${(props) =>
    props.variant === 'primary' &&
    `
    background: ${props.theme.pallete.purple.dark};
    color: ${props.theme.pallete.white};
    &:not(:disabled):hover {
      background-color: ${props.theme.pallete.purple.main};
      color: ${props.theme.pallete.white};
    }
    &:active {
      background-color: ${props.theme.pallete.purple.dark};
    }
  `}

  ${(props) =>
    props.variant === 'secondary' &&
    `
    padding: 0.75rem;
    display: block;
    background: ${props.theme.pallete.yellow.dark};
    color: ${props.theme.pallete.white};
    &:not(:disabled):hover {
      background-color: ${props.theme.pallete.yellow.main};
      color: ${props.theme.pallete.white};
    }
    &:active {
      background-color: ${props.theme.pallete.yellow.dark};
    }
  `}

  ${(props) =>
    props.variant === 'info' &&
    `
    text-transform: capitalize;
    background: ${props.theme.pallete.purple.light};
    color: ${props.theme.pallete.purple.dark};
    font-size: ${props.theme.typography.regular.sm};

    svg {
      fill: ${props.theme.pallete.purple.main};
    }
    &:not(:disabled):hover {
      background-color: ${props.theme.pallete.purple.main};
      color: ${props.theme.pallete.white};

      svg {
        fill: ${props.theme.pallete.white};
      }
    }
    &:active {
      background-color: ${props.theme.pallete.purple.dark};
    }
  `}
`

export const IconButton = styled(ButtonBase)`
  position: relative;
  ${(props) =>
    props.variant === 'primary' &&
    `
    background-color: ${props.theme.pallete.purple.dark};
    svg {
      color: ${props.theme.pallete.white};
    }
    &:not(:disabled):hover {
      background-color: ${props.theme.pallete.purple.main};
      color: ${props.theme.pallete.white};
    }
    &:active {
      background-color: ${props.theme.pallete.purple.dark};
    }
    `}

  ${(props) =>
    props.variant === 'secondary' &&
    `
    background: ${props.theme.pallete.yellow.light};

    svg {
      color: ${props.theme.pallete.yellow.dark};
    }
    &:not(:disabled):hover {
      background-color: ${props.theme.pallete.yellow.main};
      color: ${props.theme.pallete.yellow.light};
    }

    &:active {
      background-color: ${props.theme.pallete.yellow.light};
      color: ${props.theme.pallete.yellow.dark};
    }`}
`
