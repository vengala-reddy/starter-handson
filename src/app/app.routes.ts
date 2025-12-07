import { Routes } from '@angular/router';
import { Login } from './login/login';
import { OtpInput } from './otp-input/otp-input';
import { ProgressBar } from './progress-bar/progress-bar';

export const routes: Routes = [
  {path:'login', component: Login},
  {path: 'otp-input', component: OtpInput},
  {path: 'progress-bar', component: ProgressBar}
];
