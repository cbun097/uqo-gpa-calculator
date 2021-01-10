
export interface IFormInput {
    currentGPA: number;
    currentCreditsEarned: number;
    // TEMP
    creditsEarned1: number;
    creditsEarned2: number;
    creditsEarned3: number;
    creditsEarned4: number;
    creditsEarned5: number;
    incomingCredits?: number[];
    incomingResults?: number[];
}

/** fonction qui permet de calculer les points
* nombre de credits accumules * gpa actuelle
*/

// export function calculateGradePoints(credits: any, currentGPA: any): number {
//     return Number(credits) * Number(currentGPA);
// }

export function calculateGradePoints(credits: number, currentGPA: number): number {
    return credits * currentGPA;
    }

export function accumulatedCredits(c1: any, c2: any, c3: any, c4:any, c5?:any): number {
    return Number(c1) + Number(c2) + Number(c3) + Number(c4) + Number(c5);
}

// export function accumulatedCredits(c1: number, c2: number, c3: number, c4:number, c5?:number): number {
//     console.log(typeof c1)
//     return c1 + c2 + c3 + c4;
// }

export function calculateGPA() {
    return "WIP"
}

export function finalGPA() {

}