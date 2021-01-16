import React, { ReactElement } from 'react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Box, IconButton, useColorMode } from '@chakra-ui/react';

export function Menu(): ReactElement {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box display='flex' justifyContent='flex-end' mt={4} mr={4}>
        {colorMode === 'dark' && <IconButton aria-label='theme mode light' icon={<SunIcon />} onClick={toggleColorMode}></IconButton>}

        {colorMode === 'light' && (
          <IconButton aria-label='theme mode dark' icon={<MoonIcon />} onClick={toggleColorMode}>
            {colorMode === 'light' ? 'Dark' : 'Light'}
          </IconButton>
        )}
      </Box>
    </>
  );
}
