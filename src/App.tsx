import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { DataProvider } from './context/DataContext'
import { Cursos } from './views/Cursos/Cursos'
import { MainLayout } from './components/MainLayout/MainLayout'
import { Lecciones } from './views/Lecciones/Lecciones'
import { Evaluacion } from './views/Evaluacion/Evaluacion'

function App() {

  return (
    <>
      <DataProvider>
        <div className="app">
          <Routes>
            <Route path="/" element={<Navigate to="/cursos" replace />} />
            <Route path="/cursos" element={<MainLayout />}>
              <Route index element={<Navigate to="todos-los-cursos" replace />} />
              <Route path="todos-los-cursos" element={<Cursos />} />
              <Route path="todos-los-cursos/:id/lecciones" element={<Lecciones />} />
              <Route path="todos-los-cursos/:id/lecciones/:leccionId/evaluacion" element={<Evaluacion />} />
            </Route>
          </Routes>
        </div>
      </DataProvider>
    </>
  )
}

export default App
