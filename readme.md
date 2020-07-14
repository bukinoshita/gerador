# gerador

> Gerador de dados brasileiros

## Install

```
$ yarn add gerador
```

## Usage

```ts
import { pessoa, veiculo } from 'gerador'

pessoa.nome()
// ~> Karina

pessoa.estadoCivil()
// ~> Casado

veiculo.placa()
// -> ZSG3N02
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

### veiculo

Gerador de dados para veículo.

#### .placa()

Gera uma placa de veículo aleatório.

Returns a `string`.

## Related

- [gerador-nome](https://github.com/bukinoshita/gerador-nome) — Gerador brasileiro de nomes
- [gerador-estado-civil](https://github.com/bukinoshita/gerador-estado-civil) — Gerador brasileiro de Estado Civil
- [gerador-sexo](https://github.com/bukinoshita/gerador-sexo) — Gerador brasileiro de Sexo da pessoa
- [gerador-placa-veiculo](https://github.com/bukinoshita/gerador-placa-veiculo) — Gerador brasileiro de Placa de Veículo

## License

MIT © [Bu Kinoshita](https://bukinoshita.com)
