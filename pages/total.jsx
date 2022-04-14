import Layout from "../layout/Layout"
import { formatearDinero } from "../helpers/helpers"
import useQuiosco from "../hooks/useQuiosco"

const total = () => {
    const { pedido, handleInputNombre, nombreCliente, handelAgregarOrden, total } = useQuiosco()


    const agregarOrden = (e) => {
        e.preventDefault()
        handelAgregarOrden()

    }

    const writeNombreCliente = (e) => {
        handleInputNombre(e.target.value)
    }

    return (
        <Layout pagina={"Confirmar-Pedido"}>
            <h1 className="text-4xl font-black">Total y confirma tu pedido</h1>
            <p className="text-2xl my-10">Confirma tu pedido a continuación</p>


            <form
                onSubmit={agregarOrden}
            >
                <div>
                    <label htmlFor="nombre" className="block uppercase text-slate-700
                    font-bold text-xl">Nombre</label>
                    <input id="nombre" type="text" className="bg-gray-200 w-full lg:w-1/3 
                    p-2 rounded-md outline-none text-xl font-bold  text-slate-700"
                        onInput={writeNombreCliente}
                        value={nombreCliente}
                    />
                </div>

                <div className="mt-10">
                    <p className="text-2xl">
                        Total a pagar: <span className="font-bold">{`${formatearDinero(total)}`}</span>
                    </p>
                </div>

                <div className="mt-5">
                    <input type="submit"
                        className={`w-full lg:w-auto px-5 py-2 rounded font-bold 
                        text-white bg-indigo-600 transition-all hover:bg-indigo-800 cursor-pointer
                        ${pedido.length == 0 ? "bg-gray-300 cursor-no-drop hover:bg-gray-300" : ""}
                        `}
                        value={"Confirmar pedido"}
                        disabled={pedido.length == 0 ? true : false}

                    />
                </div>
            </form>
        </Layout>
    )
}

export default total