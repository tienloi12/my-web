import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { News } from 'src/models/news.models';



@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient: HttpClient) {
   }
   get()

    {
     let url="https://newsapi.org/v2/everything?q=tesla&from=2023-01-15&sortBy=publishedAt&apiKey=542bf0566c704123a36f5d231fcea051"
    return this.httpClient.get(url).pipe(map((data : any) =>{
    return <News>data ;
    }
    )
    );
    }
}
