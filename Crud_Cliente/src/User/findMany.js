import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.user.findMany({
        where: {
            name: {
                equals: 'Tristeza'
            }
        },
    });

    console.log(result);

}

main();