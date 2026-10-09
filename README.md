# Mão na Massa: Refatorando para Orientação a Objetos

Refatoração do exercício `refatozacao.ts` (TechForge4-ADS): o `type ConsumidorDTO` com funções soltas foi substituído pela classe `Consumidor`.

## O que mudou

| Antes | Depois |
|---|---|
| `type ConsumidorDTO` | `class Consumidor` com atributos privados |
| `criarConsumidor()` | `constructor` com validações |
| `formatarExibicao(c)` | método de instância `c.formatarExibicao()` |
| `calcularMediaIdade()` / `obterExtremosIdade()` | métodos estáticos da classe |
| sem validação | nome (mín. 2 caracteres), idade (inteiro 0–120), e-mail (regex) |
| — | `isMaiorDeIdade()`, getters e setters validados |

## Como executar

```bash
npm install
npm start
```
