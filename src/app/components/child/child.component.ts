import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {

  @Input() food = 'default' ; 

  constructor(private _interactionService: InteractionService) { }

  @Output() newBeverageEmitter = new EventEmitter<string>(); 

  addNewBeverage(bev: string) { 
    this.newBeverageEmitter.emit(bev) ; 
  }
  
  
  /** video 8  */

  // we can put an alias as a name and put the original name isnide the Input() 
  /**  e.g Input('loggedIn') flagLogIn: boolean
   * but then we have to change the instances of the 
   * names in the html fo flagLogIn in child html 
   */
 
  @Input() loggedIn!: boolean; 

  /** 9th video  */
  /** here we changed the @Input() loggedIn!: boolean;
   * to private_loggedIn: boolean */ 

  // get loggedIn() {
  //   return this._loggedIn; 
  // }

  // @Input() 
  // set loggedIn(value: boolean){ 
  //   this._loggedIn = value ;
  //   if( value == true){ 
  //     this.message = 'welcome back Jason' ; 
  //   } 
  //   else { 
  //     this.message = 'please log in ' ; 
  //   }
  // }
  message!: string ;

  /** video 10  */
  /** we change again the privated _loggedIn to Input */

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes) ; 
      const loggedInValue = changes['loggedIn']; 
      if(loggedInValue.currentValue == true) {
        this.message = 'welcome back Jason' ; 
      }
      else { 
        this.message = 'please log in ' ; 
      }
  }
  /** ng on changes only works on child components 
   * we use get when ther eis 1 input property 
   * when there is more 
   * ng onchanges is better because it is less lines 
   * we also get access to useful properties of the simpleChange object
   * i can make use of 1st change properties to execute things only the 1st time that the value changes 
   * i can also use the previousvalue for other things 
   * i believe that for what we want to do maybe its better to use gets and sets if we want simplicity but 
   * if we want it to be more robust and to some other things also the best option is ngOnchange because i am not sur e
   * if we have only one property or more 
   */

  

  name = 'Jason' ; 

  greetJason() { 
    alert('hey Jason') ; 
  }
  
  /** 13th video  */

  @Output() greetEvent = new EventEmitter() ; 
  eventname = 'jasonKakandris' ; 
  callParentGreet() { 
    this.greetEvent.emit(this.eventname) ;   
  }

  /** 14th bideo  */

   ngOnInit(): void {
     this._interactionService.teacherMessage$.subscribe(
       message => { 
         if (message == 'good morning'){
           alert('good morning teacher!') 
         }
         else if ( message == 'well done!') { 
           alert('thank you teacher') ; 
         }

         }
       
       )
   }


}
