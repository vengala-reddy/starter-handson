import { NgClass, NgStyle, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UnlessDirective } from './unless-directive';
import { HighlightDirective } from './highlight-directive';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgTemplateOutlet,UnlessDirective,NgClass, NgStyle, HighlightDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'starter-handson';
  currentYear: any;
  year: any;
  protected text = '<h1>Test</h1>'
  courses: any[] = [
    {id:1, name:"TypeScript"},
    {id:2, name:"Angular"},
    {id:3, name:"Nodejs"},
    {id:4, name:"JavaScript"},
  ];
  choice =0;
  isVisible=false;
  isBordered = true;
  isColor = true;
  toggleVisibility(){
    this.isVisible = !this.isVisible;
  }
  nextChoice() {
    this.choice++;
  }
  getYear(age:string){
    this.currentYear= new Date().getFullYear();
    this.year=this.currentYear-(+age);
  }
}
