import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
  })


export class KontaktService{
    private baseUrl = `${environment.baserUrl}${environment.port}/api`;

    constructor(private http: HttpClient) {}

    NewMsg(data: { username: string;
      email: string;
      subject: string;
      message: string;
      ownerId: string}) {
        return this.http.post(`${this.baseUrl}/msg/add`, data);
      }

}