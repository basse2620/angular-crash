import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/services/address.service';
import { Address } from 'src/app/interface/address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  addresses: Address[] = [];

  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
    this.addressService.getAddresses().subscribe((address) => 
    (this.addresses = address));
  }

  getAddressId(address: Address) {
    this.addressService.getAddresses().subscribe(() =>
      (this.addresses = this.addresses.filter(t => t.addresseId !== address.addresseId)));
  }
}
