//FIXME: typesafe some of the any type
import { CoursUqoList } from '../assets/cours';
import { IFormInput, notationList, pointsList } from '../types/types';

/** Fonction qui prend le sigle du cours selon le input
 * entrés par l'utilisateur
 */
//TODO: validation si le sigle entrée n'existe pas dans la liste
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getItemFromList(input: string): any {
  const element = CoursUqoList.filter(element => element.sigle === input);
  return element;
}

/** Fonction qui prend le sigle du cours selon le input
 * et le sigle entrés par l'utilisateur
 */
export function getSigle(input: string): string {
  const element = getItemFromList(input);
  const sigle = element[0].sigle;
  return sigle != null ? sigle : '';
}

/** Fonction qui prend le titre du cours selon le input
 * et le sigle entrés par l'utilisateur
 */
export function getTitre(input: string): string {
  const element = getItemFromList(input);
  const titre = element[0].titre;
  return titre != null ? titre : '';
}

/** Fonction qui prend le crédit du cours selon le input
 * et le sigle entrés par l'utilisateur
 */
export function getCredit(input: string): string {
  const sigle = getItemFromList(input);
  const credit = String(sigle[0].credit);
  console.log(credit);
  return credit;
}

/** create an array with number for additional credits and result */
export function createArrayWithNumbers(length: number): number[] {
  return Array.from({ length }, (_, k) => k);
}

/** fonction qui permet de calculer les points
 * nombre de credits accumules * gpa actuelle
 */
export function calculateGradePoints(credits: number, currentGPA: number): number {
  const opp = (credits * currentGPA).toPrecision(5);
  return Number(opp);
}

/**
 * Fonction qui permet de calculer les credits accumuler pour le semestre
 */
export function accumulatedCredits(formData: IFormInput): number {
  let sumArray = 0;
  formData.creditsEarnedArray?.map(element => {
    sumArray += Number(element);
  });
  return (
    Number(formData.creditsEarned1) +
    Number(formData.creditsEarned2) +
    Number(formData?.creditsEarned3 ? formData.creditsEarned3 : 0) +
    Number(formData?.creditsEarned4 ? formData.creditsEarned4 : 0) +
    Number(formData?.creditsEarned5 ? formData.creditsEarned5 : 0) +
    sumArray
  );
}

/**
 * Fonction qui convertit le resultat en lettre obtenue en point
 * @param input
 */
export function convertLetterToPoints(input: string): number {
  // eslint-disable-next-line
  const letterIndex: any = notationList.indexOf(input);
  return pointsList[letterIndex];
}

/**
 * Calculer les points accumulates selon le resultat obtenu
 */
export function semesterGradePoints(formData: IFormInput): number {
  let sum = 0;
  let totalPts = 0;
  // eslint-disable-next-line
  const results: any[] = [
    formData.resultEarned1,
    formData.resultEarned2,
    formData?.resultEarned3 ? formData.resultEarned3 : 0,
    formData?.resultEarned4 ? formData.resultEarned4 : 0,
    formData?.resultEarned5 ? formData.resultEarned5 : 0,
    formData?.resultEarnedArray,
  ];
  // eslint-disable-next-line
  const credits: any[] = [
    formData.creditsEarned1,
    formData.creditsEarned2,
    formData?.creditsEarned3 ? formData.creditsEarned3 : 0,
    formData?.creditsEarned4 ? formData.creditsEarned4 : 0,
    formData?.creditsEarned5 ? formData.creditsEarned5 : 0,
    formData?.creditsEarnedArray,
  ];
  // eslint-disable-next-line
  let convert: any;
  for (let i = 0; i <= results.length - 1; i++) {
    convert = results[i] != 0 ? convertLetterToPoints(String(results[i]).toUpperCase()) : 0;
    totalPts = convert * credits[i];
    sum += totalPts;
  }
  return sum;
}

/**
 * Calcule du GPA estime
 * semester points/ accumalated credits
 */
export function semesterCalculateGPA(formData: IFormInput): number {
  const grade: number = semesterGradePoints(formData);
  const opp = Number(grade) / accumulatedCredits(formData);
  return Number(opp.toPrecision(5));
}

/**
 * Calculer le total des credits
 * Current credit + accumulated credits
 * @param results
 */
export function totalCredits(results: IFormInput): number {
  const accCredit: number = accumulatedCredits(results);
  return Number(results.currentCreditsEarned) + accCredit;
}

/**
 * Calculer les points totaux
 * Current pts + accumulated points
 * @param results
 */
export function finalPoints(results: IFormInput): number {
  const operation = calculateGradePoints(results.currentCreditsEarned, results.currentGPA) + Number(semesterGradePoints(results));
  return Number(operation.toPrecision(5));
}

/**
 * Calculer le GPA final
 * (Current GPA + Estimated GPA) / 2
 * @param results
 */
export function finalGPA(results: IFormInput): number {
  const operation = (semesterCalculateGPA(results) + Number(results.currentGPA)) / 2;
  return Number(operation.toPrecision(5));
}
