import { Routes, RouterModule } from '@angular/router';
import { CardItemFormComponent } from './card-item-form.component';
import { CardItemListComponent } from './card-item-list.component';
const appRoutes: Routes = [
{ path: 'add' , component:  CardItemFormComponent },
{ path:  ':category', component: CardItemListComponent },
{ path: '', pathMatch: 'full', redirectTo: 'all'}
];

export const routing = RouterModule.forRoot(appRoutes);
