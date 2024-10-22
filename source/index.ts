import { PrismaClient } from "@prisma/client";
import { get } from "http";

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

interface updatePara {
    firstName:string,
    lastName:string
}
async function updateUser (email:string,{firstName ,lastName}:updatePara){
        const res = await prisma.user.update({
            where:{
                email:email
            },
            data:{
                firstName,
                lastName
            }
        })
        console.log(res);
}
// updateUser("sukhvir@gmail.com",{
//     firstName:"Honey" ,
//     lastName:"Singh"
// });
// getUser();