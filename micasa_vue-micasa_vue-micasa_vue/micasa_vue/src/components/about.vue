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
        <!-- Header Banner -->
        <div class="banner-header section-padding valign bg-img bg-fixed" data-overlay-dark="4"
            data-background="../assets/img/slider/1.jpg">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 caption mt-90">
                        <h1>A Propos</h1>
                    </div>
                </div>
            </div>
        </div>
        <!-- About -->
        <section class="about section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 mb-30 animate-box" data-animate-effect="fadeInUp">
                        <span>
                            <i class="star-rating"></i>
                            <i class="star-rating"></i>
                            <i class="star-rating"></i>
                            <i class="star-rating"></i>
                            <i class="star-rating"></i>
                        </span>
                        <div class="section-subtitle">The Cappa Luxury Hotel</div>
                        <div class="section-title">Enjoy a Luxury Experience</div>
                        <p>Welcome to the best five-star deluxe hotel in New York. Hotel elementum sesue the aucan
                            vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit.
                            Donec
                            id velit ac arcu posuere blane.</p>
                        <p>Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci
                            varius
                            natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant
                            morbine.</p>
                        <!-- reservation -->
                        <div class="reservations">
                            <div class="icon"><span class="flaticon-call"></span></div>
                            <div class="text">
                                <p>Reservation</p> <a href="tel:855-100-4444">855 100 4444</a>
                            </div>
                        </div>
                    </div>
                    <div class="col col-md-3 animate-box" data-animate-effect="fadeInUp"> <img
                            src="../assets/img/rooms/8.jpg" alt="" class="mt-90 mb-30"> </div>
                    <div class="col col-md-3 animate-box" data-animate-effect="fadeInUp"> <img
                            src="../assets/img/rooms/2.jpg" alt="">
                    </div>
                </div>
            </div>
        </section>
        <!-- Pricing -->
        <section class="pricing section-padding bg-blck">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="section-subtitle"><span>Best Prices</span></div>
                        <div class="section-title"><span>Extra Services</span></div>
                        <p class="color-2">The best prices for your relaxing vacation. The utanislen quam nestibulum ac
                            quame odion elementum sceisue the aucan.</p>
                        <p class="color-2">Orci varius natoque penatibus et magnis disney parturient monte nascete
                            ridiculus
                            mus nellen etesque habitant morbine.</p>
                        <div class="reservations mb-30">
                            <div class="icon"><span class="flaticon-call"></span></div>
                            <div class="text">
                                <p class="color-2">For information</p> <a href="tel:855-100-4444">855 100 4444</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="owl-carousel owl-theme">
                            <div class="pricing-card">
                                <img src="../assets/img/pricing/1.jpg" alt="">
                                <div class="desc">
                                    <div class="name">Room cleaning</div>
                                    <div class="amount">$50<span>/ month</span></div>
                                    <ul class="list-unstyled list">
                                        <li><i class="ti-check"></i> Hotel ut nisan the duru</li>
                                        <li><i class="ti-check"></i> Orci miss natoque vasa ince</li>
                                        <li><i class="ti-close unavailable"></i>Clean sorem ipsum morbin</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pricing-card">
                                <img src="../assets/img/pricing/2.jpg" alt="">
                                <div class="desc">
                                    <div class="name">Drinks included</div>
                                    <div class="amount">$30<span>/ daily</span></div>
                                    <ul class="list-unstyled list">
                                        <li><i class="ti-check"></i> Hotel ut nisan the duru</li>
                                        <li><i class="ti-check"></i> Orci miss natoque vasa ince</li>
                                        <li><i class="ti-close unavailable"></i>Clean sorem ipsum morbin</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pricing-card">
                                <img src="../assets/img/pricing/3.jpg" alt="">
                                <div class="desc">
                                    <div class="name">Room Breakfast</div>
                                    <div class="amount">$30<span>/ daily</span></div>
                                    <ul class="list-unstyled list">
                                        <li><i class="ti-check"></i> Hotel ut nisan the duru</li>
                                        <li><i class="ti-check"></i> Orci miss natoque vasa ince</li>
                                        <li><i class="ti-close unavailable"></i>Clean sorem ipsum morbin</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pricing-card">
                                <img src="../assets/img/pricing/4.jpg" alt="">
                                <div class="desc">
                                    <div class="name">Safe & Secure</div>
                                    <div class="amount">$15<span>/ daily</span></div>
                                    <ul class="list-unstyled list">
                                        <li><i class="ti-check"></i> Hotel ut nisan the duru</li>
                                        <li><i class="ti-check"></i> Orci miss natoque vasa ince</li>
                                        <li><i class="ti-close unavailable"></i>Clean sorem ipsum morbin</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Facilties -->
        <section class="facilties section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="section-subtitle">Our Services</div>
                        <div class="section-title">Hotel Facilities</div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="single-facility animate-box" data-animate-effect="fadeInUp">
                            <span class="flaticon-world"></span>
                            <h5>Pick Up & Drop</h5>
                            <p>We’ll pick up from airport while you comfy on your ride, mus nellentesque habitant.</p>
                            <div class="facility-shape"> <span class="flaticon-world"></span> </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="single-facility animate-box" data-animate-effect="fadeInUp">
                            <span class="flaticon-car"></span>
                            <h5>Parking Space</h5>
                            <p>Fusce tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.</p>
                            <div class="facility-shape"> <span class="flaticon-car"></span> </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="single-facility animate-box" data-animate-effect="fadeInUp">
                            <span class="flaticon-bed"></span>
                            <h5>Room Service</h5>
                            <p>Room tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.</p>
                            <div class="facility-shape"> <span class="flaticon-bed"></span> </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="single-facility animate-box" data-animate-effect="fadeInUp">
                            <span class="flaticon-swimming"></span>
                            <h5>Swimming Pool</h5>
                            <p>Swimming pool tincidunt nise ace park norttito sit space, mus nellentesque habitant.</p>
                            <div class="facility-shape"> <span class="flaticon-swimming"></span> </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="single-facility animate-box" data-animate-effect="fadeInUp">
                            <span class="flaticon-wifi"></span>
                            <h5>Fibre Internet</h5>
                            <p>Wifi tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.</p>
                            <div class="facility-shape"> <span class="flaticon-wifi"></span> </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="single-facility animate-box" data-animate-effect="fadeInUp">
                            <span class="flaticon-breakfast"></span>
                            <h5>Breakfast</h5>
                            <p>Eat tincidunt nisa ace park norttito sit amet space, mus nellentesque habitant</p>
                            <div class="facility-shape"> <span class="flaticon-breakfast"></span> </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Team -->
        <section class="team section-padding bg-cream">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="section-subtitle">Professionals</div>
                        <div class="section-title">Meet The Team</div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 owl-carousel owl-theme">
                        <div class="item">
                            <div class="img"> <img src="../assets/img/team/4.jpg" alt=""> </div>
                            <div class="info">
                                <h6>Valentina Karla</h6>
                                <p>General Manager</p>
                                <div class="social valign">
                                    <div class="full-width">
                                        <a href="#"><i class="ti-instagram"></i></a>
                                        <a href="#"><i class="ti-twitter"></i></a>
                                        <a href="#"><i class="ti-facebook"></i></a>
                                        <a href="#"><i class="ti-pinterest"></i></a>
                                        <p>valentina@hotel.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="img">
                                <img src="../assets/img/team/1.jpg" alt="">
                            </div>
                            <div class="info">
                                <h6>Micheal White</h6>
                                <p>Guest Service Department</p>
                                <div class="social valign">
                                    <div class="full-width">
                                        <a href="#"><i class="ti-instagram"></i></a>
                                        <a href="#"><i class="ti-twitter"></i></a>
                                        <a href="#"><i class="ti-facebook"></i></a>
                                        <a href="#"><i class="ti-pinterest"></i></a>
                                        <p>micheal@hotel.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="img"> <img src="../assets/img/team/2.jpg" alt=""> </div>
                            <div class="info">
                                <h6>Olivia Martin</h6>
                                <p>Reservations Manager</p>
                                <div class="social valign">
                                    <div class="social valign">
                                        <div class="full-width">
                                            <a href="#"><i class="ti-instagram"></i></a>
                                            <a href="#"><i class="ti-twitter"></i></a>
                                            <a href="#"><i class="ti-facebook"></i></a>
                                            <a href="#"><i class="ti-pinterest"></i></a>
                                            <p>olivia@hotel.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="img"> <img src="../assets/img/team/5.jpg" alt=""> </div>
                            <div class="info">
                                <h6>Mariana Dana</h6>
                                <p>F&B Manager</p>
                                <div class="social valign">
                                    <div class="full-width">
                                        <a href="#"><i class="ti-instagram"></i></a>
                                        <a href="#"><i class="ti-twitter"></i></a>
                                        <a href="#"><i class="ti-facebook"></i></a>
                                        <a href="#"><i class="ti-pinterest"></i></a>
                                        <p>mariana@hotel.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="img"> <img src="../assets/img/team/3.jpg" alt=""> </div>
                            <div class="info">
                                <h6>Enrico Brown</h6>
                                <p>Head Chef</p>
                                <div class="social valign">
                                    <div class="full-width">
                                        <a href="#"><i class="ti-instagram"></i></a>
                                        <a href="#"><i class="ti-twitter"></i></a>
                                        <a href="#"><i class="ti-facebook"></i></a>
                                        <a href="#"><i class="ti-pinterest"></i></a>
                                        <p>enrico@hotel.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="img"> <img src="../assets/img/team/6.jpg" alt=""> </div>
                            <div class="info">
                                <h6>Victoria Dan</h6>
                                <p>Meetings and Events Manager</p>
                                <div class="social valign">
                                    <div class="full-width">
                                        <a href="#"><i class="ti-instagram"></i></a>
                                        <a href="#"><i class="ti-twitter"></i></a>
                                        <a href="#"><i class="ti-facebook"></i></a>
                                        <a href="#"><i class="ti-pinterest"></i></a>
                                        <p>victoria@hotel.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                    <h6>Testimonials</h6>
                                    <h4>What Client's Say?</h4>
                                    <div class="line"></div>
                                </div>
                                <div class="owl-carousel owl-theme">
                                    <div class="item">
                                        <span class="quote"><img src="../assets/img/quot.png" alt=""></span>
                                        <p>Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante
                                            the
                                            lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman
                                            at
                                            finibus viverra neca the sene on satien the miss drana inc fermen norttito
                                            sit
                                            space, mus nellentesque habitan.</p>
                                        <div class="info">
                                            <div class="author-img"> <img src="../assets/img/team/4.jpg" alt=""> </div>
                                            <div class="cont">
                                                <span>
                                                    <i class="star-rating"></i>
                                                    <i class="star-rating"></i>
                                                    <i class="star-rating"></i>
                                                    <i class="star-rating"></i>
                                                    <i class="star-rating"></i>
                                                </span>
                                                <h6>Emily Brown</h6>
                                                <span>Guest review</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item"> <span class="quote"><img src="../assets/img/quot.png"
                                                alt=""></span>
                                        <p>Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante
                                            the
                                            lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman
                                            at
                                            finibus viverra neca the sene on satien the miss drana inc fermen norttito
                                            sit
                                            space, mus nellentesque habitan.</p>
                                        <div class="info">
                                            <div class="author-img"> <img src="../assets/img/team/1.jpg" alt=""> </div>
                                            <div class="cont">
                                                <span>
                                                    <i class="star-rating"></i>
                                                    <i class="star-rating"></i>
                                                    <i class="star-rating"></i>
                                                    <i class="star-rating"></i>
                                                    <i class="star-rating"></i>
                                                </span>
                                                <h6>Nolan White</h6>
                                                <span>Guest review</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <span class="quote"><img src="../assets/img/quot.png" alt=""></span>
                                        <p>Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante
                                            the
                                            lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman
                                            at
                                            finibus viverra neca the sene on satien the miss drana inc fermen norttito
                                            sit
                                            space, mus nellentesque habitan.</p>
                                        <div class="info">
                                            <div class="author-img"> <img src="../assets/img/team/5.jpg" alt=""> </div>
                                            <div class="cont">
                                                <span>
                                                    <i class="star-rating"></i>
                                                    <i class="star-rating"></i>
                                                    <i class="star-rating"></i>
                                                    <i class="star-rating"></i>
                                                    <i class="star-rating"></i>
                                                </span>
                                                <h6>Olivia Martin</h6>
                                                <span>Guest review</span>
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
  name: "AboutPage", // Nom du composant
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
