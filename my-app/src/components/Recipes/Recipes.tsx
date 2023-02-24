import React from 'react';

import { countStars, shimmer, toBase64 } from '@/app/utils';
import { StarIcon } from '@chakra-ui/icons';
import styled from '@emotion/styled';

import Image from 'next/image';
import Link from 'next/link';
import { listFood } from './constant';

const Recipes = () => {
  const getRecipeUrl = (id: number, name: string) => {
    const slug = name?.replace(/\s+/g, '-').toLowerCase();
    const url = 'detail-recipe?name=' + slug + '&id=' + id;
    return url;
  };

  return (
    <>
      <h1 className="font-medium text-center text-xl my-4 md:text-2xl my-8">{`Dishes I've ever tried... Enjoy`}</h1>
      <StyledCardRecipe className="grid grid-cols-2 my-3 gap-2.5  md:grid-cols-4 my-6 gap-5">
        {listFood.map((res, idx) => (
          <Link
            key={idx}
            href={getRecipeUrl(idx, res?.title)}
            className="space-y-3 p-3.5"
          >
            <div>
              <div className="relative w-full bg-[#62b6b751] rounded-[1.25rem] overflow-hidden">
                <div className="relative w-full pt-[100%]">
                  <Image
                    sizes="40vw"
                    src={`/images/recipes/${res?.image}`}
                    alt={`Recipe for ${res?.title}`}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      shimmer
                    )}`}
                  />
                </div>
              </div>

              <h2 className="font-medium text-xl my-2 md:text-2xl mt-4">
                {res?.title}
              </h2>
              <span className="opacity-80 text-base mt-2 md:text-xl">
                Inspired by : {` ${res?.inspired}`}
              </span>
            </div>
            <div className="flex items-center space-x-1 md:space-x-3">
              {countStars(res?.rating).map((idx: number) => (
                <StarIcon key={idx} w="1.20rem" h="1.20rem" color="#62b6b7" />
              ))}
              {res?.rating < 5 &&
                countStars(5 - res?.rating).map((idx: number) => (
                  <StarIcon key={idx} w="1.20rem" h="1.20rem" color="#CBEDD5" />
                ))}
            </div>
          </Link>
        ))}
      </StyledCardRecipe>
    </>
  );
};

export default Recipes;

const StyledCardRecipe = styled.div`
  a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;

    :hover {
      background: #ffffff;
      box-shadow: 0rem 0.0625rem 1.25rem rgba(0, 0, 0, 0.1);
      border-radius: 1.25rem;
      transform: scale(1.01);
      transition: all 0.4s ease-out;
    }
  }
`;
