import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: "CPU",
        slug: "cpu",
        description: "Processors",
      },
    }),
    prisma.category.create({
      data: {
        name: "Motherboard",
        slug: "motherboard",
        description: "Mainboards",
      },
    }),
    prisma.category.create({
      data: {
        name: "GPU",
        slug: "gpu",
        description: "Graphics Cards",
      },
    }),
    prisma.category.create({
      data: {
        name: "RAM",
        slug: "ram",
        description: "Memory",
      },
    }),
    prisma.category.create({
      data: {
        name: "SSD",
        slug: "ssd",
        description: "Storage",
      },
    }),
    prisma.category.create({
      data: {
        name: "PSU",
        slug: "psu",
        description: "Power Supplies",
      },
    }),
  ]);

  const categoryMap = Object.fromEntries(categories.map((c) => [c.slug, c]));

  await prisma.product.createMany({
    data: [
      // CPUs
      {
        categoryId: categoryMap.cpu.id,
        name: "AMD Ryzen 5 7600",
        brand: "AMD",
        model: "7600",
        socket: "AM5",
        price: 7990,
      },
      {
        categoryId: categoryMap.cpu.id,
        name: "AMD Ryzen 7 7800X3D",
        brand: "AMD",
        model: "7800X3D",
        socket: "AM5",
        price: 14990,
      },
      {
        categoryId: categoryMap.cpu.id,
        name: "AMD Ryzen 9 9900X",
        brand: "AMD",
        model: "9900X",
        socket: "AM5",
        price: 18990,
      },
      {
        categoryId: categoryMap.cpu.id,
        name: "Intel Core i5-14600KF",
        brand: "Intel",
        model: "14600KF",
        socket: "LGA1700",
        price: 10490,
      },
      {
        categoryId: categoryMap.cpu.id,
        name: "Intel Core i7-14700KF",
        brand: "Intel",
        model: "14700KF",
        socket: "LGA1700",
        price: 14990,
      },

      // Motherboards
      {
        categoryId: categoryMap.motherboard.id,
        name: "MSI B650M Gaming Plus",
        brand: "MSI",
        socket: "AM5",
        memoryType: "DDR5",
        formFactor: "mATX",
        price: 4990,
      },
      {
        categoryId: categoryMap.motherboard.id,
        name: "ASRock B650M Pro RS",
        brand: "ASRock",
        socket: "AM5",
        memoryType: "DDR5",
        formFactor: "mATX",
        price: 4590,
      },
      {
        categoryId: categoryMap.motherboard.id,
        name: "Gigabyte B650 Aorus Elite",
        brand: "Gigabyte",
        socket: "AM5",
        memoryType: "DDR5",
        formFactor: "ATX",
        price: 6990,
      },
      {
        categoryId: categoryMap.motherboard.id,
        name: "ASUS TUF B760M",
        brand: "ASUS",
        socket: "LGA1700",
        memoryType: "DDR5",
        formFactor: "mATX",
        price: 4590,
      },
      {
        categoryId: categoryMap.motherboard.id,
        name: "MSI PRO Z790-P",
        brand: "MSI",
        socket: "LGA1700",
        memoryType: "DDR5",
        formFactor: "ATX",
        price: 7990,
      },

      // GPUs
      {
        categoryId: categoryMap.gpu.id,
        name: "GeForce RTX 4060",
        brand: "NVIDIA",
        model: "RTX 4060",
        wattage: 115,
        recommendedPsu: 550,
        gpuLength: 245,
        price: 10990,
      },
      {
        categoryId: categoryMap.gpu.id,
        name: "GeForce RTX 4070 SUPER",
        brand: "NVIDIA",
        model: "RTX 4070 SUPER",
        wattage: 220,
        recommendedPsu: 650,
        gpuLength: 300,
        price: 23990,
      },
      {
        categoryId: categoryMap.gpu.id,
        name: "GeForce RTX 5070",
        brand: "NVIDIA",
        model: "RTX 5070",
        wattage: 250,
        recommendedPsu: 650,
        gpuLength: 300,
        price: 27990,
      },
      {
        categoryId: categoryMap.gpu.id,
        name: "Radeon RX 7800 XT",
        brand: "AMD",
        model: "RX 7800 XT",
        wattage: 263,
        recommendedPsu: 700,
        gpuLength: 320,
        price: 18990,
      },
      {
        categoryId: categoryMap.gpu.id,
        name: "Radeon RX 7900 GRE",
        brand: "AMD",
        model: "RX 7900 GRE",
        wattage: 260,
        recommendedPsu: 700,
        gpuLength: 320,
        price: 20990,
      },

      // RAM
      {
        categoryId: categoryMap.ram.id,
        name: "Kingston Fury DDR5 16GB",
        brand: "Kingston",
        memoryType: "DDR5",
        capacity: 16,
        price: 1990,
      },
      {
        categoryId: categoryMap.ram.id,
        name: "Kingston Fury DDR5 32GB",
        brand: "Kingston",
        memoryType: "DDR5",
        capacity: 32,
        price: 3590,
      },
      {
        categoryId: categoryMap.ram.id,
        name: "Corsair Vengeance DDR5 64GB",
        brand: "Corsair",
        memoryType: "DDR5",
        capacity: 64,
        price: 6990,
      },
      {
        categoryId: categoryMap.ram.id,
        name: "Kingston Fury DDR4 16GB",
        brand: "Kingston",
        memoryType: "DDR4",
        capacity: 16,
        price: 1590,
      },
      {
        categoryId: categoryMap.ram.id,
        name: "Corsair Vengeance DDR4 32GB",
        brand: "Corsair",
        memoryType: "DDR4",
        capacity: 32,
        price: 2990,
      },

      // SSD
      {
        categoryId: categoryMap.ssd.id,
        name: "Kingston NV2 500GB",
        brand: "Kingston",
        capacity: 500,
        price: 1290,
      },
      {
        categoryId: categoryMap.ssd.id,
        name: "Samsung 990 EVO 1TB",
        brand: "Samsung",
        capacity: 1000,
        price: 2890,
      },
      {
        categoryId: categoryMap.ssd.id,
        name: "WD Black SN850X 1TB",
        brand: "Western Digital",
        capacity: 1000,
        price: 3190,
      },
      {
        categoryId: categoryMap.ssd.id,
        name: "Crucial P3 Plus 2TB",
        brand: "Crucial",
        capacity: 2000,
        price: 4590,
      },
      {
        categoryId: categoryMap.ssd.id,
        name: "Samsung 990 Pro 2TB",
        brand: "Samsung",
        capacity: 2000,
        price: 6990,
      },

      // PSU
      {
        categoryId: categoryMap.psu.id,
        name: "Corsair CX550",
        brand: "Corsair",
        wattage: 550,
        price: 1990,
      },
      {
        categoryId: categoryMap.psu.id,
        name: "Cooler Master MWE 650",
        brand: "Cooler Master",
        wattage: 650,
        price: 2690,
      },
      {
        categoryId: categoryMap.psu.id,
        name: "Corsair RM750e",
        brand: "Corsair",
        wattage: 750,
        price: 3990,
      },
      {
        categoryId: categoryMap.psu.id,
        name: "MSI MAG A850GL",
        brand: "MSI",
        wattage: 850,
        price: 4990,
      },
      {
        categoryId: categoryMap.psu.id,
        name: "Corsair RM1000e",
        brand: "Corsair",
        wattage: 1000,
        price: 6990,
      },
    ],
  });

  console.log("🌱 Seed completed");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
