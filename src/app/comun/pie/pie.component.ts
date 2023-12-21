import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Usuario } from 'src/app/auth/interfaces/perfil.interface';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit{

  constructor(private globalService:GlobalService ) {}

  get user():Usuario {
    return this.globalService.usuario;
  }

  ngOnInit(): void {}

}
