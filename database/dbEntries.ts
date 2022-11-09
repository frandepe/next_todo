import { isValidObjectId } from "mongoose";
import { db } from ".";
import { Entry, IEntry } from "../models";

export const getEntryById = async (id: string): Promise<IEntry | null> => {
  if (!isValidObjectId(id)) return null;

  await db.connect();
  // el lean es utilizado para trabajar con menos data en entry, nos da menos funcionalidades
  const entry = await Entry.findById(id).lean();
  await db.disconnect();

  return JSON.parse(JSON.stringify(entry));
};
