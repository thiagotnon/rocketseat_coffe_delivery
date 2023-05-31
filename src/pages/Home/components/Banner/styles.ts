import styled from 'styled-components'
import bannerBgImg from '../../../../assets/img/banner_bg.svg'

export const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5.875rem 1rem;
  background: url(${bannerBgImg}) no-repeat center / cover;
`

export const BannerContent = styled.div`
  width: 100%;
  max-width: 70rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 769px) and (max-width: 1200px) {
    flex-direction: row;
  }

  header {
    width: 100%;
    max-width: 37rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    h1 {
      margin-bottom: 1rem;
      color: ${(props) => props.theme.pallete.base.title};
    }
    p {
      margin-bottom: 4.125rem;
      color: ${(props) => props.theme.pallete.base.subtitle};
    }
  }
`

export const BannerTopicsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0rem;
  grid-row-gap: 1.25rem;
  justify-content: start;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const BannerTopicsListItem = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  p {
    color: ${(props) => props.theme.pallete.base.text};
  }
`

export const Icon = styled.div`
  border-radius: 50%;
  min-width: 2rem;
  min-height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  font-size: 1rem;
  color: ${(props) => props.theme.pallete.white};
  ${(props) =>
    props.color === 'yellow-dark' &&
    `
    background: ${props.theme.pallete.yellow.dark}
  `};
  ${(props) =>
    props.color === 'base-text' &&
    `
    background: ${props.theme.pallete.base.text}
  `};
  ${(props) =>
    props.color === 'yellow' &&
    `
    background: ${props.theme.pallete.yellow.main}
  `};
  ${(props) =>
    props.color === 'purple' &&
    `
    background: ${props.theme.pallete.purple.main}
  `};
`
