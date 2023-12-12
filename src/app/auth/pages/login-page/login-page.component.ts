import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../interfaces/perfil.interface';
import { GlobalService } from 'src/app/comun/global.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{

  loginForm!: FormGroup;
  submitted = false;

  constructor(  private formBuilder:FormBuilder, 
                private loginService:AuthService ){ }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
      email:["", Validators.required],
      password:["", Validators.required]
      });
  }

  get form(){
    return this.loginForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    /*
    if ( this.loginForm.invalid){
      return;
    }
    */
    let user:Usuario = {
      "id_usuario":0,
      "nombre":"",
      "apellidos":"",
      'email':this.form["email"].value,
      "fecha_alta":new Date(),
      "clave":this.form["password"].value,
      "fecha_baja":new Date(),
      "ultimo_acceso":new Date()
    };
    
    this.loginService.getLogin(user).subscribe( {
      next(value){
        user = value;
      },
      complete(){

        sessionStorage.setItem('nombre', user.nombre + ' ' + user.apellidos);
        sessionStorage.setItem('email', user.email);
        sessionStorage.setItem('id', "" + user.id_usuario);
      }
    });
 
    
  }


}
