import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'
import { Home, Checkout, Success } from './pages'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
