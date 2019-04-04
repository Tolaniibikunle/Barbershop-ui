import { Directive, AfterViewInit, AfterContentChecked } from '@angular/core';

declare var componentHandler: any;

@Directive({
  selector: '[mdl]'
})
export class MDL implements AfterViewInit, AfterContentChecked {
  
  ngAfterContentChecked(): void {
    componentHandler.upgradeAllRegistered();
  }

  ngAfterViewInit(): void {
    componentHandler.upgradeAllRegistered();
  }

}