import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDescribe]'
})
export class DescribeDirective {

  constructor() { }




  @HostBinding('style.border')
  border:string;


  @HostListener('input',['$event'])
  onkeydown(event:KeyboardEvent){
 // console.log("DescribeDirective -> onkeydown -> event", event.target['value'])
    const inputText= event.target as HTMLInputElement;
     

    if(inputText.value.length< 10){
     this.border='solid 2px #8B0000 !important';
    }


    
  }
}
