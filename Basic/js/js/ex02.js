function cadastrar_form(){
    var form = document.cadastrar;
    
    var nome = form.nome.value;
    var email = form.email.value;
    var data_nascimento = form.data_nascimento.value;
    var telefone = form.telefone.value;
    var end_rua = form.end_rua.value;
    var end_numero = form.end_numero.value;
    var end_cep = form.end_cep.value;
    var end_bairro = form.end_bairro.value;
    var end_cidade = form.end_cidade.value;
    var end_estado = form.end_estado.value;
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
    if(data_nascimento == ""){
        alert('Insira a data de nascimento!');
        form.dataNascimento.focus();
    } else
    if(telefone.length < 11){
        alert('Insira um numero de telefone válido!');
        form.telefone.focus();
    } else
    if (end_rua == ""){
        alert('Prencha o todos os campos do endereço!');
        form.end_rua.focus();
    }else
    if (end_numero == "" || end_numero.length > 4){
        alert('Prencha o todos os campos do endereço!');
        form.end_numero.focus();
    } else
    if (end_cep == "" || end_cep.length > 8){
        alert('Prencha o todos os campos do endereço!');
        form.end_cep.focus();
    } else 
    if (end_bairro == ""){
        alert('Prencha o todos os campos do endereço!');
        form.end_bairro.focus();
    } else 
    if (end_cidade == ""){
        alert('Prencha o todos os campos do endereço!');
        form.end_cidade.focus();
    } else 
    if (end_estado == ""){
        alert('Prencha o todos os campos do endereço!')
        form.end_estado.focus();
    } else
    if (salario.length < 3){
        alert('Insira um valor de salario valido');
        form.salario.focus();
    } else
    if(transporte == ""){
        alert('Selecione um meio de transporte!')
    } else{
        function exibirValores(){
            console.log(`O salário é R$${parseFloat(salario)}`);
            console.log(`O vale transporte é de R$${valeTransporte}`);
            console.log(`O salário com desconto do vale transporte é R$${parseFloat(salario) - parseFloat(salario)*0.05}`);
            console.log(`O vale transporte desconta R$${salario*0.05} do salário`);
            console.log(`O recebimento total vai ser de R$${parseFloat(salario) - parseFloat(salario)*0.05 + valeTransporte}`);
        }
        
            var onibus = 4.50;
            var trem = 5.00;
            var baseDeDias = 23;
            switch (transporte){
                case '1':
                    var valeTransporte = onibus * baseDeDias * 2; 
                    exibirValores();
                break;
                case '2':
                    var valeTransporte = trem * baseDeDias * 2; 
                    exibirValores()
                break;
                case '3':
                    var valeTransporte = (trem + onibus) * 2 * baseDeDias;
                    exibirValores()
                break;
                default:
                    window.alert('Opção invalida');
                break;
            }    
        var data = {
            nome: nome,
            email: email,
            data_nascimento: data_nascimento,
            telefone: telefone,
            end_rua: end_rua,
            end_numero: end_numero,
            end_cep: end_cep,
            end_bairro: end_bairro,
            end_cidade: end_cidade,
            end_estado: end_estado,
            transporte: transporte,        
            salario: salario,
            valeTransporte: valeTransporte
        };
        
        if(window.confirm('Deseja enviar seus dados?')){
            return true;
        }else{
            return false;
        }
    }
    return false;
}


