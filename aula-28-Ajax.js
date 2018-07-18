(function (doc, win){
    'use strict';
    
    // PASSO 1:
    //var ajax = new XMLHttpRequest(); // istanciando o objeto.
    //ajax.open('GET', '/'); // não temos uma URL, então a '/' é a raiz do localhost.
    
    // PASSO 2:
    //ajax.open('GET', 'aula-28-data.json');
    //ajax.open('GET', 'aula-28-Ajax.js'); // outra requisição xhr, apenas como exemplo.
    
    // PASSO 3:
    //ajax.send(null); // como aqui na verdade não temos nada para enviar, deixamos em branco ou null.
    
    // Explore o Chrome Developer Tools na aba "Network". Verifique os métodos de request, a maioria deve ser GET.
    
    // Como manipular os dados recebidos?
    
    
    // .onreadystatechange
    
    // .onreadystatechange = callback;
    // Verifica quando o estado da requisição muda.
    // Nesse caso, passando um único evento.
    /*
    ajax.onreadystatechange = function (){
        console.log('ajax.onreadystatechange');    
    };
    */
        
    // .readystatechange
    
    // .addEventListener ('readystatechange', callback);
    // (Diferente da opção 1, aqui não utilizamos o "on" na frente readystatechange)
    /*
    ajax.addEventListener('readystatechange', function(){
        console.log('readystatechange');    
    }, false);
    */
    // Terminou Requisição
    // Terminou Requisição
    // Terminou Requisição
    
    // Por que 3 chamadas se foi uma única requisição xhr????
    // Porque readystatechange verifica exatamente quando o estado mudou.
    
    
    // .readyState
    // Verifica o estado atual da requisição. Em que ponto da requisição a gente está?
    /*
    ajax.addEventListener('readystatechange', function(){
        console.log('ajax.readyState', ajax.readyState);    
    }, false);    
    */
    // Terminou Requisição 2
    // Terminou Requisição 3
    // Terminou Requisição 4
    
    // State codes:
    /*
    0: Não enviado (não foi feita por algum motivo, algum problema. Em geral, quando o 'open()' não é chamado.)
    1: Conexão aberta.
    2: Response Headers. (cabeçalhos foram recebidos: tipo de arquivo etc.)
    3: Carregando o corpo do request.
    4: Concluído o request.
    
    
    // .status
    // HTTP STATUS
    200 (ok)
    403
    404 (File not found)
    500
    etc.
    */
    /*
    ajax.addEventListener('readystatechange', function(){
        console.log('ajax.status', ajax.status);    
    }, false);     
    */
    // Terminou Requisição 200
    // Terminou Requisição 200
    // Terminou Requisição 200
    
    // COMO MANIPULAR A RESPOSTA DO REQUEST
    
    /*
    console.log('Carregando...');
    ajax.addEventListener('readystatechange', function(){
        if ( isRequestOk() ){
            console.log('Requisição OK');
        } else {
            console.log('Deu problema');
        }
    }, false);  
    
    
    function isRequestOk(){
        return ajax.readyState === 4 && ajax.status === 200;
    }
    */
    
    
    
    // Se 'Requisição OK' => significa requisição pronta para ser manipulada.
    
    // .responseText
    /*
    console.log('Carregando...');
    ajax.addEventListener('readystatechange', function(){
        if ( isRequestOk() ){
            console.log('Requisição OK', ajax.responseText);
        } else {
            console.log('Deu problema');
        }
    }, false);  
    
    
    function isRequestOk(){
        return ajax.readyState === 4 && ajax.status === 200;
    }
    */
    
    // Vem a resposta em formato string.
    
    // E manipular dados de JSON é como manipular um objeto de javascript.
    // Porém .responseText torna tudo string.
    // Basta, portanto, usar parse para 
    /*
    console.log('Carregando...');
    ajax.addEventListener('readystatechange', function(){
        if ( isRequestOk() ){
            
            // IMPORTANTE:
            var data = JSON.parse(ajax.responseText);
            
            
            console.log('Requisição OK', data.message);
            // Aqui, a propriedade 'message' resultaria em 'undefined' sem o JSON.parse acima.
            
            
        } else {
            console.log('Deu problema');
        }
    }, false);  
    function isRequestOk(){
        return ajax.readyState === 4 && ajax.status === 200;
    }
    */
    
    // OUTRAS FORMAS DE MANIPULAR:
    
    //  .responseXML
    
    // CARREGA O XML PRIMEIRO:
    /*
    console.log('Carregando...');
    var meuXML = new XMLHttpRequest();
    meuXML.open('GET', 'aula-28-data.xml');
    meuXML.send(null);
    
    meuXML.addEventListener('readystatechange', function(){
        if ( isRequestOk() ){
            
            console.log('Requisição OK\n', meuXML);
            
        } else {
            console.log('Deu problema');
        }
    }, false);  
    function isRequestOk(){
        return meuXML.readyState === 4 && meuXML.status === 200;
    }    
    */
    // XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
    
    // dentro do objeto 'XMLHttpRequest', a propriedade 'responseXML' será NULL se o documento não for um XML.
    // Normalmente, é mais provável que utilizemos Ajax para manipular JSON.
    
    
    
    // TRATAMENTO DE ERROS:
    
    // Para disparar um erro no javascript:
    
    // throw new Error ('Mensagem de erro');
    // throw new SyntaxError ('Mensagem de erro de sintaxe');
    
    // Capturando os erros:
    
    // try (semelhante ao IF)
    // catch
    /*
    console.log('Carregando...');
    var meuXML = new XMLHttpRequest();
    meuXML.open('GET', 'aula-28-data.xml');
    meuXML.send();
    
    meuXML.addEventListener('readystatechange', function(){
        if ( isRequestOk() ){
            try {
                throw new Error ('Mensagem de erro');    
            }
            catch(e) {
                console.log(e);
            }
        } 
    }, false);  
    function isRequestOk(){
        return meuXML.readyState === 4 && meuXML.status === 200;
    }
    */
    
    // OUTRO CASO (para manipular um conteúdo cujo formato pode variar):
    
    var meuXML = new XMLHttpRequest();
    
    // aqui troque o arquivo para ver os diferentes comportamentos (XML x JSON):
    meuXML.open('GET', 'challenge-28/challenge-28.json');
    meuXML.send();
    
    console.log('Carregando...');
    
    // nova variável tipo string:
    var response = '';
    
    meuXML.addEventListener('readystatechange', function(){
        if ( isRequestOk() ){
            
            // TENTARÁ PRIMEIRO ESSE TRATAMENTO:
            try {
                response = JSON.parse(meuXML.responseText);    
            }
            // HAVENDO FALHA, UTILIZARÁ ESSE OURTO TIPO DE TRATAMENTO:
            catch(e) {
                response = meuXML.responseText;    
            }
            console.log(response);
        } 
    }, false);  
    function isRequestOk(){
        return meuXML.readyState === 4 && meuXML.status === 200;
    }      
    
    // xml data:
    /*
    Carregando...
    aula-28-Ajax.js:238 <?xml version="1.0" encoding="UTF-8"?>
    <MyXML>
        <tag>Content</tag>
    </MyXML>
    */
    
    
    // JSON data:
    /*
    Carregando...
    {message: "Consegui meu ok!"}
    */
    
})(document, window);