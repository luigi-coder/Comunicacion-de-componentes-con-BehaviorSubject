import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Color } from 'src/app/porPaginas/interfaces/interfaces';
import { ColorService } from 'src/app/porPaginas/services/color.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private colorservice: ColorService) {}

  
  ngOnInit() {
    
    this.colorservice.testBehavior.next("Hola");
    
  }
  
  enviarColor(event: any){

    this.colorservice.setColorObservableData({ name: event.target.value });
  
  }
}
