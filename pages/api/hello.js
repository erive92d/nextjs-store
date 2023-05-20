// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}

export async function allProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return products;
}
