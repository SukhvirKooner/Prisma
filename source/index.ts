import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(email:string, password: string, firstName: string, lastName: string) {
  const res = await prisma.user.create({
    data:{
        email,
        firstName,
        lastName,
        Password:password
    },
    select:{
        id:true,
        Password:true
    }
  })
  console.log(res); 
  
}


async function getUser(){
 const res = await prisma.user.findFirst({
    where:{}
 })
 console.log(res);

}
getUser();
