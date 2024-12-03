import { Suspense } from "react"
import SkeletonRoot from "../SkeletonRoot/SkeletonRoot"

const SuspenseWrapper = ({ children }) => (
  <Suspense fallback={<SkeletonRoot />}>
    {children}
  </Suspense>
)

export default SuspenseWrapper