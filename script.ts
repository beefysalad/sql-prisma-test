import { PrismaClient } from '@prisma/client'
import { log } from 'console'
const prisma = new PrismaClient()

async function main(){
    const user = await prisma.user.create({data:{name:'John'}})
    // const user = await prisma.user.findUnique({where:{name:'John'}})));
    log(user)
}
main()
.catch(e=>{
    console.error(e.message)
})
.finally(async()=>{
    await prisma.$disconnect()
})