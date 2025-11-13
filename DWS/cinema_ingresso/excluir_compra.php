<?php
require 'conexao.php';

$id = isset($_GET['id']) ? (int) $_GET['id'] : 0;

if ($id <= 0) {
    die('ID inválido.');
}

try {
    $stmt = $pdo->prepare('DELETE FROM compras_ingressos WHERE id = :id');
    $stmt->execute([':id' => $id]);
    header('Location: index.php?deleted=1');
    exit;
} catch (Throwable $e) {
    die('Erro ao excluir: ' . $e->getMessage());
}
