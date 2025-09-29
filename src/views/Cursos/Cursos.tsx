import { useContext, useEffect, useState } from 'react'
import { getAllCursosQuery } from '../../utils/queries'
import { DataContext } from '../../context/DataContext'
import { onVerCursoClick } from './CursosFunctions'
import { useNavigate } from 'react-router-dom'

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
      <h1>Cursos Disponibles</h1>
      {
        dataContext?.data.cursos.map((curso) => (
          <div key={curso.id}>
            <div>
              <h2>{curso.nombre}</h2>
              <p>{curso.descripcion}</p>
            </div>
            <div>
              <button onClick={() => onVerCursoClick(curso.id, dataContext, navigate)}>
                Ver Curso
              </button>
            </div>
          </div>
        ))
      }
    </div>
  )
}
