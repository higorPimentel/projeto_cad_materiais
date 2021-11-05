

let btn_cadastra = document.querySelector('#btn_cadastra');
btn_cadastra.addEventListener('click', cadastrar_item)



function cadastrar_item() {
    
    // define o tipo de requisição - Cadastro
    let tipo_requisicao = 1



    // se variavel  = 0, há campos em branco no formulario, execução é finalizada
    // se  variavel  = 1, todos os campos estão preenchidos, execução prossegue com o cadastro
    var_valid_form = 0
        

        criar_objt_frm()
            valid_frm()

                if(var_valid_form == 0) {
                    $('.msg_erro').html('Preencha todos os campos para prosseguir!!!') 
                    exibe_erro()
                    return
                } 



                $.ajax({
                    method:'POST',
                    url:'modulos/functions.php',
                    data:
                    {
                        tipo_requisicao:tipo_requisicao,
                        objt_frm_cad:objt_frm_cad  
                    },
                    success:function(retorno) {

                        if(retorno == 1) {
                            $('.msg_sucesso').html('Registro cadastrado com exito.') 
                            exibe_sucess()
                            limpar_form()
                            $('#cx_nome').focus()
                            carregar_registros ()
                        } else {

                            $('.msg_erro').html('Erro ao cadastrar Material.Contate o Desenvolvedor!!!') 
                            exibe_erro()

                        }

                    }
                })

        

}

function carregar_registros (){


    // define o tipo de requisição - select cadastro
    let tipo_requisicao = 2

    $.ajax({
        method:'POST',
        url:'modulos/functions.php',
        data:
        {
            tipo_requisicao:tipo_requisicao
        },
        success:function(retorno) {

              if(retorno != 0) {
                    data_return = JSON.parse(retorno)
                   montar_table_list()
              }     
                
                  
        }
    })



}

function montar_table_list(){


	var cod = 1	
	let itm = 0
	// var new_table = document.querySelector('.frmt_tabela_fretes')
	 tbl = '';	
	 tbl +='<tr>'	
	 tbl +='<th>Id. Cad.</th>'
	 tbl +='<th>Nome Material</th>'
	 tbl +='<th>Descrição</th>'	
	 tbl +='<th>Marca</th>'
	 tbl +='<th>Quantidade</th>'
	 tbl +='<th>Dt. Cadastro</th>' 	
	
	 tbl +='</tr>'
	
	
	for(let i = 0; i < data_return.length; i++) {

				if (cod === 3) {
					cod = 1
				}
				

				if (cod === 1) {
					var cls = 'styline_line_table_2'
				} else if (cod === 2) {
					var cls = 'styline_line_table_1'
				}

			tbl +=`<tr>`
			tbl +=`<td class=${cls} id=it${data_return[i].id_cad_nf}>${data_return[i].id_material}</td>`
			tbl +=`<td class=${cls} id=it${data_return[i].id_cad_nf}>${data_return[i].nome_material}</td>`
			tbl +=`<td class=${cls} id=it${data_return[i].id_cad_nf}>${data_return[i].descricao}</td>`
			tbl +=`<td class=${cls} id=it${data_return[i].id_cad_nf}>${data_return[i].marca}</td>`
			tbl +=`<td class=${cls} id=it${data_return[i].id_cad_nf}>${data_return[i].qtd}</td>`
			tbl +=`<td class=${cls} id=it${data_return[i].id_cad_nf}>${data_return[i].data_reg}</td>`
	
			
						
			tbl +='</tr>'

			cod++;
			itm ++;	
			

	}

	
	$('#table_list').html(tbl);
	$('.vlr_tit_list').html(itm);
	

}


function limpar_form (){

    $('#cx_nome').val('')
    $('#cx_descricao').val('')
    $('#cx_marca').val('')
    $('#cx_qtd').val('')

}


function criar_objt_frm() {

    let cx_nome = $('#cx_nome').val()
    let cx_descricao = $('#cx_descricao').val()
    let cx_marca = $('#cx_marca').val()
    let cx_qtd = $('#cx_qtd').val()


    objt_frm_cad   = 
    {
        cx_nome:cx_nome,
        cx_descricao:cx_descricao,
        cx_marca:cx_marca,
        cx_qtd:cx_qtd
    }

}


function valid_frm() {

    if(!objt_frm_cad.cx_nome || !objt_frm_cad.cx_descricao ||
       !objt_frm_cad.cx_marca || !objt_frm_cad.cx_qtd) 
       {
        var_valid_form = 0
       } else {
        var_valid_form = 1    
       }    
    

}

function exibe_erro() {

    $('.msg_erro').css('display','block')
    setTimeout(() => {
        inibie_erro()
    }, 4000);
}

function inibie_erro() {
    $('.msg_erro').css('display','none')
}



function exibe_sucess() {

    $('.msg_sucesso').css('display','block')
    setTimeout(() => {
        inibie_sucess()
    }, 4000);
}

function inibie_sucess() {
    $('.msg_sucesso').css('display','none')
}

