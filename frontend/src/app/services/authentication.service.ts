import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

export class User{
  constructor(
    public emailId:string,
    public password:string
     ) {}

}

export class JwtResponse{
  constructor(
    public jwttoken:string,
     ) {}

}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  [x: string]: any;
 public user;
  constructor(private httpClient: HttpClient) { }

  authenticate(emailId, password):Observable<any>{
    const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
    console.log(emailId);
    console.log(password);
   this.user=new User(emailId,password);
   console.log(JSON.stringify(this.user));
    // return this.httpClient.post<any>('http://localhost:8080/AuthUser/authenticate',{this:this.user}).pipe(
    //    map(
    //      userData => {
    //       // sessionStorage.setItem('emailId',emailId);
    //       let tokenStr=userData.jwttoken;
    //       // sessionStorage.setItem('token', tokenStr);
    //       console.log(tokenStr);
    //       return tokenStr;
    //      }
    //    )

    //  );
    return this.httpClient.post<any>('http://15.206.62.131:8080/AuthUser/authenticate',JSON.stringify(this.user),httpOptions);
    }


  isUserLoggedIn() {
    let user = sessionStorage.getItem('emailId')
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('emailId')
  }

  login(emailId, password, loginType){
    this.loginUser.emailId = emailId;
    this.loginUser.loginType = loginType;
    this.loginUser.password = password;

    const httpOptions = {
     headers: new HttpHeaders({
       'Content-Type':  'application/json'
     })
   };
    return this.httpClient.post<any>('http://localhost:8080/AuthUser/login',JSON.stringify(this.loginUser),httpOptions);
 }
}


