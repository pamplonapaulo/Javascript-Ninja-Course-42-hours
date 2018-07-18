'use strict';

console.log('Teste 33 NodeMon ouvindo...');

var express = require('express');

// require vai requisitar um arquivo.

// 'express', apenas o nome, isto é, sem passar nada na frente, faz o Node procurar um diretório 'express' dentro da pasta 'node_modules'. Procura também se dentro deste diretório 'express' há algum arquivo chamado 'index.js'.

// Sobre CORS, ler mais abaixo.
var cors = require('cors');

// Portanto, na chamada que estamos fazendo acima, é o arquivo 'rest-api\node_modules\express\index.js' que está sendo incluído.

// Feito isso, agora vamos criar nossa variável executável, 'app':
var app = express();

// Sobre CORS, ler mais abaixo.
app.use(cors());

// Agora o método 'get':
app.get('/', function(request, response){
    response.send('<h1>Home Paulo</h1>');
});

// Quando recebe uma requisição get na URL passada no primeiro parâmetro (no caso, apenas '/', que significa a root onde estamos), ele executa a call-back function  que estamos passando no segundo parâmetro deste 'get'.

// Sobre os parâmetros desta call-back function. 'request' são os dados que vêm do front quando você requisita essa URL, e o 'response' são os dados que você devolve para o servidor. Normalmente, estes parâmetros são abreviados para 'req' e 'res'. Porém Daciuk recomenda não abreviar variáveis, mas aqui é um padrão muito estabelecido.

// A URL do servidor utilizada também chamamos de 'rota'.

// O método 'get' normalmente é acessado pela URL. Tudo que um usuário no browser acessa através da URL, ele manda uma requisição 'get' para o servidor. Exemplos: google.com.br etc.

//   response.send('<h1>Home</h1>');
// Com esse comando, o browser apenas vai carregar esse <h1> na página.

app.listen(3000);
// Agora precisamos 'ouvir' em alguma porta. Sempre que acessar 'localhost/3000', (claro, pois estamos com servidor local), então ele vai carregar o response no browser.

// Você pode criar outras rotas:

app.get('/user', function(req, res){
    res.send('<h2>Outra Rota \'/user\'</h2>');
});
// E para acessar no browser, basta: http://localhost:3000/user

// Se tentar acessar uma rota que não existe, retemos erro no browser:
// 'Cannot GET /user-kjasdhkajdhs'
// E o status da requisição será '404', não mais '200'.

// OBS: nodemon é legal, por exemplo, pois dispensa a necessidade de ficarmos desligando e ligando o servidor a toda alteração que fizermos.

// É assim que o servidor responde uma rota 'get'.


// Como poderíamos fazer essa requisição via ajax no front-end?
// Vamos voltar a usar agora o arquivo 'aula-32-REST-Ajax-Post.html'

app.get('/arroz', function(req, res){
    res.send('<h2>Nova Rota \'/arroz\'</h2>');
});

// Em outro servidor local, na abertura do arquivo aula-32-REST-Ajax-Post.html, temos no console o seguinte erro:

//Failed to load http://localhost:3000/user: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost' is therefore not allowed access.



// Erro de CORS e a correção:

// Após a instalação do CORS via Terminal*, conforme descrito no arquivo aula-32-REST-Ajax-Post.html e mostrado por Daciuk no terceiro vídeo desta aula, nós vamos realizar uma intervenção neste script, incluindo o seguinte:

//var cors = require('cors');



// Essa linha de código Daciuk insere entre as duas var já declaradas anteriormente acima (express, app).

// * = a instalação do CORS resulta na criação de um novo folder 'cors' dentro de 'node_modules'.


// Além disso, Daciuk insere também o comando abaixo depois das variáveis e antes do primeiro get:

//app.use(cors());



// Esses breves acréscimos de CORS estão informando a aplicação de que todo request (de qualquer outra origem) está autorizado.

// Basicamente, problemas de CORS são problemas de 'cross origin', isto é, origens diferentes.

// Obviamente, por questão de segurança você não pode deixar que qualquer pessoa pegue qualquer coisa no teu servidor, seja via Ajax ou seja qualquer outra forma.

// Quando você faz uma api REST, normalmente você irá settar algumas configurações no back-end. No front-end, normalmente, a gente não se preocupa com esse tipo de coisa. A gente apenas pede a liberação à equipe do back-end. Se fizer sentido, então eles irão liberar. Via nodeExpress, é assim como feito aqui neste script, utilizando o módulo cors. Agora basta subir novamente a aplicação.


// 'GET', mais detalhes:

// O GET passa informação via URL. Agora, digamos que você queira pegar um usuário específico. Supondo que você tenha uma dada URL:
app.get('/user/paulo', function(req, res){
    res.send('<h1>User: </h1><h2>Paulo</h2>');
});

// Agora, e se fizermos mais ou menos o mesmo lá no nosso arquivo de front-end (aula-32-REST-Ajax-Post.html)?
// Copy do pedaço de código do front-end alterado:
// ANTES: ajax.open('GET', 'http://localhost:3000/user');
// AGORA: ajax.open('GET', 'http://localhost:3000/user/paulo');

// Conforme se vê, a mesma coisa funciona perfeitamente.

// Mas será que precisamos criar aqui no back-end uma rota para cada novo user?
// Não. Pois dá para fazer isso de forma DINÂMICA:

// Atenção para o objeto 'params', diz respeito a parâmetros da URL:
//app.get('/user/:username', function(req, res){
//    res.send(req.params.username);
//});

// Acima, 'username' é uma variável.

// Feito isso, podemos manipular apenas o front-end e observar o funcionamento deste código dinâmico do back-end, o qual será o mesmo para todos.

// Vamos testar lá no front-end todos esses casos para ver se funciona:

//    ajax.open('GET', 'http://localhost:3000/user/helo');
//    ajax.open('GET', 'http://localhost:3000/user/natalie');
//    ajax.open('GET', 'http://localhost:3000/user/jorge');
//    ajax.open('GET', 'http://localhost:3000/user/lula');

// Portanto, com essa api REST você pode passar informações específicas de cada usuário.

// Considere o seguinte objeto:

var users = {
    joao: {
        nome: 'João',
        idade: 30
    },
    maria: {
        nome: 'Maria',
        idade: 22
    },
    fernando: {
        nome: 'Fernando',
        idade: 20
    },
};


// Agora note que estamos usando um método 'json' ao invés de 'send'.
//app.get('/user/:username', function(req, res){
//    var username = req.params.username;
//    res.json(users[username]);
//    
//});

// Via front-end, conseguimos acessar dinamicamente esse objeto 'users'. Exemplo para 'ajax.open('GET', 'http://localhost:3000/user/maria');':

// {"nome":"Maria","idade":22}


// Se você tenta acessar um objeto que não existe, ele retorna em branco. Nesse caso, o que fazer?

// Primeiramente, vamos alterar aquele script para que ele sempre dê algum responseText no console.log, bastando o request e independente do status. Estamos alterando a condição assim:

// antes: if (ajax.readyState == 4 && ajax.status == 200)
// agora: if (ajax.readyState == 4)

// E então, aqui no back-end, vamos fazer o seguinte:

//app.get('/user/:username', function(req, res){
//    var username = req.params.username;
//    if(users[username]) {
//        return res.json(users[username]);    
//    }
//    res.json({ error: 'Usuário não encontrado' });
//});
// {"error":"Usuário não encontrado"} 200


// Ou ainda:
// Você pode mudar o status e mandar um status de erro:

app.get('/user/:username', function(req, res){
    var username = req.params.username;
    if(users[username]) {
        return res.json(users[username]);    
    }
    res.status(404).json({ error: 'Usuário não encontrado' });
});

// A partir do servidor vc consegue fazer requisições de informações com 'GET', passar algumas informações para o servidor (aquilo que você quer buscar), para o servidor te devolver.

// É isso. Mas aqui não há nenhum tratamento de segurança. Não iremos fazer isso em produção.

// Uma api REST 'de verdade' você terá de fazer tratamentos de segurança, verificação com 'hash'(?), etc. Do contrário, os dados serão roubados.

/*

OBS:

Nos casos acima onde vemos 'res.send('lalala')', na verdade o mais normal para uma API REST seria que fosse 'res.json('lalala')'.

Em vez disso:
app.get('/user/paulo', function(req, res){
    res.send('<h1>User: </h1><h2>Paulo</h2>');
});

O mais normal seria isso:
app.get('/user/paulo', function(req, res){
    res.json('<h1>User: </h1><h2>Paulo</h2>');
});


*/




