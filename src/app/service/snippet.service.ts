import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnippetService {
  codeCutout!: string;

  constructor() { }

  displayCode(code: string){
    if(code!=null){
    var firstIndex = code.indexOf("`");
    var lastIndex = code.lastIndexOf("`");
    var cutOutCode = code.slice(firstIndex, lastIndex);
    this.codeCutout = cutOutCode;
    return cutOutCode.slice(1);
    }else{
      return null;
    }
  }

  displayText(text: string){
    if(text!=null){
      if(this.codeCutout!=""){
      return text.replace(this.codeCutout,"");
      }else{
        return text;
        }
      }else{
        return null;
        }
  }
}