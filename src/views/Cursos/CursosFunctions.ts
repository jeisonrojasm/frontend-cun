import type { NavigateFunction } from "react-router-dom"
import type { DataContextType } from "../../context/DataContextTypes"
import { getCursoQuery } from "../../utils/queries"

export const onVerCursoClick = async (cursoId: string, dataContext: DataContextType, navigate: NavigateFunction) => {
  const lecciones = await getCursoQuery(cursoId)
  dataContext?.setData({ ...dataContext?.data, lecciones })
  navigate(`./${cursoId}/lecciones`)
}