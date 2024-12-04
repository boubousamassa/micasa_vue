<template>
    <div>
        <div class="progress-wrap cursor-pointer">
        <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
    </div>

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
        </nav>
        <!-- Spa-Wellness Slider -->
        <header class="header slider">
            <div class="owl-carousel owl-theme">
                <!-- The opacity on the image is made with "data-overlay-dark="number". You can change it using the numbers 0-9. -->
                <div class="text-center item bg-img" data-overlay-dark="2" data-background="../assets/img/spa/3.jpg">
                    <div class="v-middle caption">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-10 offset-md-1">
                                    <h1>OFFRES</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center item bg-img" data-overlay-dark="2" data-background="../assets/img/spa/1.jpg">
                    <div class="v-middle caption">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-10 offset-md-1">
                                    <h1>OFFRES</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center item bg-img" data-overlay-dark="2" data-background="../assets/img/spa/2.jpg">
                    <div class="v-middle caption">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-10 offset-md-1">
                                    <h1>OFFRES</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- arrow down -->
            <div class="arrow bounce text-center">
                <a href="#" data-scroll-nav="1" class=""> <i class="ti-arrow-down"></i> </a>
            </div>
        </header>
        <!-- Spa-Wellness Content -->
        <section class="rooms-page section-padding" data-scroll-index="1">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="section-subtitle">Tant de façons de se détendre</div>
                        <div class="section-title">Spa et bien-être</div>
                        <p class="mb-30">Offrez-vous un moment de sérénité et de ressourcement dans notre espace Spa et
                            Bien-être. Que vous ayez besoin d’un instant de relaxation profonde ou d’un soin
                            revitalisant, notre centre vous propose une expérience unique pour harmoniser votre corps et
                            votre esprit.</p>
                        <h3>Découvrez nos nombreuses prestations :</h3>
                        <ul>
                            <li><strong>Massages relaxants et thérapeutiques</strong> : des techniques variées pour
                                apaiser vos tensions.</li>
                            <li><strong>Soins du visage et du corps</strong> : une peau lumineuse et revitalisée grâce à
                                des produits naturels et adaptés.</li>
                            <li><strong>Hammam et sauna</strong> : plongez dans une chaleur bienfaisante pour détoxifier
                                et apaiser.</li>
                            <li><strong>Jacuzzi et piscine chauffée</strong> : un moment d’évasion dans une ambiance
                                calme et ressourçante.</li>
                        </ul>
                    </div>
                    <div class="col-md-12">
                        <div class="reservations">
                            <div class="icon"><span class="flaticon-call"></span></div>
                            <div class="text">
                                <p>Reservations</p> <a href="tel:855-100-4444">+223 20 29 08 08 </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Services -->
        <section class="services section-padding2">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 p-0 animate-box" data-animate-effect="fadeInLeft">
                        <div class="img left">
                            <a href="/"><img src="../assets/img/spa/3.jpg" alt=""></a>
                        </div>
                    </div>
                    <div class="col-md-6 p-0 bg-cream valign animate-box" data-animate-effect="fadeInRight">
                        <div class="content">
                            <div class="cont text-left">
                                <div class="info">
                                    <h6>Expériences</h6>
                                </div>
                                <h4>Centre de Spa</h4>
                                <p>
                                    Découvrez un havre de paix et de bien-être dans notre centre de spa. Profitez d'une
                                    expérience unique alliant détente et revitalisation, grâce à des soins adaptés et
                                    une atmosphère apaisante, idéale pour échapper au stress du quotidien.
                                </p>
                                <p>
                                    <span class="flaticon-clock"></span> Ouvert tous les jours : 7h00 à 21h00
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 bg-cream p-0 order2 valign animate-box" data-animate-effect="fadeInLeft">
                        <div class="content">
                            <div class="cont text-left">
                                <div class="info">
                                    <h6>Moderne</h6>
                                </div>
                                <h4>Centre de Fitness</h4>
                                <p>
                                    Rejoignez notre centre de fitness moderne, conçu pour vous offrir un environnement
                                    dynamique et motivant. Profitez d’équipements de pointe et d’espaces dédiés pour
                                    atteindre vos objectifs, qu’il s’agisse de bien-être, de performance ou de
                                    relaxation active.
                                </p>
                                <p>
                                    <span class="flaticon-clock"></span> Ouvert tous les jours : 6h00 à 21h00
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 p-0 order1 animate-box" data-animate-effect="fadeInRight">
                        <div class="img">
                            <a href="post2.html"><img src="../assets/img/spa/2.jpg" alt=""></a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 p-0 animate-box" data-animate-effect="fadeInLeft">
                        <div class="img left">
                            <a href="post.html"><img src="../assets/img/spa/1.jpg" alt=""></a>
                        </div>
                    </div>
                    <div class="col-md-6 p-0 bg-cream valign animate-box" data-animate-effect="fadeInRight">
                        <div class="content">
                            <div class="cont text-left">
                                <div class="info">
                                    <h6>Expériences</h6>
                                </div>
                                <h4>Club de Santé & Piscine</h4>
                                <p>
                                    Offrez-vous une parenthèse de bien-être au sein de notre Club de Santé & Piscine.
                                    Alliant détente et revitalisation, cet espace unique vous permet de vous ressourcer
                                    tout en prenant soin de votre corps grâce à nos installations modernes et à une
                                    ambiance apaisante.
                                </p>
                                <p>
                                    <span class="flaticon-clock"></span> Ouvert tous les jours : 10h00 à 19h00
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <!-- Faqs -->
        <section class="section-padding bg-cream">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="section-subtitle">Questions Fréquemment Posées</div>
                        <div class="section-title">Étiquette du Spa</div>
                    </div>
                    <div class="col-md-12">
                        <ul class="accordion-box clearfix">
                            <li class="accordion block">
                                <div class="acc-btn">Arrivée au Spa</div>
                                <div class="acc-content">
                                    <div class="content">
                                        <div class="text">
                                            Veuillez arriver au Spa 15 minutes avant l’heure prévue de votre soin pour
                                            profiter du calme et de la sérénité des lieux. Arriver en retard peut
                                            réduire la durée de votre soin.
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="accordion block">
                                <div class="acc-btn">Téléphones Mobiles</div>
                                <div class="acc-content">
                                    <div class="content">
                                        <div class="text">
                                            Nous vous prions de ne pas utiliser votre téléphone portable dans l’enceinte
                                            du Spa. Veuillez le mettre en mode silencieux à tout moment.
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="accordion block">
                                <div class="acc-btn">Objets de Valeur</div>
                                <div class="acc-content">
                                    <div class="content">
                                        <div class="text">
                                            Nous mettons à disposition un espace sécurisé pour vos objets personnels au
                                            sein du Spa. Cependant, nous déclinons toute responsabilité en cas de perte
                                            ou de dommage. Nous vous recommandons de placer vos objets de valeur dans le
                                            coffre-fort de votre chambre.
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="accordion block">
                                <div class="acc-btn">Santé</div>
                                <div class="acc-content">
                                    <div class="content">
                                        <div class="text">
                                            Veuillez informer notre personnel de vos conditions de santé, comme une
                                            hypertension, des allergies ou une grossesse, lors de la réservation. Nous
                                            déconseillons la consommation d’alcool avant ou après vos soins, ou avant
                                            d’utiliser les installations du Spa et du Club de Santé.
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="accordion block">
                                <div class="acc-btn">Enfants</div>
                                <div class="acc-content">
                                    <div class="content">
                                        <div class="text">
                                            L’âge minimum pour accéder au Spa, au Club de Santé et aux installations
                                            hydrothermales est de 16 ans. Les enfants de moins de 16 ans peuvent
                                            utiliser la piscine de l’hôtel uniquement sous la surveillance d’un adulte.
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="accordion block">
                                <div class="acc-btn">Sécurité</div>
                                <div class="acc-content">
                                    <div class="content">
                                        <div class="text">
                                            La profondeur maximale de la piscine est de 1,60 m. Aucun sauveteur n’est
                                            présent. Les enfants ne peuvent utiliser la piscine que sous la surveillance
                                            d’un adulte ou d’un parent/tuteur.
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="accordion block">
                                <div class="acc-btn">Tabagisme</div>
                                <div class="acc-content">
                                    <div class="content">
                                        <div class="text">
                                            Nous vous rappelons qu’il est interdit de fumer dans le Spa, le Club de
                                            Santé ou la zone du sauna.
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testiominals -->
        <section class="testimonials">
            <div class="background bg-img bg-fixed section-padding pb-0" data-background="../assets/img/slider/2.jpg"
                data-overlay-dark="3">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 offset-md-2">
                            <div class="testimonials-box">
                                <div class="head-box">
                                    <h6 id="testimonials_title">Témoignages</h6>
                                    <h4 id="client_reviews_title">Que disent les clients ?</h4>
                                    <div class="line"></div>
                                </div>
                                <div class="owl-carousel owl-theme">
                                    <div class="item">
                                        <span class="quote"><img src="../assets/img/quot.png" alt=""></span>
                                        <p id="testimonial_1">Hotel dapibus asue metus the nec feusiate eraten miss
                                            hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis
                                            ve ante otel inilla duiman at finibus viverra neca the sene on satien the
                                            miss drana inc fermen norttito sit space, mus nellentesque habitan.</p>
                                        <div class="info">
                                            <div class="author-img"><img src="../assets/img/team/4.jpg" alt=""></div>
                                            <div class="cont">
                                                <span><i class="star-rating"></i><i class="star-rating"></i><i
                                                        class="star-rating"></i><i class="star-rating"></i><i
                                                        class="star-rating"></i></span>
                                                <h6 id="author_1">Emily Brown</h6>
                                                <span id="review_1">Guest review</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <span class="quote"><img src="../assets/img/quot.png" alt=""></span>
                                        <p id="testimonial_2">Hotel dapibus asue metus the nec feusiate eraten miss
                                            hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis
                                            ve ante otel inilla duiman at finibus viverra neca the sene on satien the
                                            miss drana inc fermen norttito sit space, mus nellentesque habitan.</p>
                                        <div class="info">
                                            <div class="author-img"><img src="../assets/img/team/1.jpg" alt=""></div>
                                            <div class="cont">
                                                <span><i class="star-rating"></i><i class="star-rating"></i><i
                                                        class="star-rating"></i><i class="star-rating"></i><i
                                                        class="star-rating"></i></span>
                                                <h6 id="author_2">Nolan White</h6>
                                                <span id="review_2">Guest review</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <span class="quote"><img src="../assets/img/quot.png" alt=""></span>
                                        <p id="testimonial_3">Hotel dapibus asue metus the nec feusiate eraten miss
                                            hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis
                                            ve ante otel inilla duiman at finibus viverra neca the sene on satien the
                                            miss drana inc fermen norttito sit space, mus nellentesque habitan.</p>
                                        <div class="info">
                                            <div class="author-img"><img src="../assets/img/team/5.jpg" alt=""></div>
                                            <div class="cont">
                                                <span><i class="star-rating"></i><i class="star-rating"></i><i
                                                        class="star-rating"></i><i class="star-rating"></i><i
                                                        class="star-rating"></i></span>
                                                <h6 id="author_3">Olivia Martin</h6>
                                                <span id="review_3">Guest review</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                    Notre hôtel offre un cadre raffiné où chaque détail est pensé pour votre confort,
                                    avec
                                    des installations modernes et un service de premier ordre pour un séjour
                                    exceptionnel.
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
                                <ul class="footer-explore-list list-unstyled">
                                    <li><a href="index.html">Acueil</a></li>
                                    <li><a href="about.html">A propos</a></li>
                                    <li><a href="rooms.html">Appartements</a></li>
                                    <li><a href="restaurant.html">Restaurant</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="footer-column footer-contact">
                                <h3 class="footer-title">Contact</h3>
                                <p class="footer-contact-text">Hamdallaye ACI<br> Bamako Mali
                                </p>
                                <div class="footer-contact-info">
                                    <p class="footer-contact-phone"><span class="flaticon-call"></span> +223 20 29 08 08
                                        ACI</p>
                                    <p class="footer-contact-phone"><span class="flaticon-call"></span> +223 20 28 38 80
                                        Golf</p>
                                    <p class="footer-contact-mail">contactreception@gmail.com</p>
                                </div>
                                <div class="footer-about-social-list">
                                    <a href="#"><i class="ti-instagram"></i></a>
                                    <a href="#"><i class="ti-facebook"></i></a>
                                    <a href="#" target="_blank"><i class="fab fa-linkedin"></i>
                                        <!-- Icône LinkedIn --></a>
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
                                <p class="footer-bottom-copy-right">© Copyright 2024 Micasa, tous droits réservés
                                </p>
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
  name: 'OffersPage', // Renommer "Offres" en "OffersPage"
  data() {
    return {
      loadedScripts: {} // Suivi des scripts chargés
    };
  },
  methods: {
    // Méthode pour recharger les scripts
    reloadPageScripts() {
      const scripts = [
        '/assets/js/jquery-3.6.3.min.js',
        '/assets/js/jquery-migrate-3.0.0.min.js',
        '/assets/js/modernizr-2.6.2.min.js',
        '/assets/js/imagesloaded.pkgd.min.js',
        '/assets/js/jquery.isotope.v3.0.2.js',
        '/assets/js/pace.js',
        '/assets/js/popper.min.js',
        '/assets/js/bootstrap.min.js',
        '/assets/js/scrollIt.min.js',
        '/assets/js/jquery.waypoints.min.js',
        '/assets/js/owl.carousel.min.js',
        '/assets/js/jquery.stellar.min.js',
        '/assets/js/jquery.magnific-popup.js',
        '/assets/js/YouTubePopUp.js',
        '/assets/js/select2.js',
        '/assets/js/datepicker.js',
        '/assets/js/smooth-scroll.min.js',
        '/assets/js/translation.js',
        '/assets/js/custom.js'
      ];

      scripts.forEach(src => {
        // Vérifier si le script est déjà chargé
        if (!this.loadedScripts[src]) {
          const script = document.createElement('script');
          script.src = src;
          script.async = true;
          script.onload = () => {
            this.loadedScripts[src] = true;
            console.log(`${src} rechargé avec succès.`);
          };
          script.onerror = () => {
            console.error(`Erreur lors du chargement de ${src}`);
          };
          document.body.appendChild(script); // Ajouter le script au DOM
        } else {
          console.log(`${src} est déjà chargé.`);
        }
      });
    }
  },
  // Utiliser beforeRouteEnter pour recharger les scripts dès que la page change
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.reloadPageScripts(); // Appeler la méthode au changement de route
    });
  }
};
</script>
