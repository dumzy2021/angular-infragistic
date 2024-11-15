import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PagingComponent } from './components/paging/paging.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { FilteringComponent } from './components/filtering/filtering.component';
import { EditingComponent } from './components/editing/editing.component';
import {
	IgxAvatarModule,
	IgxBadgeModule,
	IgxButtonModule,
	IgxGridModule,
	IgxIconModule,
	IgxInputGroupModule,
	IgxProgressBarModule,
	IgxRippleModule,
	IgxSwitchModule,
	IgxSimpleComboModule,
	IgxButtonGroupModule,
	IgxDialogModule,
} from "igniteui-angular";
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		PagingComponent,
		SortingComponent,
		FilteringComponent,
		EditingComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		IgxAvatarModule,
		IgxBadgeModule,
		IgxButtonModule,
		IgxGridModule,
		IgxIconModule,
		IgxInputGroupModule,
		IgxProgressBarModule,
		IgxRippleModule,
		IgxSwitchModule,
		IgxSimpleComboModule,
		FormsModule,
		IgxButtonGroupModule,
		IgxDialogModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
