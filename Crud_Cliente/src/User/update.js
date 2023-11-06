import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.user.update({
       where: {
        id: 'd9c2014b-8f8e-4aff-9260-43a6f2701c5d',
       },
       data: {
        name: 'Tristeza',
        full_name: 'Tristeza no enem',
        cpf: 4444,
        address: 'Santa maria - 123'
       },
    });

    console.log(result);

}

main();