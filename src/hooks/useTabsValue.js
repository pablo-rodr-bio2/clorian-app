import { useLocation } from "react-router-dom"

export const useTabsValue = () => {
  const location = useLocation()

  if (location.pathname.startsWith('/product/')) {
    return'/'
  }

  return location.pathname
}