import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function InsertPrisma() {
    try{
        const res = await prisma.user.create({
            data :{
                username: "user1",
                email: "user1@gmail.com",
                password: "user1password",
                firstName: "user1First",
                lastName: "user1Last",
                id: 1
            }
        });
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}

InsertPrisma();