const conteudo = document.getElementById('conteudo')


function insert() {
    let entry = document.getElementById('entry');

    if (entry.value.length != 0) {

        display(entry);
    } else alert('Insira uma tarefa!!!')
}

function display(entry) {
    const div = document.createElement('div');

    const label = document.createElement('label');
    label.classList.add('container');
    label.addEventListener('change', () => {
        h4.classList.toggle('riscado');
        div.classList.toggle('bordaverde')
    })

    const input = document.createElement('input');
    input.type = 'checkbox';

    const checkmark = document.createElement('span');
    checkmark.classList.add('checkmark')

    label.append(input);
    label.append(checkmark)

    const h4 = document.createElement('h4');
    h4.innerHTML = entry.value;

    div.append(label);
    div.append(h4);

    conteudo.appendChild(div)



}

document.addEventListener('keypress', function (e) {
    if (e.which === 13) {
        insert()
    }
})


