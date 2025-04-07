import fs from "fs/promises";
import path from "path";

const DB_PATH = path.join(process.cwd(), "DB", "data.json");

export async function readData() {
  const data = await fs.readFile(DB_PATH, "utf-8");
  return JSON.parse(data);
}

export async function writeData(data) {
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
}
