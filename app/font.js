import { Roboto } from 'next/font/google' // Utilizamos la dependencia de las fuentes de GOOGLE

// Seleccionamos los tipos de fuentes
export const font = Roboto({
    subsets: ['latin-ext'],
    weight: ['400','700']
  })