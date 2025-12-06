import { Directive, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnlessDirective]',
  standalone: true
})
export class UnlessDirective {
  private hasView = false;
  private readonly templateRef = inject(TemplateRef);
  private readonly viewContainer = inject(ViewContainerRef);

  constructor() { }

  @Input() set appUnlessDirective(conditon: boolean) {
    if(conditon && !this.hasView){
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if(!conditon && this.hasView){
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

}
