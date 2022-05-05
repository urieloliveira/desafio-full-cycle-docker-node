# Desafio nodejs com nginx para o curso FullCycle 3.0

1) A ideia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.
2) O retorno da aplicação node.js para o nginx deverá ser:

    ```html
        <h1>Full Cycle Rocks!</h1>
    ```

3) Lista de nomes cadastrada no banco de dados.
4) Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.
