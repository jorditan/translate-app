import { createWithEqualityFn } from 'zustand/traditional'

interface CurrentState { 
    language: string;
    idioma: string;
    texto: string;
    textoTraducido: string,
    recibirTexto: (value: string) => void,
    cambiar: (value: string, idioma: string) => void;
    obtenerIdioma: () => void;
    obtenerTexto: () => void;
    obtenerLenguaje: () => void,
}

export const useCurrentLanguage = createWithEqualityFn<CurrentState> ((set, get) => ({
    texto: '',
    language: '',
    idioma: '',
    textoTraducido: '',
    obtenerIdioma : () =>  {
        const idiomaSeleccionado = get().idioma
        return idiomaSeleccionado
    },
    obtenerLenguaje : () =>  {
        const lenguajeSeleccionado = get().language
        return lenguajeSeleccionado;
    },
    obtenerTexto : () => {
        const textoEscrito = get().texto
        return textoEscrito
    },
    cambiar: (value: string, idioma:string) => set(state => ({
        language: value,
        idioma: idioma
    })),
    recibirTexto: (mensaje: string) => set(state => ({
        texto: mensaje,
    }))
}))


