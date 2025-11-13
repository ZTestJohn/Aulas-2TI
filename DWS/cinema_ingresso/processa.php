<?php

require 'conexao.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $nome_completo       = trim($_POST['nome_completo'] ?? '');
    $email               = trim($_POST['email'] ?? '');
    $telefone            = trim($_POST['telefone'] ?? '');
    $titulo_filme        = trim($_POST['titulo_filme'] ?? '');
    $data_sessao         = trim($_POST['data_sessao'] ?? '');
    $horario_sessao      = trim($_POST['horario_sessao'] ?? '');
    $quantidade_ingressos= isset($_POST['quantidade_ingressos']) ? (int) $_POST['quantidade_ingressos'] : 0;
    $tipo_ingresso       = trim($_POST['tipo_ingresso'] ?? '');
    $forma_pagamento     = trim($_POST['forma_pagamento'] ?? '');
    $observacoes         = trim($_POST['observacoes'] ?? '');

    
    $erros = [];
    if ($nome_completo === '') $erros[] = 'Nome completo é obrigatório.';
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $erros[] = 'E-mail inválido.';
    if ($telefone === '') $erros[] = 'Telefone é obrigatório.';
    if ($titulo_filme === '') $erros[] = 'Título do filme é obrigatório.';
    if ($data_sessao === '') $erros[] = 'Data da sessão é obrigatória.';
    if ($horario_sessao === '') $erros[] = 'Horário da sessão é obrigatório.';
    if ($quantidade_ingressos <= 0) $erros[] = 'Quantidade de ingressos deve ser maior que zero.';
    if ($tipo_ingresso === '') $erros[] = 'Tipo de ingresso é obrigatório.';
    if ($forma_pagamento === '') $erros[] = 'Forma de pagamento é obrigatória.';

    if (!empty($erros)) {
        
        die(implode('\n', $erros));
    }

    
    try {
        $sql = 'INSERT INTO compras_ingressos 
                (nome_completo, email, telefone, titulo_filme, data_sessao, horario_sessao, quantidade_ingressos, tipo_ingresso, forma_pagamento, observacoes)
                VALUES
                (:nome_completo, :email, :telefone, :titulo_filme, :data_sessao, :horario_sessao, :quantidade_ingressos, :tipo_ingresso, :forma_pagamento, :observacoes)';

        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ':nome_completo'        => $nome_completo,
            ':email'                => $email,
            ':telefone'             => $telefone,
            ':titulo_filme'         => $titulo_filme,
            ':data_sessao'          => $data_sessao,
            ':horario_sessao'       => $horario_sessao,
            ':quantidade_ingressos' => $quantidade_ingressos,
            ':tipo_ingresso'        => $tipo_ingresso,
            ':forma_pagamento'      => $forma_pagamento,
            ':observacoes'          => $observacoes,
        ]);

        header('Location: index.php?success=1');
        exit;
    } catch (Throwable $e) {
        
        die('Erro ao registrar compra: ' . $e->getMessage());
    }
}