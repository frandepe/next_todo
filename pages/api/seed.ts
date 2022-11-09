import type { NextApiRequest, NextApiResponse } from "next";
import { db, seedData } from "../../database";
import { Entry } from "../../models";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === "production") {
    return res
      .status(401)
      .json({ message: "No tiene acceso a teste servicio" });
  }

  await db.connect();
  // en medio del connect y disconnect podemos hacer cualquier iteraccion sobre la base de datos

  //si no le pongo ninguna condicion al deleteMany se nos vuela todo lo de la base de datos
  await Entry.deleteMany();
  await Entry.insertMany(seedData.entries);
  await db.disconnect();

  res.status(200).json({ message: "Proceso realizado correctamente" });
}
