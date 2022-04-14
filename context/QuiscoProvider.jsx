import { useState, useEffect, createContext } from "react";
import {useRouter} from "next/router"
import { toast } from "react-toastify"
import axios from "axios";
const QuioscoContext = createContext();


const QuioscoProvider = ({ children }) => {
    const router = useRouter();
    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])
    const [nombreCliente, setNombrecliente] = useState("")
    const [total, setTotal] = useState(0);

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
    const handleInputNombre = (nombre)=>{
        setNombrecliente(nombre)
    }

    const handelAgregarOrden = async()=>{
        try {
            const {data} =await axios.post("/api/ordenes",
            {pedido,nombre: nombreCliente,total,fecha:Date.now().toString()})
            toast.success(data.msg, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })

            setCategoriaActual(categorias[0])
            setPedido([])
            setTotal(0)
            setNombrecliente("")
            setTimeout(() => {
                router.push('/')
            }, 3000);
        } catch (error) {
            
        }
    }

    useEffect(() => {
        obtenerCategorias();
    }, [])
    useEffect(() => {
        setCategoriaActual(categorias[0])
    }, [categorias])

    useEffect(()=>{
        const newTotal = pedido.reduce((totalAux, producto)=>(producto.precio*producto.cantidad)+totalAux,0)
        setTotal(newTotal)
    },[pedido])
    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                producto,
                modal,
                pedido,
                nombreCliente,
                total,
                handleClickCategoria,
                handleClickProducto,
                handleChangeModal,
                handleAgregarPedido,
                handleEditarCantidad,
                handleEliminarProducto,
                handleInputNombre,
                handelAgregarOrden
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