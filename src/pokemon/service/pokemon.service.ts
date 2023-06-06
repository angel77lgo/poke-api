import { Injectable } from '@nestjs/common';
import { PokemonInterfaceAdapterAxios } from '../interfaces/poke.interface';
import { PokeapiResponse } from '../types/types';
import { PokemonInterfaceAdapterFetch } from '../interfaces/pokemon.fetch.interface';

@Injectable()
export class PokemonService {
  constructor() {}
  async testApiWithAxios() {
    const pokemon1Adapter = new PokemonInterfaceAdapterAxios(1, undefined);
    const pokemon2Adapter = new PokemonInterfaceAdapterAxios(
      undefined,
      'pikachu',
    );

    await pokemon1Adapter.get<PokeapiResponse>();

    console.log(`moves`);
    pokemon1Adapter.getMoves();
    console.log('\n');
    console.log(`speak`);
    pokemon1Adapter.speak();
    console.log('\n');

    await pokemon2Adapter.get<PokeapiResponse>();

    console.log(`moves`);
    pokemon2Adapter.getMoves();
    console.log('\n');
    console.log(`speak`);
    pokemon2Adapter.speak();
  }

  async testApiWithFetch() {
    const pokemon1Adapter = new PokemonInterfaceAdapterFetch(1, undefined);
    const pokemon2Adapter = new PokemonInterfaceAdapterFetch(
      undefined,
      'pikachu',
    );

    await pokemon1Adapter.get<PokeapiResponse>();

    console.log(`moves`);
    pokemon1Adapter.getMoves();
    console.log('\n');
    console.log(`speak`);
    pokemon1Adapter.speak();
    console.log('\n');

    await pokemon2Adapter.get<PokeapiResponse>();

    console.log(`moves`);
    pokemon2Adapter.getMoves();
    console.log('\n');
    console.log(`speak`);
    pokemon2Adapter.speak();
  }
}
