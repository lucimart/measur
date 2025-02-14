import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { Amount } from "@/components/Amount";
import { Measurement, MeasurementType } from "@/components/Measurement";
import { Material, MaterialEnum } from "@/components/Material";
import { Result } from "@/components/Result";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [amount, setAmount] = useState(1);
  const [measurementFrom, setMeasurementFrom] = useState<MeasurementType>(MeasurementType.Cup);
  const [material, setMaterial] = useState<MaterialEnum>(MaterialEnum.Flour);
  const [measurementTo, setMeasurementTo] = useState<MeasurementType>(MeasurementType.Gram);
  const [result, setResult] = useState(0);

  useEffect(() => {
    if (measurementFrom === MeasurementType.Cup && measurementTo === MeasurementType.Gram) {
      setResult(amount * 125);
    } else if (measurementFrom === MeasurementType.Gram && measurementTo === MeasurementType.Cup) {
      setResult(amount / 125);
    }
  }, [amount, measurementFrom, material, measurementTo, result]);
  return (
    <>
      <Head>
        <title>Measur</title>
        <meta name="description" content="Transform between different measurements" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <header className={styles.header}>
          <h1>Measur</h1>
        </header>
        <main className={styles.main}>
          <div>
            <Amount amount={amount} setAmount={setAmount} />
            &nbsp;
            <Measurement measurement={measurementFrom} setMeasurement={setMeasurementFrom} isPlural={amount !== 1} />
          <span>&nbsp;of&nbsp;</span>
          <Material material={material} setMaterial={setMaterial} />
          <span>&nbsp;in&nbsp;</span>
          <Measurement measurement={measurementTo} setMeasurement={setMeasurementTo} isPlural={true} />
          <span>&nbsp;is&nbsp;</span>
          <Result amount={result} material={material} measurement={measurementTo} />
          </div>
        </main>
        <footer className={styles.footer}>
         <a href="https://twitter.com/fuegoenfango">Made with {"<3"} by Lucía</a>
        </footer>
      </div>
    </>
  );
}
