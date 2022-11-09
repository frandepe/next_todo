interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  createdAt: number;
  status: string;
}

export const seedData: SeedData = {
  entries: [
    {
      description: "Pendiente: una description cualquiera",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description: "En progreso: otra description cualquiera larga",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      description:
        "Terminadas: una description cualquiera y mas larga del tercero",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};
