function showModal(){

    const body = document.querySelector('body')

    const openModal = document.querySelector('#reset')

    openModal.addEventListener('click' , (event) =>{

        const modal = createModal()

        body.appendChild(modal)

        closeModal()



    } )

}


function createModal() {


    const section = document.createElement('section')
    const form = document.createElement('form')
    const title = document.createElement('h1')
    const closeModal = document.createElement('span')
    const subTitle = document.createElement('p')
    const emailLabel = document.createElement('label')
    const emailInput = document.createElement('input')
    const button = document.createElement('button')


    section.classList.add('container-modal')

    form.classList.add('form-modal')

    title.classList.add('title-modal')
    title.innerText = 'Esqueceu a senha? Tudo bem , a gente ajuda !'

    closeModal.classList.add('close-modal')
    closeModal.id = 'close'
    closeModal.innerText = 'X'
    

    subTitle.classList.add('subTitle-modal')
    subTitle.innerText = 'Digite por favor o seu e-mail cadastrado'

    emailLabel.classList.add('label-modal')
    emailLabel.htmlFor = 'email'
    emailLabel.innerText = 'Email'
    
    emailInput.classList.add('input-modal')
    emailInput.name = 'email'
    emailInput.id = 'email'
    emailInput.type = 'email'
    emailInput.placeholder = 'Digite seu email aqui'


    button.classList.add('btn-modal')
    button.id = 'btn-modal'
    button.type = 'submit'
    button.innerText = 'Enviar'



    form.append(title , closeModal ,subTitle , emailLabel , emailInput , button)

    section.appendChild(form)



    return section

}

function closeModal(){

    const modalContainer = document.querySelector('.container-modal')

    const closeModal = document.querySelector('#close')

    closeModal.addEventListener('click' ,() => {

        modalContainer.remove()


    })

}

showModal()


