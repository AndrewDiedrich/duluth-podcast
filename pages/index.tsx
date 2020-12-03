import Head from 'next/head';
import { Grid } from '@material-ui/core';
import styles from '../styles/Home.module.css';
import NavBar from '../src/components/shared/navBar';
import ByteCard from '../src/components/soundBar/byteCard';
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// @ts-ignore
import fart from '../public/sounds/fart-08.mp3';
// @ts-ignore
import sheSaid from '../public/sounds/shesaid.mp3';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  })
);

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <Grid
        container
        direction="row-reverse"
        justify="space-between"
        alignItems="center"
      >
        <Grid item md={4}>
          <ByteCard
            clipPath={fart}
            title="Fart"
            description="Long echoey Fart"
          />
        </Grid>

        <Grid item md={4}>
          {' '}
          <ByteCard
            clipPath={sheSaid}
            title="That's what She said"
            description="The Scott Classic"
          />
        </Grid>
        <Grid item md={4}>
          <ByteCard
            clipPath={fart}
            title="Fart"
            description="Long echoey Fart"
          />
        </Grid>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Gluten
          </a>
        </footer>
      </Grid>
    </div>
  );
}
