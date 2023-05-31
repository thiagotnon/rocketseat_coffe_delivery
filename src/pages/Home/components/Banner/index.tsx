import { Typography } from '../../../../components'
import {
  BannerContainer,
  BannerContent,
  BannerTopicsList,
  BannerTopicsListItem,
  Icon,
} from './styles'

interface TopicsProps {
  icon: JSX.Element
  label: string
  color: string
}

interface BannerProps {
  title: string
  subtitle: string
  img: string
  topics: TopicsProps[]
}
export const Banner = ({ title, subtitle, img, topics }: BannerProps) => {
  return (
    <BannerContainer>
      <BannerContent>
        <header>
          <Typography as="h1" size="header-xl">
            {title}
          </Typography>
          <Typography as="p" size="regular-lg">
            {subtitle}
          </Typography>
          <BannerTopicsList>
            {topics.map((topic) => (
              <BannerTopicsListItem key={topic.label}>
                <Icon color={topic.color}>{topic.icon}</Icon>
                <Typography as="span">{topic.label}</Typography>
              </BannerTopicsListItem>
            ))}
          </BannerTopicsList>
        </header>
        <img
          src={img}
          alt="Imagem de um copo de café com alguns grãos e pó de café na composição da imagem."
        />
      </BannerContent>
    </BannerContainer>
  )
}
