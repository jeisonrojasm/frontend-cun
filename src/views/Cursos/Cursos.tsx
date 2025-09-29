import { useContext, useEffect } from 'react'
import { getAllCursosQuery } from '../../utils/queries'
import { DataContext } from '../../context/DataContext'
import { onVerCursoClick } from './CursosFunctions'
import { useNavigate } from 'react-router-dom'
import './Cursos.css'

export const Cursos = () => {
  const dataContext = useContext(DataContext)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCursos = async () => {
      const cursos = await getAllCursosQuery()
      dataContext?.setData({ ...dataContext?.data, cursos })
    }
    fetchCursos()
  }, [])

  return (
    <div>
      <h1 className='cursos__title'>Cursos Disponibles</h1>
      <div className='cursos__list'>
        {
          dataContext?.data.cursos.map((curso) => (
            <div key={curso.id} className='cursos__card'>
              <div>
                <h2 className='cursos__subtitle'>{curso.nombre}</h2>
                <p className='cursos__text'>{curso.descripcion}</p>
              </div>
              <div className='cursos__btn-container'>
                <button
                  onClick={() => onVerCursoClick(curso.id, dataContext, navigate)}
                  className='cursos__btn'
                >
                  Ver Curso
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
