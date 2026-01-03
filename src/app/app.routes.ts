import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SurahComponent } from './shared/components/surah/surah.component';
import { HomeComponent } from './features/pages/home/home.component';
import { ViewSurahComponent } from './features/pages/viewSurah/view-surah/view-surah.component';

export const routes: Routes = [
   
    {
        path: '',
        component: HomeComponent
    },
    
    
    {
        path: 'ViewSurah',
        component: ViewSurahComponent
    }



];
