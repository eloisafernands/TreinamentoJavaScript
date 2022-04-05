function cadastrar(){
    var form = document.cadastrar;
    
    var nome = form.nome.value;
    var email = form.email.value;
    var dataNascimento = form.data_nacimento.value;
    var telefone = form.telefone.value;
    var endRua = form.end_rua.value;
    var endNumero = fomr.end_numero.value;
    var endCep = form.end_cep.value;
    var endBairro = form.end_bairro.value;
    var endCidade = form.end_cidade.value;
    var endEstado = form.end_estado.value;
    var salario = form.salario.value;
    var transporte = form.transporte.value;

    if(nome.length < 3){
        alert('Preencha com um nome valido!');
        form.nome.focus();
    } else
    if(email.indexOf('.', 0) == -1 || email.indexOf('@', 0) == -1 || email.length < 8){
        alert('Preencha com um e-mail válido!');
        form.email.focus();
    } else 
    if(dataNascimento == ""){
        alert('Insira a data de nascimento');
        form.dataNascimento.focus();
    } else
    if(telefone.length < 11){
        alert('Insira um numero de telefone válido')
        form.telefone.focus();
    } 

}