import { createWithEqualityFn } from 'zustand/traditional'

interface CurrentState { 
    language: string;
    idioma: string;
    texto: string;
    respuesta: string;
    recibirTexto: (value: string) => void,
    recibirRespuesta: (value:string) => void,
    cambiar: (value: string, idioma: string) => void;
    obtenerIdioma: () => string;
    obtenerTexto: () => string;
    obtenerLenguaje: () => void,
    obtenerRespuesta: () => string,
}

export const useCurrentLanguage = createWithEqualityFn<CurrentState> ((set, get) => ({
    respuesta: '',
    texto: '',
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
    obtenerTexto : () => {
        const textoEscrito = get().texto
        return textoEscrito
    },
    obtenerRespuesta : () => {
        const respuesta = get().respuesta
        return respuesta
    },
    cambiar: (language:string, idioma:string,) => set(({
        idioma: idioma,
        language: language,
    })),
    recibirTexto: (mensaje: string) => set(({
        texto: mensaje,
    })),
    recibirRespuesta: (mensaje: string) => set(({
        respuesta: mensaje,
    })),
}))