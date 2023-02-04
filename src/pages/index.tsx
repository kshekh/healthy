import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import { Hero, MealHistory, RecordButton, TransitionButtons } from '@/components';

export default function Home() {
  return (
    <>
      <Hero />
      <TransitionButtons />
      <MealHistory />
      <RecordButton />
    </>
  );
}
