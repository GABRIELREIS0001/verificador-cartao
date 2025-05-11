function validarCartaoCredito(numeroCartao) {
    const numeroCartaoStr = numeroCartao.toString();

    // Define as regras para cada bandeira
    const bandeiras = [
        { nome: "Visa", regex: /^4/ },
        { nome: "MasterCard", regex: /^(5[1-5]|222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)/ },
        { nome: "Elo", regex: /^(4011|4312|4389|5041|5066|509|6277|6362|650|651|655)/ },
        { nome: "American Express", regex: /^(34|37)/ },
        { nome: "Discover", regex: /^(6011|65|64[4-9])/ },
        { nome: "Hipercard", regex: /^6062/ },
        { nome: "Diners Club", regex: /^(300|301|302|303|304|305|36|38)/ },
        { nome: "EnRoute", regex: /^(2014|2149)/ },
        { nome: "JCB", regex: /^35/ },
        { nome: "Voyager", regex: /^8699/ },
        { nome: "Aura", regex: /^50/ }
    ];

    // Verifica qual bandeira corresponde ao número do cartão
    const bandeira = bandeiras.find(b => b.regex.test(numeroCartaoStr));

    if (!bandeira) {
        return { valido: false, bandeira: null, mensagem: "Número de cartão inválido ou bandeira não suportada." };
    }

    // Valida o número do cartão usando o algoritmo de Luhn
    const valido = checarLuhn(numeroCartaoStr);

    return {
        valido: valido,
        bandeira: bandeira.nome,
        mensagem: valido ? "Número de cartão válido." : "Número de cartão inválido."
    };
}

// Algoritmo de Luhn para validar o número do cartão
function checarLuhn(numeroCartao) {
    let soma = 0;
    let deveDobrar = false;

    // Processa os dígitos da direita para a esquerda
    for (let i = numeroCartao.length - 1; i >= 0; i--) {
        let digito = parseInt(numeroCartao[i]);

        if (deveDobrar) {
            digito *= 2;
            if (digito > 9) digito -= 9;
        }

        soma += digito;
        deveDobrar = !deveDobrar;
    }

    return soma % 10 === 0;
}

// Exemplo de uso
const numeroCartao = "5064817147683436"; // Substitua pelo número do cartão para testar
const resultado = validarCartaoCredito(numeroCartao);
console.log(resultado);
