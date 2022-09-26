import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Blog} from "../../models/blog";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class AppNewsPageComponent implements OnInit, AfterViewInit {

  @ViewChild('content')content:ElementRef;

  blog: Blog;

  constructor(private router:ActivatedRoute, private renderer:Renderer2) { }

  ngOnInit(): void
  {
    this.router.data.subscribe(({data})=> this.blog = data)
  }

  public appendDocumentCode()
  {
    this.renderer.setProperty(this.content.nativeElement, 'innerHTML', this.blog.blogCode);
  }

  ngAfterViewInit(): void {
    this.appendDocumentCode();
  }

}
