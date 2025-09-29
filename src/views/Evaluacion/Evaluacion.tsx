import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataContext'
import './Evaluacion.css'
import { handleResponder } from './EvaluacionFunctions'
import { useNavigate } from 'react-router-dom'

export const Evaluacion = () => {
  const dataContext = useContext(DataContext)
  const preguntas = dataContext?.data.preguntas || []
  const navigate = useNavigate()

  const [currentIndex, setCurrentIndex] = useState(0) // índice de la pregunta actual
  const [respuesta, setRespuesta] = useState<string | null>(null)
  const [resultado, setResultado] = useState<string | null>(null)

  useEffect(() => {
    if (currentIndex >= preguntas.length && preguntas.length > 0) {
      const timeout = setTimeout(() => {
        navigate('/cursos')
      }, 2000)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, preguntas.length, navigate])

  if (preguntas.length === 0) {
    return <p className='evaluacion__subtitle'>No hay preguntas disponibles.</p>
  }

  const currentPregunta = preguntas[currentIndex]

  return (
    <div className='evaluacion'>
      {currentIndex < preguntas.length ? (
        <div className='evaluacion__preguntas'        >
          <h2 className='evaluacion__subtitle'>{currentPregunta.enunciado}</h2>
          <ul className='preguntas__lista'>
            {currentPregunta.opciones.map((opcion: any, index: number) => (
              <li key={index} className='pregunta__text'>
                <button
                  onClick={() => handleResponder(opcion, setRespuesta, setResultado, setCurrentIndex, currentPregunta)}
                  disabled={respuesta !== null} // deshabilita botones después de responder
                  className='pregunta__responder-btn'
                  style={{
                    backgroundColor:
                      respuesta === opcion
                        ? opcion === currentPregunta.respuestaCorrecta
                          ? "#c8f7c5" // verde si correcto
                          : "#f7c5c5" // rojo si incorrecto
                        : "white",
                  }}
                >
                  {opcion}
                </button>
              </li>
            ))}
          </ul>
          {resultado && (
            <p className='pregunta__resultado'>
              {resultado}
            </p>
          )}
        </div>
      ) : (
        <h2 className='evaluacion__subtitle evaluacion__completed'>🎊 Evaluación completada 🎊</h2>
      )}
    </div>
  )
}
