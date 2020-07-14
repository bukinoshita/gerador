import { geradorEstadoCivil } from 'gerador-estado-civil'
import { geradorNome, geradorNomeFeminino, geradorNomeMasculino } from 'gerador-nome'
import { geradorPlacaVeiculo } from 'gerador-placa-veiculo'
import { geradorSexo } from 'gerador-sexo'

export const pessoa = {
  estadoCivil: geradorEstadoCivil,
  nome: geradorNome,
  nomeFeminino: geradorNomeFeminino,
  nomeMasculino: geradorNomeMasculino,
  sexo: geradorSexo,
}

export const veiculo = {
  placa: geradorPlacaVeiculo,
}
