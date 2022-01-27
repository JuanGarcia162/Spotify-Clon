import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  errorSesion: boolean = false
  formLogin: FormGroup = new FormGroup({});

  constructor(private auhtService: AuthService, private cookie:CookieService,
    private router: Router) { }

  ngOnInit(): void {

    this.formLogin = new FormGroup(
      {
        email: new FormControl('',[
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ])
      }
    )
  }

  sendLogin(): void
  {
    const {email, password} = this.formLogin.value
    this.auhtService.sendCredentials(email,password)
    .subscribe(responseOk => {
      console.log('Inicio de Sesion correcto', responseOk)
      const {tokenSession, data} = responseOk
      this.cookie.set('token', tokenSession, 4, '/')
      this.router.navigate(['/','tracks'])
    }, err => {
      this.errorSesion = true
      console.log('Ocurrio un error con tus credenciales')
    })
  }

}
