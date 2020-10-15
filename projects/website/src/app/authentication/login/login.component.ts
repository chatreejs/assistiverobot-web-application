import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { GeneralEnvironmentConfig } from '../../core/environment-config';
import { AUTHENTICATION_CONFIG, GENERAL_ENVIRONMENT_CONFIG } from '../../core/provider-name-token';
import { AuthenticationService } from '../authentication.service';
import { AuthenticationConfig } from '../../core/authentication-config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  public showLoginForm = new BehaviorSubject<boolean>(false);

  constructor(
    @Inject(GENERAL_ENVIRONMENT_CONFIG) private generalEnvironment: GeneralEnvironmentConfig,
    @Inject(AUTHENTICATION_CONFIG) private authenticationConfig: AuthenticationConfig,
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    if (this.generalEnvironment.fullSecureAuthentication === true) {
      this.authenticationService.authorize();
    } else {
      if (this.generalEnvironment.production === false) {
        console.warn(`การล็อกอินแบบส่งชื่อผู้ใช้งานและรหัสผ่านไม่มีความปลอดภัย อาจไม่ผ่านการตรวจระบบความปลอดภัยของลูกค้าบางไซต์ แนะนำให้เปิดการใช้งาน "fullSecureAuthentication" หรือหากไม่สามารถเปิดไม่ได้ ให้รีโหลดหน้าเว็บใหม่เสมอเมื่อล็อกอินสำเร็จ`);
      }
      this.loginForm = this.formBuilder.group({
        username: ['admin', [Validators.required]],
        password: ['1234', [Validators.required]]
      });
      this.showLoginForm.next(true);
    }
  }

  submitForm(): void {
    //   Object.keys(this.loginForm.controls).forEach(key => {
    //     this.loginForm.controls[key].markAsDirty();
    //     this.loginForm.controls[key].updateValueAndValidity();
    //   });

    //   if (this.loginForm.valid === true) {
    //     const value = this.loginForm.getRawValue();
    //     this.authenticationService.completeAuthorizationPasswordRequest(value.username, value.password)
    //       .then(() => {
    //         // window.location.assign(this.authenticationConfig.redirectUri);
    //         window.location.assign(environment.redirectUri);
    //       })
    //       .catch(() => {
    //         console.warn('Please implement loged in fail!');
    //       });
    //   }
  }

}
