/* eslint-disable prettier/prettier */
import React, { ReactElement, useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import { Footer } from './components/Footer';
import { Menu } from './components/Menu';
import { CreditsForm } from './components/CreditsForm';
import { Container, Tabs, TabList, TabPanels, Tab, TabPanel, Heading } from '@chakra-ui/react';
import { SigleForm } from './components/SigleForm';
import { IFormInput, initialValues } from './types/types';

export default function App(): ReactElement {
  const [form] = useState<IFormInput>(initialValues);
  const [isFirstSemester] = useState(false);

  useEffect(() => {
    ReactGA.initialize('G-115SPZX12W1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <div>
      <Menu />
      <Container>
        <Heading as='h2' size='2xl' paddingBottom='4'>
          UQO - Calculatrice GPA
        </Heading>
        <Tabs isFitted variant='enclosed'>
          <TabList>
            <Tab>Par crédit</Tab>
            <Tab>Par sigle</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <CreditsForm form={form} isFirstSemester={isFirstSemester} />
            </TabPanel>
            <TabPanel>
              <SigleForm form={form} isFirstSemester={isFirstSemester} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
      <Footer />
    </div>
  );
}
