
export interface Result {
    id: number;
    discipline: string;
    participant: string;
    result: string;
}

export interface Discipline {
    id: number;
    disciplineName: string;
    disciplineType: string;
    resultsId: number[];
}

export interface Participant {
    id: number;
    name: string;
    age: number;
    club: string;
}