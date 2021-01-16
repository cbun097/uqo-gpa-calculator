import React from 'react';
import { Container, Text } from '@chakra-ui/react';
import {
  accumulatedCredits,
  calculateGradePoints,
  finalGPA,
  finalPoints,
  IFormInput,
  semesterCalculateGPA,
  semesterGradePoints,
  totalCredits,
} from '../actions/utils';

interface IResult {
  isFirstSemester: boolean;
  form: IFormInput;
}

export const Results: React.FC<IResult> = (props: IResult) => {
  return (
    <Container>
      <Text fontSize='lg' as='b'>
        Résultats:
      </Text>
      {!props.isFirstSemester && (
        <Container m={1}>
          <Text fontSize='md' as='b'>
            Au début du semestre
          </Text>
          <Text>
            Crédits: &nbsp;
            {props.form.currentCreditsEarned}
          </Text>
          <Text>
            Notes pointage: &nbsp;
            {calculateGradePoints(props.form?.currentCreditsEarned, props.form?.currentGPA)}
          </Text>
          <Text>
            Moyenne cumulative globale sur 4,30: &nbsp;
            {props.form?.currentGPA}
          </Text>
        </Container>
      )}

      <Container m={1}>
        <Text fontSize='md' as='b'>
          Calcul estimé pour ce semestre
        </Text>
        <Text>
          Crédits: &nbsp;
          {accumulatedCredits(props.form)}
        </Text>
        <Text>
          Notes pointage: &nbsp;
          {semesterGradePoints(props.form)}
        </Text>
        <Text>
          Moyenne cumulative globale sur 4,30: &nbsp;
          {semesterCalculateGPA(props.form)}
        </Text>
      </Container>

      {!props.isFirstSemester && (
        <Container m={1}>
          <Text fontSize='md' as='b'>
            Calcul estimé - total
          </Text>
          <Text>
            Total crédits: &nbsp;
            {totalCredits(props.form)}
          </Text>
          <Text>
            Total notes pointage: &nbsp;
            {finalPoints(props.form)}
          </Text>
          <Text>
            Résultat moyenne cumulative globale sur 4,30: &nbsp;
            {finalGPA(props.form)}
          </Text>
        </Container>
      )}
    </Container>
  );
};
