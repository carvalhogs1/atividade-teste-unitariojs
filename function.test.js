var {criarContato, removerContato, listarContato} = require('./functions');

test('Deve retornar lista vazia', function(){
    listarContato('')
})

test('Deve criar um contato', function(){
    var contato = criarContato('Nome', 'Email', 'Telefone');

    expect(contato.nome).toBe('Nome');
    expect(contato.email).toBe('Email')
    expect(contato.telefone).toBe('Telefone')
})

test('Deve verificar se o Nome do contato é vazio', function(){
    var contato = criarContato('', 'Email', 'Telefone');

    expect(contato).toBe('Nome é obrigatório');



})

test('Deve verificar se o Email do contato é vazio', function(){
    var contato = criarContato('Nome', '', 'Telefone');

    expect(contato).toBe('E-mail é obrigatório');
})

test('Deve verificar se o Telefone do contato é vazio', function(){
    var contato = criarContato('Nome', 'Email', '');

    expect(contato).toBe('Telefone é obrigatório');
})


test('Deve remover um Contato', function(){
    var contato = criarContato('Nome', 'Email', 'Contato');

    removerContato(contato.id)

    var contatos = listarContato();

    expect(contatos).not.toContain(contato);
})

test('Deve verificar usuario antes de remover', function(){
    removerContato('')
})


test('Deve listar os contatos', function(){
    var contato1 = criarContato('Nome', 'Email', 'Telefone');

    var contatos = listarContato();

    expect(contatos).toContain(contato1);
})









