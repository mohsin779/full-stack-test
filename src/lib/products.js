import axios from "axios";
import { endpoint } from "@/utils/endpoint";

export async function getAllProducts() {
  const res = await axios.get(`${endpoint}/products`);
  const data = res.data;
  return data;
}

export async function getProductByName(name) {
  const res = await axios.get(`${endpoint}/products/${name}`);
  const data = res.data;
  return data;
}
