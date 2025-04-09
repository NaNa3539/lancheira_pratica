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
    "classificacao": "Processado"
  },
  {
    "nome": "Cuscuz de milho",
    "grupo": "Carboidratos",
    "calorias": 90.0,
    "classificacao": NaN
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
    "classificacao": NaN
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
    "classificacao": NaN
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
    "nome": "Pasta de amendoim natural",
    "grupo": "Proteínas",
    "calorias": 122.0,
    "classificacao": "Minimamente processado"
  },
  {
    "nome": "Achocolatado",
    "grupo": "Proteínas",
    "calorias": 76.0,
    "classificacao": "Ultraprocessado"
  },
  {
    "nome": "Patê de atum",
    "grupo": "Proteínas",
    "calorias": 50.0,
    "classificacao": NaN
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
    "classificacao": "Ultraprocessado"
  },
  {
    "nome": "Iogurte natural",
    "grupo": "Proteínas",
    "calorias": 110.0,
    "classificacao": "Processado"
  },
  {
    "nome": "Iogurte de beber",
    "grupo": "Proteínas",
    "calorias": 119.0,
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
    "nome": "Salsicha",
    "grupo": "Lipídios",
    "calorias": 116.0,
    "classificacao": NaN
  },
  {
    "nome": "Salgadinho",
    "grupo": "Lipídios",
    "calorias": 150.0,
    "classificacao": "Ultraprocessado"
  },
  {
    "nome": "Barra de chocolate",
    "grupo": "Lipídios",
    "calorias": 130.0,
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
    "nome": "Suco de laranja industrializado",
    "grupo": "Hidratação",
    "calorias": 90.0,
    "classificacao": NaN
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
  }
];
const ultraprocessados = [
  "Biscoito recheado",
  "Mini pizza",
  "Mini hot dog",
  "Barra de cereal",
  "Cookies",
  "Bisnaguinha",
  "Mortadela",
  "Presunto",
  "Mussarela",
  "Nuggets de frango",
  "Salame",
  "Achocolatado",
  "Linguiça",
  "Margarina",
  "Maionese",
  "Salgadinho",
  "Barra de chocolate",
  "Refrigerante",
  "Achocolatado"
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
  "Batata doce cozida ou purê",
  "Wrap integral",
  "Granola sem açúcar",
  "Pasta de amendoim natural",
  "Creme de abacate",
  "Coco fresco",
  "Pasta de amendoim natural",
  "Suco natural",
  "Água de coco",
  "Água"
];

let lancheira = [];

app.get('/', (req, res) => {
  let totalCalorias = lancheira.reduce((sum, a) => sum + a.calorias, 0);
  let ultraCount = lancheira.filter(a => ultraprocessados.includes(a.nome)).length;
  let apenasNaturais = lancheira.every(a => alimentosNatureza.includes(a.nome));

  let alertas = "";
  if (totalCalorias > 400) {
    alertas += "<p style='color:red'><strong>⚠️ Atenção!</strong> A lancheira ultrapassou 400 kcal. Tente equilibrar os alimentos.</p>";
  }
  if (ultraCount >= 2) {
    alertas += "<p style='color:red'><strong>⚠️ Cuidado!</strong> Mais de um alimento ultraprocessado foi adicionado.</p>";
  }
  if (apenasNaturais && totalCalorias <= 400 && lancheira.length > 0) {
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
<option value="Tapioca">Tapioca (🥖 Carboidratos)</option>
<option value="Pão de forma integral">Pão de forma integral (🥖 Carboidratos)</option>
<option value="Pão de forma branco">Pão de forma branco (🥖 Carboidratos)</option>
<option value="Milho cozido">Milho cozido (🥖 Carboidratos)</option>
<option value="Pão Francês">Pão Francês (🥖 Carboidratos)</option>
<option value="Cuscuz de milho">Cuscuz de milho (🥖 Carboidratos)</option>
<option value="Batata doce cozida ou purê">Batata doce cozida ou purê (🥖 Carboidratos)</option>
<option value="Wrap integral">Wrap integral (🥖 Carboidratos)</option>
<option value="Granola sem açúcar">Granola sem açúcar (🥖 Carboidratos)</option>
<option value="Granola com açúcar">Granola com açúcar (🥖 Carboidratos)</option>
<option value="Pão de queijo">Pão de queijo (🥖 Carboidratos)</option>
<option value="Bolo de chocolate c/ cobertura de chocolate">Bolo de chocolate c/ cobertura de chocolate (🥖 Carboidratos)</option>
<option value="Bolo de cenoura c/ cobertura de chocolate">Bolo de cenoura c/ cobertura de chocolate (🥖 Carboidratos)</option>
<option value="Biscoito recheado">Biscoito recheado (🥖 Carboidratos)</option>
<option value="Mini pizza">Mini pizza (🥖 Carboidratos)</option>
<option value="Mini hot dog">Mini hot dog (🥖 Carboidratos)</option>
<option value="Pipoca doce de canjica">Pipoca doce de canjica (🥖 Carboidratos)</option>
<option value="Barra de cereal">Barra de cereal (🥖 Carboidratos)</option>
<option value="Cookies">Cookies (🥖 Carboidratos)</option>
<option value="Bisnaguinha">Bisnaguinha (🥖 Carboidratos)</option>
<option value="Biscoito salgado (tipo Club Social)">Biscoito salgado (tipo Club Social) (🥖 Carboidratos)</option>
<option value="Biscoito de polvilho">Biscoito de polvilho (🥖 Carboidratos)</option>
</optgroup>
<optgroup label="🍎 Frutas">
<option value="Banana">Banana (🍎 Frutas)</option>
<option value="Maçã">Maçã (🍎 Frutas)</option>
<option value="Maçã verde">Maçã verde (🍎 Frutas)</option>
<option value="Pera">Pera (🍎 Frutas)</option>
<option value="Melancia">Melancia (🍎 Frutas)</option>
<option value="Manga picada">Manga picada (🍎 Frutas)</option>
<option value="Melão cubos">Melão cubos (🍎 Frutas)</option>
<option value="Tomate cereja">Tomate cereja (🍎 Frutas)</option>
<option value="Cenoura baby">Cenoura baby (🍎 Frutas)</option>
<option value="Uva">Uva (🍎 Frutas)</option>
<option value="Morango">Morango (🍎 Frutas)</option>
<option value="Mamão">Mamão (🍎 Frutas)</option>
<option value="Laranja">Laranja (🍎 Frutas)</option>
<option value="Abacaxi cubos">Abacaxi cubos (🍎 Frutas)</option>
<option value="Mexerica">Mexerica (🍎 Frutas)</option>
<option value="Mirtilo">Mirtilo (🍎 Frutas)</option>
<option value="Pêssego">Pêssego (🍎 Frutas)</option>
<option value="Creme de abacate">Creme de abacate (🍎 Frutas)</option>
<option value="Kiwi">Kiwi (🍎 Frutas)</option>
</optgroup>
<optgroup label="💧 Hidratação">
<option value="Suco natural">Suco natural (💧 Hidratação)</option>
<option value="Água de coco">Água de coco (💧 Hidratação)</option>
<option value="Água">Água (💧 Hidratação)</option>
<option value="Refrigerante">Refrigerante (💧 Hidratação)</option>
<option value="Suco de laranja industrializado">Suco de laranja industrializado (💧 Hidratação)</option>
<option value="Achocolatado">Achocolatado (💧 Hidratação)</option>
<option value="Iogurte de beber">Iogurte de beber (💧 Hidratação)</option>
</optgroup>
<optgroup label="🧈 Lipídios">
<option value="Manteiga">Manteiga (🧈 Lipídios)</option>
<option value="Margarina">Margarina (🧈 Lipídios)</option>
<option value="Creme de abacate">Creme de abacate (🧈 Lipídios)</option>
<option value="Coco fresco">Coco fresco (🧈 Lipídios)</option>
<option value="Pasta de amendoim natural">Pasta de amendoim natural (🧈 Lipídios)</option>
<option value="Maionese">Maionese (🧈 Lipídios)</option>
<option value="Salsicha">Salsicha (🧈 Lipídios)</option>
<option value="Salgadinho">Salgadinho (🧈 Lipídios)</option>
<option value="Barra de chocolate">Barra de chocolate (🧈 Lipídios)</option>
</optgroup>
<optgroup label="🍳 Proteínas">
<option value="Mortadela">Mortadela (🍳 Proteínas)</option>
<option value="Presunto">Presunto (🍳 Proteínas)</option>
<option value="Mussarela">Mussarela (🍳 Proteínas)</option>
<option value="Nuggets de frango">Nuggets de frango (🍳 Proteínas)</option>
<option value="Requeijão">Requeijão (🍳 Proteínas)</option>
<option value="Salame">Salame (🍳 Proteínas)</option>
<option value="Frango desfiado">Frango desfiado (🍳 Proteínas)</option>
<option value="Queijo branco (minas, ricota, cottage)">Queijo branco (minas, ricota, cottage) (🍳 Proteínas)</option>
<option value="Pasta de amendoim natural">Pasta de amendoim natural (🍳 Proteínas)</option>
<option value="Achocolatado">Achocolatado (🍳 Proteínas)</option>
<option value="Patê de atum">Patê de atum (🍳 Proteínas)</option>
<option value="Polenguinho">Polenguinho (🍳 Proteínas)</option>
<option value="Linguiça">Linguiça (🍳 Proteínas)</option>
<option value="Iogurte natural">Iogurte natural (🍳 Proteínas)</option>
<option value="Iogurte de beber">Iogurte de beber (🍳 Proteínas)</option>
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
