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
  lista.push({
    nome: nome,
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
    for(i = 0; i < lista.length; i++){
        if(lista[i].nome.toUpperCase().includes(termo.toUpperCase())){
        encontrou = true;
        break;
    }
    }
  if (encontrou) {
    console.log("Encontrado: " + lista[i].nome + " - R$ " + lista[i].preco,);
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
  return console.log(
    "Produtos com menos de " + minimo + " unidades: " + produtosEmFalta.length,
  );
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
        ultimoProduto.preco +" ."
    );
  }
  return console.log("Nenhum produtos recebeu desconto.");
}

/*function registrarVenda(lista, nome, quantidade){
    const indice = buscarProduto(lista, nome);
}*/

// ===== 3. PROGRAMA PRINCIPAL =====
// os testes: chamadas das funções e console.log
//--- Tarefa N: descrição ---.

console.log(nomeLoja);
console.log("\n--- Tarefa 2: Listar os produtos ---\n");
listarProdutos(produtos);
console.log("\n--- Tarefa 3: Cadastrar um produto ---\n");
cadastrarProduto(produtos, "goibada", "fruta", 1.5, 10);
console.log("\n--- Tarefa 4: Valor do estoque ---\n");
calcularValorEstoque(produtos);
console.log("\n--- Tarefa 5: Buscar um produto ---\n");
buscarProduto(produtos, "brigadeiro");
console.log("\n--- Tarefa 6: Produtos em falta ---\n");
produtosEmFalta(produtos, 5);
console.log("\n--- Tarefa 7: Aplicar desconto ---\n");
aplicarDesconto(produtos, "Bebida", 10);
console.log("\n--- Tarefa 8: Registrar uma venda ---\n");
