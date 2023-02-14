import { InfoIcon } from '@chakra-ui/icons';
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Tooltip,
  ChakraProvider,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import Layout from '../Layout';
import Recipes from '../Recipes/Recipes';

const Menu = () => {
  const label = 'All ratings are based on personal opinion';
  return (
    <StyledTabMenuCustom className="my-0 md:my-9">
      <Layout>
        <Tabs className="tabs_custom">
          <TabList mb="1em">
            <Tab>
              <div className="flex items-center">
                Recipes
                <ChakraProvider>
                  <Tooltip hasArrow label={label}>
                    <InfoIcon className="ml-3 text-[#62b6b7]" />
                  </Tooltip>
                </ChakraProvider>
              </div>
            </Tab>
            <Tab>Traveling</Tab>
            <Tab>My Journey</Tab>
            <Tab>Reference</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Recipes />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Layout>
    </StyledTabMenuCustom>
  );
};

export default Menu;

const StyledTabMenuCustom = styled.div`
  color: #3c4245;

  .chakra-tabs__tablist {
    justify-content: space-around;
    border-bottom: 1px solid #b7c4cf;
    font-size: 1rem;
  }

  .chakra-tabs__tab {
    width: 25%;
    padding: 1.5rem 2rem;

    &[aria-selected='true'] {
      border-bottom: 2px solid #62b6b7;
    }

    &:hover {
      transition: all 0.4s ease-out;
      transform: scale(1.03);
    }
  }

  @media (max-width: 760px) {
    .chakra-tabs__tablist {
      width: 100%;
      overflow-x: scroll;
      overflow-y: hidden;
      display: flex;
      justify-content: space-between;
    }

    .chakra-tabs__tab {
      white-space: nowrap;
      width: 100% !important;
    }
  }
`;
