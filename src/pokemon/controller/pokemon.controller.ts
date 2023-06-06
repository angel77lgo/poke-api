import { Controller, Get } from '@nestjs/common';
import { PokemonService } from '../service/pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  async testApi() {
    return this.pokemonService.testApiWithAxios();
  }
}
