<?php 

    include_once('includes/topo.php');
    include_once('includes/modal_cad.php');

?>


        <div class='msg_erro'>0</div>
        <div class='msg_sucesso'>0</div>
     
        <form class="frm_registro">
                        
            <!-- 
            <h1 class='tit-frm'>Cadastro Materiais de construção</h1>
                -->


                <div class="row">	
                        <div class="grupo_cxs col-1" id="grupo_cx_id">
                                <input  type="button" class="btns" id="btn_novo_reg" value="Novo Registro">											
                        </div>	
                </div>
        

                <div class='barra_separa'></div>


                <h1 class='tit-frm tit-list'>Listagem de Registros</h1>    

                                <div class='bloco_inf_list'>                                     
                                    <div class='tit_list'>Registros Listados.:</div><div class='vlr_tit_list'>0000</div>
                                </div>
                                <div  class="row">	
                                        <div class="grupo_cxs col-6" id="grupo_cx_id">
                                        
                                            <div class='container_table'>
                                                    <table id='table_list'  class='frmt_tabela_fretes'>
                                                        
                                                    </table>
                                            </div>
                                        </div>
                                </div>
        
        
        </form>

        
<script>

window.addEventListener('load',inicia_aplicacao)

function inicia_aplicacao(){
   
        carregar_registros()
  
}      




</script>

<?php 

    include_once('includes/scripts.php');

?>

    

</body>

</html>