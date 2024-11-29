import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function resetDb(){
    await prisma.$transaction([
        prisma.request.deleteMany()
    ])
}