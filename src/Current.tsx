//TODO: add file to refactor and separe the code
import React from 'react';
import { FormControl, FormLabel, Switch } from '@chakra-ui/react';

export const Results: React.FC = () => {
  return (
    <FormControl display='flex' alignItems='center'>
      <FormLabel htmlFor='email-alerts' mb='0'>
        Enable email alerts?
      </FormLabel>
      <Switch id='email-alerts' />
    </FormControl>
  );
};
