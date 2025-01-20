<?php
if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET['name'], $_GET['email'], $_GET['message'])) {
    // Coletando os dados do formulário
    $name = htmlspecialchars($_GET['name']);
    $email = htmlspecialchars($_GET['email']);
    $message = htmlspecialchars($_GET['message']);

    // Definindo o destinatário do email
    $to = "paulohbirro.github.io";  // Altere para o seu email
    $subject = "Nova Mensagem de Contato";

    // Corpo do email
    $body = "Você recebeu uma nova mensagem de contato.\n\n";
    $body .= "Nome: $name\n";
    $body .= "Email: $email\n";
    $body .= "Mensagem:\n$message\n";

    // Cabeçalhos do email
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Enviando o email
    if (mail($to, $subject, $body, $headers)) {
        echo "<p>Mensagem enviada com sucesso! Entraremos em contato em breve.</p>";
    } else {
        echo "<p>Ocorreu um erro ao enviar a mensagem. Tente novamente.</p>";
    }
} else {
    // Caso não tenha sido enviado um formulário
    echo "<p>Por favor, preencha o formulário corretamente.</p>";
}
?>