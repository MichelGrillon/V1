document.addEventListener("DOMContentLoaded", function () {

// Gestion du menu mobile
// Gestion du menu mobile

// Sélectionne l'icône du menu mobile
const mobileMenuIcon = document.getElementById("mobile-menu-icon");
// Sélectionne le menu
const menu = document.querySelector(".menu");
// Sélectionne tous les éléments du menu
const menuItems = document.querySelectorAll(".menu ul li a");

mobileMenuIcon.addEventListener("click", function (event) {
    // Empêche le comportement par défaut du clic
    event.preventDefault();
    // Basculer la classe "open" pour ouvrir/fermer le menu
    menu.classList.toggle("open");
});

document.addEventListener("touchstart", function(event) {
    // Si le touchstart est en dehors du menu et de l'icône du menu, fermer le menu
    if (!menu.contains(event.target) && !mobileMenuIcon.contains(event.target)) {
        menu.classList.remove("open");
    }
});

// Ajoute un gestionnaire d'événements à chaque élément du menu
menuItems.forEach(function(item) {
    item.addEventListener("click", function() {
        // Ferme le menu lorsque l'utilisateur clique sur un élément
        menu.classList.remove("open");
    });
});

    // Fin

  // Flèche de retour en haut de la page

    // Sélectionne l'élément de retour en haut
    const retourHaut = document.getElementById("retour-haut");

    window.addEventListener("scroll", function() {
        // Afficher ou masquer l'élément de retour en haut en fonction de la position de défilement
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            retourHaut.style.display = "block";
        } else {
            retourHaut.style.display = "none";
        }
    });

    retourHaut.addEventListener("click", function() {
        // Faire défiler la page vers le haut
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
    // Fin

 // Switch mode clair et sombre

    // Sélectionne l'icône de bascule de thème
    const themeToggleIcon = document.getElementById("theme-toggle-icon");
    // Sélectionne le corps du document
    const body = document.body;

    // Appliquer le mode sombre par défaut si aucun thème n'est enregistré
    const savedTheme = localStorage.getItem("theme") || "dark-mode";
    body.classList.add(savedTheme);
    updateIcon(savedTheme);

    themeToggleIcon.addEventListener("click", function (event) {
        // Empêche le comportement par défaut du clic
        event.preventDefault();
        // Basculer entre les thèmes clair et sombre
        const newTheme = body.classList.contains("light-mode") ? "dark-mode" : "light-mode";
        // Supprimer les classes de thème existantes
        body.classList.remove("light-mode", "dark-mode");
        // Ajouter la nouvelle classe de thème
        body.classList.add(newTheme);
        // Enregistrer le nouveau thème dans le stockage local
        localStorage.setItem("theme", newTheme);
        // Mettre à jour l'icône de bascule de thème
        updateIcon(newTheme);
    });

    // Switch - mise à jour de l'icône
    function updateIcon(theme) {
        // Sélectionne l'icône à l'intérieur de l'élément de bascule de thème
        const icon = themeToggleIcon.querySelector("i");
        if (theme === "light-mode") {
            // Supprimer l'icône de lune
            icon.classList.remove("fa-moon");
            // Ajouter l'icône de soleil
            icon.classList.add("fa-sun");
        } else {
            // Supprimer l'icône de soleil
            icon.classList.remove("fa-sun");
            // Ajouter l'icône de lune
            icon.classList.add("fa-moon");
        }
    }

//Fin

//Gestion de la flêche du formulaire
        const toggles = document.querySelectorAll('.toggle-icon');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const sectionId = this.closest('div').parentElement.id; // ID de la section parent
            const heroSection = document.getElementById('hero');

            // Vérifie si la classe rubrique-open est déjà appliquée
            if (heroSection.classList.contains('rubrique-open')) {
                // Si oui, la retirer
                heroSection.classList.remove('rubrique-open');
            } else {
                // Sinon, l'ajouter
                heroSection.classList.add('rubrique-open');
            }

            const content = this.closest('div').nextElementSibling;
            if (content.style.display === "none") {
                content.style.display = "block";
                this.classList.remove('fa-chevron-down');
                this.classList.add('fa-chevron-up');
            } else {
                content.style.display = "none";
                this.classList.remove('fa-chevron-up');
                this.classList.add('fa-chevron-down');
            }
        });
    });

    //Fin

 // Gestion des vignettes de projet
    const thumbnails = document.querySelectorAll('.project-thumbnail');
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.close');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            modalImg.style.transform = "scale(1.1)";
            modalImg.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        });
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = "none";
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    modalImg.addEventListener('click', function () {
        window.open(this.src, '_blank');
    });
//Fin
    
});

   //Gestion formulaire de contact

document.querySelectorAll('.close').forEach(function(closeBtn) {
            closeBtn.addEventListener('click', function() {
                this.parentElement.style.display = 'none';
            });
        });
        