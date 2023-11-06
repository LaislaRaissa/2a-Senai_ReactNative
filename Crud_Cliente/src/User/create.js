import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.user.create({
        // data: {
        //     name: "Junior",
        //     full_name: "Juniorenem",
        //     cpf: 7777,
        //     address: "jovem"
        // },
        // data: {
        //     name: "Maria",
        //     full_name: "Maria do enem",
        //     cpf: 8888,
        //     address: "iee"
        // },
        data: {
            name: "Junin",
            full_name: "Junin dos enem",
            cpf: 9999,
            address: "cesusc"
        },
    });

    console.log(result);

}

main();