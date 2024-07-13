const btnAdcionarTarefa = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');
const formCancelar = document.querySelector('.app__form-footer__button--cancel')
const textarea = document.querySelector('.app__form-textarea')
const tarefas = []

btnAdcionarTarefa.addEventListener('click', () => {
    formAdicionarTarefa.classList.remove('hidden')
})

formCancelar.addEventListener('click', () => {
    formAdicionarTarefa.classList.add('hidden')
})

formAdicionarTarefa.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const tarefa = {
        descricao: textarea.value
    }
    tarefas.push(tarefa)
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
})