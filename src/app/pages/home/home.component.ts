import { JsonService } from './../../json.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public pokemons: Array<any> = [];
  public evolves: Array<any> = [];
  public evol_lines: Array<any> = [];
  private url = 'https://digimon-api.vercel.app/api/digimon';
  private URL = 'https://pokeapi.co/api/v2/pokemon/';

  myModal = false;
  info;
  line;

  constructor(public json: JsonService){
  }

  filterPk = '';

  async ngOnInit() {
    for (let i = 1; i <= 25; i++) {
      await this.json.getJson(this.URL+i).then((res: any) => {
        console.log(res);
        this.pokemons.push(res);
      });
    }
    for (let j = 0; j < this.pokemons.length; j++) {
      await this.json.getJson(this.pokemons[j].species.url).then((res: any) => {
        // console.log(res);
        this.evolves.push(res);
      });
    }
    for (let k = 0; k < this.evolves.length; k++) {
      await this.json.getJson(this.evolves[k].evolution_chain.url).then((res: any) => {
        // console.log(res);
        const evol = {
          first_evo: (res.chain.species.name) ? res.chain.species.name : null,
          second_evo: (res.chain.evolves_to[0] != undefined) ? res.chain.evolves_to[0].species.name : null,
          third_evo: (res.chain.evolves_to[0].evolves_to[0] != undefined) ? res.chain.evolves_to[0].evolves_to[0].species.name : null
        };
        this.evol_lines.push(evol);
      });
    }
    // console.log(this.evol_lines);
  }

  openModal(pk){
    this.myModal = true;
    this.info = pk;
    this.line = this.evol_lines[pk.id-1];
  }

  closeModal(e){
    this.myModal = e;
  }

}
