//FIXME: remove lint error
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useState } from 'react';
import './App.css';
import { Button, Container, FormControl, FormLabel, Heading, HStack, Input, Stack, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import ReactGA from 'react-ga';
import {
  accumulatedCredits,
  semesterCalculateGPA,
  calculateGradePoints,
  finalGPA,
  finalPoints,
  IFormInput,
  initialValues,
  semesterGradePoints,
  totalCredits,
} from './utils';
import { ModalTableGrade } from './modal-table-grade';
import { Footer } from './Footer';

export function App() {
  const { register, handleSubmit, errors } = useForm<IFormInput>();
  const [form, setForm] = useState<IFormInput>(initialValues);
  const [btnClicked, setBtnClicked] = useState(false);
  const onSubmit = async (data: IFormInput) => {
    setForm(data);
  };
  const submitCalcul = () => {
    setBtnClicked(true);
    ReactGA.event({
      category: 'Submit',
      action: 'Calculate GPA',
    });
  };

  useEffect(() => {
    ReactGA.initialize('G-115SPZX12W1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <div>
      <Container maxW='xl' centerContent padding={5}>
        <Heading as='h2' size='2xl' paddingBottom='4'>
          UQO - Calculatrice GPA
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl id='currentGPA'>
            <FormLabel>Moyenne cumulative globale sur 4,30: </FormLabel>
            <Input type='text' name='currentGPA' id='currentGPA' ref={register({ min: 0, max: 4.3 })} />
            {errors.currentGPA && 'Votre GPA est invalide'}
          </FormControl>
          <FormControl id='currentCreditsEarned' marginTop='3'>
            <FormLabel>Crédits réussis: </FormLabel>
            <Input type='text' name='currentCreditsEarned' id='currentCreditsEarned' ref={register({ pattern: /^\d+$/ })} />
            {errors.currentCreditsEarned && 'Seul les chiffres sont acceptés'}
          </FormControl>

          <Container m={1}>
            <Text>Ce semestre</Text>
            <Text>Les cours pris cette session ou les cours prévus</Text>
          </Container>

          <HStack spacing='24px' marginTop='3'>
            <FormControl id='credits-earned'>
              <FormLabel>Crédits: </FormLabel>
              <Input type='text' name='creditsEarned1' id='creditsEarned1' ref={register({ required: true, pattern: /^\d+$/ })} />
              {errors.currentCreditsEarned && 'Seul les chiffres sont acceptés'}
            </FormControl>

            <FormControl id='credits-earned'>
              <FormLabel>Résultat: </FormLabel>
              <Input
                type='text'
                name='resultEarned1'
                id='resultEarned1'
                ref={register({ required: true, pattern: /^([A-Ea-e+-]*$){2}/ })}
              />
              {errors.currentCreditsEarned && 'Seul les lettres de A à E sont acceptés'}
            </FormControl>
          </HStack>

          <HStack spacing='24px' marginTop='3'>
            <FormControl id='credits-earned'>
              <FormLabel>Crédits: </FormLabel>
              <Input type='text' name='creditsEarned2' id='creditsEarned2' ref={register({ required: true })} />
              {errors.creditsEarned2 && 'Champ obligatoire'}
            </FormControl>

            <FormControl id='credits-earned'>
              <FormLabel>Résultat: </FormLabel>
              <Input type='text' name='resultEarned2' id='resultEarned2' ref={register({ required: true })} />
              {errors.resultEarned2 && 'Champ obligatoire'}
            </FormControl>
          </HStack>
          <HStack spacing='24px' marginTop='3'>
            <FormControl id='credits-earned'>
              <FormLabel>Crédits: </FormLabel>
              <Input type='text' name='creditsEarned3' id='creditsEarned3' ref={register} />
            </FormControl>

            <FormControl id='credits-earned'>
              <FormLabel>Résultat: </FormLabel>
              <Input type='text' name='resultEarned3' id='resultEarned3' ref={register} />
            </FormControl>
          </HStack>
          <HStack spacing='24px' marginTop='3'>
            <FormControl id='credits-earned'>
              <FormLabel>Crédits: </FormLabel>
              <Input type='text' name='creditsEarned4' id='creditsEarned4' ref={register} />
            </FormControl>

            <FormControl id='credits-earned'>
              <FormLabel>Résultat: </FormLabel>
              <Input type='text' name='resultEarned4' id='resultEarned4' ref={register} />
            </FormControl>
          </HStack>
          <HStack spacing='24px' marginTop='3'>
            <FormControl id='credits-earned'>
              <FormLabel>Crédits: </FormLabel>
              <Input type='text' name='creditsEarned5' id='creditsEarned5' ref={register} />
            </FormControl>

            <FormControl id='credits-earned'>
              <FormLabel>Résultat: </FormLabel>
              <Input type='text' name='resultEarned5' id='resultEarned5' ref={register} />
            </FormControl>
          </HStack>

          <Stack direction='row' spacing={4} padding='5' justify='center'>
            <Button type='submit' onClick={() => submitCalcul()}>
              Calculer
            </Button>
            <Button type='reset' onClick={() => setBtnClicked(false)}>
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
          <Text fontSize='lg' as='b'>
            Résultats:
          </Text>
          <Container m={1}>
            <Text fontSize='md' as='b'>
              Au début du semestre
            </Text>
            <Text>
              Crédits:&nbsp;
              {form?.currentCreditsEarned}
            </Text>
            <Text>
              Notes pointage:&nbsp;
              {calculateGradePoints(form?.currentCreditsEarned, form?.currentGPA)}
            </Text>
            <Text>
              Moyenne cumulative globale sur 4,30:&nbsp;
              {form?.currentGPA}
            </Text>
          </Container>

          <Container m={1}>
            <Text fontSize='md' as='b'>
              Calcul estimé pour ce semestre
            </Text>
            <Text>
              Crédits:&nbsp;
              {accumulatedCredits(form)}
            </Text>
            <Text>
              Notes pointage:&nbsp;
              {semesterGradePoints(form)}
            </Text>
            <Text>
              Moyenne cumulative globale sur 4,30:&nbsp;
              {semesterCalculateGPA(form)}
            </Text>
          </Container>

          <Container m={1}>
            <Text fontSize='md' as='b'>
              Calcul estimé - total
            </Text>
            <Text>
              Total crédits:&nbsp;
              {totalCredits(form)}
            </Text>
            <Text>
              Total notes pointage: &nbsp;
              {finalPoints(form)}
            </Text>
            <Text>
              Résultat moyenne cumulative globale sur 4,30:&nbsp;
              {finalGPA(form)}
            </Text>
            <ModalTableGrade />
          </Container>
        </Container>
      )}
      <Footer />
    </div>
  );
}

export default App;
