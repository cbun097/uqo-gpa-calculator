//FIXME: remove lint error
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Table,
  TableCaption,
  Tbody,
  Thead,
  Td,
  Tr,
  Th,
  Link,
  Box,
} from '@chakra-ui/react';

export function ModalTableGrade() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Ouvrir tableau de note UQO</Button>

      <Modal onClose={onClose} isOpen={isOpen} blockScrollOnMount={false} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tableau de notes</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box h={[400, 500, 680]} overflowX='auto'>
              <Table size='sm' variant='simple'>
                <TableCaption>
                  Lien source:&nbsp;
                  <Link
                    color='#2C5282'
                    isExternal
                    href='https://uqo.ca/sites/default/files/fichiers-uqo/departement-education/politiqueevaluationapprentissages.pdf'
                  >
                    UQO notes
                  </Link>
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>Note (N)</Th>
                    <Th>Notation littérale</Th>
                    <Th>Valeur numérique correspondante</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>92 &le; N &le; 100</Td>
                    <Td>A+ (Excellent)</Td>
                    <Td>4,3</Td>
                  </Tr>
                  <Tr>
                    <Td>88 &le; N &lt; 92</Td>
                    <Td>A</Td>
                    <Td>4,0</Td>
                  </Tr>
                  <Tr>
                    <Td>84 &le; N &lt; 88</Td>
                    <Td>A-</Td>
                    <Td>3,7</Td>
                  </Tr>
                  <Tr>
                    <Td>80 &le; N &lt; 84</Td>
                    <Td>B+ (Très bien)</Td>
                    <Td>3,3</Td>
                  </Tr>
                  <Tr>
                    <Td>76 &le; N &lt; 80</Td>
                    <Td>B</Td>
                    <Td>3,0</Td>
                  </Tr>
                  <Tr>
                    <Td>72 &le; N &lt; 76</Td>
                    <Td>B-</Td>
                    <Td>2,7</Td>
                  </Tr>
                  <Tr>
                    <Td>68 &le; N &lt; 72</Td>
                    <Td>C+ (Bien)</Td>
                    <Td>2,3</Td>
                  </Tr>
                  <Tr>
                    <Td>64 &le; N &lt; 68</Td>
                    <Td>C</Td>
                    <Td>2,0</Td>
                  </Tr>
                  <Tr>
                    <Td>60 &le; N &lt; 64</Td>
                    <Td>C-</Td>
                    <Td>1,7</Td>
                  </Tr>
                  <Tr>
                    <Td>56 &le; N &lt; 60</Td>
                    <Td>D+ (Passable)</Td>
                    <Td>1,3</Td>
                  </Tr>
                  <Tr>
                    <Td>52 &le; N &lt; 56</Td>
                    <Td>D</Td>
                    <Td>1,0</Td>
                  </Tr>
                  <Tr>
                    <Td>0 &le; N &lt; 52</Td>
                    <Td>E (Échec)</Td>
                    <Td>0</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
