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
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import {
  accumulatedCredits,
  semesterCalculateGPA,
  calculateGradePoints,
  finalGPA,
  finalPoints,
  IFormInput,
  initialValues,
  semesterGradePoints,
  totalCredit,
} from "./utils";


function App() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const [form, setForm] = useState<IFormInput>(initialValues);
  const [btnClicked, setBtnClicked] = useState(false);
  const onSubmit = async (data: IFormInput) => {
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

          <Container m={1}>
            <Text>Ce semestre</Text>
            <Text>Les cours pris cette session ou les cours prévus</Text>
          </Container>

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
                name="resultEarned1"
                id="resultEarned1"
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
                name="resultEarned2"
                id="resultEarned2"
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
                name="resultEarned3"
                id="resultEarned3"
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
                name="resultEarned4"
                id="resultEarned4"
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
                name="resultEarned5"
                id="resultEarned5"
                ref={register}
              />
            </FormControl>
          </HStack>

          <Stack direction="row" spacing={4} padding="5" justify="center">
            <Button type="submit" onClick={() => setBtnClicked(true)}>
              Calculer
            </Button>
            <Button type="reset" onClick={() => setBtnClicked(false)}>
              Réinitialiser
            </Button>
            {/* <Button>Ajouter une rangée</Button> */}
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
              Moyenne cumulative globale sur 4,30:&nbsp; {form?.currentGPA}
            </Text>
          </Container>

          <Container m={1}>
            <Text fontSize="md" as="b">
              Calcul estimé pour ce semestre
            </Text>
            <Text>
              Crédits:&nbsp;
              {accumulatedCredits(form)}
            </Text>
            <Text>Notes pointage:&nbsp;
              {semesterGradePoints(form)}
            </Text>
            <Text>
              Moyenne cumulative globale sur 4,30:&nbsp; {semesterCalculateGPA(form)}
            </Text>
          </Container>

          <Container m={1}>
            <Text fontSize="md" as="b">
              Calcul estimé - total
            </Text>
            <Text>Total crédits:&nbsp; 
              {totalCredit(form)}
            </Text>
            <Text>Total notes pointage: &nbsp;
              {finalPoints(form)}
            </Text>
            <Text>
              Résultat moyenne cumulative globale sur 4,30:&nbsp;
              {finalGPA(form)}
            </Text>
            <Button>Grade de l'UQO</Button>
          </Container>
        </Container>
      )}
      <Container centerContent marginTop={4} marginBottom={3}>
        <Text>
          Lien source:&nbsp;
          <Link
            color="#2C5282"
            isExternal
            href="https://uqo.ca/sites/default/files/fichiers-uqo/departement-education/politiqueevaluationapprentissages.pdf"
          >
            UQO notes
          </Link>
        </Text>
        <Text>
          Code source:&nbsp;
          <Link
            color="#2C5282"
            isExternal
            href="https://github.com/cbun097/uqo-gpa-calculator"
          >
            Github
          </Link>
        </Text>
        <Text>© 2020 made by Claire</Text>
      </Container>
    </div>
  );
}

export default App;
