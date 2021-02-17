import Head from "next/head";
import styles from "../styles/Home.module.css";
import ByteCard from "../src/components/soundBar/byteCard";
import React from "react";
import fs from "fs";
import path from "path";
// @ts-ignore
import fart from "../public/sounds/fart-08.mp3";
// @ts-ignore
import sheSaid from "../public/sounds/shesaid.mp3";
// @ts-ignore
import dilly from "../public/sounds/Ba_dum_tss.mp3";
const Home = ({ sounds }: { sounds: string[] }) => {
  const renderSoundCards = () => {
    return sounds.map((sound) => {
      return (
        <ByteCard clipPath={sheSaid} title={sound} description={"default"} />
      );
    });
  };
  return (
    <div className="flex-row-wrap">
      <ByteCard clipPath={fart} title="Fart" description="Long echoey Fart" />

      <ByteCard
        clipPath={sheSaid}
        title="That's what She said"
        description="The Scott Classic"
      />

      <ByteCard clipPath={dilly} title="Dilly" description="" />
      <ByteCard clipPath={fart} title="Fart" description="Long echoey Fart" />

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Gluten
        </a>
      </footer>
    </div>
  );
};

// ssr
export const getServerSideProps = async () => {
  const postsDirectory = path.join(process.cwd(), "./public/sounds/");
  const sounds = fs.readdirSync(postsDirectory);
  console.log(sounds);
  return { props: { sounds } };
};

export default Home;
