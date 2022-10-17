const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
import 'dotenv/config';
const password = process.env.ADMIN_PASSWORD;
const email = process.env.ADMIN_EMAIL;
const bcrypt = require("bcrypt");

async function main() {
    await prisma.user.create({
        data: {
            role: "ADMIN",
            username: "Clemy",
            email: email,
            password: await bcrypt.hash(password, 10),
            dateOfBirth: new Date("1994-05-21"),
        },
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async() => {
        await prisma.$disconnect();
    });