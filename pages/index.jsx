import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/InstructionsComponent";
import GreenButton from '../components/GreenButton';


  export default function HomePage() {
    return (
      <div>
        {/* other content */}
        <GreenButton onClick={() => alert('Clicked!')}>
          Click me
        </GreenButton>
      </div>
    );
  }


export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <InstructionsComponent></InstructionsComponent>
      </main>
    </div>
  );


}
