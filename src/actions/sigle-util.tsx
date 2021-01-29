import { CoursUqoList } from '../assets/cours';

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

//TODO: put it as one method
/** Fonction qui prend le crédit du cours selon le input
 * et le sigle entrés par l'utilisateur
 */
export function getCredit(input: string): string {
  let credit;
  if (input != '') {
    const sigle = getItemFromList(input);
    credit = String(sigle[0].credit);
    console.log('credit', credit);
  }
  return credit != null ? credit : '';
}

export function getCreditArray(input: string[]): string {
  let credit;
  input.forEach(element => {
    const elementFromList = getItemFromList(element);
    const creditClass = String(elementFromList[0].credit);
    credit = creditClass;
  });
  return credit != null ? credit : '';
}
