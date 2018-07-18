(function(){
    


    /*
    Envolva todo o código desse desafio em uma IIFE.
    */

    /*
    Crie um array e mostre no console a representação em String desse array,
    usando o método visto na aula 13.
    */
    console.log( 'O array em formato de string é:' );
    var arr = [ 1, 2, 3, 4, 5 ];
    arr.toString();
    // '1,2,3,4,5'
    
    // PROFESSOR FEZ DIFERENTE - CORREÇÃO:
    console.log( [ 1, 2, 3, 4, 5 ].toString() );
    

    
    
    
    /*
    Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
    Cada array deve conter os estados dessa região.
    */
    var sul = [ 'Rio Grande do Sul', 'Paraná', 'Santa Catarina' ];
    var sudeste = [ 'Rio de Janeiro', 'São Paulo', 'Minas Gerais', 'Espírito Santo' ];
    

    /*
    Crie uma variável chamada `brasil`, que irá receber as duas regiões
    concatenadas. Mostre o `brasil` no console.
    */
    console.log( '\nAlguns Estados do Brasil:' );
    var brasil =[];
    brasil = brasil.concat(sudeste, sul);
    console.log(brasil);
    /*
    [ 'Rio de Janeiro',
    'São Paulo',
    'Minas Gerais',
    'Espírito Santo',
    'Rio Grande do Sul',
    'Paraná',
    'Santa Catarina' ]
    */
    // PROFESSOR FEZ DIFERENTE - CORREÇÃO:
    var brasil = sul.concat( sudeste );

    
    
    

    /*
    Adicione 3 novos estados da região Norte no início do array e mostre no console.
    */
    console.log( '\nMais estados adicionados:' );
    brasil.unshift('Amazonas', 'Pará', 'Acre');
    // 5 (ele os inclui e retorna o length)
    console.log(brasil);
    /*
    [ 'Amazonas',
    'Pará',
    'Acre',
    'Rio de Janeiro',
    'São Paulo',
    'Minas Gerais',
    'Espírito Santo',
    'Rio Grande do Sul',
    'Paraná',
    'Santa Catarina' ]
    */

    /*
    Remova o primeiro estado do array `brasil` e mostre-o no console.
    */
    console.log( '\nEstado removido:' );
    console.log(brasil.shift());
    // 'Amazonas'

    /*
    Crie um novo array chamado `newSul`, que receba somente os estados do sul, pegando do array `brasil`. Não remova esses itens de `brasil`.
    */
    var newSul = [];
    // undefined
    newSul = brasil.slice(6);
    // [ [ 'Rio Grande do Sul', 'Paraná', 'Santa Catarina' ] ]
    
    
    
    
    // PROFESSOR FEZ DIFERENTE - CORREÇÃO:
    var newSul = brasil.slice(6);
    

    
    /*
    Mostre no console os estados que estão em `newSul`.
    */
    console.log( '\nEstados do Sul do Brasil:' );
    console.log(newSul);
    // [ 'Rio Grande do Sul', 'Paraná', 'Santa Catarina' ]
    
    

    /*
    Mostre no console todos os estados que estão em `brasil`.
    */
    console.log( '\nAlguns Estados do Brasil:' );
    console.log(brasil);
    /*
    [ 'Pará',
    'Acre',
    'Rio de Janeiro',
    'São Paulo',
    'Minas Gerais',
    'Espírito Santo',
    'Rio Grande do Sul',
    'Paraná',
    'Santa Catarina' ]
    */

    /*
    Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
    */
    var nordeste = ['Bahia', 'Piauí', 'Sergipe', 'Pernambuco', 'Ceará', 'Maranhão', 'Alagoas', 'Rio Grande do Norte', 'Paraíba'];
    // undefined
    
    /*
    Mostre no console os estados do nordeste.
    */
    console.log( '\nEstados do Nordeste:' );
    console.log(nordeste);
    /*
    [ 'Bahia',
      'Piauí',
      'Sergipe',
      'Pernambuco',
      'Ceará',
      'Maranhão',
      'Alagoas',
      'Rio Grande do Norte',
      'Paraíba' ]
    */
    
    /*
    Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável     chamada `newSudeste`.
    */
    var newSudeste = [];
    // indefined
    newSudeste = brasil.splice(2, 4);
    /*
    [ 'Rio de Janeiro',
      'São Paulo',
      'Minas Gerais',
      'Espírito Santo' ]
    */
    
    
    /*
    Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem ficar no mesmo nível que os estados já existentes, não em um array separado.
    */
    
    nordeste.forEach(function(item){
        brasil.push(item);
    });
    
    // OU:    
    for (var i=0; i<nordeste.length; i++){
            brasil.push(nordeste[i]);
    }    
            
    // PROFESSOR FEZ DIFERENTE - CORREÇÃO:
    
    brasil = brasil.concat(nordeste);
    
    // **************************************
    
    
    
    

    /*
    Mostre no console os estados em `newSudeste`.
    */
    console.log( '\nEstados em newSudeste:' );
    console.log(newSudeste);
    /*
    [ 'Rio de Janeiro',
      'São Paulo',
      'Minas Gerais',
      'Espírito Santo' ]
    */

    /*
    Mostre no console os estados do `brasil`.
    */
    console.log( '\nAlguns estados do Brasil:' );
    console.log(brasil);
    /*
    [ 'Pará',
      'Acre',
      'Rio Grande do Sul',
      'Paraná',
      'Santa Catarina',
      'Bahia',
      'Piauí',
      'Sergipe',
      'Pernambuco',
      'Ceará',
      'Maranhão',
      'Alagoas',
      'Rio Grande do Norte',
      'Paraíba' ]
    */

    /*
    usando forEach, percorra o array `brasil` e gere um novo array chamado
    `newBrasil`. Esse array deve ter cada item como um objeto, com as
    propriedades:
    - `id`: que será o índice do array `brasil`,
    - `estado`: que será o estado do array `brasil`.
    */
    var newBrasil = [];
    brasil.forEach (function(item, index){
        newBrasil.push({ id: index, estado: item });
    });
    
    /*
    Mostre o array `newBrasil` no console
    */
    console.log( '\newBrasil:' );
    console.log( newBrasil);
    /*
    [ { id: 0, estado: 'Pará' },
      { id: 1, estado: 'Acre' },
      { id: 2, estado: 'Rio Grande do Sul' },
      { id: 3, estado: 'Paraná' },
      { id: 4, estado: 'Santa Catarina' },
      { id: 5, estado: 'Bahia' },
      { id: 6, estado: 'Piauí' },
      { id: 7, estado: 'Sergipe' },
      { id: 8, estado: 'Pernambuco' },
      { id: 9, estado: 'Ceará' },
      { id: 10, estado: 'Maranhão' },
      { id: 11, estado: 'Alagoas' },
      { id: 12, estado: 'Rio Grande do Norte' },
      { id: 13, estado: 'Paraíba' } ]    
    */
    
    /*
    Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada, atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
    - "Sim, todos os estados tem mais de 7 letras!"
    Senão, mostre no console:
    - "Nem todos os estados tem mais de 7 letras!"
    */
    console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );
    
    var sevenLetters = brasil.every(function(item){
        return item.length > 7;
    });
    if (sevenLetters){
        console.log("Sim, todos os estados tem mais de 7 letras!");
    } else {
        console.log("Nem todos os estados tem mais de 7 letras!");
    }    
    // Nem todos os estados tem mais de 7 letras!
    
    
    // PROFESSOR FEZ DIFERENTE - CORREÇÃO:
    // ao invés de IF, ele usa o ternário nesse caso:
    console.log( sevenLetters 
                ? "Sim, todos os estados tem mais de 7 letras!" 
                : "Nem todos os estados tem mais de 7 letras!"
    );
    // *****************************************************************************
    
    
    
    
    
    
    // OU:
    var sevenLetters = [];  
    function checa(){
        for (i=0; i<brasil.length; i++){
            if (brasil[i].length > 7){
                sevenLetters.push(brasil[i]);
            }
        }
        if (sevenLetters.length === brasil.length){
            return "Sim, todos os estados tem mais de 7 letras!";
        } else {
            return "Nem todos os estados tem mais de 7 letras!";
        }
    };
    console.log(checa());
    // Nem todos os estados tem mais de 7 letras!
    
    
    
 /*
    Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o resultado à uma variável. Se esse estado existir no array, mostrar a frase no console:
    - "Ceará está incluído!"
    Senão, mostrar a frase:
    - "Ceará não foi incluído :("
    */
    console.log( '\nCeará está incluído em `brasil`?' );
    var existe = brasil.some(function(item){
        return item === 'Ceará';
    });
    function teste(){
        if (existe){
            console.log("Ceará está incluído!");
        } else {
            console.log("Ceará não foi incluído :(");
        }
    }
    console.log(teste());
    // Ceará está incluído!
    
    
    
    // PROFESSOR FEZ DIFERENTE - CORREÇÃO:
    // ao invés de IF, ele usa o ternário nesse caso:
    console.log( 
        existe 
        ? "Ceará está incluído!" 
        : "Ceará não foi incluído :("
    );
    // *****************************************************************************
    
    
    
    
    
    

    /*
    Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
    objeto desse array, e adicione a frase abaixo na propriedade `estado`:
    - "[ESTADO] pertence ao Brasil."
    Atribua o novo array a uma variável chamada `map`.
    */
    // ?

    /*
    Mostre no console o array criado acima:
    */
    console.log( '\nnewBrasil agora com mais informações:' );
    var map = newBrasil.map(function(item, index){
        return { id: index + 1, estado: item.estado + " pertence ao Brasil."};
    });
    console.log(map);
    /*
    [ { id: 1, estado: 'Pará pertence ao Brasil.' },
      { id: 2, estado: 'Acre pertence ao Brasil.' },
      { id: 3, estado: 'Rio Grande do Sul pertence ao Brasil.' },
      { id: 4, estado: 'Paraná pertence ao Brasil.' },
      { id: 5, estado: 'Santa Catarina pertence ao Brasil.' },
      { id: 6, estado: 'Bahia pertence ao Brasil.' },
      { id: 7, estado: 'Piauí pertence ao Brasil.' },
      { id: 8, estado: 'Sergipe pertence ao Brasil.' },
      { id: 9, estado: 'Pernambuco pertence ao Brasil.' },
      { id: 10, estado: 'Ceará pertence ao Brasil.' },
      { id: 11, estado: 'Maranhão pertence ao Brasil.' },
      { id: 12, estado: 'Alagoas pertence ao Brasil.' },
      { id: 13, estado: 'Rio Grande do Norte pertence ao Brasil.' },
      { id: 14, estado: 'Paraíba pertence ao Brasil.' } ]    
    */
    
    // PROFESSOR FEZ DIFERENTE - FORMA ALTERNATIVA:
    // ao invés de IF, ele usa o ternário nesse caso:
    var map = newBrasil.map(function(item, index){
        item.id++;
        itenm.estado += ' pertence ao Brasil';
        return item;        
    });
    console.log(map);
    // *****************************************************************************
    
    
    
    
    
    
    

    /*
    Filtre o array criado acima, retornando somente os estados que tiverem
    ID par. Atribua o valor à uma variável chamada `filter`.
    */
    
    var evenFilter = map.filter(function(item){
        return item.id % 2 == 0;
    });
    

    /*
    Mostre o array filtrado acima no console.
    */
    console.log( '\nEstados com ID par:' );
    console.log(evenFilter);
    /*
    [ { id: 2, estado: 'Acre pertence ao Brasil.' },
      { id: 4, estado: 'Paraná pertence ao Brasil.' },
      { id: 6, estado: 'Bahia pertence ao Brasil.' },
      { id: 8, estado: 'Sergipe pertence ao Brasil.' },
      { id: 10, estado: 'Ceará pertence ao Brasil.' },
      { id: 12, estado: 'Alagoas pertence ao Brasil.' },
      { id: 14, estado: 'Paraíba pertence ao Brasil.' } ]
    */
    
})();