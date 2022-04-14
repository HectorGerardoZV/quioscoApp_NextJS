import {PrismaClient} from "@prisma/client"


export default async (req,res)=>{
    try {
        const prisma = new PrismaClient();
        const categorias = await prisma.categoria.findMany({
            include:{
                productos: true
            }
        });
        res.status(200).json(categorias)
    } catch (error) {
        res.status(500).json({msg: "Error while querying categories"})
    }
}