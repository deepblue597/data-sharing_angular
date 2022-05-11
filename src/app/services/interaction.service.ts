import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  /** we create a private property that is a subject 
   * the subject is like a source from where the messages are sent to the component 
   */
  private _teacherMessageSource = new Subject<string>();
  
  //convention to declaring an observable is to put a $ on the end 
  teacherMessage$ = this._teacherMessageSource.asObservable() ; 
  
  sendMessage(message: string) { 
    this._teacherMessageSource.next(message);
  }

  constructor() { }
}
