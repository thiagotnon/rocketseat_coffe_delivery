import styled from 'styled-components'

export const ProductsContainer = styled.div`
  width: 100%;
  max-width: 70rem;
  padding: 2rem 1rem;
`

export const ProductsList = styled.div`
  margin-top: 3.375rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
