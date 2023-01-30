import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/servicios/database.service';

import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  constructor(
    private database : DatabaseService,
    private formBuilder: FormBuilder,
    private routes : Router
  ){}

  // public formLogin = new FormGroup({
  //   product:new FormControl("" , [Validators.required]),
  //   cost:new FormControl("",[Validators.required] )
  // })


  public formLogin!: FormGroup;

  ngOnInit(): void {
    this.routes.navigate(["/home/posts"])

    this.formLogin = this.formBuilder.group({
      product: ["", [Validators.required]],
      cost: ["", [Validators.required]],
    });
  }
  
  async onSubmit(){
     const response = this.database.addProduct(this.formLogin.value)
     console.log(response)
  }
}
