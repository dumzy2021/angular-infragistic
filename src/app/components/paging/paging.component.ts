import { Component, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { athletesData } from '../../data/athletesData';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrl: './paging.component.scss'
})
export class PagingComponent {
  @ViewChild('grid1', { static: true }) public grid1!: IgxGridComponent;
  public data: any[] = [];

  public ngOnInit(): void {
    this.data = athletesData;
}
}
