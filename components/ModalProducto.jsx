import Image from "next/image"
import { useState } from "react"
import useQuiosco from "../hooks/useQuiosco"
import { formatearDinero } from "../helpers/helpers"

const ModalProducto = () => {
    const { producto, handleChangeModal } = useQuiosco()
    const { nombre, precio, imagen } = producto
    const [cantidad, setCantidad] = useState(1)


    const closeModal = () => {
        handleChangeModal()
    }
    const sumaCantidad = () => {
        setCantidad(cantidad + 1)
    }
    const restaCantidad = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <div className="md:flex gap-10">
            <div className="md:w-1/3">
                <Image
                    width={300}
                    height={400}
                    alt={`Imagen Producto-${nombre}`}
                    src={`/assets/img/${imagen}.jpg`}
                />
            </div>
            <div className="md:w-2/3">
                <div className="flex justify-end">
                    <button
                        onClick={closeModal}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <h1 className="text-3xl font-blold mt-5">{nombre}</h1>
                <p className="mt-5 font-black text-5xl text-amber-500">
                    {formatearDinero(precio)}
                </p>

                <div className="flex gap-4 mt-5">
                    <button
                        onClick={restaCantidad}
                    >
                        <Image
                            width={35}
                            height={35}
                            alt={"Boton Menos"}
                            src={"/assets/img/menos.svg"}
                        />
                    </button>

                    <p className="text-3xl font-black">{cantidad}</p>

                    <button
                        onClick={sumaCantidad}
                    >
                        <Image
                            width={35}
                            height={35}
                            alt={"Boton Menos"}
                            src={"/assets/img/mas.svg"}
                        />
                    </button>

                </div>

                <button className="bg-indigo-600 hover:bg-indigo-800 
                px-5 py-2 mt-2 text-white font-bold rounded">
                    Agregar al pedido
                </button>


            </div>
        </div>
    )
}

export default ModalProducto