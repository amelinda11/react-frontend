import Image from 'next/image';
import React from 'react';
import Layout from '../Layout';
import styled from '@emotion/styled';

const HeroBanner = () => {
  return (
    <StyledHeroBanner>
      <Layout>
        <div className="flex items-center justify-center flex-col space-y- py-24">
          <p className="text-4xl font-medium text-[#3C4245]">Welcome to</p>
          <h1 className="text-6xl font-semibold text-[#62B6B7]">{`Anisa's Gallery`}</h1>
        </div>
      </Layout>
    </StyledHeroBanner>
  );
};

export default HeroBanner;

const StyledHeroBanner = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  background-image: url(/hero.png);
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100%;
`;
