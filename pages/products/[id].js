import Image from "next/image";
import { getAllProducts, getOneProduct } from "../api/API";
import { useState, useEffect } from "react";
export default function Details({ oneProduct }) {
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
    <div className="border flex justify-center">
      <div className="flex flex-col items-center">
        <h1 className="font-bold">{oneProduct.title}</h1>
        <Image src={oneProduct.image} height={200} width={220}></Image>
        <p>${oneProduct.price}</p>
        <div>
          <p>{oneProduct.description}</p>
        </div>
        <a
          onClick={() => {
            saveProduct(prod);
          }}
          href="#"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add to Wish List
        </a>{" "}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const products = await getAllProducts();
  const paths = products.map((prod) => {
    return {
      params: {
        id: prod.id.toString(),
      },
    };
  });

  //   console.log(paths, "@@@@@@@@@@@@");

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const oneProduct = await getOneProduct(params.id);
  return {
    props: {
      oneProduct,
    },
  };
}
