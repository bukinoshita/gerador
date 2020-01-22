import { geradorEstadoCivil } from 'gerador-estado-civil'
import { geradorNome, geradorNomeFeminino, geradorNomeMasculino } from 'gerador-nome'
import { geradorSexo } from 'gerador-sexo'

export const pessoa = {
  estadoCivil: geradorEstadoCivil,
  nome: geradorNome,
  nomeFeminino: geradorNomeFeminino,
  nomeMasculino: geradorNomeMasculino,
  sexo: geradorSexo
}
