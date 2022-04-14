import { useState, useEffect, createContext } from "react";
import axios from "axios";
const QuioscoContext = createContext();


const QuioscoProvider = ({ children }) => {
    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)


    const obtenerCategorias = async () => {
        try {
            const { data } = await axios.get("/api/categorias")
            setCategorias(data)
        } catch (error) {

        }
    }
    const handleClickCategoria = (id) => {
        const categoria = categorias.filter(categoriaAux => categoriaAux.id == id)[0];
        setCategoriaActual(categoria)
    }

    const handleClickProducto = (producto) => {
        setProducto(producto)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }
    useEffect(() => {
        obtenerCategorias();
    }, [])

    useEffect(() => {
        setCategoriaActual(categorias[0])
    }, [categorias])

    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                producto,
                modal,
                handleClickCategoria,
                handleClickProducto,
                handleChangeModal
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