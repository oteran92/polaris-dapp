import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/InstructionsComponent";
import { GraphQLClient } from "graphql";
const client = new GraphQLClient("https://polaris-platform.saleor.cloud/graphql/");

const query = `
query {
  products {
    id
    name
    image
    description
  }
}`;
const response = await client.query(query);
const products = response.data.products;
<ul>
  {products.map((product) => (
    <li key={product.id}>
      <h2>{product.name}</h2>
      <img src={product.image} />
      <p>{product.description}</p>
    </li>
  ))}
</ul>


export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <InstructionsComponent></InstructionsComponent>
      </main>
    </div>
  );
}
