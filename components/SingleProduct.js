import styles from "./SingleProduct.module.css";
import Image from "next/image"

export default function SingleProduct ({
  item_id,
  title,
  slug,
  images,
  description,
  price
  }) 
  
  { 
    const hostname = process.env.NODE_ENV === 'production'
    ? 'https://bucolic-hamster-f84ecf.netlify.app'
    : 'https://5ced-47-144-182-75.ngrok.io'

    return (
      
      <div key={item_id} className={styles.product}>
    <Image 
    src='https://placekitten.com/640/640'
    alt= {`Image of ${title}`}
    height={640}
    width={640}
    />
  <h3>{title}</h3>
  <p>{description}</p>
  <span>${price}</span>
  <div>
    <button
    className="snipcart-add-item"
    data-item-id={item_id}
    data-item-image='http://placekitten.com/640/640'
    data-item-name={title}
    data-item-url={slug}
    data-item-price={price}
    data-item-description={description}
    >
    Add to Cart
    </button>
    </div>
    </div>
  );

}


