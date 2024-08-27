// Array para armazenar as tarefas
let tarefas = [];

// Função para adicionar uma nova tarefa
function adicionarTarefa(descricao) {
    const tarefa = {
        descricao: descricao,
        concluida: false
    };
    tarefas.push(tarefa);
    console.log(Tarefa adicionada: "${descricao}");
}

// Função para listar todas as tarefas
function listarTarefas() {
    if (tarefas.length === 0) {
        console.log("Nenhuma tarefa cadastrada.");
    } else {
        tarefas.forEach((tarefa, indice) => {
            const status = tarefa.concluida ? "Concluída" : "Pendente";
            console.log(${indice + 1}. ${tarefa.descricao} - ${status});
        });
    }
}

// Função para remover uma tarefa específica
function removerTarefa(indice) {
    if (indice >= 0 && indice < tarefas.length) {
        const tarefaRemovida = tarefas.splice(indice, 1);
        console.log(Tarefa removida: "${tarefaRemovida[0].descricao}");
    } else {
        console.log("Índice inválido. Tarefa não encontrada.");
    }
}

// Função para marcar uma tarefa como concluída
function concluirTarefa(indice) {
    if (indice >= 0 && indice < tarefas.length) {
        tarefas[indice].concluida = true;
        console.log(Tarefa concluída: "${tarefas[indice].descricao}");
    } else {
        console.log("Índice inválido. Tarefa não encontrada.");
    }
}

// Exemplos de uso do sistema:

adicionarTarefa("Comprar leite");
adicionarTarefa("Estudar JavaScript");
listarTarefas();
concluirTarefa(1);
listarTarefas();
removerTarefa(0);
listarTarefas();