<?php
session_start();

// Vérifier si un message a été envoyé
$message_sent = $_SESSION['message_sent'] ?? null;
unset($_SESSION['message_sent']); // Effacer le message de la session après l'avoir lu

include 'includes/header.php'; ?>

<main>
    <section id="hero">
        <div class="container-portfolio">
            <p></p>
            <p></p>
            <h1>Bienvenue </h1>
            <h2>Le site est actuellement en construction...</h2>
            <h2>.. et en phase de tests ...</h2>
            <h3>.. des erreurs, liens cassés sont présents.</h3>
            <p>Ouverture prévue : fin septembre 2024.</p>
            <p>Merci de votre patience et de votre compréhension !</p>
            <br >
            <div id="about">
                <p>Mais qui suis-je ?....</p>

                <?php include 'pages/about.php'; ?>
            </div>
            <br >
            <div id="projects">
                <p>Découvrez mes projets en développement web regroupés par technologies.</p>

                <?php include 'pages/projects.php'; ?>
            </div>
            <br >
            <div id="contact">
                <?php include 'pages/contact.php'; ?>
            </div>
            <br >
        </div>
        <div class="test">
        </div>
    </section>
</main>

<?php include 'includes/footer.php'; ?>