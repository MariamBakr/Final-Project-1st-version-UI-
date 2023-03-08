import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { VendorProfileComponent } from './vendor-profile/vendor-profile.component';
import { CustomerpageForJobdetailsAndVendorsproposalsComponent } from './customerpage-for-jobdetails-and-vendorsproposals/customerpage-for-jobdetails-and-vendorsproposals.component';
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
import { MyMarketPageComponent } from './my-market-page/my-market-page.component';
import { RoleGardGuard } from './gard/role-gard.guard';
import { MarketComponent } from './market/market.component';
import { SingleProductComponent }from './single-product/single-product.component';
import { VendorJobproposalComponent } from './vendor-jobproposal/vendor-jobproposal.component';
import { CustomertrackorderComponent } from './customertrackorder/customertrackorder.component';

const routes: Routes = [

  // ************************* Login + Register *****************
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },


  // ************************* Main Componenmt LauOut *****************

  { path: '', component:LayoutHomeComponent,children:[

    // ................... Main LayOut Children ...............
        {path:'',redirectTo:'home', pathMatch:'full'},
        {path:'cart',component:CartComponent},
    {path:'',redirectTo:'home', pathMatch:'full'},
    { path: 'cart', component: CartComponent },
    { path: 'market', component: MarketComponent },
    { path: 'single-product/:id', component: SingleProductComponent },

        {path:'wishlist',component:WishlistComponent},
        { path: 'filter', component: FilterComponent },
        { path: 'client', component:CustomerProfileComponent ,children:[
            // ................... Client Childrens 
              {path:'',redirectTo:'info', pathMatch:'full'},
              { path: 'purchasehistory', component: PurchaseHistoryComponent },
              { path: 'custom_orders', component: CustomerMonitorJobsComponent,children:[

              // { path: 'trackOrder', component: CustomertrackorderComponent },

              
            ]},
            { path: 'trackOrder', component: CustomertrackorderComponent },
              { path: 'trackOrder', component: CustomertrackorderComponent },
              { path: 'proposals_page', component: VendorProposalSendToCustomerComponent },
              { path: 'create_orders', component: CustomerCreateCustomOrderComponent },
              {path:'wishlist',component:WishlistComponent},
              {path:'info',component:CustomerInfoComponent},
              {path:'cart',component:CartComponent},
              {path:'proposals/:id',component:CustomerpageForJobdetailsAndVendorsproposalsComponent},
        ] },
        {path:'vendorProfile/:id',component:VendorProfileComponent,children:[
          // {path:'',redirectTo:'vendorProfile/:id',pathMatch:'full'}
        ]},

    
    {path:'customOrderDetails/:id',canActivate:[RoleGardGuard] ,component:VendorJobproposalComponent},
    {path:'vendor-find-jop',canActivate:[RoleGardGuard] ,component:VendorFindJobComponent},
    { path: 'vendor',canActivate:[RoleGardGuard]  ,component:VendorEditProfileComponent,children:[
      { path: '', redirectTo: 'vendor-info', pathMatch: 'full' },
      { path: 'mymarket', component:MyMarketPageComponent  },
      {path:'vendor-info',component:VendorInfoComponent},
      
    {path:'vendor-orders-market',component:VendorOrdersMarketComponent},
    {path:'add-form',component:AddToMarketFormComponent},

     ]},
     { path: 'contact', component: ContactUsComponent },
     { path: 'about', component: AboutUsComponent },
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
