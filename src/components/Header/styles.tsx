import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2rem 0.5rem;

  background: ${(props) => props.theme.pallete.background};

  display: flex;
  align-items: center;
  justify-content: center;

  position: sticky;
  z-index: 99999;
  top: 0;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 70rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const NavBlock = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0.75rem;
`

export const LocationBlock = styled.div`
  background: ${(props) => props.theme.pallete.purple.light};
  color: ${(props) => props.theme.pallete.purple.main};
  span {
    color: ${(props) => props.theme.pallete.purple.dark};
  }
  border-radius: 6px;
  padding: 0.5rem;
  gap: 0.2em;
  flex: 1;
  display: flex;
  width: 100%;
  align-items: center;
`
