import Head from 'next/head';
import DetailRecipes from '@/components/Recipes/DetailRecipes';

export default function DetailRecipe() {
  return (
    <>
      <Head>
        <title>Detail Recipe</title>
        <meta name="description" content="Detail Recipe - Anisa Melinda" />
        <meta name="title" content="Portofolio Anisa Melinda" />
        <link rel="icon" href="/icons/Amer.png" />
      </Head>
      <DetailRecipes />
    </>
  );
}
