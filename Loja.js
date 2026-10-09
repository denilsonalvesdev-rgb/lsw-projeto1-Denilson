// ===== 1. DADOS =====
// nomeLoja e o array produtos (Tarefa 1)
const nomeLoja = "Lanches do Denilson";
const produtos = [
  {
    nome: "Pastel",
    categoria: "comida",
    preco: 2.5,
    quantidade: 15,
    vendidos: 5,
  },
  {
    nome: "Coca-Cola",
    categoria: "Bebida",
    preco: 4.5,
    quantidade: 3,
    vendidos: 15,
  },
  {
    nome: "Coxinha",
    categoria: "Comida",
    preco: 2.5,
    quantidade: 10,
    vendidos: 10,
  },
  {
    nome: "Brigadeiro",
    categoria: "Doce",
    preco: 1.5,
    quantidade: 5,
    vendidos: 10,
  },
  {
    nome: "Picole",
    categoria: "Doce",
    preco: 6.5,
    quantidade: 10,
    vendidos: 10,
  },
  {
    nome: "Suco",
    categoria: "Bebida",
    preco: 1.5,
    quantidade: 4,
    vendidos: 5,
  },
];
// ===== 2. FUNÇÕES =====
// todas as funções das Tarefas 2 a 11
function listarProdutos(lista) {
  let cont = 1;
  lista.forEach(function (lista) {
    console.log(
      cont +
        ". " +
        lista.nome +
        " | " +
        lista.categoria +
        " | R$ " +
        lista.preco +
        " | " +
        lista.quantidade +
        " un. | " +
        lista.vendidos,
    );
    cont++;
  });
}

function cadastrarProduto(lista, nome, categoria, preco, quantidade) {
  let nomeFor = formatarNome(nome);
  lista.push({
    nome: nomeFor,
    categoria: categoria,
    preco: preco,
    quantidade: quantidade,
    vendidos: 0,
  });
  console.log(
    "Produto cadastrado! Agora a loja tem " + lista.length + " produtos.",
  );
}

function calcularValorEstoque(lista) {
  let valorEstoque = 0;
  lista.forEach(function (lista) {
    valorEstoque = valorEstoque + lista.preco * lista.quantidade;
  });
  console.log("Valor do estoque: R$ " + valorEstoque);
  return valorEstoque;
}

function buscarProduto(lista, termo) {
  let i;
  let encontrou = false;
  for (i = 0; i < lista.length; i++) {
    if (lista[i].nome.toUpperCase().includes(termo.toUpperCase())) {
      encontrou = true;
      break;
    }
  }
  if (encontrou) {
    console.log("Encontrado: " + lista[i].nome + " - R$ " + lista[i].preco);
    return i;
  }
  console.log("Produto não encontrado.");
  return null;
}

function produtosEmFalta(lista, minimo) {
  const produtosEmFalta = [];
  lista.forEach(function (lista) {
    if (lista.quantidade < minimo) {
      produtosEmFalta.push(lista);
    }
  });
  console.log("Produtos com menos de " + minimo + " unidades: " + produtosEmFalta.length);
  return produtosEmFalta;
}

function aplicarDesconto(lista, categoria, percentual) {
  let cont = 0;
  const ultimoProduto = {
    nome: "",
    preco: 0,
  };

  lista.forEach(function (produto) {
    if (categoria === produto.categoria) {
      produto.preco = produto.preco - (produto.preco * percentual) / 100;
      cont++;
      ultimoProduto.nome = produto.nome;
      ultimoProduto.preco = produto.preco;
    }
  });
  if (cont !== 0) {
    return console.log(
      cont +
        " produtos receberam desconto. Novo preço do(a) " +
        ultimoProduto.nome +
        ": R$ " +
        ultimoProduto.preco +
        " .",
    );
  }
  return console.log("Nenhum produtos recebeu desconto.");
}

function registrarVenda(lista, nome, quantidade) {
  const indice = buscarProduto(lista, nome);
  if (indice === null && lista[indice] > quantidade) {
    console.log(
      "Venda não realizada: estoque insuficiente ou produto inexistente.",
    );
    return false;
  }

  lista[indice].vendidos += quantidade;
  lista[indice].quantidade -= quantidade;
  console.log(
    "Venda realizada! " +
      nome +
      ": " +
      lista[indice].quantidade +
      "  un. em estoque, " +
      lista[indice].vendidos +
      " vendidos.",
  );
  return true;
}

function formatarNome(texto) {
  let textoFormatado;
  textoFormatado = texto.trim().toLowerCase();
  textoFormatado =
    textoFormatado.charAt(0).toUpperCase() + textoFormatado.slice(1);
  return textoFormatado;
}

function converterParaJSON(lista) {
  const texto = JSON.stringify(lista);
  return texto;
}

function lerJSON(texto) {
  const lista = JSON.parse(texto);
  console.log(
    "Itens recuperados: " + lista.length + " | Primeiro: " + lista[0].nome,
  );
  return lista;
}

function listarEmFalta(lista){
   lista.forEach(function (n) {
    console.log(" - "+n.nome+" ( "+n.quantidade+" un.)\n")
  });
}

function gerarRelatorio(nome, lista) {
  let listaEmfalta = [];
  listaEmfalta = produtosEmFalta(lista, 5)
  console.log(
    "===== RELATÓRIO: " +
      nome.toUpperCase() +
      " ===== \nProdutos cadastrados: " +
      lista.length +
      "\nValor total em estoque: R$ " +
      calcularValorEstoque(lista) +
      " \nProdutos com estoque baixo: " +
      listaEmfalta.length+"\n"
  );
  listarEmFalta(listaEmfalta);
}

// ===== 3. PROGRAMA PRINCIPAL =====
// os testes: chamadas das funções e console.log
//--- Tarefa N: descrição ---.

console.log("--- Tarefa 2: Listar os produtos ---");
listarProdutos(produtos);
console.log("--- Tarefa 3: Cadastrar um produto ---");
cadastrarProduto(produtos, "goibada", "fruta", 1.5, 10);
console.log("--- Tarefa 4: Valor do estoque ---");
calcularValorEstoque(produtos);
console.log("--- Tarefa 5: Buscar um produto ---");
buscarProduto(produtos, "brigadeiro");
console.log("--- Tarefa 6: Produtos em falta ---");
produtosEmFalta(produtos, 5);
console.log("--- Tarefa 7: Aplicar desconto ---");
aplicarDesconto(produtos, "Bebida", 10);
console.log("--- Tarefa 8: Registrar uma venda ---");
registrarVenda(produtos, "Pastel", 5); //fazer isso mais duas vezes
console.log("--- Tarefa 9: Padronizar nomes ---");
console.log(formatarNome(" bORRACHA branca "));
console.log("--- Tarefa 10: Salvar e recuperar em JSON ---");
console.log(typeof converterParaJSON(produtos));
const texto = converterParaJSON(produtos);
console.log(typeof lerJSON(texto));
console.log("--- Tarefa 11: Relatório final ---");
gerarRelatorio(nomeLoja, produtos)
