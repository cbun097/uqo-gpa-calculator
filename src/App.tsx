import React, { useState } from "react";
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
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import {
  accumulatedCredits,
  calculateGPA,
  calculateGradePoints,
  IFormInput,
} from "./utils";

const initialValues: IFormInput = {
  currentGPA: 0,
  currentCreditsEarned: 0,
  // TEMP
  creditsEarned1: 0,
  creditsEarned2: 0,
  creditsEarned3: 0,
  creditsEarned4: 0,
  creditsEarned5: 0,
};

function App() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const [form, setForm] = useState<IFormInput>(initialValues);
  const [btnClicked, setBtnClicked] = useState(false);
  const onSubmit = async (data: IFormInput) => {
    console.log(data);
    setForm(data);
  };
  return (
    <div>
      <Container maxW="xl" centerContent padding={5}>
        <Heading as="h2" size="2xl" paddingBottom="4">
          UQO - Calculatrice GPA
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl id="currentGPA">
            <FormLabel>Moyenne cumulative globale sur 4,30: </FormLabel>
            <Input
              type="text"
              name="currentGPA"
              id="currentGPA"
              ref={register}
            />
          </FormControl>
          <FormControl id="currentCreditsEarned" marginTop="3">
            <FormLabel>Crédits réussis: </FormLabel>
            <Input
              type="text"
              name="currentCreditsEarned"
              id="currentCreditsEarned"
              ref={register}
            />
          </FormControl>

          <HStack spacing="24px" marginTop="3">
            <FormControl id="credits-earned">
              <FormLabel>Crédits: </FormLabel>
              <Input
                type="text"
                name="creditsEarned1"
                id="creditsEarned1"
                ref={register}
              />
            </FormControl>

            <FormControl id="credits-earned">
              <FormLabel>Résultat: </FormLabel>
              <Input
                type="text"
                name="result-earned-1"
                id="result-earned-1"
                ref={register}
              />
            </FormControl>
          </HStack>

          <HStack spacing="24px" marginTop="3">
            <FormControl id="credits-earned">
              <FormLabel>Crédits: </FormLabel>
              <Input
                type="text"
                name="creditsEarned2"
                id="creditsEarned2"
                ref={register}
              />
            </FormControl>

            <FormControl id="credits-earned">
              <FormLabel>Résultat: </FormLabel>
              <Input
                type="text"
                name="result-earned-2"
                id="result-earned-2"
                ref={register}
              />
            </FormControl>
          </HStack>
          <HStack spacing="24px" marginTop="3">
            <FormControl id="credits-earned">
              <FormLabel>Crédits: </FormLabel>
              <Input
                type="text"
                name="creditsEarned3"
                id="creditsEarned3"
                ref={register}
              />
            </FormControl>

            <FormControl id="credits-earned">
              <FormLabel>Résultat: </FormLabel>
              <Input
                type="text"
                name="result-earned-3"
                id="result-earned-3"
                ref={register}
              />
            </FormControl>
          </HStack>
          <HStack spacing="24px" marginTop="3">
            <FormControl id="credits-earned">
              <FormLabel>Crédits: </FormLabel>
              <Input
                type="text"
                name="creditsEarned4"
                id="creditsEarned4"
                ref={register}
              />
            </FormControl>

            <FormControl id="credits-earned">
              <FormLabel>Résultat: </FormLabel>
              <Input
                type="text"
                name="result-earned-4"
                id="result-earned-4"
                ref={register}
              />
            </FormControl>
          </HStack>
          <HStack spacing="24px" marginTop="3">
            <FormControl id="credits-earned">
              <FormLabel>Crédits: </FormLabel>
              <Input
                type="text"
                name="creditsEarned5"
                id="creditsEarned5"
                ref={register}
              />
            </FormControl>

            <FormControl id="credits-earned">
              <FormLabel>Résultat: </FormLabel>
              <Input
                type="text"
                name="result-earned-5"
                id="result-earned-5"
                ref={register}
              />
            </FormControl>
          </HStack>

          <Stack direction="row" spacing={4} padding="5" align="center">
            <Button type="submit" onClick={() => setBtnClicked(true)}>
              Calculer
            </Button>
            <Button type="reset">Réinitialiser</Button>
            <Button>Ajouter une rangée</Button>
          </Stack>
        </form>
      </Container>
      {/* for testing purposes */}
      {/* <pre>{JSON.stringify(formState, null, 2)}</pre> */}
     {btnClicked && (
        <Container>
          <Text fontSize="lg" as="b">
            Résultats:
          </Text>
          <Container m={1}>
            <Text fontSize="md" as="b">
              Au début du semestre
            </Text>
            <Text>Crédits:&nbsp;{form?.currentCreditsEarned}</Text>
            <Text>
              Notes pointage:&nbsp;
              {calculateGradePoints(
                form?.currentCreditsEarned,
                form?.currentGPA
              )}
            </Text>
            <Text>
              Moyenne cumulative globale sur 4,30:&nbsp; {calculateGPA()}
            </Text>
          </Container>

          <Container m={1}>
            <Text fontSize="md" as="b">
              Calcul estimé pour ce semestre
            </Text>
            <Text>
              Crédits:&nbsp;
              {accumulatedCredits(
                form?.creditsEarned1,
                form?.creditsEarned2,
                form?.creditsEarned3,
                form?.creditsEarned4,
                form?.creditsEarned5
              )}
            </Text>
            <Text>Notes pointage:&nbsp;</Text>
            <Text>
              Moyenne cumulative globale sur 4,30:&nbsp; {calculateGPA()}
            </Text>
          </Container>

          <Container m={1}>
            <Text fontSize="md" as="b">
              Calcul estimé - total
            </Text>
            <Text>Total crédits:&nbsp; </Text>
            <Text>Total notes pointage: &nbsp;</Text>
            <Text>
              Résultat moyenne cumulative globale sur 4,30:&nbsp;{" "}
              {calculateGPA()}
            </Text>
            <Button>Grade de l'UQO</Button>
          </Container>
        </Container>
     )}
      <Container centerContent marginTop={4} marginBottom={3}>
        <Text>Code source: Github</Text>
        <Text>© 2020 made by Claire</Text>
      </Container>
    </div>
  );
}

export default App;
