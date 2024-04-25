import { create } from 'zustand'

interface CurrentState { 
    language: string;
    idioma: string;
    cambiar: (value: string, idioma: string) => void;
    obtenerIdioma: () => void;
}

export const useCurrentLanguage = create<CurrentState> ((set, get) => ({
    language: '',
    idioma: '',
    obtenerIdioma : () =>  {
        const idiomaSeleccionado = get().idioma
        return idiomaSeleccionado
    },
    obtenerLenguaje : () =>  {
        const lenguajeSeleccionado = get().language
        return lenguajeSeleccionado;
    },
    cambiar: (value: string, idioma:string) => set(state => ({
        language: value,
        idioma: idioma
    }))
}))


