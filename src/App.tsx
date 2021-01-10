import React from "react";
import "./App.css";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text
} from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Container maxW="xl" centerContent padding="5">
          <Heading as="h2" size="2xl" paddingBottom="4">
            UQO - Calculatrice GPA
          </Heading>
          <form>
            <FormControl id="current-gpa">
              <FormLabel>Moyenne cumulative globale sur 4,30: </FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="credits-earned" marginTop="3">
              <FormLabel>Crédits réussis: </FormLabel>
              <Input type="text" />
            </FormControl>

            <HStack spacing="24px" marginTop="3">
              <FormControl id="credits-earned">
                <FormLabel>Crédits: </FormLabel>
                <Input type="text" />
              </FormControl>

              <FormControl id="credits-earned">
                <FormLabel>Résultat: </FormLabel>
                <Input type="text" />
              </FormControl>
            </HStack>

            <HStack spacing="24px" marginTop="3">
              <FormControl id="credits-earned">
                <FormLabel>Crédits: </FormLabel>
                <Input type="text" />
              </FormControl>

              <FormControl id="credits-earned">
                <FormLabel>Résultat: </FormLabel>
                <Input type="text" />
              </FormControl>
            </HStack>
            <HStack spacing="24px" marginTop="3">
              <FormControl id="credits-earned">
                <FormLabel>Crédits: </FormLabel>
                <Input type="text" />
              </FormControl>

              <FormControl id="credits-earned">
                <FormLabel>Résultat: </FormLabel>
                <Input type="text" />
              </FormControl>
            </HStack>
            <HStack spacing="24px" marginTop="3">
              <FormControl id="credits-earned">
                <FormLabel>Crédits: </FormLabel>
                <Input type="text" />
              </FormControl>

              <FormControl id="credits-earned">
                <FormLabel>Résultat: </FormLabel>
                <Input type="text" />
              </FormControl>
            </HStack>
            <HStack spacing="24px" marginTop="3">
              <FormControl id="credits-earned">
                <FormLabel>Crédits: </FormLabel>
                <Input type="text" />
              </FormControl>

              <FormControl id="credits-earned">
                <FormLabel>Résultat: </FormLabel>
                <Input type="text" />
              </FormControl>
            </HStack>

            <Stack direction="row" spacing={4} padding="5" align="center">
              <Button>Calculer</Button>
              <Button>Réinitialiser</Button>
              <Button>Ajouter une rangée</Button>
            </Stack>
          </form>
      </Container>
      <Container>
        <Text>Résultats:</Text>
        <Text>Au début du semestre</Text>
        <Text>Crédits:</Text>
        <Text>Notes pointage</Text>
        <Text>Moyenne cumulative globale sur 4,30:</Text>

        <Text>Calcul estimé pour ce semestre</Text>
        <Text>Crédits:</Text>
        <Text>Notes pointage</Text>
        <Text>Moyenne cumulative globale sur 4,30:</Text>

        <Text>Calcul estimé - total</Text>
        <Text>Total crédits:</Text>
        <Text>Total notes pointage</Text>
        <Text>Résultat oyenne cumulative globale sur 4,30:</Text>
      </Container>
      <Container centerContent>
        <Text>Code source: Github</Text>
        <Text>© 2020 made by Claire</Text>
      </Container>
    </div>
  );
}

export default App;
