import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit{

  nombre:string|null ="Usuario no registrado";
  email:string|null = " - ";
  id_user:string|null = "0";


  ngOnInit(): void {}

  reload(){
    this.nombre = sessionStorage.getItem("nombre");
    this.email = sessionStorage.getItem("email");
    this.id_user = sessionStorage.getItem("id_usuario");
  }

}
