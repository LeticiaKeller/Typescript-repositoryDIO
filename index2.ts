var trabalho;
(function (trabalho) {
    trabalho[trabalho["Medico"] = 0] = "Medico";
    trabalho[trabalho["atriz"] = 1] = "atriz";
    trabalho[trabalho["gerente"] = 2] = "gerente";
})(trabalho || (trabalho = {}));
let pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: trabalho.atriz
};
let pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: trabalho.Medico
};
let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: trabalho.atriz
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: trabalho.gerente
};
