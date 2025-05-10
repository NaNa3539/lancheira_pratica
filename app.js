const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const alimentos = [
  {
    "nome": "Banana",
    "grupo": "Frutas",
    "calorias": 89.0,
    "classificacao": "In natura"
  },
  {
    "nome": "Maçã",
    "grupo": "Frutas",
    "calorias": 80.0,
    "classificacao": "In natura"
  },
  {
    "nome": "Maçã verde",
    "grupo": "Frutas",
    "calorias": 84.0,
    "classificacao": "In natura"
  },
  {
    "nome": "Pera",
    "grupo": "Frutas",
    "calorias": 89.0,
    "classificacao": "In natura"
  },
  {
    "nome": "Melancia",
    "grupo": "Frutas",
    "calorias": 66.0,
    "classificacao": "In natura"
  },
  {
    "nome": "Manga picada",
    "grupo": "Frutas",
    "calorias": 90.0,
    "classificacao": "In natura"
  },
  {
    "nome": "Melão cubos",
    "grupo": "Frutas",
    "calorias": 58.0,
    "classificacao": "In natura"
  },
  {
    "nome": "Tomate cereja",
    "grupo": "Frutas",
    "calorias": 16.0,
    "classificacao": "In natura"
  },
  {
    "nome": "Cenoura baby",
    "grupo": "Frutas",
    "calorias": 18.0,
    "classificacao": "In natura"
  },
  {
    "nome": "Uva",
    "grupo": "Frutas",
    "calorias": 48.0,
    "classificacao": "In natura"
  },
  {
    "nome": "Morango",
    "grupo": "Frutas",
    "calorias": 32.0,
    "classificacao": "In natura"
  },
  {
    "nome": "Mamão",
    "grupo": "Frutas",
    "calorias": 68.0,
    "classificacao": "In natura"
  },
  {
    "nome": "Laranja",
    "grupo": "Frutas",
    "calorias": 83.0,
    "classificacao": "In natura"
  },
  {
    "nome": "Abacaxi cubos",
    "grupo": "Frutas",
    "calorias": 50.0,
    "classificacao": "In natura"
  },
  {
    "nome": "Mexerica",
    "grupo": "Frutas",
    "calorias": 64.0,
    "classificacao": "In natura"
  },
  {
    "nome": "Mirtilo",
    "grupo": "Frutas",
    "calorias": 43.0,
    "classificacao": "In natura"
  },
  {
    "nome": "Pêssego",
    "grupo": "Frutas",
    "calorias": 51.0,
    "classificacao": "In natura"
  },
  {
    "nome": "Creme de abacate",
    "grupo": "Frutas",
    "calorias": 160.0,
    "classificacao": "In natura"
  },
  {
    "nome": "Kiwi",
    "grupo": "Frutas",
    "calorias": 55.0,
    "classificacao": "In natura"
  },
  {
    "nome": "Tapioca",
    "grupo": "Carboidratos",
    "calorias": 105.0,
    "classificacao": NaN
  },
  {
    "nome": "Pão de forma integral",
    "grupo": "Carboidratos",
    "calorias": 126.0,
    "classificacao": "Processado"
  },
  {
    "nome": "Pão de forma branco",
    "grupo": "Carboidratos",
    "calorias": 134.0,
    "classificacao": NaN
  },
  {
    "nome": "Milho cozido",
    "grupo": "Carboidratos",
    "calorias": 141.0,
    "classificacao": "Minimamente processado"
  },
  {
    "nome": "Pão Francês",
    "grupo": "Carboidratos",
    "calorias": 112.0,
    "classificacao": NaN
  },
  {
    "nome": "Cuscuz de milho",
    "grupo": "Carboidratos",
    "calorias": 90.0,
    "classificacao": "Minimamente processado"
  },
  {
    "nome": "Batata doce cozida ou purê",
    "grupo": "Carboidratos",
    "calorias": 144.0,
    "classificacao": "Minimamente processado"
  },
  {
    "nome": "Wrap integral",
    "grupo": "Carboidratos",
    "calorias": 120.0,
    "classificacao": "Minimamente processado"
  },
  {
    "nome": "Granola sem açúcar",
    "grupo": "Carboidratos",
    "calorias": 120.0,
    "classificacao": "Minimamente processado"
  },
  {
    "nome": "Granola com açúcar",
    "grupo": "Carboidratos",
    "calorias": 126.0,
    "classificacao": "Ultraprocessado"
  },
  {
    "nome": "Pão de queijo",
    "grupo": "Carboidratos",
    "calorias": 116.0,
    "classificacao": "Processado"
  },
  {
    "nome": "Bolo de chocolate c/ cobertura de chocolate",
    "grupo": "Carboidratos",
    "calorias": 320.0,
    "classificacao": NaN
  },
  {
    "nome": "Bolo de cenoura c/ cobertura de chocolate",
    "grupo": "Carboidratos",
    "calorias": 336.0,
    "classificacao": NaN
  },
  {
    "nome": "Biscoito recheado",
    "grupo": "Carboidratos",
    "calorias": 200.0,
    "classificacao": "Ultraprocessado"
  },
  {
    "nome": "Mini pizza",
    "grupo": "Carboidratos",
    "calorias": 100.0,
    "classificacao": "Ultraprocessado"
  },
  {
    "nome": "Mini hot dog",
    "grupo": "Carboidratos",
    "calorias": 279.0,
    "classificacao": "Ultraprocessado"
  },
  {
    "nome": "Pipoca doce de canjica",
    "grupo": "Carboidratos",
    "calorias": 300.0,
    "classificacao": "Ultraprocessado"
  },
  {
    "nome": "Barra de cereal",
    "grupo": "Carboidratos",
    "calorias": 190.0,
    "classificacao": "Ultraprocessado"
  },
  {
    "nome": "Cookies",
    "grupo": "Carboidratos",
    "calorias": 87.0,
    "classificacao": "Ultraprocessado"
  },
  {
    "nome": "Bisnaguinha",
    "grupo": "Carboidratos",
    "calorias": 144.0,
    "classificacao": "Ultraprocessado"
  },
  {
    "nome": "Biscoito salgado (tipo Club Social)",
    "grupo": "Carboidratos",
    "calorias": 150.0,
    "classificacao": NaN
  },
  {
    "nome": "Biscoito de polvilho",
    "grupo": "Carboidratos",
    "calorias": 135.0,
    "classificacao": NaN
  },
  {
    "nome": "Salgadinho de milho",
    "grupo": "Carboidratos",
    "calorias": 150.0,
    "classificacao": "Ultraprocessado"
  },
  {
    "nome": "Barra de chocolate",
    "grupo": "Carboidratos",
    "calorias": 130.0,
    "classificacao": "Ultraprocessado"
  },
  {
    "nome": "Mortadela",
    "grupo": "Proteínas",
    "calorias": 114.0,
    "classificacao": "Ultraprocessado"
  },
  {
    "nome": "Presunto",
    "grupo": "Proteínas",
    "calorias": 48.0,
    "classificacao": "Ultraprocessado"
  },
  {
    "nome": "Mussarela",
    "grupo": "Proteínas",
    "calorias": 87.0,
    "classificacao": "Ultraprocessado"
  },
  {
    "nome": "Nuggets de frango",
    "grupo": "Proteínas",
    "calorias": 252.0,
    "classificacao": "Ultraprocessado"
  },
  {
    "nome": "Requeijão",
    "grupo": "Proteínas",
    "calorias": 75.0,
    "classificacao": "Processado"
  },
  {
    "nome": "Salsicha",
    "grupo": "Proteínas",
    "calorias": 116.0,
    "classificacao": "Ultraprocessado"
  },
  {
    "nome": "Salame",
    "grupo": "Proteínas",
    "calorias": 160.0,
    "classificacao": "Ultraprocessado"
  },
  {
    "nome": "Frango desfiado",
    "grupo": "Proteínas",
    "calorias": 130.0,
    "classificacao": "Processado"
  },
  {
    "nome": "Queijo branco (minas, ricota, cottage)",
    "grupo": "Proteínas",
    "calorias": 105.0,
    "classificacao": "Processado"
  },
  {
    "nome": "Patê de atum",
    "grupo": "Proteínas",
    "calorias": 50.0,
    "classificacao": "Processado"
  },
  {
    "nome": "Polenguinho",
    "grupo": "Proteínas",
    "calorias": 62.0,
    "classificacao": "Processado"
  },
  {
    "nome": "Linguiça",
    "grupo": "Proteínas",
    "calorias": 160.0,
    "classificacao": NaN
  },
  {
    "nome": "Iogurte natural",
    "grupo": "Proteínas",
    "calorias": 110.0,
    "classificacao": "Processado"
  },
  {
    "nome": "Manteiga",
    "grupo": "Lipídios",
    "calorias": 72.0,
    "classificacao": "Processado"
  },
  {
    "nome": "Margarina",
    "grupo": "Lipídios",
    "calorias": 72.0,
    "classificacao": "Ultraprocessado"
  },
  {
    "nome": "Creme de abacate",
    "grupo": "Lipídios",
    "calorias": 160.0,
    "classificacao": "In natura"
  },
  {
    "nome": "Coco fresco",
    "grupo": "Lipídios",
    "calorias": 162.0,
    "classificacao": "In natura"
  },
  {
    "nome": "Pasta de amendoim natural",
    "grupo": "Lipídios",
    "calorias": 122.0,
    "classificacao": "Minimamente processado"
  },
  {
    "nome": "Maionese",
    "grupo": "Lipídios",
    "calorias": 43.0,
    "classificacao": "Ultraprocessado"
  },
  {
    "nome": "Suco natural",
    "grupo": "Hidratação",
    "calorias": 84.0,
    "classificacao": "Minimamente processado"
  },
  {
    "nome": "Água de coco",
    "grupo": "Hidratação",
    "calorias": 44.0,
    "classificacao": "Minimamente processado"
  },
  {
    "nome": "Água",
    "grupo": "Hidratação",
    "calorias": 0.0,
    "classificacao": "Minimamente processado"
  },
  {
    "nome": "Refrigerante",
    "grupo": "Hidratação",
    "calorias": 140.0,
    "classificacao": "Ultraprocessado"
  },
  {
    "nome": "Néctar de laranja",
    "grupo": "Hidratação",
    "calorias": 90.0,
    "classificacao": "Ultraprocessado"
  },
  {
    "nome": "Achocolatado",
    "grupo": "Hidratação",
    "calorias": 76.0,
    "classificacao": "Ultraprocessado"
  },
  {
    "nome": "Iogurte de beber",
    "grupo": "Hidratação",
    "calorias": 119.0,
    "classificacao": "Processado"
  },
  {
    "nome": "Cuscuz de milho",
    "grupo": "Carboidratos",
    "calorias": 120.0,
    "classificacao": "Minimamente processado"
  },
  {
    "nome": "Granola com açúcar",
    "grupo": "Carboidratos",
    "calorias": 140.0,
    "classificacao": "Ultraprocessado"
  },
  {
    "nome": "Néctar de laranja",
    "grupo": "Hidratação",
    "calorias": 90.0,
    "classificacao": "Ultraprocessado"
  },
  {
    "nome": "Bolo de chocolate c/ cobertura de chocolate",
    "grupo": "Carboidratos",
    "calorias": 320.0,
    "classificacao": "Ultraprocessado"
  },
  {
    "nome": "Bolo de cenoura c/ cobertura de chocolate",
    "grupo": "Carboidratos",
    "calorias": 336.0,
    "classificacao": "Ultraprocessado"
  },
  {
    "nome": "Biscoito salgado (tipo Club Social)",
    "grupo": "Carboidratos",
    "calorias": 150.0,
    "classificacao": "Ultraprocessado"
  },
  {
    "nome": "Biscoito de polvilho",
    "grupo": "Carboidratos",
    "calorias": 135.0,
    "classificacao": "Ultraprocessado"
  },
  {
    "nome": "Linguiça",
    "grupo": "Proteínas",
    "calorias": 160.0,
    "classificacao": "Ultraprocessado"
  }
];
const ultraprocessados = [
  "Granola com açúcar",
  "Biscoito recheado",
  "Mini pizza",
  "Mini hot dog",
  "Pipoca doce de canjica",
  "Barra de cereal",
  "Cookies",
  "Bisnaguinha",
  "Salgadinho de milho",
  "Barra de chocolate",
  "Mortadela",
  "Presunto",
  "Mussarela",
  "Nuggets de frango",
  "Salsicha",
  "Salame",
  "Margarina",
  "Maionese",
  "Refrigerante",
  "Néctar de laranja",
  "Achocolatado",
  "Granola com açúcar",
  "Néctar de laranja",
  "Bolo de chocolate c/ cobertura de chocolate",
  "Bolo de cenoura c/ cobertura de chocolate",
  "Biscoito salgado (tipo Club Social)",
  "Biscoito de polvilho",
  "Linguiça"
];
const alimentosNatureza = [
  "Banana",
  "Maçã",
  "Maçã verde",
  "Pera",
  "Melancia",
  "Manga picada",
  "Melão cubos",
  "Tomate cereja",
  "Cenoura baby",
  "Uva",
  "Morango",
  "Mamão",
  "Laranja",
  "Abacaxi cubos",
  "Mexerica",
  "Mirtilo",
  "Pêssego",
  "Creme de abacate",
  "Kiwi",
  "Milho cozido",
  "Cuscuz de milho",
  "Batata doce cozida ou purê",
  "Wrap integral",
  "Granola sem açúcar",
  "Creme de abacate",
  "Coco fresco",
  "Pasta de amendoim natural",
  "Suco natural",
  "Água de coco",
  "Água",
  "Cuscuz de milho"
];

let lancheira = [];

app.get('/', (req, res) => {
  const totalCalorias = lancheira.reduce((sum, a) => sum + a.calorias, 0);

  const ultraCount = lancheira.filter(a =>
    ultraprocessados.some(x => x.trim().toLowerCase() === a.nome.trim().toLowerCase())
  ).length;

  const apenasNaturais = lancheira.every(a =>
    alimentosNatureza.some(x => x.trim().toLowerCase() === a.nome.trim().toLowerCase())
  );

  let alertas = "";
  if (totalCalorias > 400) {
    alertas += "<p style='color:red'><strong>⚠️ Atenção!</strong> A lancheira ultrapassou 400 kcal. Tente equilibrar os alimentos.</p>";
  }
  if (ultraCount >= 2) {
    alertas += "<p style='color:orangered'><strong>⚠️ Cuidado!</strong> Mais de um alimento ultraprocessado foi adicionado. Dê preferência a opções naturais.</p>";
  }
  if (lancheira.length > 0 && apenasNaturais && totalCalorias <= 400) {
    alertas += "<p style='color:green'><strong>✅ Parabéns!</strong> Você fez ótimas escolhas: lancheira equilibrada e saudável!</p>";
  }

  let html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Lancheira Saudável</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <div class="container">
        <h1>Monte a Lancheira Saudável</h1>
        <p class="info">
          ℹ️ <em>Recomenda-se que o lanche escolar contenha até <strong>400 kcal</strong>,
          dentro de uma alimentação diária equilibrada para adolescentes saudáveis.</em>
        </p>
        <form method="POST" action="/adicionar">
          <label for="alimento">Escolha um alimento:</label>
          <select name="alimento">
            <optgroup label="🥖 Carboidratos">
<option value="Tapioca">Tapioca - 105.0 kcal</option>
<option value="Pão de forma integral">Pão de forma integral - 126.0 kcal</option>
<option value="Pão de forma branco">Pão de forma branco - 134.0 kcal</option>
<option value="Milho cozido">Milho cozido - 141.0 kcal</option>
<option value="Pão Francês">Pão Francês - 112.0 kcal</option>
<option value="Cuscuz de milho">Cuscuz de milho - 90.0 kcal</option>
<option value="Batata doce cozida ou purê">Batata doce cozida ou purê - 144.0 kcal</option>
<option value="Wrap integral">Wrap integral - 120.0 kcal</option>
<option value="Granola sem açúcar">Granola sem açúcar - 120.0 kcal</option>
<option value="Granola com açúcar">Granola com açúcar - 126.0 kcal</option>
<option value="Pão de queijo">Pão de queijo - 116.0 kcal</option>
<option value="Bolo de chocolate c/ cobertura de chocolate">Bolo de chocolate c/ cobertura de chocolate - 320.0 kcal</option>
<option value="Bolo de cenoura c/ cobertura de chocolate">Bolo de cenoura c/ cobertura de chocolate - 336.0 kcal</option>
<option value="Biscoito recheado">Biscoito recheado - 200.0 kcal</option>
<option value="Mini pizza">Mini pizza - 100.0 kcal</option>
<option value="Mini hot dog">Mini hot dog - 279.0 kcal</option>
<option value="Pipoca doce de canjica">Pipoca doce de canjica - 300.0 kcal</option>
<option value="Barra de cereal">Barra de cereal - 190.0 kcal</option>
<option value="Cookies">Cookies - 87.0 kcal</option>
<option value="Bisnaguinha">Bisnaguinha - 144.0 kcal</option>
<option value="Biscoito salgado (tipo Club Social)">Biscoito salgado (tipo Club Social) - 150.0 kcal</option>
<option value="Biscoito de polvilho">Biscoito de polvilho - 135.0 kcal</option>
<option value="Salgadinho de milho">Salgadinho de milho - 150.0 kcal</option>
<option value="Barra de chocolate">Barra de chocolate - 130.0 kcal</option>
<option value="Cuscuz de milho">Cuscuz de milho - 120.0 kcal</option>
<option value="Granola com açúcar">Granola com açúcar - 140.0 kcal</option>
<option value="Bolo de chocolate c/ cobertura de chocolate">Bolo de chocolate c/ cobertura de chocolate - 320.0 kcal</option>
<option value="Bolo de cenoura c/ cobertura de chocolate">Bolo de cenoura c/ cobertura de chocolate - 336.0 kcal</option>
<option value="Biscoito salgado (tipo Club Social)">Biscoito salgado (tipo Club Social) - 150.0 kcal</option>
<option value="Biscoito de polvilho">Biscoito de polvilho - 135.0 kcal</option>
</optgroup>
<optgroup label="🍎 Frutas">
<option value="Banana">Banana - 89.0 kcal</option>
<option value="Maçã">Maçã - 80.0 kcal</option>
<option value="Maçã verde">Maçã verde - 84.0 kcal</option>
<option value="Pera">Pera - 89.0 kcal</option>
<option value="Melancia">Melancia - 66.0 kcal</option>
<option value="Manga picada">Manga picada - 90.0 kcal</option>
<option value="Melão cubos">Melão cubos - 58.0 kcal</option>
<option value="Tomate cereja">Tomate cereja - 16.0 kcal</option>
<option value="Cenoura baby">Cenoura baby - 18.0 kcal</option>
<option value="Uva">Uva - 48.0 kcal</option>
<option value="Morango">Morango - 32.0 kcal</option>
<option value="Mamão">Mamão - 68.0 kcal</option>
<option value="Laranja">Laranja - 83.0 kcal</option>
<option value="Abacaxi cubos">Abacaxi cubos - 50.0 kcal</option>
<option value="Mexerica">Mexerica - 64.0 kcal</option>
<option value="Mirtilo">Mirtilo - 43.0 kcal</option>
<option value="Pêssego">Pêssego - 51.0 kcal</option>
<option value="Creme de abacate">Creme de abacate - 160.0 kcal</option>
<option value="Kiwi">Kiwi - 55.0 kcal</option>
</optgroup>
<optgroup label="💧 Hidratação">
<option value="Suco natural">Suco natural - 84.0 kcal</option>
<option value="Água de coco">Água de coco - 44.0 kcal</option>
<option value="Água">Água - 0.0 kcal</option>
<option value="Refrigerante">Refrigerante - 140.0 kcal</option>
<option value="Néctar de laranja">Néctar de laranja - 90.0 kcal</option>
<option value="Achocolatado">Achocolatado - 76.0 kcal</option>
<option value="Iogurte de beber">Iogurte de beber - 119.0 kcal</option>
<option value="Néctar de laranja">Néctar de laranja - 90.0 kcal</option>
</optgroup>
<optgroup label="🧈 Lipídios">
<option value="Manteiga">Manteiga - 72.0 kcal</option>
<option value="Margarina">Margarina - 72.0 kcal</option>
<option value="Creme de abacate">Creme de abacate - 160.0 kcal</option>
<option value="Coco fresco">Coco fresco - 162.0 kcal</option>
<option value="Pasta de amendoim natural">Pasta de amendoim natural - 122.0 kcal</option>
<option value="Maionese">Maionese - 43.0 kcal</option>
</optgroup>
<optgroup label="🍳 Proteínas">
<option value="Mortadela">Mortadela - 114.0 kcal</option>
<option value="Presunto">Presunto - 48.0 kcal</option>
<option value="Mussarela">Mussarela - 87.0 kcal</option>
<option value="Nuggets de frango">Nuggets de frango - 252.0 kcal</option>
<option value="Requeijão">Requeijão - 75.0 kcal</option>
<option value="Salsicha">Salsicha - 116.0 kcal</option>
<option value="Salame">Salame - 160.0 kcal</option>
<option value="Frango desfiado">Frango desfiado - 130.0 kcal</option>
<option value="Queijo branco (minas, ricota, cottage)">Queijo branco (minas, ricota, cottage) - 105.0 kcal</option>
<option value="Patê de atum">Patê de atum - 50.0 kcal</option>
<option value="Polenguinho">Polenguinho - 62.0 kcal</option>
<option value="Linguiça">Linguiça - 160.0 kcal</option>
<option value="Iogurte natural">Iogurte natural - 110.0 kcal</option>
<option value="Linguiça">Linguiça - 160.0 kcal</option>
</optgroup>
          </select>
          <button type="submit">Adicionar</button>
        </form>

        ${alertas}

        <h2>Lancheira Atual</h2>
        <ul>
          ${lancheira.map(a => `<li>${a.nome} - ${a.calorias} kcal</li>`).join('')}
        </ul>
        <p><strong>Total de calorias:</strong> ${totalCalorias} kcal</p>
        <form method="POST" action="/limpar">
          <button type="submit">Limpar Lancheira</button>
        </form>
        <footer class="rodape">
          <p>
            ℹ️ Baseado no 
            <a href="https://bvsms.saude.gov.br/bvs/publicacoes/guia_alimentar_populacao_brasileira_2ed.pdf" target="_blank">
              Guia Alimentar para a População Brasileira (Ministério da Saúde, 2014)
            </a>
          </p>
        </footer>
      </div>
    </body>
    </html>
  `;
  res.send(html);
});

app.post('/adicionar', (req, res) => {
  const alimentoSelecionado = alimentos.find(a => a.nome === req.body.alimento);
  if (alimentoSelecionado) lancheira.push(alimentoSelecionado);
  res.redirect('/');
});

app.post('/limpar', (req, res) => {
  lancheira = [];
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
