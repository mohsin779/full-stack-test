/**
 * Retrieves a product and their associated quotes based on the provided name.
 *
 * @param {Object} req - The request object.
 * @param {Object} params - The route parameters.
 * @param {string} params.name - The name of the product.
 *
 * @returns {Promise<Object>} A promise that resolves to an object containing the product and their quotes, or an error response.
 */

import products from "@/data/products.json";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const searchedProducts = products.data.filter((item) =>
      item.name.includes(params.name)
    );
    return NextResponse.json({
      products: searchedProducts,
    });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
