//Exercio 03

const listaDeTarefas = ['Limpar a casa']

const adicionarTarefa = [...listaDeTarefas, process.argv[2]]

console.log(`Tarefa adicionada com sucesso! Suas tarefas agora são: ${adicionarTarefa}`)
