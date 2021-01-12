//FIXME:
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export interface IFormInput {
  currentGPA: number;
  currentCreditsEarned: number;
  // TEMP
  creditsEarned1: number;
  creditsEarned2: number;
  creditsEarned3: number;
  creditsEarned4: number;
  creditsEarned5?: number;
  // TEMP
  resultEarned1: number | string;
  resultEarned2: number | string;
  resultEarned3: number | string;
  resultEarned4?: number | string;
  resultEarned5?: number | string;
}

export const initialValues: IFormInput = {
  currentGPA: 0,
  currentCreditsEarned: 0,
  // TEMP
  creditsEarned1: 0,
  creditsEarned2: 0,
  creditsEarned3: 0,
  creditsEarned4: 0,
  creditsEarned5: 0,
  // TEMP
  resultEarned1: 0,
  resultEarned2: 0,
  resultEarned3: 0,
  resultEarned4: 0,
  resultEarned5: 0,
};

const notationList: string[] = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'E'];
const pointsList: number[] = [4.3, 4.0, 3.7, 3.3, 3.0, 2.7, 2.3, 2.0, 1.7, 1.3, 1.0, 0];

/** fonction qui permet de calculer les points
 * nombre de credits accumules * gpa actuelle
 */
export function calculateGradePoints(credits: number, currentGPA: number): number {
  return credits * currentGPA;
}

/**
 * Fonction qui permet de calculer les credits accumuler pour le semestre
 * @param c1
 * @param c2
 * @param c3
 * @param c4
 * @param c5
 */
export function accumulatedCredits(formData: IFormInput): number {
  return (
    Number(formData.creditsEarned1) +
    Number(formData.creditsEarned2) +
    Number(formData.creditsEarned3) +
    Number(formData?.creditsEarned4 ? formData.creditsEarned4 : 0) +
    Number(formData?.creditsEarned5 ? formData.creditsEarned5 : 0)
  );
}

/**
 * Fonction qui convertit le resultat en lettre obtenue en point
 * @param input
 */
export function convertLetterToPoints(input: string) {
  // eslint-disable-next-line
  const letterIndex: any = notationList.indexOf(input);
  return pointsList[letterIndex];
}

/**
 * Calculer les points accumulates selon le resultat obtenu
 * @param credits
 * @param results
 */
export function semesterGradePoints(formData: IFormInput) {
  let sum = 0;
  let total = 0;
  // eslint-disable-next-line
  const results: any[] = [
    formData.resultEarned1,
    formData.resultEarned2,
    formData.resultEarned3,
    formData.resultEarned4,
    formData.resultEarned5,
  ];
  // eslint-disable-next-line
  const credits: any[] = [
    formData.creditsEarned1,
    formData.creditsEarned2,
    formData.creditsEarned3,
    formData.creditsEarned4,
    formData.creditsEarned5,
  ];
  results.forEach(element => {
    const value = convertLetterToPoints(element.toString());
    credits.forEach(e => {
      total = value * e;
    });
    sum += total;
  });
  return sum;
}

/**
 * Calcule du GPA estime
 * semester points/ accumalated credits
 * @param gpa
 * @param credits
 */
export function semesterCalculateGPA(formData: IFormInput): number {
  const grade: number = semesterGradePoints(formData);
  const opp = (Number(grade) / accumulatedCredits(formData)).toFixed(3);
  return Number(opp);
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
  return calculateGradePoints(results.currentCreditsEarned, results.currentGPA) + Number(semesterGradePoints(results));
}

/**
 * Calculer le GPA final
 * (Current GPA + Estimated GPA) / 2
 * @param results
 */
export function finalGPA(results: IFormInput): number {
  return (semesterCalculateGPA(results) + Number(results.currentGPA)) / 2;
}
