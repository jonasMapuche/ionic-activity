export class Formula {

    name: string;
    initial: string;
    description: string;

}

export class Equation {

    initial: string;
    prefix: string;
    signal: string;
    sequence: number;
    description: string;

}

export class Activity {

    name: Array<string>;
    formula: Formula;
    equation: Equation;

}