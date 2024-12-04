<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <!-- Logo -->
        <div class="logo-wrapper">
          <a class="logo" href="/"><img src="../assets/img/logo.png" class="logo-img" alt="Logo" /></a>
          <!-- <a class="logo" href="index.html"> <h2>THE CAPPA <span>Luxury Hotel</span></h2> </a> -->
        </div>
        <!-- Button -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"
          aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span
            class="navbar-toggler-icon"><i class="ti-menu"></i></span> </button>
        <!-- Menu -->
        <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><router-link class="nav-link" to="/">Accueil</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/appartement">Appartements</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/restaurant">Restaurant</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/offers">Offres</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/about">À Propos</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/contact">Contact</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Header Banner -->
    <div class="banner-header section-padding valign bg-img bg-fixed" data-overlay-dark="3"
      data-background="img/slider/5.jpg">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-left caption mt-90">
            <h5>Entrer en contact</h5>
            <h1>Contactez-nous</h1>
          </div>
        </div>
      </div>
    </div>
    <!-- Contact -->
    <section class="contact section-padding">
      <div class="container">
        <div class="row mb-90">
          <div class="col-md-6 mb-60">
            <h3>L'Hôtel de Luxe Cappa</h3>
            <p>
              Découvrez un hôtel où l’élégance et le confort se rencontrent. Situé au cœur de la ville, notre
              établissement offre une expérience inoubliable, alliant luxe moderne et hospitalité exceptionnelle.
            </p>
            <div class="reservations mb-30">
              <div class="icon"><span class="flaticon-call"></span></div>
              <div class="text">
                <p>Réservation</p>
                <a href="tel:0022320290807 ">+223 20 29 08 08</a> <br>
                <a href="tel:0022320290807 ">+223 20 29 08 07 </a>
              </div>

            </div>
            <div class="reservations mb-30">
              <div class="icon"><span class="flaticon-envelope"></span></div>
              <div class="text">
                <p>Informations par Email</p>
                <a href="mailto:Reception@micasamali.com">Reception@micasamali.com </a>
              </div>
            </div>
            <div class="reservations">
              <div class="icon"><span class="flaticon-location-pin"></span></div>
              <div class="text">
                <p>Adresse</p>
                Hamdallaye ACI/ Golf<br>
                Bamako Mali
              </div>
            </div>
          </div>
          <div class="col-md-5 mb-30 offset-md-1">
            <h3>Nous Contacter</h3>
            <form method="post" class="contact__form"
              action="https://duruthemes.com/demo/html/cappa/demo1-light/mail.php">
              <!-- Message de confirmation -->
              <div class="row">
                <div class="col-12">
                  <div class="alert alert-success contact__msg" style="display: none" role="alert">
                    Votre message a été envoyé avec succès.
                  </div>
                </div>
              </div>
              <!-- Champs du formulaire -->
              <div class="row">
                <div class="col-md-6 form-group">
                  <input name="name" type="text" placeholder="Votre Nom *" required>
                </div>
                <div class="col-md-6 form-group">
                  <input name="email" type="email" placeholder="Votre Email *" required>
                </div>
                <div class="col-md-6 form-group">
                  <input name="phone" type="text" placeholder="Votre Numéro *" required>
                </div>
                <div class="col-md-6 form-group">
                  <input name="subject" type="text" placeholder="Sujet *" required>
                </div>
                <div class="col-md-12 form-group">
                  <textarea name="message" id="message" cols="30" rows="4" placeholder="Message *" required></textarea>
                </div>
                <div class="col-md-12">
                  <button type="submit" class="butn-dark2"><span>Envoyer le Message</span></button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <!-- Section Carte -->
        <div class="container">
          <div class="row">
            <!-- Première carte avec en-tête "ACI" -->
            <div class="col-md-6 col-12 map animate-box" data-animate-effect="fadeInUp">
              <h3 class="text-center">ACI</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1573147.7480448114!2d-74.84628175962355!3d41.04009641088412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25856139b3d33%3A0xb2739f33610a08ee!2s1616%20Broadway%2C%20New%20York%2C%20NY%2010019%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1sfr!2sfr!4v1646760525018!5m2!1sfr!2sfr"
                width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy">
              </iframe>
            </div>

            <!-- Deuxième carte avec en-tête "Golf" -->
            <div class="col-md-6 col-12 map animate-box" data-animate-effect="fadeInUp">
              <h3 class="text-center">GOLF</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1573147.7480448114!2d-74.84628175962355!3d41.04009641088412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25856139b3d33%3A0xb2739f33610a08ee!2s1616%20Broadway%2C%20New%20York%2C%20NY%2010019%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1sfr!2sfr!4v1646760525018!5m2!1sfr!2sfr"
                width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy">
              </iframe>
            </div>
          </div>
        </div>

      </div>
    </section>
    <!-- Clients -->
    <section class="clients">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <div class="owl-carousel owl-theme">
              <div class="clients-logo">
                <a href="#0"><img src="../assets/img/clients/1.png" alt=""></a>
              </div>
              <div class="clients-logo">
                <a href="#0"><img src="../assets/img/clients/2.png" alt=""></a>
              </div>
              <div class="clients-logo">
                <a href="#0"><img src="../assets/img/clients/3.png" alt=""></a>
              </div>
              <div class="clients-logo">
                <a href="#0"><img src="../assets/img/clients/4.png" alt=""></a>
              </div>
              <div class="clients-logo">
                <a href="#0"><img src="../assets/img/clients/5.png" alt=""></a>
              </div>
              <div class="clients-logo">
                <a href="#0"><img src="../assets/img/clients/6.png" alt=""></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Footer -->
    <footer class="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="footer-column footer-about">
                <h3 class="footer-title">A propos</h3>
                <p class="footer-about-text">Bienvenue !
                  Notre hôtel offre un cadre raffiné où chaque détail est pensé pour votre confort, avec
                  des installations modernes et un service de premier ordre pour un séjour exceptionnel.
                </p>

                <div class="footer-language">
                  <i class="lni ti-world"></i>
                  <select id="languageSelector" onchange="changeLanguage()">
                    <option value="fr">Français</option>
                    <option value="en">English</option>
                  </select>
                </div>

              </div>
            </div>
            <div class="col-md-3 offset-md-1">
              <div class="footer-column footer-explore clearfix">
                <h3 class="footer-title">Explorez</h3>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><router-link class="nav-link" to="/">Accueil</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/appartement">Appartements</router-link>
                    </li>
                    <li class="nav-item"><router-link class="nav-link" to="/restaurant">Restaurant</router-link>
                    </li>
                    <li class="nav-item"><router-link class="nav-link" to="/offers">Offres</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/about">À Propos</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/contact">Contact</router-link></li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
              <div class="footer-column footer-contact">
                <h3 class="footer-title">Contact</h3>
                <p class="footer-contact-text">Hamdallaye ACI<br> Bamako Mali
                </p>
                <div class="footer-contact-info">
                  <p class="footer-contact-phone"><span class="flaticon-call"></span> +223 20 29 08 08 ACI</p>
                  <p class="footer-contact-phone"><span class="flaticon-call"></span> +223 20 28 38 80 Golf</p>
                  <p class="footer-contact-mail">contactreception@gmail.com</p>
                </div>
                <div class="footer-about-social-list">
                  <a href="#"><i class="ti-instagram"></i></a>
                  <a href="#"><i class="ti-facebook"></i></a>
                  <a href="#" target="_blank"><i class="fab fa-linkedin"></i> <!-- Icône LinkedIn --></a>
                  <a href="#" target="_blank"><i class="fab fa-tiktok"></i> <!-- Icône TikTok --></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="footer-bottom-inner">
                <p class="footer-bottom-copy-right">© Copyright 2024 Micasa, tous droits réservés</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>
