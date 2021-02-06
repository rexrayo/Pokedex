import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  @Input() data : any;
  @Input() evolves : any;
  @Input() image : string;

  constructor() { }

  ngOnInit(): void {
  }

}
