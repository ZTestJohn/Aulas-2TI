<?php
require 'conexao.php';

$id = isset($_GET['id']) ? (int) $_GET['id'] : 0;

if ($id <= 0) {
    die('ID inválido.');
}

$stmt = $conn->prepare('DELETE FROM compras_ingressos WHERE id = ?');
if (!$stmt) {
    die('Erro na preparação da query: ' . $conn->error);
}

$stmt->bind_param('i', $id);

if ($stmt->execute()) {
    $stmt->close();
    $conn->close();
    header('Location: index.php?deleted=1');
    exit;
} else {
    echo 'Erro ao excluir: ' . $stmt->error;
}

$stmt->close();
$conn->close();
