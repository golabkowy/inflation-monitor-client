import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDatepicker} from '@angular/material/datepicker';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  observedProducts: string[] = ['Maselko', 'Mięsko', 'Pifko', 'Fajeczki', 'Winko'];
  panelColor = new FormControl('red');

  constructor() {
  }

  ngOnInit(): void {
  }

  test(): any {
  }

}
