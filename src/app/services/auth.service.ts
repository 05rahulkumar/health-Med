import { Injectable , EventEmitter} from '@angular/core';
import { Observable ,BehaviorSubject} from 'rxjs';
import{HttpClient} from '@angular/common/http';
import { login,signup } from '../interface/auth';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private userSubject=new BehaviorSubject<string>('');
userDetail$=this.userSubject.asObservable();

setUser(user:any){
this.userSubject.next(user)
}
  constructor(private httpclient: HttpClient) { }
  apiurl = `${environment.api}`

  signup(data:signup): Observable<signup> {
    let url = this.apiurl + '/signup'
    return this.httpclient.post<signup>(url,data)
  }
  login(data:login): Observable<login> {
    let url = this.apiurl + '/login'
    return this.httpclient.post<login>(url,data)
  }
getProfile(){
  let url = this.apiurl+'/profile/';
  return this.httpclient.get(url)
}
  getToken() {
    return localStorage.getItem('token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('token');
    return authToken !== null ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('Token');
    if (removeToken == null) {
    }
  }
}
