class MensagemView extends View{
    constructor(seletor){
        this._elemento = document.querySelector(seletor)
    }

    templates(model){
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` 
        :`<p></p>`
    }


}