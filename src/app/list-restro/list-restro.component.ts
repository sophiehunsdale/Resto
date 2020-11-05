import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service'

@Component({
  selector: 'app-list-restro',
  templateUrl: './list-restro.component.html',
  styleUrls: ['./list-restro.component.css']
})
export class ListRestroComponent implements OnInit {

  constructor (private resto: RestoService) { }
  collection = {};

  ngOnInit(): void {
    this.resto.getList().subscribe(
      (result) => {
        console.warn(result)
        this.collection = result
      }
    )
  }

}
