
let entrada;
let arrayEntrada;
let textoCriptografado;
let msg;

function encrypt(){

    entrada = document.querySelector(".text-input").value;

    arrayEntrada = entrada.split('');

    for(let index = 0; index < arrayEntrada.length;index++){
        switch(arrayEntrada[index]){
            case 'a':
                arrayEntrada[index] = 'ai'
                break
            case 'e':
                arrayEntrada[index] = 'enter'
                break
            case 'i':
                arrayEntrada[index] = 'imes'
                break
            case 'o':
                arrayEntrada[index] = 'aober'
                break
            case 'u':
                arrayEntrada[index] = 'ufat'
                break
        }
    }

    textoCriptografado = arrayEntrada.join('')
    console.log(textoCriptografado)

    msg = document.querySelector("#msg");
    msg.value = textoCriptografado
}


let btn = document.querySelector("#btn-cripto");

btn.addEventListener('click', function (e){
    e.preventDefault();

    encrypt();
})

let btnCopy = document.querySelector("#btn-copy");
let textoCopiado;

btnCopy.addEventListener('click', function(e){
    e.preventDefault();

    textoCopiado = document.querySelector("#msg").value;

    entrada.value = textoCopiado;
})


function decrypt(textoCopiado){

    return textoCopiado.replaceAll('ai','a')
                        .replaceAll('enter','e')
                        .replaceAll('imes','i')
                        .replaceAll('aober','o')
                        .replaceAll('ufat','u');
}

let btnDescriptografar = document.querySelector("#btn-descripto");

btnDescriptografar.addEventListener('click', function (e){
    e.preventDefault();

    let saida = document.querySelector(".text-input").value;

    msg.value = decrypt(saida);

})