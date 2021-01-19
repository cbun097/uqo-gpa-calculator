import React, { ReactElement, useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import { IFormInput, initialValues } from './actions/utils';
import { Footer } from './components/Footer';
import { Menu } from './components/Menu';
import { CreditsForm } from './components/CreditsForm';

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
      <CreditsForm form={form} isFirstSemester={isFirstSemester} />
      <Footer />
    </div>
  );
}
