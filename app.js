let vogal = ['a','e','i','o','u'];
let vogalCriptografada = ['ai','enter','imes','ober','ufat'];

function filtrarMinusculas(campo) {
    // Remove todos os caracteres que não sejam letras minúsculas de a a z
    campo.value = campo.value.replace(/[^a-z]/g, '');
}

// Fazer com que reapareça o botão copiar
function aparecerCopiar () {
    let botaoCopia = document.getElementById('copiar');
    botaoCopia.style.display= 'block';
}

// Remover a imagem, o titulo e o 1ºparagrafo da Section painel__saida 
function removademais () {
    let demaisI = document.querySelector('#imagemSaida');
    demaisI.style.display='none';
    let demaisT = document.querySelector('#textoSaida');
    demaisT.style.display='none';
    let demaisP = document.querySelector('#paragrafoSaida');
    demaisP.style.display='none';
}

// Fazer com que limpe o campo do input
function limparCampo () {
    document.querySelector('input');
    inputEntrada.value='Digite seu texto';
    aparecerCopiar ()
}

// Fazer que apareça a mensagem 'Nenhuma Mensagem', após clicar no botão copiar
function mensagemCopiar () {
    let novoTexto = document.querySelector('#textoCriptografado');
    novoTexto.textContent='Nenhuma Mensagem';
}

function criptografar () {
    
    // Obtém o elemento de input pelo id
    var inputElement = document.getElementById('inputEntrada');
    // Obtém o valor do input
    var texto = inputElement.value;
    texto = texto.replace(/[aeiou]/gi, function(match) {
    let index = vogal.indexOf(match.toLowerCase());
    return vogalCriptografada[index];
    });
    // Exibe o texto no parágrafo com id 'resultado'
    document.getElementById('textoCriptografado').textContent= texto;
    removademais ()
    aparecerCopiar ()
    limparCampo ()
}

function descriptografar() {
    // Obtém o elemento de input pelo id
    var inputElement = document.getElementById('inputEntrada');
    // Obtém o valor do input
    var texto = inputElement.value;

    // Descriptografa o texto
    for (let i = 0; i < vogalCriptografada.length; i++) {
        let regex = new RegExp(vogalCriptografada[i], 'gi');
        texto = texto.replace(regex, vogal[i]);
    }
    // Exibe o texto no parágrafo com id 'resultado'
    document.getElementById('textoCriptografado').textContent = texto;
    removademais ()
    aparecerCopiar ()
    limparCampo ()
}

// Fazer com que copie o texto e apareça a mensagem após clicar no botão
function copia () {
    let copiarTexto = document.querySelector('#textoCriptografado');
    let areaTexto = document.createElement('textarea');
    areaTexto.value = copiarTexto.textContent || copiarTexto.innerText;
    document.body.appendChild(areaTexto);
    areaTexto.select();
    document.execCommand('copy');
    document.body.removeChild(areaTexto);
    mensagemCopiar ()
}