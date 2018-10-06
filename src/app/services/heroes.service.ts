import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

  private heroes:Hero[] = [
    {
      name: "Aquaman",
      bio: "The most recognized power of Aquaman is the telepathic ability to communicate with marine life, which can be made at great distances.",
      img: "assets/img/aquaman.png",
      emerged: "1941-11-01",
      house:"DC"
    },
    {
      name: "Batman",
      bio: "The main features of Batman are summarized in 'physical skills, deductive abilities and obsession. Most of the basic characteristics of the comics have varied by the different interpretations that have been given to the character.",
      img: "assets/img/batman.png",
      emerged: "1939-05-01",
      house:"DC"
    },
    {
      name: "Daredevil",
      bio: "Having lost sight, the remaining four senses of Daredevil were increased by radiation to superhuman levels, in the accident he had as a child. Despite his blindness, he can 'see' through a 'sixth sense' that serves as a radar similar to the one bats have.",
      img: "assets/img/daredevil.png",
      emerged: "1964-01-01",
      house: "Marvel"
    },
    {
      name: "Hulk",
      bio: "Its main power is its ability to increase its strength to practically unlimited levels while increasing its fury. Depending on which Hulk personality is in charge at that moment (the Hulk Banner is the weakest, but it makes up for it with its intelligence).",
      img: "assets/img/hulk.png",
      emerged: "1962-05-01",
      house:"Marvel"
    },
    {
      name: "Green Lantern",
      bio: "Possessor of the ring of power that possesses the ability to create manifestations of solid light through the use of thought. It is fed by the Green Flame (revised by later writers as a mystical power called Starheart), a magical flame contained within an orb (the orb was actually a green metal meteorite that fell to Earth, which was found by a manufacturer of lamps called Chang).",
      img: "assets/img/green-lantern.png",
      emerged: "1940-06-01",
      house: "DC"
    },
    {
      name: "Spider-Man",
      bio: "After being bitten by a radioactive spider, he obtained the following superhuman powers, a great strength, agility, to be able to climb walls. The strength of Spider-Man allows him to lift 10 tons or more. Thanks to this great force Spider-Man can perform incredible jumps. An 'arachnid sense', which lets him know if a danger looms over before it happens. Sometimes this can lead Spider-Man to the source of danger.",
      img: "assets/img/spiderman.png",
      emerged: "1962-08-01",
      house: "Marvel"
    },
    {
      name: "Wolverine",
      bio: "In the fictional universe of Marvel, Wolverine has regenerative powers that can heal any wound, despite how deadly it may be, and that same power makes it immune to any disease on Earth. It also possesses a superhuman strength, that although it is not compared with the other superheroes like Hulk, yet it surpasses the strength of any human.",
      img: "assets/img/wolverine.png",
      emerged: "1974-11-01",
      house: "Marvel"
    }
  ];

  constructor() {
    console.log('This service is ready to be used!');
  }

  getHeroes():Hero[] {
    return this.heroes;
  }

  getHero(idx: string) {
    return this.heroes[idx];
  }

  searchHeroes( term:string ):Hero[] {
    let heroesArray:Hero[] = [];
    term = term.toLowerCase();
    
    for( let i = 0; i < this.heroes.length; i ++ ) {
      let hero = this.heroes[i];
      let name = hero.name.toLowerCase();
      if( name.indexOf( term ) >= 0 ) {
        hero.idx = i;
        heroesArray.push( hero )
      }
    }
    return heroesArray;
  }

}

export interface Hero {
  name: string;
  bio: string;
  img: string;
  emerged: string;
  house: string;
  idx?: number;
}