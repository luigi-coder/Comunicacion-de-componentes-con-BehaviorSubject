import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Color } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})

export class ColorService{

  // Emitiendo servicios con BehaviorSubject

  private colorObservable: BehaviorSubject<Color> =
    new BehaviorSubject<Color>({ name: 'Aqui Se Mostrara El Color'});

  getColorObservableData(): Observable<Color> {
    return this.colorObservable.asObservable();
  }

  setColorObservableData(color: Color) {
    this.colorObservable.next(color);
    
  }

  public testBehavior: BehaviorSubject<string> = new BehaviorSubject("");
  public testSubject: Subject<string> = new Subject();

}