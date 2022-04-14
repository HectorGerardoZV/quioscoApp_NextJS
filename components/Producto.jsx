import Image from "next/image"
import { formatearDinero } from "../helpers/helpers"


const Producto = (props) => {
    const { producto } = props
    const { nombre, imagen, precio } = producto
    return (
        <div className='border p-3'>
            <Image
                width={300}
                height={400}
                alt={"Imagen producto"}
                src={`/assets/img/${imagen}.jpg`}
            />

            <div className="p-5">
                <h3 className="text-2xl font-bold">
                    {nombre}
                </h3>
                <p className="mt-5 font-black text-4xl text-amber-500">
                    {formatearDinero(precio)}
                </p>
            </div>


        </div>
    )
}

export default Producto