import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  constructor(
    public router: Router
  ) {
    this.router.events.pipe(
    filter(event => event instanceof NavigationEnd)
    ).subscribe(res => {
      this.route = router.url.replace('/', '');
    });
  }

  route: string = '';

  ngOnInit(): void {

  }

}
