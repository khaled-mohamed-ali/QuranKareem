import { Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';
import { ViewSurahComponent } from './features/pages/viewSurah/view-surah/view-surah.component';
import { LoginComponent } from './features/pages/login/login.component';
import { RegisterComponent } from './features/pages/register/register.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'surahs',
        pathMatch: 'full'
    },
    {
        path: 'surahs',
        component: HomeComponent
    },
    {
        path: 'istma3',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'ViewSurah/:id',
        component: ViewSurahComponent
    }
];
