import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagingComponent } from './components/paging/paging.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { FilteringComponent } from './components/filtering/filtering.component';
import { EditingComponent } from './components/editing/editing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'paging',
    pathMatch: 'full'
  },
  {
    path: "paging",
    component: PagingComponent,
    title: "Infragistic App - Paging"
  },
  {
    path: "sorting",
    component: SortingComponent,
    title: "Infragistic App - Sorting"
  },
  {
    path: "filtering",
    component: FilteringComponent,
    title: "Infragistic App - Filtering"
  },
  {
    path: "editing",
    component: EditingComponent,
    title: "Infragistic App - Editing"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
