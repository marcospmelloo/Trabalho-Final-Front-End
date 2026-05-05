
// Funções
function load_divArea(topico){

    const conteudo = {
        'primeiroCodigoCSS': `
            <div class="primeiroCodigoCSS_js">
                <h1> Aqui é o primeiro código </h1>
                <p> Quando falamos de CSS, precisamos garantir que ele vai estar minimamente pronto para uso. A forma mais elegante de fazer isso é usar
                    os códigos abaixo para fazer um 'reset' no código: </p>

                <br>

                <p> *{
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    }
                </p>
            </div>`
            ,
            'tagsBasicas':`
                <div class="tagsBasicas_js">
                    <h1> Tags Básicas </h1>
                    <p> As tags básicas são ótimo apra começar, elas já te dão um bom norte de como criar alguma no navegador.
                        As tags básicas mais importantes são: </p>

                    <br>

                    <p> &lt;h1&gt;
                        <br>
                        &lt;h2&gt;
                        <br>
                        &lt;h3&gt;
                        <br>
                        &lt;h4&gt;
                        <br>
                        &lt;h5&gt;
                        <br>
                        &lt;h6&gt;
                        <br>
                        Essas tags são para títilos e seus respectivos tamanhos. O &lt;h1&gt; por exemplo, é o que tem o título maior
                        e a tag &lt;h6&gt; é a que tem o título menor.
                    </p>

                    <br> 
                    <br>

                    <p> A tag &lt;p&gt; no HTML é utilizada para definir parágrafos de texto, representando um elemento de 
                        bloco que agrupa conteúdo. </p>

                    <br> 
                    <br>

                    <p> A Tag &lt;br&gt; é uma tag que dá espaço vertical, que seria um pular linha. Muito boa para organização.</p>
                </div>`
                ,
                'tagDeLink':`
                    <div class="tagDeLink_js">
                        <h1> Tags de Links </h1>

                        <br>

                        <p> A tag &lt;a&gt; é usada para criar hiperlinks, conectando documentos, arquivos, seções da mesma página
                        ou endereços externos. </p>

                        <br>

                        <p> Um bom exemplo seria &lt;a href="www.google.com"&gt; Site do google &lt;/a&gt; </p>
                    </div>
                `
                ,
                'tagsDeImagem':`
                    <div class="tagDeImagem_js">
                        <h1> Tag de Imagem </h1>

                        <br>

                        <p> A tag &lt;img&gt; é usada para carregar uma imagem local ou na internet.</p>

                        <br>

                        <p> Um bom exemplo seria &lt;img href="./assets/imagem.jpg" alt="Foto de um carro"&gt; </p>
                    </div>
                `
    };

    const areaPrincipal = document.getElementById('id_div_area');

    if(conteudo[topico]){
        areaPrincipal.innerHTML = conteudo[topico];
    }
}