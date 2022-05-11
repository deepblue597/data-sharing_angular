import { AfterViewInit, ViewChild } from '@angular/core';
import { Component, ElementRef, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/interaction.service';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {

  constructor(private _interactionService: InteractionService) { }

  todaysFood = ['steak', 'lasagna', 'scrumbled eggs'] ; 
  todaysBeverage = [''] ; 

  addBeverage(newBev: string) { 
    this.todaysBeverage.push(newBev) ; 
  }

  /***************************************** */
  /** codevolution functions  */

  /** Theory: 
   *  class to template 
   * interpoaltion {{}} || property binding []
   * 
   * template to class 
   * event biding() 
   * 
   * both ways: 
   * two way binding [()]   
   */

  // interpolation 

  pageTitle = 'angular component interaction'; 

  // property binding 

  imgUrl='https://picsum.photos/200' ; 

  // event binding 

  count= 0 ; 
  incrementCount () { 
    this.count += 1 ; 
  }

  ngOnInit(): void {
  }

  //two way binding 
  //ESSENTIAL to forms when you want to submit a form or load a form with prefilled data 
  //probably the best way for the forms as a result 
  name: string | undefined; 

  //when i try to console log it its impossible in here  


          /** video 4th split two way binding */

  username: string | undefined; 

  greetJason(updatedName: string | undefined){ 
    this.username = updatedName ;
    if(updatedName=='Jason'){
      alert('welcome back Jason') ; 
    }
  }

  /** Video 5 Getters and Setters */

  private _customerName!: string;

  get customerName(): string { 
    return this._customerName ; 
  }

  set customerName(value: string) {
    this._customerName = value ; 
    if(value=='Jason'){
      alert('Hellooo Jason') ; 
    }
  }

      /** Video 6th Viewchild decorator  */

  names: string | undefined; 
  @ViewChild('nameRef', { static: false })
  namesElementRef!: ElementRef;

  //basecly what this does is it puts the focus of the page to the input so you can immediately write what you want
  // ngAfterViewInit(){
  //   this.namesElementRef.nativeElement.focus() ;
  //   console.log(this.namesElementRef) ; 
  // }

  /** vid 7 parent and child components intro video */

        /** Video 8 input decorator  */
  
  userLoggedIn = true ; 

        /** 9th video  */

        /** 10th video ngOnChange */

  /** 11th video  */

  /** from the parent component we are  accessing a property from the child component using the viewchild decorator  */
 @ViewChild(ChildComponent) childComponenetRef!: ChildComponent;
  
 ngAfterViewInit(): void {
     this.childComponenetRef.message = 'message from parent component' ; 
 }
  
 /** output decorator 12th video  */

 /** video 13  */
  /** when we build medium to large applications we are going to come across scenarios 
   * when a parent has multiple children 
   * but all those children want to execute the sam epiece of logic 
   * if we do that in every chuldren it will be difficult to maintain that code 
   * so a common practice is to write this of logic in the parent and then the children ask the parent to do execute the code 
   * 
   */

   greet(name:string) { 
    alert('hello my ' + name) ; 
  }

  /** 14th video  */

  greetStudent() { 
    this._interactionService.sendMessage('good morning') ; 
  }

  appreciateStudent() { 
    this._interactionService.sendMessage('well done!') ; 
  }

  
}

// print() {
//   console.log(this.name) ; object is possibly undefined 
// }

/** to sned data from the parent to the child we use the input method. 
 * what we do is on parent html we property bind the food of the child with 
 * todaysFood of the parent 
 * for an array we use the ngFor 
 */

/** using a service 
 * when the classes are not into rellation then we have to use a service in order to sharie data 
 * this is really helpful when we have anything else rather than parent child 
 * 
 */