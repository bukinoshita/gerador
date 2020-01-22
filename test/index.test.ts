import { pessoa } from '../source'

test('gerar estado civil', () => {
  expect(typeof pessoa.estadoCivil()).toBe('string')
})

test('gerar nome', () => {
  expect(typeof pessoa.nome()).toBe('string')
  expect(typeof pessoa.nomeFeminino()).toBe('string')
  expect(typeof pessoa.nomeMasculino()).toBe('string')
})

test('gerar sexo', () => {
  expect(typeof pessoa.sexo()).toBe('string')
})
