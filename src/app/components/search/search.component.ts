import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes:any[] = []
  term:string;

  constructor( private activatedRoute:ActivatedRoute,
               private _heroesService:HeroesService ) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      this.term = params['term'];
      this.heroes = this._heroesService.searchHeroes( params['term']);
    });
  }

}
