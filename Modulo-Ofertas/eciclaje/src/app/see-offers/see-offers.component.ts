import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SocketService } from '../conexion';

@Component({
  selector: 'app-see-offers',
  templateUrl: './see-offers.component.html',
  styleUrls: ['./see-offers.component.css']
})
export class SeeOffersComponent  {
  ofertas: any[] = [];
  private offersSub: Subscription;

  constructor(private socketService: SocketService) {
    this.offersSub = this.socketService.getOffersUpdateListener()
      .subscribe((offers: any[]) => {
        this.ofertas = offers;
        console.log(this.ofertas, "ofertas pa comparar")
      });
  }
  consultarOferta(id:any){
    let estado = this.socketService.getEstado()
    if(estado != "Asignado"){
      this.socketService.takeOffer(id)
    }
    else{
      alert("ya cuenta con oferta asignada")
    }
    
  }
}
