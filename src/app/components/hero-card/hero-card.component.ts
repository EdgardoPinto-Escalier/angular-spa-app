import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  @Input() hero: any = {};
  @Input() index: number;

  @Output() selectedHero: EventEmitter<number>

  constructor(private router:Router) {
    this.selectedHero = new EventEmitter();
  }

  ngOnInit() {
  }

  heroDetail() {
    //console.log( this.index );
    this.router.navigate(['/hero', this.index]);
    //this.selectedHero.emit( this.index );
  }

}
