import { BadgeBox } from './styles'

interface BadgeProps {
  value: number
}
export const Badge = ({ value }: BadgeProps) => {
  return <BadgeBox>{value}</BadgeBox>
}
