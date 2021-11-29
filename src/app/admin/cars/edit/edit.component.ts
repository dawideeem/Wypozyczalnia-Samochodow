import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MessangerService } from 'src/app/services/messanger.service';
import { CarEditService } from './car-edit.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  Cities=['Kraków','Warszawa','Poznań','Kielce','Wrocław','Łódź'];
 
  private id: string = '';
  cars: any;

  constructor(
    private formBuilder: FormBuilder,
    private carEditService: CarEditService,
    private router: Router,
    private messangerService: MessangerService,
  ) { }

  credentials = new FormGroup({
    name: new FormControl(null,[Validators.required, Validators.minLength(3)]),
    city: new FormControl(null,[Validators.required, Validators.minLength(3)]),
    gearbox: new FormControl(null,[Validators.required, Validators.minLength(3)]),
    doors: new FormControl(null,[Validators.required, Validators.minLength(3)]),
    fuel: new FormControl(null,[Validators.required, Validators.minLength(3)]),
    people: new FormControl(null,[Validators.required, Validators.minLength(3)]),
    condition: new FormControl(null,[Validators.required, Validators.minLength(3)]),
    price: new FormControl(null,[Validators.required, Validators.minLength(1)]),
    imageUrl: new FormControl(null,[Validators.required, Validators.minLength(5)])
  });

  ngOnInit(): void {
    this.id=this.messangerService.getId();
    this.carEditService.getSelected(this.id).subscribe(
      (res)=>{
        this.cars=res;
        this.credentials.patchValue(this.cars);
      },
      async(err)=>{
        console.log('Nie udalo sie pobrac samochodu')
      }
    ) 
  }

  submit(){
    const carData = {
      name: this.credentials.controls.name.value,
      city: this.credentials.controls.city.value,
      gearbox: this.credentials.controls.gearbox.value,
      doors: this.credentials.controls.doors.value,
      fuel: this.credentials.controls.fuel.value,
      people: this.credentials.controls.people.value,
      condition: this.credentials.controls.condition.value,
      price: this.credentials.controls.price.value,
      imageUrl: this.credentials.controls.imageUrl.value
    };
    this.carEditService.editCar(carData, this.id).subscribe((res) => {

    }, (err) => {

    });
    this.router.navigate(['admin/list'])

  }

}
