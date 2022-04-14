import Image from "next/image"
import { formatearDinero } from "../helpers/helpers"
import useQuiosco from "../hooks/useQuiosco"

const ResumenProducto = (props) => {

    const { handleEditarCantidad, handleEliminarProducto } = useQuiosco()
    const { producto } = props
    const { nombre, cantidad, precio, imagen } = producto
    const setProducto = () => {
        handleEditarCantidad(producto.id)
    }

    const quitarProducto = () => {
        handleEliminarProducto(producto.id)
    }

    return (
        <div className="shadow p-5 mb-3 flex gap-10 items-center">
            <div className="md:w-1/6">
                <Image
                    width={250}
                    height={300}
                    alt={`imagen producto - ${nombre}`}
                    src={`/assets/img/${imagen}.jpg`}
                />
            </div>
            <div className="md:w-4/6">
                <p className="text-3xl font-bold">{nombre}</p>
                <p className="text-2xl font-bold mt-2">Cantidad: {cantidad}</p>
                <p className="text-2xl font-bold text-amber-500 mt-2">Precio: {formatearDinero(precio)}</p>
                <p className="text-2xl font-bold text-gray-500 mt-2">SubTotal: {formatearDinero(precio * cantidad)}</p>
            </div>

            <div>
                <button className="
                bg-sky-600 flex px-5 py-2 
                text-white rounded font-bold uppercase shadow-md
                w-full "
                    onClick={setProducto}
                >
                    Editar
                </button>
                <button className="
                bg-red-600 flex px-5 py-2 
                text-white rounded font-bold uppercase shadow-md
                w-full text-center mt-3"
                    onClick={quitarProducto}
                >
                    Eliminar
                </button>
            </div>

        </div>
    )
}

export default ResumenProducto