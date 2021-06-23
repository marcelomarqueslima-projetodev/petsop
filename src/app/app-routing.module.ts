import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { FramePageComponent } from './pages/account/master/frame-page';
import { PetsPageComponent } from './pages/account/pets-page/pets-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';

const routes: Routes = [
    { path: '', 
      component: FramePageComponent, 
      children: [
          { path: '', component: ProductsPageComponent },
          { path: 'cart', component: CartPageComponent }
      ]
    },
    { path: 'account', 
      component: FramePageComponent, 
      children: [
          { path: 'pets', component: PetsPageComponent }
      ]
    },
    { path: 'login', component: LoginPageComponent },
    { path: 'reset-password', component: ResetPasswordPageComponent },
    { path: 'signup', component: SignupPageComponent },
 ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
