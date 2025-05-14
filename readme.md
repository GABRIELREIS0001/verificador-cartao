# Validador e Identificador de Bandeira de Cartão de Crédito

Este projeto é uma aplicação web simples para validar números de cartões de crédito e identificar automaticamente a bandeira (Visa, MasterCard, Amex, etc.) com base no número informado pelo usuário.

## Funcionalidades

- **Validação de Cartão:** Verifica se o número do cartão é válido utilizando expressões regulares e o algoritmo de Luhn.
- **Identificação de Bandeira:** Detecta automaticamente a bandeira do cartão (Visa, MasterCard, American Express, entre outros).
- **Interface Web Simples:** Usuário insere o número do cartão em um formulário HTML e recebe o resultado instantaneamente.
- **Feedback Visual:** Exibe mensagens de validação e identificação de bandeira de forma clara e amigável.

## Tecnologias Utilizadas

- **HTML:** Estrutura da interface do usuário.
- **CSS:** Estilização da interface para melhor experiência visual.
- **JavaScript:** Lógica de validação, identificação de bandeira e interação com o usuário.
- **Regex:** Para identificar padrões de cada bandeira de cartão.
- **Algoritmo de Luhn:** Para validação do número do cartão.

## Como Usar

1. Clone este repositório:
    ```bash
    git clone https://github.com/seu-usuario/validacao-cartao.git
    ```
2. Acesse a pasta do projeto:
    ```bash
    cd validacao-cartao
    ```
3. Abra o arquivo `index.html` em seu navegador para utilizar a aplicação web.
4. Insira o número do cartão no campo indicado e veja o resultado da validação e a bandeira identificada.

## Estrutura do Projeto

```
validacao-cartao/
├── index.html
├── style.css
├── script.js
└── readme.md
```

## Contribuição

Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias e correções.

## Licença

Este projeto está licenciado sob a licença MIT.
