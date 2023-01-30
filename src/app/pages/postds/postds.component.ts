import { Component } from '@angular/core';
import { Store } from 'src/app/interfaces/interface';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-postds',
  templateUrl: './postds.component.html',
  styleUrls: ['./postds.component.scss']
})
export class PostdsComponent {
    
    Products!:Store[];

  constructor(
    private database : DatabaseService,
  ){}

  ngOnInit():void{
         this.database.GetProduct().subscribe(DataBaseProducts =>{
          this.Products = DataBaseProducts
         })
  }
  Delete(Products: Store){
    console.log(this.Products)
    const response = this.database.DeleteProduct(Products)
    console.log(response)
  }

}
