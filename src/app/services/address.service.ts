import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Address } from '../interface/address';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private apiUrl = 'http://192.168.20.30:8090/addresse'

  constructor(private http: HttpClient) { }

  getAddresses(): Observable<Address[]> {
    return this.http.get<Address[]>(this.apiUrl);
  }

  getAddresse(address: Address): Observable<Address[]> {
    const url = `${this.apiUrl}/${address.addresseId}`;
    return this.http.get<Address[]>(url)
  }
}
