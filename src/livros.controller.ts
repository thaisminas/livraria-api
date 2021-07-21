import * as common from '@nestjs/common';
import { Livro } from './livro.model';
import { LivrosService } from './livros.services';

@common.Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {}

  @common.Get()
  async obterTodos(): Promise<Livro[]> {
    return this.livrosService.obterTodos();
  }

  @common.Get(':id')
  async obterUm(@common.Param() params): Promise<Livro> {
    return this.livrosService.obterUm(params.id);
  }

  @common.Post()
  async criar(@common.Body() livro: Livro) {
    //livro.id = 100;
    this.livrosService.criar(livro);
  }

  @common.Put()
  async alterar(@common.Body() livro: Livro): Promise<[number, Livro[]]> {
    return this.livrosService.alterar(livro);
  }

  @common.Delete(':id')
  async apagar(@common.Param() params) {
    this.livrosService.apagar(params.id);
  }
}
