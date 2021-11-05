
let txt_focus = document.querySelector(".frm_registro")

txt_focus.addEventListener('focus', insere_foco_txt,true)
txt_focus.addEventListener('blur', remove_foco_txt,true)


let btn_fecha = document.querySelector('#btn_fecha');
btn_fecha.addEventListener('click', fechar_modal)

let btn_novo_reg = document.querySelector('#btn_novo_reg');
btn_novo_reg.addEventListener('click', exibe_modal)




function exibe_modal() {
    $('.container-modal').css('display','block')

}

function fechar_modal() {
    $('.container-modal').css('display','none')
    limpar_form()

}



function insere_foco_txt(event){    

    let elemnt =  event.srcElement.id
    let  type_element  = elemnt.substr(0,2) 
    
    
    if(type_element =='cx') {
         $(`#${elemnt}`).css('box-shadow','0px 0px 10px  #CDB5CD')

        }
 
 }

 function remove_foco_txt(event){    

    let elemnt =  event.srcElement.id
    let  type_element  = elemnt.substr(0,2) 
    
    
    if(type_element =='cx') {
         $(`#${elemnt}`).css('box-shadow','none')

        }
 
 }

