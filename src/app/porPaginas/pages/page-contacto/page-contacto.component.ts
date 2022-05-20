import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../../interfaces/interfaces';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-page-contacto',
  templateUrl: './page-contacto.component.html',
  styleUrls: ['./page-contacto.component.css']
})
export class PageContactoComponent implements OnInit {

  
  data: Observable<Color>;

  constructor(private colorservice: ColorService) {
    
    this.data = this.colorservice.getColorObservableData();

  }

  ngOnInit() {

    this.data.subscribe(data => {
      console.log(data);
    });
    
  }

}
