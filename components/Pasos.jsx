import { useRouter } from "next/router"
import useQuiosco from "../hooks/useQuiosco";

const pasos = [
    { paso: 1, nombre: "Menú", url: "/" },
    { paso: 2, nombre: "Resumen", url: "/resumen" },
    { paso: 3, nombre: "Datos y Total", url: "/total" }
]
const Pasos = () => {
    const router = useRouter();
    const goTo = (url,paso) => {
        router.push(url);
    }

    const calcularProgreso = ()=>{
        let porcentaje = 0;
        if(router.pathname=="/"){
            porcentaje = 10
        }else if(router.pathname=="/resumen"){
            porcentaje = 50
        }
        else {
            porcentaje = 100
        }
        return porcentaje
    }

    return (
        <>
            <div className="flex justify-between mb-10">

                {
                    pasos.map(paso => (
                        <button key={paso.paso}
                            className={"text-2xl font-bold"}
                            onClick={() => goTo(paso.url, paso.paso)}
                        >
                            {paso.nombre}
                        </button>
                    ))
                }
            </div>

            <div className="bg-gray-200 mb-10">
                <div className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white"
                style={{width: `${calcularProgreso()}%`}}
                >

                </div>
            </div>
        </>
    )
}

export default Pasos