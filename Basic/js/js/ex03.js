var data = [
    {
        "nome": "Maria Eloisa Fernandes Rodrigues",
        "idade": 20,
        "dataNascimento": "08/03/2002",
        "email": "eloisafernands@hotmail.com",
        "github": "eloisafernands",
        "instagram": "eloisafernandes",
        "estadoCivil": "solteira",
        "ContaAtiva": true,
        "endereco": [
            {
                "rua": "Rua taquaral",
                "numero": 93,
                "bairro": "Conjunto do bosque",
                "cidade": "Mogi das Cruzes",
                "estado": "São Paulo"
            }
        ],
        "trabalho": [
            {
                "salario": 900,
                "cargo": "Estagiaria",
                "meses de empresa": 4
            }
        ]
    },

    {
        "nome": "Fernanda Cruz",
        "idade": 25,
        "dataNascimento": "12/09/1997",
        "email": "fercruz@hotmail.com",
        "github": "fercruz",
        "instagram": "fercruz",
        "estadoCivil": "solteira",
        "ContaAtiva": false,
        "endereco": [
            {
                "rua": "Rua jaceguai",
                "numero": 1997,
                "bairro": "Centro",
                "cidade": "Mogi das Cruzes",
                "estado": "São Paulo"
            }
        ],
        "trabalho": [
            {
                "salario": 2500,
                "cargo": "Estagiaria",
                "meses de empresa": 8
            }
        ]
    },
    
    {
        "nome": "Jean Andrade",
        "idade": 17,
        "dataNascimento": "15/12/1993",
        "email": "jeanandrade@hotmail.com",
        "github": "jeanandrade",
        "instagram": "jeanandrade",
        "estadoCivil": "casado",
        "ContaAtiva": true,
        "endereco": [
            {
                "rua": "Rua taquaral",
                "numero": 93,
                "bairro": "Conjunto do bosque",
                "cidade": "Mogi das Cruzes",
                "estado": "São Paulo"
            }
        ],
        "trabalho": [
            {
                "salario": 2500,
                "cargo": "Estagiaria",
                "meses de empresa": 12
            },
            {
                "salario": 3000,
                "cargo": "Estagiaria",
                "meses de empresa": 12
            }
        ]
    }
];

console.log(data);

// salario
var filtroSalario = data.filter(function (index){
    for(i=0; i<index.trabalho.length; i++){
        if(index.trabalho[i].salario >= 2000){
            return index;   
        }
    }
});
console.log(filtroSalario);

// idade
var filtroIdade = data.filter(function (index){
    if(index.idade >= 18 && index.idade <= 30){
        return index;
    }
});
console.log(filtroIdade);

// conta ativa
var filtroConta = data.filter(function (index){
    if(index.ContaAtiva == true){
        return index;
    }
});
console.log(filtroConta);

