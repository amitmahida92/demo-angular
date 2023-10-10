import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.router.url);
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          debugger
          console.log(event);
        }
      });
  }
}
