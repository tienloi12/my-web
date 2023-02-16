import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NewsService } from './services/news.service';
import { News } from 'src/models/news.models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  news$ : Observable<News> = this.newsService.get();

  constructor(public authService: AuthService, public routerService: Router,private newsService : NewsService )
  {
    
  }
goHome()
{
  this.routerService.navigate([''])
}
goCart()
{
  this.routerService.navigate(['cart'])
}
goLogin()
{
  this.routerService.navigate(['login'])
}
goProduct()
{
  this.routerService.navigate(['product'])
}
}
