import { Answer } from "./Answer";

export class StudentAnswer{
    student_id!:string;
    test_id!:number;
    answers:Answer[]=[];

    constructor(){}
}