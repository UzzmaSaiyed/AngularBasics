import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CategoryComponent } from './pages/category/category.component';
import { ServicesComponent } from './pages/services/services.component';
export const routes: Routes = [
    {
        path: "", component: CategoryComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "category/:id",
        component: CategoryComponent
    },
    {
        path: "services",
        component: ServicesComponent
    }

];
