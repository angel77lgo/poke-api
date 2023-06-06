import axios, { AxiosResponse } from 'axios';
import { PokeapiResponse } from '../types/types';

export class PokemonInterfaceAdapterAxios {
  private pokemon;
  constructor(public readonly id?: number, public readonly name?: string) {}

  async get<T>(): Promise<T> {
    let url = `https://pokeapi.co/api/v2/pokemon/`;
    if (this.id) {
      url += `${this.id}`;
    } else {
      url += `${this.name.toLocaleLowerCase()}`;
    }
    const resp: AxiosResponse<T> = await axios.get(url);
    this.pokemon = resp.data;
    return resp.data;
  }

  async getMoves() {
    this.pokemon.moves.map((pkm) => {
      console.log(pkm.move.name);
    });
  }

  async speak() {
    console.log(this.pokemon.name.toLocaleLowerCase());
  }
}
