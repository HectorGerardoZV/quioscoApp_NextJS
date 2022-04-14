import {PrismaClient} from "@prisma/client"

export default async (req,res)=>{
    try {
        checkMethod(req,res)
    } catch (error) {
        
    }
} 


const checkMethod = (req,res)=>{
    try {
        if(req.method=="GET"){
            consulta(req,res)
        }else if(req.method = "POST"){
            insertar(req,res)
        }

    } catch (error) {
        
    }
}
const consulta = async(req,res)=>{
    try {
        res.json({msg: "Consultado"})
    } catch (error) {
        
    }
}
const insertar = async(req,res)=>{
    const prisma = new PrismaClient()
    try {
        const {body} = req;
        const {nombre, total,pedido,fecha} = body

       
        const orden = await prisma.orden.create({
            data:{
                nombre,
                total, 
                pedido,
                fecha
            }
        })


        if(!orden){
            return res.status(500).json({msg: "No se pudo agregar el pedido"})
        }
        res.status(200).json({msg: "Se agrego el pedido"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: "No se pudo agregar el pedido"})
    }
}