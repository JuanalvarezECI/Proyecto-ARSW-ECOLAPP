import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, NavigationStart } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './login/AuthGuard.component'; 
import { AuthService } from './login/AuthService.component';
import { NewOffersComponent } from './new-offers/new-offers.component';
import { SeeOffersComponent } from './see-offers/see-offers.component';
import { InicioComponent } from './inicio/inicio.component';
import { MyOffersComponent } from './my-offers/my-offers.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'new-offers', component: NewOffersComponent  },
  { path: 'see-offers', component: SeeOffersComponent  },
  { path: 'inicio', component: InicioComponent  },
  { path: 'my-offers', component: MyOffersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router, private authService: AuthService) {
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationStart && !this.authService.isAuthenticatedUser() && event.url !== '/login') {
    //     // Si el usuario no está autenticado y trata de acceder a una ruta protegida, redirige al login
    //     this.router.navigateByUrl('/login');
    //   }
    // });
  }
 }
