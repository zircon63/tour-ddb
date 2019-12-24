import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../../auth/state';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  constructor(private authService: AccountService,
              private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
