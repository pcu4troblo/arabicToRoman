import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanNumbersService {

  constructor() { }

  arabicToRoman(num: Number){

    

    if (num>5 && num<9){
      var i = num - 5;
      return "V"+this.aisgnaI(i);;
    }

    if(num < 4){
    return this.aisgnaI(num);
  }

    if (num == 4){
    return "IV";
    }

    if (num == 5){
      return "V";
      }

    if (num == 9){
        return "IX";
      }
  }

  aisgnaI(num: Number){
        let roman: string = "";
        for(let i=0; i<num; i++){
          roman += "I"; 
        }
        return roman;
  }

  

}
