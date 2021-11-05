<?php 

date_default_timezone_set('America/Sao_Paulo');
$tipo_requisicao = $_POST['tipo_requisicao'];



    require_once('cn.php');
    session_start();    
    $_SESSION['conn'] = $conn;    




        if($tipo_requisicao ==1) {
            echo(cadastrar_mat());
        } elseif ($tipo_requisicao ==2) { 
            echo(select_itens_cad());
        }



function cadastrar_mat() {

$data_atual = date('d/m/Y');

$cx_nome = $_POST['objt_frm_cad']['cx_nome'];
$cx_descricao = $_POST['objt_frm_cad']['cx_descricao'];
$cx_marca = $_POST['objt_frm_cad']['cx_marca'];
$cx_qtd = $_POST['objt_frm_cad']['cx_qtd'];



    $sql_insert = "
    INSERT INTO registros_materiais 
        (nome_material,descricao,marca,qtd,data_reg)
            values
        ('$cx_nome','$cx_descricao','$cx_marca','$cx_qtd','$data_atual')";

      $process_query =  mysqli_query($_SESSION['conn'],$sql_insert);

    return $process_query;

}       

function select_itens_cad() {

    $sql_select = "SELECT * FROM  registros_materiais";      

    $process_query =  mysqli_query($_SESSION['conn'],$sql_select);


    if($process_query->num_rows > 0 ) {

        foreach ($process_query as $return) {
            $data_return[] =  $return;
        } 
       
    } else {

        $data_return = 0;
    }

       


    return json_encode($data_return);

}



?>