import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { getAllProducts } from "./api/API";
import Link from "next/link";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  const products = await getAllProducts();
  return {
    props: {
      products,
    },
  };
}
export default function Home({ products }) {
  const [saveItems, setSaveItems] = useState(() => {
    return typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("items")) || []
      : false;
  });
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(saveItems));
  }, [saveItems]);

  const saveProduct = (prods) => {
    setSaveItems([...saveItems, prods]);
  };

  return (
    <div>
      <div className="flex flex-wrap">
        {products?.map((prod) => (
          <div key={prod.id} className="w-2/4">
            <div className="flex flex-col justify-between py-3 items-center h-full bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Image
                className="p-8 rounded-t-lg mx-auto"
                src={prod.image}
                alt="product image"
                height={120}
                width={95}
              />

              <div class="px-5 pb-5">
                <Link href={`/products/${prod.id}`}>
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {prod.title}{" "}
                  </h5>
                </Link>
              </div>

              <div class="flex items-center justify-between w-full p-2">
                <span class="text-3xl font-bold text-gray-900 dark:text-white">
                  $599
                </span>
                <a
                  onClick={() => {
                    saveProduct(prod);
                  }}
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to Wish List
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
