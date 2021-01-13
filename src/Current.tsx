//TODO: add file to refactor and separe the code
import { FormControl, FormLabel, Switch } from '@chakra-ui/react';
import React, { useState } from 'react';

export const Results: React.FC = () => {
  const [isFirstSemester, setIsFirstSemester] = useState(false);
  return (
    <FormControl display='flex' alignItems='center'>
      <FormLabel htmlFor='email-alerts' mb='0'>
        Enable email alerts?
      </FormLabel>
      <Switch id='email-alerts' />
    </FormControl>
  );
};
