import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Blog} from "../models/blog";

@Component({
  selector: 'app-news',
  templateUrl: './app-news.component.html',
  styleUrls: ['./app-news.component.css']
})
export class AppNewsComponent implements OnInit {

  news:Blog[]

  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.data.subscribe(({data})=>this.news = data);
  }

}
