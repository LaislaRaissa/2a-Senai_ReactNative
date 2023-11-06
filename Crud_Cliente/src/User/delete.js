import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.user.delete({
        where: {
            id: 'c5ee09e6-d166-4152-85f8-1cb1c0fd1c6c',
        },
    });

    console.log(result);

}

main();