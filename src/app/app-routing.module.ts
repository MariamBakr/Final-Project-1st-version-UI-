import { CheckoutComponent } from './checkout/checkout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToMarketFormComponent } from './add-to-market-form/add-to-market-form.component';
import { CartComponent } from './cart/cart.component';
import { CustomerCreateCustomOrderComponent } from './customer-create-custom-order/customer-create-custom-order.component';
import { CustomerProfileComponent } from './customer-edit-profile/customer-profile.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomerMonitorJobsComponent } from './customer-monitor-jobs/customer-monitor-jobs.component';
import { FilterComponent } from './filter/filter.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LayoutHomeComponent } from './layout-home/layout-home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';
import { RegisterComponent } from './register/register.component';
import { VendorEditProfileComponent } from './vendor-edit-profile/vendor-edit-profile.component';
import { VendorFindJobComponent } from './vendor-find-job/vendor-find-job.component';
import { VendorInfoComponent } from './vendor-info/vendor-info.component';
import { VendorOrdersMarketComponent } from './vendor-orders-market/vendor-orders-market.component';
import { VendorProposalSendToCustomerComponent } from './vendor-proposal-send-to-customer/vendor-proposal-send-to-customer.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: '', component:LayoutHomeComponent,children:[
    {path:'',redirectTo:'home', pathMatch:'full'},
    {path:'cart',component:CartComponent},
    {path:'wishlist',component:WishlistComponent},
    { path: 'filter', component: FilterComponent },
    { path: 'client', component:CustomerProfileComponent ,children:[

      {path:'',redirectTo:'info', pathMatch:'full'},
      { path: 'purchasehistory', component: PurchaseHistoryComponent },
      { path: 'custom_orders', component: CustomerMonitorJobsComponent },
      { path: 'proposals_page', component: VendorProposalSendToCustomerComponent },
      { path: 'create_orders', component: CustomerCreateCustomOrderComponent },
      {path:'wishlist',component:WishlistComponent},
      {path:'info',component:CustomerInfoComponent},
    {path:'cart',component:CartComponent},


    ] },


    { path: 'vendor', component:VendorEditProfileComponent,children:[

      {path:'',redirectTo:'vendor-info', pathMatch:'full'},
    {path:'vendor-info',component:VendorInfoComponent},
    {path:'vendor-find-jop',component:VendorFindJobComponent},
    {path:'vendor-orders-market',component:VendorOrdersMarketComponent},
    {path:'add-form',component:AddToMarketFormComponent},

     ]},

     { path: 'home', component: HomepageComponent },
     { path: 'checkout', component: CheckoutComponent },

  ] },


  { path: '**', component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
