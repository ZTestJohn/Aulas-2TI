<?php
require 'conexao.php';

$id = isset($_GET['id']) ? (int) $_GET['id'] : (isset($_POST['id']) ? (int) $_POST['id'] : 0);

if ($id <= 0) {
    die('ID inválido.');
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome_completo        = trim($_POST['nome_completo'] ?? '');
    $email                = trim($_POST['email'] ?? '');
    $telefone             = trim($_POST['telefone'] ?? '');
    $titulo_filme         = trim($_POST['titulo_filme'] ?? '');
    $data_sessao          = trim($_POST['data_sessao'] ?? '');
    $horario_sessao       = trim($_POST['horario_sessao'] ?? '');
    $quantidade_ingressos = isset($_POST['quantidade_ingressos']) ? (int) $_POST['quantidade_ingressos'] : 0;
    $tipo_ingresso        = trim($_POST['tipo_ingresso'] ?? '');
    $forma_pagamento      = trim($_POST['forma_pagamento'] ?? '');
    $observacoes          = trim($_POST['observacoes'] ?? '');

    if ($nome_completo === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || $titulo_filme === '' || $quantidade_ingressos <= 0) {
        $error = 'Preencha os campos obrigatórios corretamente.';
    } else {
        try {
            $sql = 'UPDATE compras_ingressos SET 
                        nome_completo = :nome_completo,
                        email = :email,
                        telefone = :telefone,
                        titulo_filme = :titulo_filme,
                        data_sessao = :data_sessao,
                        horario_sessao = :horario_sessao,
                        quantidade_ingressos = :quantidade_ingressos,
                        tipo_ingresso = :tipo_ingresso,
                        forma_pagamento = :forma_pagamento,
                        observacoes = :observacoes
                    WHERE id = :id';

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
                ':id'                   => $id,
            ]);

            header('Location: index.php?edited=1');
            exit;
        } catch (Throwable $e) {
            $error = 'Erro ao atualizar: ' . $e->getMessage();
        }
    }
}

try {
    $stmt = $pdo->prepare('SELECT * FROM compras_ingressos WHERE id = :id LIMIT 1');
    $stmt->execute([':id' => $id]);
    $compra = $stmt->fetch();
} catch (Throwable $e) {
    die('Erro ao carregar compra: ' . $e->getMessage());
}

if (!$compra) {
    die('Compra não encontrada.');
}

?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Editar Compra</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style>form{max-width:700px;margin:20px auto;}</style>
</head>
<body>
    <div class="container">
        <h2 class="mt-3">Editar Compra #<?= htmlspecialchars($compra['id']) ?></h2>

        <?php if (!empty($error)): ?>
            <div class="alert alert-danger"><?= htmlspecialchars($error) ?></div>
        <?php endif; ?>

        <form method="post" action="editar_compra.php">
            <input type="hidden" name="id" value="<?= htmlspecialchars($compra['id']) ?>" />

            <label class="form-label">Nome completo:</label>
            <input class="form-control" type="text" name="nome_completo" value="<?= htmlspecialchars($compra['nome_completo']) ?>" required />

            <label class="form-label">E-mail:</label>
            <input class="form-control" type="email" name="email" value="<?= htmlspecialchars($compra['email']) ?>" required />

            <label class="form-label">Telefone:</label>
            <input class="form-control" type="tel" name="telefone" value="<?= htmlspecialchars($compra['telefone']) ?>" />

            <label class="form-label">Título do filme:</label>
            <input class="form-control" type="text" name="titulo_filme" value="<?= htmlspecialchars($compra['titulo_filme']) ?>" required />

            <label class="form-label">Data da sessão:</label>
            <input class="form-control" type="date" name="data_sessao" value="<?= htmlspecialchars($compra['data_sessao']) ?>" required />

            <label class="form-label">Horário da sessão:</label>
            <input class="form-control" type="time" name="horario_sessao" value="<?= htmlspecialchars($compra['horario_sessao']) ?>" required />

            <label class="form-label">Quantidade de ingressos:</label>
            <input class="form-control" type="number" name="quantidade_ingressos" min="1" value="<?= htmlspecialchars($compra['quantidade_ingressos']) ?>" required />

            <label class="form-label">Tipo de ingresso:</label>
            <select class="form-select" name="tipo_ingresso" required>
                <option value="Inteira" <?= $compra['tipo_ingresso'] === 'Inteira' ? 'selected' : '' ?>>Inteira</option>
                <option value="Meia" <?= $compra['tipo_ingresso'] === 'Meia' ? 'selected' : '' ?>>Meia</option>
            </select>

            <label class="form-label">Forma de pagamento:</label>
            <select class="form-select" name="forma_pagamento" required>
                <option value="Cartão de Crédito" <?= $compra['forma_pagamento'] === 'Cartão de Crédito' ? 'selected' : '' ?>>Cartão de Crédito</option>
                <option value="Pix" <?= $compra['forma_pagamento'] === 'Pix' ? 'selected' : '' ?>>Pix</option>
                <option value="Dinheiro" <?= $compra['forma_pagamento'] === 'Dinheiro' ? 'selected' : '' ?>>Dinheiro</option>
            </select>

            <label class="form-label">Observações:</label>
            <textarea class="form-control" name="observacoes" rows="3"><?= htmlspecialchars($compra['observacoes']) ?></textarea>

            <br />
            <button type="submit" class="btn btn-primary">Salvar alterações</button>
            <a href="index.php" class="btn btn-secondary">Cancelar</a>
        </form>
    </div>
</body>
</html>
