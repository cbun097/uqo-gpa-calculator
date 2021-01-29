import { Container, FormControl, FormLabel, Switch, Input, HStack, Stack, Button, Text, IconButton, Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { createArrayWithNumbers } from '../actions/utils';
import ReactGA from 'react-ga';
import { Results } from './Results';
import { ModalTableGrade } from '../modal-table-grade';
import { DeleteIcon } from '@chakra-ui/icons';
import { IFormInput, initialValues } from '../types/types';
import { getCredit, getCreditArray } from '../actions/sigle-util';
import '../App.css';

interface ISigleForm {
  isFirstSemester: boolean;
  form: IFormInput;
}

export const SigleForm: React.FC<ISigleForm> = () => {
  const [form, setForm] = useState<IFormInput>(initialValues);
  const [btnClicked, setBtnClicked] = useState(false);
  const [isFirstSemester, setIsFirstSemester] = useState(false);
  const { register, handleSubmit, getValues, errors, formState } = useForm<IFormInput>();
  const [size, setSize] = useState(0);
  const onSubmit = async (data: IFormInput) => {
    const values: IFormInput = getValues();
    data = values;
    setForm(data);
  };
  const submitCalcul = () => {
    const values: IFormInput = getValues();
    console.log('formData', getValues());
    setForm(values);
    setBtnClicked(true);
    ReactGA.event({
      category: 'Submit',
      action: 'Calculate GPA par sigle',
    });
  };

  useEffect(() => {
    // console.log('touched', formState.touched);
  }, [formState, form]);
  return (
    <>
      <Box p={5}>
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
                  ref={register({
                    pattern: {
                      value: /^\d+$/,
                      message: 'Invalide: seul les chiffres sont acceptés',
                    },
                  })}
                />
                {errors.currentCreditsEarned && <p className='error'>{errors.currentCreditsEarned.message}</p>}
              </FormControl>
            </div>
          )}
          <Container m={1}>
            <Text>Ce semestre</Text>
            <Text>Les cours pris cette session ou les cours prévus</Text>
          </Container>
          <HStack spacing='24px' marginTop='3'>
            <FormControl id='credits-earned'>
              <FormLabel>Sigle: </FormLabel>
              <Input
                type='text'
                name='sigle1'
                id='sigle1'
                ref={register({
                  required: 'Champs obligatoire',
                  pattern: {
                    value: /^([A-Z0-9]*$)/,
                    message: 'Le signe invalide',
                  },
                })}
                placeholder='exemple: INF4083'
              />
              {errors.sigle1 && <p className='error'>{errors.sigle1.message}</p>}
            </FormControl>
            {btnClicked && formState.isValid && (
              <FormControl id='credit-pulled'>
                <FormLabel>Crédits:</FormLabel>
                <Input name='creditsEarned1' id='creditsEarned1' value={getCredit(String(form.sigle1))} ref={register} isReadOnly />
              </FormControl>
            )}
            <FormControl id='result-earned'>
              <FormLabel>Résultat: </FormLabel>
              <Input
                type='text'
                name='resultEarned1'
                id='resultEarned1'
                ref={register({ required: 'Champs obligatoire', pattern: /^([A-Ea-e+-]*$){2}/ })}
              />
              {errors.resultEarnedArray && 'Champs obligatoire: Seul les lettres de A à E sont acceptés'}
            </FormControl>
          </HStack>
          <HStack spacing='24px' marginTop='3'>
            <FormControl id='credits-earned'>
              <FormLabel>Sigle: </FormLabel>
              <Input
                type='text'
                name='sigle2'
                id='sigle2'
                ref={register({
                  pattern: {
                    value: /^([A-Z0-9]*$)/,
                    message: 'Le signe invalide',
                  },
                })}
                placeholder='exemple: INF4083'
              />
              {errors.sigle2 && <p className='error'>{errors.sigle2.message}</p>}
            </FormControl>
            {btnClicked && formState.isValid && (
              <FormControl id='credit-pulled'>
                <FormLabel>Crédits:</FormLabel>
                <Input name='creditsEarned2' id='creditsEarned2' value={getCredit(String(form.sigle2))} ref={register} isReadOnly />
              </FormControl>
            )}
            <FormControl id='result-earned'>
              <FormLabel>Résultat: </FormLabel>
              <Input type='text' name='resultEarned2' id='resultEarned2' ref={register({ pattern: /^([A-Ea-e+-]*$){2}/ })} />
              {errors.resultEarnedArray && 'Seul les lettres de A à E sont acceptés'}
            </FormControl>
          </HStack>
          <HStack spacing='24px' marginTop='3'>
            <FormControl id='credits-earned'>
              <FormLabel>Sigle: </FormLabel>
              <Input
                type='text'
                name='sigle3'
                id='sigle3'
                ref={register({
                  pattern: {
                    value: /^([A-Z0-9]*$)/,
                    message: 'Le signe invalide',
                  },
                })}
                placeholder='exemple: INF4083'
              />
              {errors.sigle3 && <p className='error'>{errors.sigle3.message}</p>}
            </FormControl>
            {btnClicked && formState.isValid && (
              <FormControl id='credit-pulled'>
                <FormLabel>Crédits:</FormLabel>
                <Input name='creditsEarned3' id='creditsEarned3' value={getCredit(String(form.sigle3))} ref={register} isReadOnly />
              </FormControl>
            )}
            <FormControl id='result-earned'>
              <FormLabel>Résultat: </FormLabel>
              <Input type='text' name='resultEarned3' id='resultEarned3' ref={register({ pattern: /^([A-Ea-e+-]*$){2}/ })} />
              {errors.resultEarnedArray && 'Seul les lettres de A à E sont acceptés'}
            </FormControl>
          </HStack>
          <HStack spacing='24px' marginTop='3'>
            <FormControl id='credits-earned'>
              <FormLabel>Sigle: </FormLabel>
              <Input
                type='text'
                name='sigle4'
                id='sigle4'
                ref={register({
                  pattern: {
                    value: /^([A-Z0-9]*$)/,
                    message: 'Le signe invalide',
                  },
                })}
                placeholder='exemple: INF4083'
              />
              {errors.sigle4 && <p className='error'>{errors.sigle4.message}</p>}
            </FormControl>
            {btnClicked && formState.isValid && (
              <FormControl id='credit-pulled'>
                <FormLabel>Crédits:</FormLabel>
                <Input name='creditsEarned4' id='creditsEarned4' value={getCredit(String(form.sigle4))} ref={register} isReadOnly />
              </FormControl>
            )}
            <FormControl id='result-earned'>
              <FormLabel>Résultat: </FormLabel>
              <Input type='text' name='resultEarned4' id='resultEarned4' ref={register({ pattern: /^([A-Ea-e+-]*$){2}/ })} />
              {errors.resultEarnedArray && 'Seul les lettres de A à E sont acceptés'}
            </FormControl>
          </HStack>
          <HStack spacing='24px' marginTop='3'>
            <FormControl id='credits-earned'>
              <FormLabel>Sigle: </FormLabel>
              <Input
                type='text'
                name='sigle5'
                id='sigle5'
                ref={register({
                  pattern: {
                    value: /^([A-Z0-9]*$)/,
                    message: 'Le signe invalide',
                  },
                })}
                placeholder='exemple: INF4083'
              />
              {errors.sigle5 && <p className='error'>{errors.sigle5.message}</p>}
            </FormControl>
            {btnClicked && formState.isValid && (
              <FormControl id='credit-pulled'>
                <FormLabel>Crédits:</FormLabel>
                <Input name='creditsEarned5' id='creditsEarned5' value={getCredit(String(form.sigle5))} ref={register} isReadOnly />
              </FormControl>
            )}
            <FormControl id='result-earned'>
              <FormLabel>Résultat: </FormLabel>
              <Input type='text' name='resultEarned5' id='resultEarned5' ref={register({ pattern: /^([A-Ea-e+-]*$){2}/ })} />
              {errors.resultEarnedArray && 'Seul les lettres de A à E sont acceptés'}
            </FormControl>
          </HStack>
          {createArrayWithNumbers(size).map(index => {
            return (
              <HStack spacing='24px' marginTop='3' key={index} align='center'>
                <FormControl id='credits-earned'>
                  <FormLabel>Sigle: </FormLabel>
                  <Input
                    type='text'
                    name={`sigleArray[${index}]`}
                    id={`sigleArray[${index}]`}
                    ref={register({
                      required: 'Champs obligatoire',
                      pattern: {
                        value: /^([A-Z0-9]*$)/,
                        message: 'Le signe invalide',
                      },
                    })}
                    placeholder='exemple: INF4083'
                  />
                  {errors.sigleArray && <p className='error'>{errors.sigleArray.map(e => e?.message)}</p>}
                </FormControl>
                {btnClicked && formState.isValid && (
                  <FormControl id='credit-pulled'>
                    <FormLabel>Crédits:</FormLabel>
                    <Input
                      name={`creditsEarnedArray[${index}]`}
                      id={`creditsEarnedArray[${index}]`}
                      value={getCreditArray(form.sigleArray ? form.sigleArray : [])}
                      ref={register}
                      isReadOnly
                    />
                  </FormControl>
                )}
                <FormControl id='result-earned'>
                  <FormLabel>Résultat: </FormLabel>
                  <Input
                    type='text'
                    name={`resultEarnedArray[${index}]`}
                    id={`resultEarnedArray[${index}]`}
                    ref={register({ pattern: /^([A-Ea-e+-]*$){2}/ })}
                  />
                  {errors.resultEarnedArray && 'Seul les lettres de A à E sont acceptés'}
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
