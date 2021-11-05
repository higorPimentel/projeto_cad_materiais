<?php 

    include_once('includes/topo.php');

?>

<section class='container-modal'>

        <form class="frm_registro frm_cad">
                          
                <h1 class='tit-frm tit-frm-mod'>Cadastrar Material</h1>
                    
                    <div class="row">	
                            <div class="grupo_cxs col-6" id="grupo_cx_id">
                                <label class='lb_text'>Nome</label>
                                <input class="cx_text" type="text" id="cx_nome" autofocus>											
                            </div>	
                    </div>   
                    <div class="row">	
                            <div class="grupo_cxs col-4" id="grupo_cx_id">
                                <label class='lb_text'>Marca</label>
                                <input class="cx_text" type="text" id="cx_marca">											
                            </div>                                                      
                            <div class="grupo_cxs col-4" id="grupo_cx_id">
                                <label class='lb_text'>Quantidade</label>
                                <input class="cx_text" type="text" id="cx_qtd">											
                            </div>                    
                    </div>    
                    <div class="row">	
                          <div class="grupo_cxs col-6 cx_txt_area" id="grupo_cx_id">
                                <label class='lb_text'>Descrição</label>
                                <textarea class="cx_text" id="cx_descricao" cols="30" rows="10"></textarea>										
                            </div>	
                
                    </div>
                    
                    <div class='barra_separa barr-2'></div>

                    <div class="row">	
                            <div class="grupo_cxs col-4" id="grupo_cx_id">                              
                                <input class="btns" type="button" id="btn_cadastra" value='Cadastrar'>											
                                <input class="btns" type="button" id="btn_fecha" value='Fechar'>											
                            </div>	
                    </div>	
                    
         </form>

</section>
