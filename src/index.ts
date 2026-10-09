import { Consumidor } from "./Consumidor";

const listaConsumidores: Consumidor[] = [
  new Consumidor("Ana Silva", 30, "ana@email.com"),
  new Consumidor("Carlos Souza", 22, "carlos@email.com"),
  new Consumidor("Mariana Lima", 45, "mariana@email.com"),
  new Consumidor("Roberto Alves", 19, "roberto@email.com"),
  new Consumidor("Fernanda Dias", 33, "fernanda@email.com"),
];

console.log("=== LISTA DE CONSUMIDORES ===");
listaConsumidores.forEach((c) => console.log(c.formatarExibicao()));

console.log("\n=== ANÁLISE ESTATÍSTICA ===");
console.log(`Média das Idades: ${Consumidor.calcularMediaIdade(listaConsumidores).toFixed(1)} anos`);

const { maisVelho, maisNovo } = Consumidor.obterExtremosIdade(listaConsumidores);
if (maisVelho && maisNovo) {
  console.log(`Mais Velho(a): ${maisVelho.nome} (${maisVelho.idade} anos)`);
  console.log(`Mais Novo(a): ${maisNovo.nome} (${maisNovo.idade} anos)`);
}

console.log("\n=== TESTE DE VALIDAÇÕES ===");
const tentativas: Array<[string, () => Consumidor]> = [
  ["Nome vazio", () => new Consumidor("", 25, "a@b.com")],
  ["Idade negativa", () => new Consumidor("João", -5, "joao@b.com")],
  ["E-mail inválido", () => new Consumidor("Maria", 28, "maria-sem-arroba")],
];
for (const [descricao, criar] of tentativas) {
  try {
    criar();
  } catch (e) {
    console.log(`${descricao} -> ${(e as Error).message}`);
  }
}
