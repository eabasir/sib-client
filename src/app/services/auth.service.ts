import {Injectable, isDevMode} from '@angular/core';
import {RestService} from './rest.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class AuthService {
  private authStream = new ReplaySubject<boolean>(1);
  public user = '';
  public userType = '';
  public display_name = '';
  auth$: Observable<boolean> = this.authStream.asObservable();


  constructor(private restService: RestService, private router: Router) {
    this.restService.get('users/validate' , false)
      .subscribe(
        res => {

          if (res.valid)
            this.afterLogin(res);
          else
            this.authStream.next(false);
        },
        err => {
            console.log(err);
          this.authStream.next(false);

        });

  }

  logIn(username, password) {

    this.restService.post('users/login', {username: username, password: password} , false)
      .subscribe(res => {
          this.afterLogin(res);
          this.router.navigate(['/home/dashboard']);
        },
        err => {
          this.authStream.next(false);
            console.log(err);
        })
  }

  private afterLogin(res) {
    this.user = res.user;
    this.userType = res.userType;
    this.display_name = res.display_name;
    this.authStream.next(true);

  }

  logOff() {
    this.restService.get('logout')
      .subscribe(() => {
          this.router.navigate(['login']);
        },
        err => {
            console.log(err);
        });
  }

}
