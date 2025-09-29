const VITE_API_URL = import.meta.env.VITE_API_URL;

export const getAllCursosQuery = async () => {
  try {
    const response = await fetch(`${VITE_API_URL}/cursos`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching cursos:', error)
    throw error
  }
}

export const getCursoQuery = async (cursoId: string) => {
  try {
    const response = await fetch(`${VITE_API_URL}/cursos/${cursoId}/lecciones`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching cursos:', error)
    throw error
  }
}

export const getPreguntasPorLeccionQuery = async (leccionId: string) => {
  try {
    const response = await fetch(`${VITE_API_URL}/lecciones/${leccionId}/preguntas`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching cursos:', error)
    throw error
  }
}

export const postRespuestaQuery = async (preguntaId: number, respuesta: string) => {
  try {
    const response = await fetch(`${VITE_API_URL}/evaluar`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        preguntaId,
        respuesta
      })
    })
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error posting respuesta:', error)
    throw error
  }
}