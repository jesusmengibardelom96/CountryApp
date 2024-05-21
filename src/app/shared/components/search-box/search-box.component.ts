import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @Input()
  public placeholder?: string = ''

  @Output()
  public onSearch: EventEmitter<string> = new EventEmitter()

  @ViewChild('txtInputSearch')
  public inputSearch!:ElementRef<HTMLInputElement>


  searchBySomething( value: string ): void {
    this.onSearch.emit(value)
  }

}
