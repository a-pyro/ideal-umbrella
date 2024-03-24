import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ideal umbrella shop',
  description: 'Buy the best umbrellas in the world',
};

export default async function Home() {
  return <main>Welcome to the ideal umbrella shop!</main>;
}
