<section id="contactMe">
    <h2>Prendre contact</h2>
    <p>Actuellement à la recherche de nouvelles opportunités, ma boîte de réception est toujours ouverte. </p>
    <p>Que vous ayez une question ou que vous souhaitiez simplement me dire bonjour, je ferai de mon mieux pour vous répondre !</p>
    <div class="container mt-5">
        <div class="d-flex justify-content-between align-items-center">
            <h2>Dites Bonjour !</h2> <i class="fas fa-chevron-down toggle-icon"></i>
        </div>
        <form method="post" enctype="multipart/form-data" id="contact-form" style="display: none;">
            <div class="mb-3"> <label for="nom">Nom *</label> <input type="text" id="nom" name="nom" class="form-control" required> </div>
            <div class="mb-3"> <label for="prenom">Prénom *</label> <input type="text" id="prenom" name="prenom" class="form-control" required> </div>
            <div class="mb-3"> <label for="email">Email *</label> <input type="email" id="email" name="email" class="form-control" required> </div>
            <div class="mb-3"> <label for="objet">Objet *</label><input type="text" id="objet" name="objet" class="form-control" required></div>
            <div class="mb-3"> <label for="commentaire">Commentaire *</label> <textarea id="commentaire" name="commentaire" class="form-control" required></textarea></div>
            <div class="mb-3"><label><input type="checkbox" name="accepter" value="1" aria-invalid="false" required/>
                    En soumettant ce formulaire, j'accepte que mes données personnelles soient utilisées pour me recontacter. Aucun autre traitement ne sera effectué avec mes informations. Pour connaître et exercer vos droits, veuillez consultez la <a href="/pages/confidentialite.php">Politique de confidentialité</a>
                    <p><small>* Champ obligatoire</small></p>
            </div>
            <div class="mb-3"></div>
            <input type="submit" name="submit" value="Envoyer" class="btn btn-primary" id="submit-btn">
        </form>
        <div id="alert-success" class="alert alert-success">Email bien envoyé ! <span class="close">&nbsp; &times;</span></div>
        <div id="alert-error" class="alert alert-error">Erreur lors de l'envoi de l'email. <span class="close">&nbsp; &times;</span></div>
        <?php
        ini_set('display_errors', 1);
        error_reporting(E_ALL);
        if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit'])) {
            $nom = $_POST['nom'];
            $prenom = $_POST['prenom'];
            $email = $_POST['email'];
            $objet = $_POST['objet'];
            $commentaire = $_POST['commentaire'];

            $from = "#";
            $to = "#";
            $subject = "Nouveau message de $nom $prenom";
            $message = "Nom: $nom\nPrenom: $prenom\nEmail: $email\n\nObjet: $objet\n\nCommentaire:\n$commentaire";
            $headers = "From: $from\r\n";
            $headers .= "Reply-To: $email\r\n";
            $headers .= "X-Mailer: PHP/" . phpversion();

            if (mail($to, $subject, $message, $headers)) {
                echo '<script>document.getElementById("alert-success").style.display = "block";</script>';
            } else {
                echo '<script>document.getElementById("alert-error").style.display = "block";</script>';
            }
        }
        ?>
        <p></p>
    </div>

</section>