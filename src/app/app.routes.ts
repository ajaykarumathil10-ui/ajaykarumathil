import { Routes } from '@angular/router';
import { Homepage } from '../homepage/homepage';

export const routes: Routes = [
    { path: '', component: Homepage },
    {
        path: 'profile',
        // The browser only downloads full-profile.component.ts when this route is active
        loadComponent: () => import('../fullprofile/fullprofile').then(m => m.Fullprofile)
    }
];
