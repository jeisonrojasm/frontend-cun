import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import { onIniciarEvaluacionClick } from './LeccionesFunctions'
import { useNavigate } from 'react-router-dom'
import './Lecciones.css'

export const Lecciones = () => {
  const navigate = useNavigate()
  const dataContext = useContext(DataContext)
  return (
    <div>
      <h1 className='lecciones__title'>Lecciones del Curso</h1>
      <div className='lecciones__list'>
        {
          dataContext?.data.lecciones.map((leccion) => (
            <div key={leccion.id} className='lecciones__card'>
              <p className='lecciones__subtitle'>{leccion.nombre}</p>
              <div className='lecciones__btn-container'>
                <button
                  onClick={() => onIniciarEvaluacionClick(leccion.id, dataContext, navigate)}
                  className='lecciones__btn'
                >
                  Iniciar evaluación
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
