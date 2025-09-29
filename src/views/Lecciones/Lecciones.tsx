import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import { onIniciarEvaluacionClick } from './LeccionesFunctions'
import { useNavigate } from 'react-router-dom'

export const Lecciones = () => {
  const navigate = useNavigate()
  const dataContext = useContext(DataContext)
  return (
    <div>
      <h1>Lecciones del Curso</h1>
      {
        dataContext?.data.lecciones.map((leccion) => (
          <div key={leccion.id}>
            <p>{leccion.nombre}</p>
            <button onClick={() => onIniciarEvaluacionClick(leccion.id, dataContext, navigate)}>
              Iniciar evaluación
            </button>
          </div>
        ))
      }
    </div>
  )
}
