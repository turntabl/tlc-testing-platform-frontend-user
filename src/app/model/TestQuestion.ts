import { Option } from "./Option";

export class TestQuestion{
     questionId!:number;
     question!:string;
     mark_allocated!:number;
     options:Option[]=[];
     constructor(){
     }     
}