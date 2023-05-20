import { useEffect, useState } from "react";
import { getAllProducts } from "./api/API";
import Image from "next/image";

const WishList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("items")));
  }, []);
  console.log(items);

  const handleDelete = () => {
    const validate = confirm("Are you sure?");
    if (validate) {
      localStorage.removeItem("items");
      window.location.reload();
    }
  };

  return (
    <div>
      <h1>Wish Lists</h1>

      {items ? <button onClick={handleDelete}>Delete Items</button> : null}
      {items?.map((item) => {
        return (
          <div className="border" key={item.id}>
            <h1>{item.title}</h1>
            <Image src={item.image} height={200} width={200}></Image>
            <p>${item.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default WishList;
