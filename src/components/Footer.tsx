import React from 'react';
import { Container, Divider, Link, Text } from '@chakra-ui/react';

export const Footer: React.FC = () => (
  <Container centerContent marginTop={4} mb={3}>
    <Divider orientation='horizontal' mb={2} />
    <Text>
      Lien source:&nbsp;
      <Link
        color='#2C5282'
        isExternal
        href='https://uqo.ca/sites/default/files/fichiers-uqo/departement-education/politiqueevaluationapprentissages.pdf'
      >
        UQO notes
      </Link>
    </Text>
    <Text>
      Code source:&nbsp;
      <Link color='#2C5282' isExternal href='https://github.com/cbun097/uqo-gpa-calculator'>
        Github
      </Link>
    </Text>
    <Text>© 2020 made by Claire</Text>
  </Container>
);
