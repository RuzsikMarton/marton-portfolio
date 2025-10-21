import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ResourcePage from './pages/ResourcePage'
import LocaleWrapper from './components/LocaleWrapper'

function App() {

  return (
      <Routes>
        <Route path="/" element={<LocaleWrapper><Home /></LocaleWrapper>} />
        <Route path="/:lang" element={<LocaleWrapper><Home /></LocaleWrapper>} />
        <Route path="/:lang/resume" element={<LocaleWrapper><ResourcePage /></LocaleWrapper>} />
        {/* 404 - Catch all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
  )
}

export default App
