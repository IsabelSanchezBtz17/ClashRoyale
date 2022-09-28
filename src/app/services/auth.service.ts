import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public auth: boolean= false;
  public usuario: string = '';
  public password: string = '';
  public token: string= '';

  constructor() { }

  login( ){
    this.auth= true;
    localStorage.setItem('seccion', this.auth.toString());
    
  }

  logout(){
    
    this.auth= false;
    localStorage.clear();
  }
  


    getToken(username: string, password: string ){
      this.token= '';

      if (username === 'admin' && password ==='admin'){
        this.login();
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        //this.token= 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjAwZDE1YjkwLWUxZjEtNDBjZi1iZDhmLTQ4ZGY1OWE3MTA0OCIsImlhdCI6MTY2NDMzNTk1OSwic3ViIjoiZGV2ZWxvcGVyL2FjNWU0N2NkLWEzOTItY2E4Zi00NWRmLTRhNDdhZWNjY2ZiMSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIyMDAuNTIuMjEzLjIzMCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.6T55y1nIvf4zUW9Ccc2hldudZV14m__YvS0b-vLLSoVGYM-N0a947msPWRReyNegeev0yszt2QOxBDopqM02aA';
        this.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjNjMTlhZGFjLTA2MjctNDZmMC1iNTljLTZlYTkxMzhhYWI5NyIsImlhdCI6MTY2NDM3NDczOCwic3ViIjoiZGV2ZWxvcGVyL2VlMWM3MGE4LWI0NzUtNzFlNC05YTU1LWMzZDM0MWNiODQ0ZiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIyMDEuMTQxLjUzLjExNyJdLCJ0eXBlIjoiY2xpZW50In1dfQ.caKWk05Px-hSjisCTTCnDGGTAtCBepQm4N9mucTwga6mQhm6Gt2_kWuKS-8-bgGMEJoZRSAGZFx5Gm5Jd4i74A';
        return 'correctos'
      }
      return 'incorrectos'
    }
}
