        document.addEventListener('DOMContentLoaded', function() {
            // Récupérer tous les liens de services
            const serviceLinks = document.querySelectorAll('.category-services a');
            
            serviceLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Retirer la classe active de tous les liens
                    serviceLinks.forEach(l => l.classList.remove('active'));
                    
                    // Ajouter la classe active au lien cliqué
                    this.classList.add('active');
                    
                    // Récupérer le service sélectionné
                    const serviceName = this.textContent;
                    const serviceId = this.getAttribute('href');
                    
                    // Afficher le service sélectionné
                    console.log('Service sélectionné:', serviceName, serviceId);
                    alert('Vous avez sélectionné: ' + serviceName);
                    
                    // Vous pouvez faire d'autres actions ici:
                    // - Rediriger vers une page
                    // - Charger un contenu
                    // - Envoyer les données au serveur, etc.
                });
            });
        });