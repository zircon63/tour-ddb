import { Directive, EmbeddedViewRef, Input, OnInit, Self, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgOnDestroy } from '@core/destroy.service';
import { AuthQuery } from '../../auth/state';
import { map } from 'rxjs/operators';
import { Role } from '@backend/users/user-role.enum';

@Directive({
  selector: '[hasRole]',
  providers: [NgOnDestroy],
})
export class HasRoleDirective implements OnInit {
  @Input('hasRole') roles: string[];
  private viewRef: EmbeddedViewRef<any>;

  constructor(private authQuery: AuthQuery,
              private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef,
              @Self() private ngOnDestroy: NgOnDestroy) {
  }

  public ngOnInit(): void {
    this.viewContainerRef.clear();
    this.authQuery.user$.pipe(
      map(user => (this.roles as Role[]).every(role => user.roles.includes(role))),
    ).subscribe(show => {
      if (show) {
        this.createView();
      } else {
        this.destroyView();
      }
    });
  }

  private createView() {
    this.viewRef = this.viewContainerRef.createEmbeddedView(this.templateRef);
  }

  private destroyView() {
    if (this.viewRef) {
      this.viewRef.destroy();
    }
  }

}
