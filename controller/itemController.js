import { readData, writeData } from "../utils/fileHelper.js";
import { v4 as uuidv4 } from "uuid";

export const getAllItems = async (req, res) => {
  const items = await readData();
  res.json(items);
};

export const getItemById = async (req, res) => {
  const items = await readData();
  const item = items.find((i) => i.id === req.params.id);
  if (!item) return res.status(404).json({ message: "Item not found" });
  res.json(item);
};

export const createItem = async (req, res) => {
  const items = await readData();
  const newItem = { id: uuidv4(), ...req.body };
  items.push(newItem);
  await writeData(items);
  res.status(201).json(newItem);
};

export const updateItem = async (req, res) => {
  const items = await readData();
  const index = items.findIndex((i) => i.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: "Item not found" });

  items[index] = { ...items[index], ...req.body };
  await writeData(items);
  res.json(items[index]);
};

export const deleteItem = async (req, res) => {
  const items = await readData();
  const filtered = items.filter((i) => i.id !== req.params.id);
  if (filtered.length === items.length)
    return res.status(404).json({ message: "Item not found" });

  await writeData(filtered);
  res.json({ message: "Item deleted" });
};
