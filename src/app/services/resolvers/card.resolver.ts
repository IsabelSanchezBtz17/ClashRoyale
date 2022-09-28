import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class CardResolver implements Resolve<any> {
  constructor (private http: HttpClient){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
   // const url = 'https://api.clashroyale.com/v1/cards';
    //const url = "https://api.clashroyale.com/v1/clans?name=Scorpions";
    const url = "https://api.allorigins.win/raw?url=https://api.clashroyale.com/v1/clans?name=Scorpions";
    return this.http.get(url);
    
  }
}


