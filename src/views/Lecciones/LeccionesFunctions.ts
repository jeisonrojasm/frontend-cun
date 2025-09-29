import { getPreguntasPorLeccionQuery } from "../../utils/queries"

export const onIniciarEvaluacionClick = async (leccionId: string, dataContext: any, navigate: any) => {
  const preguntas = await getPreguntasPorLeccionQuery(leccionId)
  dataContext?.setData({ ...dataContext?.data, preguntas })
  navigate(`./${leccionId}/evaluacion`)
}
