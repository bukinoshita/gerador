# gerador [![Build Status](https://travis-ci.org/bukinoshita/gerador.svg?branch=master)](https://travis-ci.org/bukinoshita/gerador)

> Gerador de dados brasileiros

## Install

```
$ yarn add gerador
```

## Usage

```ts
import { pessoa } from 'gerador'

pessoa.nome()
// ~> Karina

pessoa.estadoCivil()
// ~> Casado
```

## API

### pessoa

Gerador de dados para pessoa física.

#### .estadoCivil()

Gera estado civil aleatório.

Returns a `string`.

#### .nome()

Gera nome aleatório masculino ou feminino.

Returns a `string`.

#### .nomeMasculino()

Gera nome aleatório masculino.

Returns a `string`.

#### .nomeFeminino()

Gera nome aleatório feminino.

Returns a `string`.

#### .sexo()

Gera sexo aleatório.

Returns a `string`.

## Related

- [gerador-nome](https://github.com/bukinoshita/gerador-nome) — Gerador brasileiro de nomes
- [gerador-estado-civil](https://github.com/bukinoshita/gerador-estado-civil) — Gerador brasileiro de Estado Civil
- [gerador-sexo](https://github.com/bukinoshita/gerador-sexo) — Gerador brasileiro de Sexo da pessoa

## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
