import { Navigate, Route, Routes } from "react-router-dom"
import { ExplorerPage } from "@/pages/ExplorerPage"
import { IntroScreen } from "@/components/IntroScreen"

function App() {
  return (
    <Routes>
      <Route path="/" element={<IntroScreen />} />
      <Route path="/explorer" element={<ExplorerPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
