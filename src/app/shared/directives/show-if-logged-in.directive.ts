import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentAuth } from '../../store/selectors';

@Directive({
  selector: '[taskerShowIfLoggedIn]'
})
export class ShowIfLoggedInDirective implements OnInit {

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.select(selectCurrentAuth)
      .subscribe(auth => {
        if ( auth.isLoggedIn ) {
          this.viewContainerRef.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainerRef.clear();
        }
      });
  }

}
