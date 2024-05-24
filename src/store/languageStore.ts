import { createWithEqualityFn } from 'zustand/traditional'

interface CurrentState { 
    language: string;
    idioma: string;
    texto: string;
    textoTraducido: string,
    recibirTexto: (value: string) => void,
    cambiar: (value: string, idioma: string) => void;
    obtenerIdioma: () => string;
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
    cambiar: (language:string, idioma:string) => set(({
        idioma: idioma,
        language: language,
    })),
    recibirTexto: (mensaje: string) => set(({
        texto: mensaje,
    }))
}))