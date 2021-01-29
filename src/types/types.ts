export interface IFormInput {
  currentGPA: number;
  currentCreditsEarned: number;
  sigle1?: string;
  sigle2?: string;
  sigle3?: string;
  sigle4?: string;
  sigle5?: string;
  creditsEarned1: number;
  creditsEarned2: number;
  creditsEarned3?: number;
  creditsEarned4?: number;
  creditsEarned5?: number;
  resultEarned1: string;
  resultEarned2: string;
  resultEarned3?: string;
  resultEarned4?: string;
  resultEarned5?: string;
  creditsEarnedArray?: number[];
  resultEarnedArray?: string[];
  sigleArray?: string[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface IResultsList {
  creditsEarned: number[];
  resultEarned: string[];
}

export const initialValues: IFormInput = {
  currentGPA: 0,
  currentCreditsEarned: 0,
  creditsEarned1: 0,
  creditsEarned2: 0,
  creditsEarned3: 0,
  creditsEarned4: 0,
  sigle1: '',
  resultEarned1: '',
  resultEarned2: '',
  resultEarned3: '',
  resultEarned4: '',
};

export const notationList: string[] = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'E'];
export const pointsList: number[] = [4.3, 4.0, 3.7, 3.3, 3.0, 2.7, 2.3, 2.0, 1.7, 1.3, 1.0, 0];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const notationMap = {
  'A+': 4.3,
  A: 4.0,
  'A-': 3.7,
  'B+': 3.3,
  B: 3.0,
  'B-': 2.7,
  'C+': 2.3,
  C: 2.0,
  'C-': 1.7,
  'D+': 1.0,
  D: 1.0,
  E: 0,
};
