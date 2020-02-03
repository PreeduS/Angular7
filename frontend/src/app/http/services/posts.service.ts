import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseUrl = 'https://jsonplaceholder.typicode.com'
  constructor(private http:HttpClient) { }

  getPosts(){
     // return this.http.get( `${this.baseUrl}/posts` )
    return this.http.get( `${this.baseUrl}/posts_err`,{
      // observe:'response'     // 'event'
      // headers: new HttpHeaders().set('Authorization','Bearer 123')
      // responseType:'json'
      params: new HttpParams().set('auth','token')      // qs params
    } ).pipe(
      // map()
      catchError((error)=>{
        error.message = 'Updated message'
        throw(error)
      })
    )
  }
  getPostsEvent(){
    const req = new HttpRequest('GET',`${this.baseUrl}/posts`, {}, {reportProgress: true});
    return this.http.request(req)
  }

  addPost(){
    return this.http.post( `${this.baseUrl}/posts`, {} )
  }
  updatePost(){
    return this.http.put( `${this.baseUrl}/posts/1`, {} )
  }
}
