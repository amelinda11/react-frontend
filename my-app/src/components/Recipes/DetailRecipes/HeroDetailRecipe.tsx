import React, { useEffect, useState } from 'react';

import { MdOutlineArrowBack } from 'react-icons/Md';
import { FiLink, FiTwitter } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { RiWhatsappLine } from 'react-icons/Ri';
import { StarIcon } from '@chakra-ui/icons';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';

import Alert from '@/components/Alert';
import { countStars, shimmer, toBase64 } from '@/app/utils';
import Layout from '@/components/Layout';
import { listFood } from '../constant';
import styled from '@emotion/styled';

const HeroDetailRecipe = () => {
  const router = useRouter();
  const { id } = router.query;
  let recipeId = id as string;

  const [recipeSelected, setRecipeSelected] = useState<any>({});

  const shareLink = (type: string, data: any) => {
    let messageShare = `Lihat Resepnya disini : ${data} . Jangan lupa recook ya!!!`;
    const encodedShareText = encodeURIComponent(messageShare);
    let urlLink = '';

    switch (type) {
      case 'twitter':
        urlLink = 'https://twitter.com/intent/tweet?text=';
        break;
      case 'whatsapp':
        urlLink = 'https://api.whatsapp.com/send/?phone&text=';
        break;
      case 'copyLink':
        urlLink = '';
        navigator.clipboard.writeText(data);
        Alert('success', `Link resep berhasil disalin!`);
        break;
    }
    if (urlLink) return window.open(urlLink + encodedShareText, '_blank');
  };

  useEffect(() => {
    setRecipeSelected(listFood[parseInt(recipeId)]);
  }, [recipeId]);

  return (
    <StyledDetailRecipe className="pt-4 rounded-0 md:rounded-bl-[12rem] pt-8">
      <div>
        <Toaster />
      </div>
      <Layout>
        <Link
          href="/"
          rel="noreferrer"
          className="flex space-x-1 items-center cursor-pointer"
        >
          <MdOutlineArrowBack className="w-5 h-5" />
          <span className="md:text-xl">Kembali</span>
        </Link>
        <div
          id="wrapper-recipe__content"
          className="flex flex-row py-14 gap-14 items-center justify-center"
        >
          <Image
            src={`/images/recipes/${recipeSelected?.image}`}
            alt={`Recipe for ${recipeSelected?.title}`}
            width={390}
            height={490}
            placeholder="blur"
            object-fit="contain"
            className="rounded-[1.25rem]"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer)}`}
          />

          <div className="mt-6 md:mt-12">
            <h1 className="tracking-wide font-medium text-3xl mb-1.5 md:text-6xl mb-2.5">
              {recipeSelected?.title}
            </h1>
            <span
              className="text-[#fffbebc4]font-normal text-2xl md:text-4xl
          "
            >
              {recipeSelected?.inspired}
            </span>
            <div className="flex gap-5 items-center mt-2 md:(mt-8 gap-7)">
              <div className="  flex items-end gap-1">
                <h2 className="text-6xl md:text-7xl">
                  {recipeSelected?.ingredients?.length}
                </h2>
                <span className="text-base md:text-lg">bahan-bahan</span>
              </div>
              <hr className="h-[6.25rem] border-r-2" />
              <div className="flex flex-col space-y-1">
                <span className="text-base md:text-lg">Rating</span>
                <div className="flex items-center space-x-1 md:space-x-3 mt-5">
                  {countStars(recipeSelected?.rating).map((idx: number) => (
                    <StarIcon key={idx} w="1.5rem" h="1.5rem" color="#F9F3EE" />
                  ))}
                  {recipeSelected?.rating < 5 &&
                    countStars(5 - recipeSelected?.rating).map(
                      (idx: number) => (
                        <StarIcon
                          key={idx}
                          w="1.55rem"
                          h="1.55rem"
                          color="#CBEDD5"
                        />
                      )
                    )}
                </div>
              </div>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-8">
              <div onClick={() => shareLink('twitter', recipeSelected?.link)}>
                <FiTwitter className="w-6 h-6 cursor-pointer md:(w-8 h-8)" />
              </div>

              <div onClick={() => shareLink('whatsapp', recipeSelected?.link)}>
                <RiWhatsappLine className="w-6 h-6 cursor-pointer md:(w-8 h-8)" />
              </div>
              <div onClick={() => shareLink('copyLink', recipeSelected?.link)}>
                <FiLink className="w-6 h-6 cursor-pointer md:(w-8 h-8)" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </StyledDetailRecipe>
  );
};

export default HeroDetailRecipe;

const StyledDetailRecipe = styled.div`
  color: #fffbeb;
  background: rgb(98, 182, 183);
  background: linear-gradient(
    203deg,
    rgba(98, 182, 183, 1) 3%,
    rgba(151, 222, 206, 1) 81%,
    rgba(203, 237, 213, 1) 97%
  );

  @media (max-width: 768px) {
    background: linear-gradient(
      71deg,
      rgba(98, 182, 183, 1) 3%,
      rgba(151, 222, 206, 1) 81%,
      rgba(203, 237, 213, 1) 97%
    );

    #wrapper-recipe__content {
      padding-top: 1.6rem;
      padding-bottom: 1.75rem;
      gap: 1.5rem;
      flex-direction: column;
    }
  }

  a:hover {
    transform: scale(1.01);
    transition: all 0.4s ease-out;
  }
`;
