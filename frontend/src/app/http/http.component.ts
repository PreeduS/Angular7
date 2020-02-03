import { Component, OnInit } from '@angular/core';
import { PostsService } from './services/posts.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    return;

    this.postsService.getPosts().subscribe(
      response => console.log(response),
      error => console.log(error),
    )
    this.postsService.getPostsEvent().subscribe(
      event => {
        console.log('event ',event)
        /*if (event.type === HttpEventType.DownloadProgress) {
            console.log("Download progress event", event);
        }

        if (event.type === HttpEventType.UploadProgress) {
            console.log("Upload progress event", event);
        }

        if (event.type === HttpEventType.Response) {
            console.log("response received...", event.body);
        }*/

      }
    )
    /*
    this.postsService.addPost().subscribe(
      response => console.log(response),
      error => console.log(error),
    )
    
    this.postsService.updatePost().subscribe(
      response => console.log(response),
      error => console.log(error),
    )
    */
  }

}
