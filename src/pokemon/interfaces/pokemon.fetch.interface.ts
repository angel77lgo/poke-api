export class PokemonInterfaceAdapterFetch {
  private pokemon;
  constructor(public readonly id?: number, public readonly name?: string) {}

  async get<T>(): Promise<T> {
    let url = `https://pokeapi.co/api/v2/pokemon/`;
    if (this.id) {
      url += `${this.id}`;
    } else {
      url += `${this.name.toLocaleLowerCase()}`;
    }
    const resp = (await fetch(url)).json();
    this.pokemon = resp;
    return resp;
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
