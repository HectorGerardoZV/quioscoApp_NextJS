
import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";
const Categoria = (props) => {
    const { categoria } = props;
    const { nombre, icono, id } = categoria
    const { handleClickCategoria,categoriaActual } = useQuiosco()


    const setCategoria = () => {
        handleClickCategoria(id)
    }
    return (
        <div className={`${categoriaActual?.id==id? "bg-amber-400": ""} flex items-center gap-4 w-full border p-5 hover:bg-amber-400 transition-all`}>
            <Image
                width={50}
                height={50}
                alt={"icono categoria"}
                src={`/assets/img/icono_${icono}.svg`}
            />
            <button className="text-2xl font-bold hover:cursor-pointer"
                onClick={setCategoria}
            >
                {nombre}
            </button>
        </div>
    )
}

export default Categoria