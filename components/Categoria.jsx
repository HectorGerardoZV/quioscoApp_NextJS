
import Image from "next/image";

const Categoria = (props) => {
    const { categoria } = props;
    const { nombre, icono, id } = categoria
    return (
        <div className="flex items-center gap-4 w-full border p-5 hover:bg-amber-400 transition-all">
            <Image
                width={50}
                height={50}
                alt={"icono categoria"}
                src={`/assets/img/icono_${icono}.svg`}
            />
            <button className="text-2xl font-bold hover:cursor-pointer">
                {nombre}
            </button>
        </div>
    )
}

export default Categoria