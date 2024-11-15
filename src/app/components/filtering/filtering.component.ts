import { Component, HostBinding, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { DATA } from '../../data/localData2';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrl: './filtering.component.scss'
})
export class FilteringComponent {
  @ViewChild('grid1', { read: IgxGridComponent, static: true })
  public grid1!: IgxGridComponent;

  public data: any[] = [];

  public size = 'large';
  public sizes!: any;

  constructor() {
  }
  public ngOnInit(): void {
    this.data = DATA;
    this.sizes = [
      {
        label: 'small',
        selected: this.size === 'small',
        togglable: true
      },
      {
        label: 'medium',
        selected: this.size === 'medium',
        togglable: true
      },
      {
        label: 'large',
        selected: this.size === 'large',
        togglable: true
      }
    ];
  }

  @HostBinding('style.--ig-size')
  protected get sizeStyle() {
    return `var(--ig-size-${this.size})`;
  }

  public selectSize(event: any) {
    this.size = this.sizes[event.index].label;
    this.grid1.reflow();
  }

  public formatDate(val: any) {
    if (val !== 'Select All') {
      return new Intl.DateTimeFormat('en-US').format(val);
    } else {
      return val;
    }
  }

  public formatCurrency(val: string) {
    return parseInt(val, 10).toFixed(2);
  }
}
