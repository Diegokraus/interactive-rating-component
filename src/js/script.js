const buttons = document.querySelectorAll('.buttons button')
const form = document.querySelector('#form')
const card = document.querySelector('.card')
const thankyouPage = document.querySelector('.container')
const userSelection = document.querySelector('#selection')



form.addEventListener('submit', (event) => {
    event.preventDefault()
    const opcaoSelecionada = document.querySelector('.selected')

    if(!opcaoSelecionada) return

    console.log(opcaoSelecionada.textContent)
    card.classList.remove('active')
    thankyouPage.classList.add('active')


    userSelection.innerText = `You selected ${opcaoSelecionada.textContent} out of 5`
})


function removeSelected(){
    buttons.forEach((button)=> {
        button.classList.remove('selected')
    })
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const botaoSelecionado = document.querySelector('.selected')

        if(botaoSelecionado){
            removeSelected()
        }
        button.classList.add('selected')
    })
})