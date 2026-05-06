function load_div(topico){
    const conteudo = {'javascript' : `<div id="div_javascript">
                <h1 style="text-align: center;">Javascript</h1>
                <p>
                    JavaScript é uma linguagem de programação muito utilizada para tornar páginas web interativas.
                    A linguagem é executada no navegador e permite criar funcionalidades dinâmicas, como animações,
                    validação de formulários e atualizações de conteúdo sem recarregar a página.
                </p>
                <br>
                <h2>Orientação a Eventos</h2>
                <p>
                    JavaScript é orientado a eventos, o que significa que o código pode ser executado em resposta a eventos que o usuário causa,
                    como cliques, movimentos do mouse ou pressionamento de teclas. Isso permite que as páginas reajam de acordo com
                    às interações, melhorando a experiência do usuário.
                </p>
                <br>
                <h2>Casos de Uso</h2>
                <p>
                    JavaScript é uma linguagem muito versátil e utilizada em várias situações, como desenvolvimento de interfaces web interativas,
                    criação de jogos de navegador, desenvolvimento de aplicações web completas (front-end e back-end),
                    e aplicativos mobile e desktop por meio de frameworks.
                </p>
            </div>

            <style>
                #div_javascript {
                    margin: 1.25rem;
                    width: 54rem;
                    font-size: large;
                }
            </style>`, 
            
            'variaveis': `<div id="div_variaveis">
                <h1 style="text-align: center;">Variáveis em JavaScript</h1>

                <p>
                    Variáveis são usadas para armazenar dados que podem ser utilizados ao longo do código.
                    Em JavaScript, elas podem ser declaradas usando <strong>var</strong>, <strong>let</strong> e <strong>const</strong>.
                </p>
                <br>

                <h2>Criação de Variáveis</h2>
                <p>
                    Para criar uma variável, basta usar uma das palavras-chave seguidas de um nome:
                    <br>
                    var nome = "João";<br>
                    let idade = 20;<br>
                    const pi = 3.14;
                </p>
                <br>

                <h2>Diferenças</h2>
                <p>
                    <strong>var</strong>: escopo global ou de função, pode ser redeclarada. Geralmente não é recomendado usar.<br>
                    <strong>let</strong>: escopo de bloco, pode ser alterada.<br>
                    <strong>const</strong>: escopo de bloco, não pode ser alterada após a primeira atribuição.
                </p>
                <br>

                <h2>Tipos e Tipagem</h2>
                <p>
                    JavaScript possui tipagem dinâmica, ou seja, o tipo da variável é definido automaticamente.
                    Os principais tipos são: string, number, boolean, null, undefined e object.
                </p>
            </div>

            <style>
                #div_variaveis{
                        margin: 1.25rem;
                        width: 54rem;
                        font-size: large;
                    }
            </style>`,

            'operadores': `<div id="div_operadores">
                <h1 style="text-align: center;">Operadores em JavaScript</h1>

                <p>
                    Operadores são símbolos usados para realizar operações em valores e variáveis,
                    como cálculos matemáticos ou comparações lógicas.
                </p>
                <br>

                <h2>Operadores Matemáticos</h2>
                <p>
                    São usados para realizar cálculos:
                    <br>
                    + (adição)<br>
                    - (subtração)<br>
                    * (multiplicação)<br>
                    / (divisão)<br>
                    % (resto da divisão)
                </p>
                <br>

                <h2>Operadores Lógicos</h2>
                <p>
                    São usados para combinar ou inverter condições:
                    <br>
                    && (E lógico)<br>
                    || (OU lógico)<br>
                    ! (NÃO lógico)
                </p>
    
                <style>
                    #div_operadores{
                            margin: 1.25rem;
                            width: 54rem;
                            font-size: large;
                        }
                </style>
            </div>`,

            'estruturas_condicionais': `<div id="div_estruturas_condicionais">
                <h1 style="text-align: center;">Estruturas Condicionais</h1>

                <p>
                    Estruturas condicionais definem a ordem em que o código é executado,
                    permitindo tomar decisões com base em comparações e verificações de verdade ou não.
                </p>
                <br>

                <h2>Estruturas Condicionais</h2>
                <p>
                    Permitem executar diferentes blocos de código dependendo de uma condição:
                    <br>
                    if (condição) { ... }<br>
                    else { ... }<br>
                    else if (condição) { ... }
                </p>
                <br>

                <h2>Exemplo</h2>
                <p>
                    let numero = 5;<br>
                    if (numero > 0) {<br>
                    &nbsp;&nbsp;console.log("Positivo");<br>
                    } else {<br>
                    &nbsp;&nbsp;console.log("Negativo");<br>
                    }
                </p>
    
                <style>
                    #div_estruturas_condicionais{
                            margin: 1.25rem;
                            width: 54rem;
                            font-size: large;
                        }
                </style>
            </div>`,

            'estruturas_repeticoes': `<div id="div_estruturas_repeticoes">
                <h1 style="text-align: center;">Estruturas de Repetição</h1>

                <p>
                    Estruturas de repetição permitem executar um bloco de código várias vezes,
                    enquanto uma condição for verdadeira.
                </p>
                <br>

                <h2>for</h2>
                <p>
                    Usado quando sabemos quantas vezes o código será repetido:
                    <br>
                    for (let i = 0; i < 5; i++) { ... }
                </p>
                <br>

                <h2>while</h2>
                <p>
                    Executa enquanto a condição for verdadeira:
                    <br>
                    let i = 0;<br>
                    while (i < 5) { ... i++; }
                </p>
                <br>

                <h2>Exemplo</h2>
                <p>
                    for (let i = 1; i <= 3; i++) {<br>
                    &nbsp;&nbsp;console.log(i);<br>
                    }
                </p>
        
                <style>
                    #div_estruturas_repeticoes{
                            margin: 1.25rem;
                            width: 54rem;
                            font-size: large;
                        }
                </style>
            </div>`,

            'funcoes' : `<div id="div_funcoes">
                <h1 style="text-align: center;">Funções em JavaScript</h1>

                <p>
                    Funções são blocos de código reutilizáveis que executam uma tarefa específica.
                    Elas ajudam a organizar o código e evitar repetições.
                </p>
                <br>
                
                <h2>Criação de Funções</h2>
                <p>
                    Uma função pode ser declarada usando a palavra-chave <strong>function</strong>:
                    <br>
                    function saudacao() {<br>
                    &nbsp;&nbsp;console.log("Olá!");<br>
                    }
                </p>
                <br>

                <h2>Parâmetros e Retorno</h2>
                <p>
                    Funções podem receber valores (parâmetros) e retornar resultados:
                    <br>
                    function soma(a, b) {<br>
                    &nbsp;&nbsp;return a + b;<br>
                    }
                </p>
                <br>

                <h2>Arrow Functions</h2>
                <p>
                    Forma mais curta de escrever funções:
                    <br>
                    const soma = (a, b) => a + b;
                </p>

                <style>
                    #div_funcoes{
                            margin: 1.25rem;
                            width: 54rem;
                            font-size: large;
                        }
                </style>
            </div>`
    }

    const areaPrincipal = document.getElementById('div_conteudo');

    if(conteudo[topico]){
        console.log(3);
        areaPrincipal.innerHTML = conteudo[topico];
    }
}