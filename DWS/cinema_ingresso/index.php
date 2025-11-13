<?php
require 'conexao.php';

$compras = [];
try {
    $stmt = $pdo->query("SELECT * FROM compras_ingressos ORDER BY id DESC");
    $compras = $stmt->fetchAll();
} catch (Throwable $e) {
    $compras = [];
}
?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Compra de Ingressos - Cinema</title>
    <style>
    form {
        padding: 20px;
        border-radius: 10px;
        max-width: 500px;
        margin: auto;
        background-color: rgb(249, 255, 255);
        border: 1px solid rgb(222, 255, 255);
    }
    </style>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous" />
</head>

<body class="py-5">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous">
    </script>
    <h2 class="text-center pb-2" >Formulário de Compra de Ingresso</h2>
    <form class="shadow" action="processa.php" method="POST" novalidate>
        <label class="form-label">Nome completo:</label>
        <input class="form-control" type="text" name="nome_completo" maxlength="120" required />

        <label class="form-label">E-mail:</label>
        <input class="form-control" type="email" name="email" maxlength="120" required />

        <label class="form-label">Telefone:</label>
        <input class="form-control" type="tel" name="telefone" placeholder="(XX) XXXXX-XXXX" pattern="^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$" title="Formato esperado: (11) 98888-7777" maxlength="30" required />

        <label class="form-label">Título do filme:</label>
        <input class="form-control" type="text" name="titulo_filme" maxlength="150" required />

        <label class="form-label">Data da sessão:</label>
        <input id="data_sessao" class="form-control" type="date" name="data_sessao" required />

        <label class="form-label">Horário da sessão:</label>
        <input class="form-control" type="time" name="horario_sessao" required />

        <label class="form-label">Quantidade de ingressos:</label>
        <input class="form-control" type="number" name="quantidade_ingressos" min="1" max="20" required />

        <label class="form-label">Tipo de ingresso:</label>
        <select class="form-select" name="tipo_ingresso" required>
            <option value="Inteira">Inteira</option>
            <option value="Meia">Meia</option>
        </select>

        <label class="form-label">Forma de pagamento:</label>
        <select class="form-select" name="forma_pagamento" required>
            <option value="Cartão de Crédito">Cartão de Crédito</option>
            <option value="Pix">Pix</option>
            <option value="Dinheiro">Dinheiro</option>
        </select>

        <label class="form-label">Observações adicionais:</label>
        <textarea class="form-control" name="observacoes" rows="3"></textarea>

        <br /><br />
        <div class="text-center">
            <button type="submit" class="btn btn-primary ">Enviar</button>
        </div>
    </form>

    <div>
        <?php if (!empty($compras)): ?>
    <div class="container">
        <br>
        <h2>Carrinho</h2><br>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome Completo</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Título do Filme</th>
                    <th>Data da Sessão</th>
                    <th>Horário da Sessão</th>
                    <th>Qtd. Ingressos</th>
                    <th>Tipo de Ingresso</th>
                    <th>Forma de Pagamento</th>
                    <th>Observações</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($compras as $compra): ?>
                <tr>
                    <td><?= htmlspecialchars($compra['id']) ?></td>
                    <td><?= htmlspecialchars($compra['nome_completo']) ?></td>
                    <td><?= htmlspecialchars($compra['email']) ?></td>
                    <td><?= htmlspecialchars($compra['telefone']) ?></td>
                    <td><?= htmlspecialchars($compra['titulo_filme']) ?></td>
                    <td><?= htmlspecialchars($compra['data_sessao']) ?></td>
                    <td><?= htmlspecialchars($compra['horario_sessao']) ?></td>
                    <td><?= htmlspecialchars($compra['quantidade_ingressos']) ?></td>
                    <td><?= htmlspecialchars($compra['tipo_ingresso']) ?></td>
                    <td><?= htmlspecialchars($compra['forma_pagamento']) ?></td>
                    <td><?= htmlspecialchars($compra['observacoes']) ?></td>
                    <td>
                        <a href="editar_compra.php?id=<?= $compra['id'] ?>">Editar</a> |
                        <a href="excluir_compra.php?id=<?= $compra['id'] ?>"
                            onclick="return confirm('Tem certeza que deseja excluir esta compra?');">
                            Excluir
                        </a>
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
        <?php else: ?>
        <p class="container">Nenhuma compra registrada.</p>
        </div>
        <?php endif; ?>

    </div>

</body>

</html>
<script>
(function() {
  const input = document.getElementById('data_sessao');
  if (!input) return;
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  input.min = `${yyyy}-${mm}-${dd}`;
})();
</script>