import { useState, useEffect, createContext } from "react";
import { toast } from "react-toastify"
import axios from "axios";
const QuioscoContext = createContext();


const QuioscoProvider = ({ children }) => {
    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])


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
    const handleAgregarPedido = ({ categoriaId, ...producto }) => {
        if (pedido.some(productoPedido => productoPedido.id === producto.id)) {
            const pedidoActualizado = pedido.map(productoPedido => productoPedido.id == producto.id ? producto : productoPedido)
            setPedido(pedidoActualizado)
            toast.success("Actualizado correctamente")
        } else {
            setPedido([...pedido, producto])
            toast.success("Agregado al pedido")
        }
        setModal(false)
    }

    const handleEditarCantidad = (id) => {
        const producto = pedido.filter(productoItem => productoItem.id == id)[0];
        if (producto) {
            setProducto(producto)
            setModal(true)
        }

    }
    const handleEliminarProducto = (id) => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id)
        setPedido(pedidoActualizado)
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
                pedido,
                handleClickCategoria,
                handleClickProducto,
                handleChangeModal,
                handleAgregarPedido,
                handleEditarCantidad,
                handleEliminarProducto
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