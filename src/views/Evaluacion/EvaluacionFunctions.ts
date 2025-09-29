import type { SetStateAction } from "react"
import { postRespuestaQuery } from "../../utils/queries";

export const handleResponder = async (
  opcion: string,
  setRespuesta: { (value: SetStateAction<string | null>): void; (arg0: string | null): void },
  setResultado: { (value: SetStateAction<string | null>): void; (arg0: string | null): void },
  setCurrentIndex: { (value: SetStateAction<number>): void; (arg0: (prev: number) => number): void }, currentPregunta: {
    id: number; respuestaCorrecta: string
  }
) => {
  const respuesta = await postRespuestaQuery(currentPregunta.id, opcion)

  setRespuesta(opcion)
  setResultado(respuesta.correcta ? "Correcto" : "Incorrecto")

  // después de 1.5s pasa a la siguiente
  setTimeout(() => {
    setRespuesta(null)
    setResultado(null)
    setCurrentIndex((prev: number) => prev + 1)
  }, 1500)
}