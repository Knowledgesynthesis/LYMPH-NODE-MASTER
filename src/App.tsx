import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { Anatomy } from './pages/modules/Anatomy'
import { Reactive } from './pages/modules/Reactive'
import { Hodgkin } from './pages/modules/Hodgkin'
import { BCell } from './pages/modules/BCell'
import { TCell } from './pages/modules/TCell'
import { Flow } from './pages/modules/Flow'
import { IHC } from './pages/modules/IHC'
import { Molecular } from './pages/modules/Molecular'
import { Pitfalls } from './pages/modules/Pitfalls'
import { Reporting } from './pages/modules/Reporting'
import { Cases } from './pages/modules/Cases'
import { Assessment } from './pages/Assessment'
import { Settings } from './pages/Settings'
import { useThemeStore } from './store/themeStore'

function App() {
  const { theme } = useThemeStore()

  useEffect(() => {
    // Initialize theme on mount
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="anatomy" element={<Anatomy />} />
          <Route path="reactive" element={<Reactive />} />
          <Route path="hodgkin" element={<Hodgkin />} />
          <Route path="bcell" element={<BCell />} />
          <Route path="tcell" element={<TCell />} />
          <Route path="flow" element={<Flow />} />
          <Route path="ihc" element={<IHC />} />
          <Route path="molecular" element={<Molecular />} />
          <Route path="pitfalls" element={<Pitfalls />} />
          <Route path="reporting" element={<Reporting />} />
          <Route path="cases" element={<Cases />} />
          <Route path="assessment" element={<Assessment />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
