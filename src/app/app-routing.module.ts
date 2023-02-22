import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CustomerCreateCustomOrderComponent } from './customer-create-custom-order/customer-create-custom-order.component';
import { CustomerProfileComponent } from './customer-edit-profile/customer-profile.component';
import { CustomerMonitorJobsComponent } from './customer-monitor-jobs/customer-monitor-jobs.component';
import { FilterComponent } from './filter/filter.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LayoutHomeComponent } from './layout-home/layout-home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';
import { RegisterComponent } from './register/register.component';
import { VendorEditProfileComponent } from './vendor-edit-profile/vendor-edit-profile.component';
import { VendorProposalSendToCustomerComponent } from './vendor-proposal-send-to-customer/vendor-proposal-send-to-customer.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: '', component:LayoutHomeComponent,children:[
    {path:'',redirectTo:'home', pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'cart',component:CartComponent},
    {path:'vendor',component:VendorEditProfileComponent},
    {path:'wishlist',component:WishlistComponent},
    {path:'register',component:RegisterComponent},
    { path: 'filter', component: FilterComponent },
    { path: 'client', component:CustomerProfileComponent ,children:[
      
      { path: 'purchasehistory', component: PurchaseHistoryComponent },
      { path: 'custom_orders', component: CustomerMonitorJobsComponent },
      { path: 'proposals_page', component: VendorProposalSendToCustomerComponent },
      { path: 'create_orders', component: CustomerCreateCustomOrderComponent },
      {path:'wishlist',component:WishlistComponent},
    {path:'cart',component:CartComponent},


    ] },
    { path: 'vendor', component:VendorEditProfileComponent },
    { path: 'home', component: HomepageComponent },
  ] },

  { path: '**', component: NotfoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
