import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { MostPopularComponent } from './Front-end/Dealing/most-popular/most-popular.component';
import { MayLikeComponent } from './Front-end/Dealing/may-like/may-like.component';
import { AdsHomeComponent } from './Front-end/Dealing/ads-home/ads-home.component';
import { VendeurComponent } from './vendeur/vendeur.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { ChartsModule } from 'ng2-charts';
import { ChartsComponent } from './vendeur/charts/charts.component';
import { DashboardComponent } from './vendeur/dashboard/dashboard.component';
import { ProductsComponent } from './vendeur/tables/products/products.component';
import { ChartsComponentAdmin } from './admin/charts/charts.component';
import { DashboardComponentAdmin } from './admin/dashboard/dashboard.component';
import { ProductsComponentAdmin } from './admin/tables/products/products.component';
import { UsersComponent } from './admin/tables/users/users.component';
import { MetausersComponent } from './admin/tables/metausers/metausers.component';
import { SidebarModule } from 'ng-sidebar';
import { DetailProductComponent } from './Front-end/Dealing/detail-product/detail-product.component';
import { FooterComponent } from './Front-end/Shared/footer/footer.component';
import { AdsComponent } from './Front-end/Shared/header/ads/ads.component';
import { CarouselComponent } from './Front-end/Shared/header/carousel/carousel.component';
import { CategoriesMenuComponent } from './Front-end/Shared/header/categories-menu/categories-menu.component';
import { DropdownNavbarComponent } from './Front-end/Shared/header/dropdown-navbar/dropdown-navbar.component';
import { NavbarComponent } from './Front-end/Shared/header/navbar/navbar.component';
import { HeaderComponent } from './Front-end/Shared/header/header/header.component';
import { HomeComponent } from './Front-end/Dealing/home/home.component';
import { SearchFormComponent } from './Front-end/Shared/header/search-form/search-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'
import {NgxValidationErrorsModule} from '@xtream/ngx-validation-errors';
import { ProfilComponent } from './client/profil/profil.component';
import { SettingsComponent } from './client/profil/settings/settings.component';
import { RatedComponent } from './client/profil/rated/rated.component';
import { LikedComponent } from './client/profil/liked/liked.component';
import { PanierComponent } from './client/profil/panier/panier.component';
import { AuthService } from './service/auth/auth.service';
import { PortfolioImagesComponent } from './Front-end/Dealing/portfolio-images/portfolio-images.component';
import { ProjetService } from './projet.service';
import { DetailProductvisiteurComponent } from './visiteur/Dealing/detail-product/detail-product.component';
import { FootervisiteurComponent } from './visiteur/Shared/footer/footer.component';
import { AdsvisiteurComponent } from './visiteur/Shared/header/ads/ads.component';
import { CarouselvisiteurComponent } from './visiteur/Shared/header/carousel/carousel.component';
import { CategoriesMenuvisiteurComponent } from './visiteur/Shared/header/categories-menu/categories-menu.component';
import { NavbarvisiteurComponent } from './visiteur/Shared/header/navbar/navbar.component';
import { HeadervisiteurComponent } from './visiteur/Shared/header/header/header.component';
import { HomevisiteurComponent } from './visiteur/Dealing/home/home.component';
import { SearchFormvisiteurComponent } from './visiteur/Shared/header/search-form/search-form.component';
import { PortfolioImagesvisiteurComponent } from './visiteur/Dealing/portfolio-images/portfolio-images.component';
import { MostPopularvisiteurComponent } from './visiteur/Dealing/most-popular/most-popular.component';
import { AdsHomevisiteurComponent } from './visiteur/Dealing/ads-home/ads-home.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { AlertsModule } from 'angular-alert-module';
import { BrowserAnimationsModule} from'@angular/platform-browser/animations';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { I18nModule } from './i18n/i18n.module';
import { SelectLanguageComponent } from './select-language/select-language.component';



@NgModule({
  declarations: [
    AdsHomevisiteurComponent,
    MostPopularvisiteurComponent,
    PortfolioImagesvisiteurComponent,
    SearchFormvisiteurComponent,
    HomevisiteurComponent,
    HeadervisiteurComponent,
    NavbarvisiteurComponent,
    CategoriesMenuvisiteurComponent,
    CarouselvisiteurComponent,
    AdsvisiteurComponent,
    FootervisiteurComponent,
    DetailProductvisiteurComponent,
    AppComponent,
    VendeurComponent,
    AdminComponent,
    ChartsComponent,
    DashboardComponent,
    ProductsComponent,
    UsersComponent,
    MetausersComponent,
    FooterComponent,
    AdsComponent,
    CarouselComponent,
    CategoriesMenuComponent,
    DropdownNavbarComponent,
    HeaderComponent,
    SearchFormComponent,
    RegisterComponent,
    LoginComponent,
    ChartsComponentAdmin,
    DashboardComponentAdmin,
    ProductsComponentAdmin,
    ProfilComponent,
    SettingsComponent,
    RatedComponent,
    LikedComponent,
    PanierComponent,
    PortfolioImagesComponent,
    NavbarComponent,
    HomeComponent,
    DetailProductComponent,
    AdsHomeComponent,
    MayLikeComponent,
    MostPopularComponent,
    CompAComponent,
    CompBComponent,
    SelectLanguageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    ChartsModule,
    SidebarModule,
    NgbModule,
    SlickCarouselModule,
    NgxImageZoomModule,
    FontAwesomeModule,
    NgxValidationErrorsModule.forRoot() ,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    AlertsModule.forRoot(),
    BrowserAnimationsModule,
    I18nModule
   ],
    providers: [AuthService,ProjetService],
    bootstrap: [AppComponent]
  })
  export class AppModule {
    constructor(library: FaIconLibrary) {
      library.addIconPacks(fas, far);
    } 
   }
  