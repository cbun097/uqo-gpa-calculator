import { Container, Heading, FormControl, FormLabel, Switch, Input, HStack, Stack, Button, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IFormInput, createArrayWithNumbers, initialValues } from '../actions/utils';
import ReactGA from 'react-ga';
import { Results } from './Results';
import { ModalTableGrade } from '../modal-table-grade';

interface ICreditForm {
  isFirstSemester: boolean;
  form: IFormInput;
}

export const CreditsForm: React.FC<ICreditForm> = () => {
  const [form, setForm] = useState<IFormInput>(initialValues);
  const [btnClicked, setBtnClicked] = useState(false);
  const [isFirstSemester, setIsFirstSemester] = useState(false);
  const { register, handleSubmit, getValues, errors } = useForm<IFormInput>();
  const [size, setSize] = useState(1);
  const onSubmit = async (data: IFormInput) => {
    const values: IFormInput = getValues();
    data = values;
    setForm(data);
  };
  const submitCalcul = () => {
    const values: IFormInput = getValues();
    setForm(values);
    setBtnClicked(true);
    ReactGA.event({
      category: 'Submit',
      action: 'Calculate GPA',
    });
  };
  return (
    <>
      <Container maxW='xl' centerContent p={5}>
        <Heading as='h2' size='2xl' paddingBottom='4'>
          UQO - Calculatrice GPA
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl display='flex' alignItems='center'>
            <FormLabel htmlFor='firstSemester' mb='0'>
              Première session à l&#39;UQO?
            </FormLabel>
            <Switch
              id='firstSemester'
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setIsFirstSemester(event.target.checked);
              }}
              name='firstSemester'
            />
          </FormControl>
          {!isFirstSemester && (
            <div>
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
            </div>
          )}
          <Container m={1}>
            <Text>Ce semestre</Text>
            <Text>Les cours pris cette session ou les cours prévus</Text>
          </Container>
          <HStack spacing='24px' marginTop='3'>
            <FormControl id='credits-earned'>
              <FormLabel>Crédits: </FormLabel>
              <Input type='text' name='creditsEarned1' id='creditsEarned1' ref={register({ required: true, pattern: /^\d+$/ })} />
              {errors.currentCreditsEarned && 'Champs obligatoire: Seul les chiffres sont acceptés'}
            </FormControl>

            <FormControl id='credits-earned'>
              <FormLabel>Résultat: </FormLabel>
              <Input
                type='text'
                name='resultEarned1'
                id='resultEarned1'
                ref={register({ required: true, pattern: /^([A-Ea-e+-]*$){2}/ })}
              />
              {errors.currentCreditsEarned && 'Champs obligatoire: Seul les lettres de A à E sont acceptés'}
            </FormControl>
          </HStack>
          <HStack spacing='24px' marginTop='3'>
            <FormControl id='credits-earned'>
              <FormLabel>Crédits: </FormLabel>
              <Input type='text' name='creditsEarned2' id='creditsEarned2' ref={register({ pattern: /^\d+$/ })} />
              {errors.currentCreditsEarned && 'Seul les chiffres sont acceptés'}
            </FormControl>

            <FormControl id='credits-earned'>
              <FormLabel>Résultat: </FormLabel>
              <Input type='text' name='resultEarned2' id='resultEarned2' ref={register({ pattern: /^([A-Ea-e+-]*$){2}/ })} />
              {errors.currentCreditsEarned && 'Seul les lettres de A à E sont acceptés'}
            </FormControl>
          </HStack>
          <HStack spacing='24px' marginTop='3'>
            <FormControl id='credits-earned'>
              <FormLabel>Crédits: </FormLabel>
              <Input type='text' name='creditsEarned3' id='creditsEarned3' ref={register({ pattern: /^\d+$/ })} />
              {errors.currentCreditsEarned && 'Seul les chiffres sont acceptés'}
            </FormControl>

            <FormControl id='credits-earned'>
              <FormLabel>Résultat: </FormLabel>
              <Input type='text' name='resultEarned3' id='resultEarned3' ref={register({ pattern: /^([A-Ea-e+-]*$){2}/ })} />
              {errors.currentCreditsEarned && 'Seul les lettres de A à E sont acceptés'}
            </FormControl>
          </HStack>
          <HStack spacing='24px' marginTop='3'>
            <FormControl id='credits-earned'>
              <FormLabel>Crédits: </FormLabel>
              <Input type='text' name='creditsEarned4' id='creditsEarned4' ref={register({ pattern: /^\d+$/ })} />
              {errors.currentCreditsEarned && 'Seul les chiffres sont acceptés'}
            </FormControl>

            <FormControl id='credits-earned'>
              <FormLabel>Résultat: </FormLabel>
              <Input type='text' name='resultEarned4' id='resultEarned4' ref={register({ pattern: /^([A-Ea-e+-]*$){2}/ })} />
              {errors.currentCreditsEarned && 'Seul les lettres de A à E sont acceptés'}
            </FormControl>
          </HStack>
          {createArrayWithNumbers(size).map(index => {
            return (
              <HStack spacing='24px' marginTop='3' key={index}>
                <FormControl id='credits-earned'>
                  <FormLabel>Crédits: </FormLabel>
                  <Input type='text' name={`creditsEarned[${index}]`} id={`creditsEarned[${index}]`} ref={register({ pattern: /^\d+$/ })} />
                </FormControl>

                <FormControl id='credits-earned'>
                  <FormLabel>Résultat: </FormLabel>
                  <Input
                    type='text'
                    name={`resultEarned[${index}]`}
                    id={`resultEarned[${index}]`}
                    ref={register({ pattern: /^([A-Ea-e+-]*$){2}/ })}
                  />
                </FormControl>
              </HStack>
            );
          })}
          <Stack direction='row' spacing={4} padding='5' justify='center'>
            <Button type='submit' onClick={() => submitCalcul()}>
              Calculer
            </Button>
            <Button type='reset' onClick={() => setBtnClicked(false)}>
              Réinitialiser
            </Button>
            <Button type='button' onClick={() => setSize(size + 1)}>
              Ajouter une rangée
            </Button>
          </Stack>
        </form>
      </Container>
      {btnClicked && (
        <>
          <Container>
            <Results form={form} isFirstSemester={isFirstSemester} />
            <ModalTableGrade />
          </Container>
        </>
      )}
    </>
  );
};
