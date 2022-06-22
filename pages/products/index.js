import Head from "next/head";
import styles from "../../styles/Product.module.css";
import products from '../../assets/products.json';
import SingleProduct from "../../components/SingleProduct";



export default function Product() {
  return (
    <div className={styles.container} >
      <Head>
      <title>E-commerce</title>
      <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css"
        />
      </Head>
      <main className={styles.main}>
        <h1>E-commerce in Next.js and SnipCart</h1>
      
      <div className={styles.grid} >
        {products.map((product,i)=> (
          <SingleProduct {...product} key ={i} />
        ))}
      </div>
      </main>
      <div
        id="snipcart"
        data-api-key="MWMyNTRkNWItYjUzNS00MjYyLWFiMGMtNGEzNzg4ZGJlMWJkNjM3OTA2Nzg0NzAzMTg2NTY5"
        hidden
      ></div>
      <script
        src="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js"
        async
      />
    </div>
  )
}