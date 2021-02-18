import Head from "next/head";
import styles from "../styles/Home.module.css";
import ByteCard from "../src/components/soundBar/byteCard";
import React, { useState } from "react";
import fs from "fs";
import path from "path";
import { searchArray } from "../src/helpers/search";

const Home = ({ sounds }: { sounds: string[] }) => {
  const [searchString, setSearchString] = useState("");

  let filtered = searchArray(sounds, searchString);

  const renderSoundCards = () => {
    return filtered.slice(0, 20).map((sound) => {
      return (
        <ByteCard
          key={sound}
          clipPath={sound}
          title={sound}
          description={"default"}
        />
      );
    });
  };
  return (
    <div>
      <div className="flex-row">
        <div
          className="bp3-input-group bp3-large fill"
          style={{ margin: "10px auto" }}
        >
          <span className="bp3-icon bp3-icon-search"></span>
          <input
            style={{ minWidth: "350px" }}
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            className="bp3-input"
            type="search"
            placeholder="Search Things"
            dir="auto"
          />
        </div>
      </div>
      <div className="flex-row-wrap" style={{ justifyContent: "space-evenly" }}>
        {renderSoundCards()}
      </div>
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
  return { props: { sounds } };
};

export default Home;
