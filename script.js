const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

function repeat(value, times) {
  const result = [];
  for (let i = 0; i < times; i++) {
    result.push(value);
  }
  return result;
}

async function main() {

    const invId = 123
    const allIds = repeat(invId, 100)

    const getOne = async (id) => {
        const metrics = (await prisma.$metrics.json())
        //console.log(metrics)
        const data = await prisma.user.findFirst({ where: { id }})
        console.log({ data })
        return data
    }

    console.log('FETCHING')

    const allProms = await Promise.all(allIds.map(getOne))

    console.log('ALL PROMS', allProms.length)

    const metrics = (await prisma.$metrics.json())
    console.log(metrics)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })