import { useState, useEffect, createContext } from "react";
import axios from "axios";
const QuioscoContext = createContext();


const QuioscoProvider = ({ children }) => {
    const [categorias, setCategorias] = useState([])

    const obtenerCategorias = async () => {
        try {
            const { data } = await axios.get("/api/categorias")
            setCategorias(data)
        } catch (error) {

        }
    }

    useEffect(() => {
        obtenerCategorias();
    }, [])

    return (
        <QuioscoContext.Provider
            value={{
                categorias
            }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}


export {
    QuioscoProvider
}

export default QuioscoContext