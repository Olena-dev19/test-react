// src/components/Product.tsx
import css from "./Alert.module.css";

interface ProductProps {
  name: string;
  imgUrl: string;
  price: number;
};

export default function Product({name, imgUrl, price}: ProductProps) {
  return (
    <>
    <div className={css.alert}>
      <h2 >{name}</h2>
			<img src={imgUrl} alt={name} width="320" />
			<p>Price: {price} credits</p>
    </div>
    <p className={css.alert}>
    Please update your email!
    </p>
    </>
  );
};

