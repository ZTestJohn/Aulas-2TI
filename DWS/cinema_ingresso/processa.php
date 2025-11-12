<?php
require 'conexao.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome_completo = trim($_POST['nome_completo'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $telefone = trim($_POST['telefone'] ?? '');
    $titulo_filme = trim($_POST['titulo_filme'] ?? '');
    $data_sessao = trim($_POST['data_sessao'] ?? '');
    $horario_sessao = trim($_POST['horario_sessao'] ?? '');
    $quantidade_ingressos = isset($_POST['quantidade_ingressos']) ? (int) $_POST['quantidade_ingressos'] : 0;
    $tipo_ingresso = trim($_POST['tipo_ingresso'] ?? '');
    $forma_pagamento = trim($_POST['forma_pagamento'] ?? '');
    $observacoes = trim($_POST['observacoes'] ?? '');

    if ($nome_completo === '' || $email === '' || $telefone === '' || $titulo_filme === '' || $data_sessao === '' || $horario_sessao === '' || $quantidade_ingressos <= 0 || $tipo_ingresso === '' || $forma_pagamento === '') {
        die('Por favor preencha todos os campos obrigatórios corretamente.');
    }

    $stmt = $conn->prepare("INSERT INTO compras_ingressos (nome_completo, email, telefone, titulo_filme, data_sessao, horario_sessao, quantidade_ingressos, tipo_ingresso, forma_pagamento, observacoes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

    if (!$stmt) {
        die('Erro na preparação da query: ' . $conn->error);
    }
    
    // s pra string e i pra int

    $types = 'ssssssisss';
    $stmt->bind_param($types, $nome_completo, $email, $telefone, $titulo_filme, $data_sessao, $horario_sessao, $quantidade_ingressos, $tipo_ingresso, $forma_pagamento, $observacoes);

    if ($stmt->execute()) {
        header('Location: index.php?success=1');
        exit;
    } else {
        echo 'Erro ao registrar compra: ' . $stmt->error;
    }

    $stmt->close();
}

$conn->close();