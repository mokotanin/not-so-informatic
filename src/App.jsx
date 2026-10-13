import { lazy, Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { IntroScreen } from "@/components/IntroScreen"

const ExplorerPage = lazy(() =>
  import("@/pages/ExplorerPage").then(({ ExplorerPage }) => ({
    default: ExplorerPage,
  })),
)

function App() {
  return (
    <Routes>
      <Route path="/" element={<IntroScreen />} />
      <Route
        path="/explorer"
        element={
          <Suspense fallback={null}>
            <ExplorerPage />
          </Suspense>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
