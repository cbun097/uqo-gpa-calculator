import { Container, FormControl, FormLabel, Switch, Input, HStack, Stack, Button, Text, IconButton, Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { createArrayWithNumbers } from '../actions/utils';
import ReactGA from 'react-ga';
import { Results } from './Results';
import { ModalTableGrade } from '../modal-table-grade';
import { DeleteIcon } from '@chakra-ui/icons';
import { IFormInput, initialValues } from '../types/types';
import '../App.css';

interface ICreditForm {
  isFirstSemester: boolean;
  form: IFormInput;
}

export const CreditsForm: React.FC<ICreditForm> = () => {
  const [form, setForm] = useState<IFormInput>(initialValues);
  const [btnClicked, setBtnClicked] = useState(false);
  const [isFirstSemester, setIsFirstSemester] = useState(false);
  const { register, handleSubmit, getValues, errors, clearErrors, formState } = useForm<IFormInput>({ mode: 'onChange' });
  const [size, setSize] = useState(0);
  const onSubmit = async (data: IFormInput) => {
    //TODO: handle error
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
      action: 'Calculate GPA par credit',
    });
  };
  useEffect(() => {
    // console.log('touched', formState.touched);
  }, [formState]);

  return (
    <>
      <Box p={5}>
        <Text fontSize='sm' color='gray.500' pb={3}>
          Afin d&#39;obtenir une moyenne approximatif, veuillez consulter votre relevés de notes.
        </Text>
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
                <FormLabel htmlFor='currentGPA'>Moyenne cumulative globale sur 4,30: </FormLabel>
                <Input
                  type='text'
                  name='currentGPA'
                  id='currentGPA'
                  ref={register({ max: { value: 4.3, message: 'Votre GPA est invalide' } })}
                />
                {errors.currentGPA && <p className='error'>{errors.currentGPA.message}</p>}
              </FormControl>
              <FormControl id='currentCreditsEarned' marginTop='3'>
                <FormLabel>Crédits réussis: </FormLabel>
                <Input
                  type='text'
                  name='currentCreditsEarned'
                  id='currentCreditsEarned'
                  ref={register({ pattern: { value: /^\d+$/, message: 'Seul les chiffres sont acceptés' } })}
                />
                {errors.currentCreditsEarned && <p className='error'>{errors.currentCreditsEarned.message}</p>}
              </FormControl>
            </div>
          )}
          <Container m={1}>
            <Text>Ce semestre</Text>
            <Text>Les cours pris cette session ou les cours prévus.</Text>
          </Container>
          <HStack spacing='24px' marginTop='3'>
            <FormControl id='creditsEarned1'>
              <FormLabel htmlFor='creditsEarned1'>Crédits: </FormLabel>
              <Input
                type='text'
                name='creditsEarned1'
                id='creditsEarned1'
                ref={register({ required: 'Champs obligatoire', pattern: { value: /^\d+$/, message: 'Seul les chiffres sont acceptés' } })}
              />
              {errors.creditsEarned1 && <p className='error'>{errors.creditsEarned1.message}</p>}
            </FormControl>

            <FormControl id='resultEarned1'>
              <FormLabel htmlFor='resultEarned1'>Résultat: </FormLabel>
              <Input
                type='text'
                name='resultEarned1'
                id='resultEarned1'
                ref={register({
                  required: 'Champs obligatoire',
                  pattern: { value: /^([A-Ea-e+-]*$){2}/, message: 'Seul les lettres de A à E sont acceptés' },
                })}
              />
              {errors.resultEarned1 && <p className='error'>{errors.resultEarned1.message}</p>}
            </FormControl>
          </HStack>
          <HStack spacing='24px' marginTop='3'>
            <FormControl id='creditsEarned2'>
              <FormLabel htmlFor='creditsEarned2'>Crédits: </FormLabel>
              <Input
                type='text'
                name='creditsEarned2'
                id='creditsEarned2'
                ref={register({ pattern: { value: /^\d+$/, message: 'Seul les chiffres sont acceptés' } })}
              />
              {errors.creditsEarned2 && <p className='error'>{errors.creditsEarned2.message}</p>}
            </FormControl>

            <FormControl id='resultEarned2'>
              <FormLabel htmlFor='resultEarned2'>Résultat: </FormLabel>
              <Input
                type='text'
                name='resultEarned2'
                id='resultEarned2'
                ref={register({ pattern: { value: /^([A-Ea-e+-]*$){2}/, message: 'Seul les lettres de A à E sont acceptés' } })}
              />
              {errors.resultEarned2 && <p className='error'>{errors.resultEarned2.message}</p>}
            </FormControl>
          </HStack>
          <HStack spacing='24px' marginTop='3'>
            <FormControl id='creditsEarned3'>
              <FormLabel htmlFor='creditsEarned3'>Crédits: </FormLabel>
              <Input
                type='text'
                name='creditsEarned3'
                id='creditsEarned3'
                ref={register({ pattern: { value: /^\d+$/, message: 'Seul les chiffres sont acceptés' } })}
              />
              {errors.creditsEarned3 && <p className='error'>{errors.creditsEarned3.message}</p>}
            </FormControl>

            <FormControl id='resultEarned3'>
              <FormLabel htmlFor='resultEarned3'>Résultat: </FormLabel>
              <Input
                type='text'
                name='resultEarned3'
                id='resultEarned3'
                ref={register({ pattern: { value: /^([A-Ea-e+-]*$){2}/, message: 'Seul les lettres de A à E sont acceptés' } })}
              />
              {errors.resultEarned3 && <p className='error'>{errors.resultEarned3.message}</p>}
            </FormControl>
          </HStack>
          <HStack spacing='24px' marginTop='3'>
            <FormControl id='creditsEarned4'>
              <FormLabel htmlFor='creditsEarned4'>Crédits: </FormLabel>
              <Input
                type='text'
                name='creditsEarned4'
                id='creditsEarned4'
                ref={register({ pattern: { value: /^\d+$/, message: 'Seul les chiffres sont acceptés' } })}
              />
              {errors.creditsEarned4 && <p className='error'>{errors.creditsEarned4.message}</p>}
            </FormControl>

            <FormControl id='resultEarned4'>
              <FormLabel htmlFor='resultEarned4'>Résultat: </FormLabel>
              <Input
                type='text'
                name='resultEarned4'
                id='resultEarned4'
                ref={register({ pattern: { value: /^([A-Ea-e+-]*$){2}/, message: 'Seul les lettres de A à E sont acceptés' } })}
              />
              {errors.resultEarned4 && <p className='error'>{errors.resultEarned4.message}</p>}
            </FormControl>
          </HStack>
          <HStack spacing='24px' marginTop='3'>
            <FormControl id='creditsEarned5'>
              <FormLabel fpr='creditsEarned5'>Crédits: </FormLabel>
              <Input
                type='text'
                name='creditsEarned5'
                id='creditsEarned5'
                ref={register({ pattern: { value: /^\d+$/, message: 'Seul les chiffres sont acceptés' } })}
              />
              {errors.creditsEarned5 && <p className='error'>{errors.creditsEarned5.message}</p>}
            </FormControl>

            <FormControl id='resultEarned5'>
              <FormLabel htmlFor='resultEarned5'>Résultat: </FormLabel>
              <Input
                type='text'
                name='resultEarned5'
                id='resultEarned5'
                ref={register({ pattern: { value: /^([A-Ea-e+-]*$){2}/, message: 'Seul les lettres de A à E sont acceptés' } })}
              />
              {errors.resultEarned5 && <p className='error'>{errors.resultEarned5.message}</p>}
            </FormControl>
          </HStack>
          {createArrayWithNumbers(size).map(index => {
            return (
              <HStack spacing='24px' marginTop='3' key={index} align='center'>
                <FormControl id={`creditsEarnedArray[${index}]`}>
                  <FormLabel htmlFor={`creditsEarnedArray[${index}]`}>Crédits: </FormLabel>
                  <Input
                    type='text'
                    name={`creditsEarnedArray[${index}]`}
                    id={`creditsEarnedArray[${index}]`}
                    ref={register({ pattern: { value: /^\d+$/, message: 'Seul les chiffres sont acceptés' } })}
                  />
                  {errors.creditsEarnedArray && <p className='error'>{errors.creditsEarnedArray.map(e => e?.message)}</p>}
                </FormControl>

                <FormControl id={`resultEarnedArray[${index}]`}>
                  <FormLabel htmlFor={`resultEarnedArray[${index}]`}>Résultat: </FormLabel>
                  <Input
                    type='text'
                    name={`resultEarnedArray[${index}]`}
                    id={`resultEarnedArray[${index}]`}
                    ref={register({ pattern: { value: /^([A-Ea-e+-]*$){2}/, message: 'Seul les lettres de A à E sont acceptés' } })}
                  />
                  {errors.resultEarnedArray && <p className='error'>{errors.resultEarnedArray.map(e => e?.message)}</p>}
                </FormControl>
                {size >= 1 && (
                  <Box pt={[3, 6]}>
                    <IconButton aria-label='supprimer rangee' size='lg' icon={<DeleteIcon />} onClick={() => setSize(size - 1)} />
                  </Box>
                )}
              </HStack>
            );
          })}
          <Stack direction={['column', 'row']} spacing={4} p={5} justify='center'>
            <Button type='submit' id='btn-credit-calcul' isDisabled={!formState.isValid} onClick={() => submitCalcul()}>
              Calculer
            </Button>
            <Button
              type='reset'
              id='btn-credit-reset'
              onClick={() => {
                setBtnClicked(false), clearErrors();
              }}
            >
              Réinitialiser
            </Button>
            <Button type='button' onClick={() => setSize(size + 1)} id='btn-credit-rangee'>
              Ajouter une rangée
            </Button>
          </Stack>
        </form>
        {/* for testing purposes */}
        {/* <pre>{JSON.stringify(formState, null, 2)}</pre> */}

        {btnClicked && formState.isValid && (
          <Container>
            <Results form={form} isFirstSemester={isFirstSemester} />
            <ModalTableGrade />
          </Container>
        )}
      </Box>
    </>
  );
};
