<template>
    <div>
        <!-- Progress scroll totop -->
        <div class="progress-wrap cursor-pointer">
            <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
            </svg>
        </div>
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <!-- Logo -->
                <div class="logo-wrapper">
                    <a class="logo" href="/"> <img src="../assets/img/logo.png" class="logo-img" alt=""> </a>
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
                        <li class="nav-item"><router-link class="nav-link" to="/offers">Offres</router-link>
                        </li>
                        <li class="nav-item"><router-link class="nav-link" to="/about">À Propos</router-link>
                        </li>
                        <li class="nav-item"><router-link class="nav-link" to="/contact">Contact</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Room Page Slider -->
        <header class="header slider">
            <div class="owl-carousel owl-theme">
                <!-- The opacity on the image is made with "data-overlay-dark="number". You can change it using the numbers 0-9. -->
                <div class="text-center item bg-img" data-overlay-dark="2" data-background="../assets/img/slider/3.jpg">
                    <div class="v-middle caption">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-10 offset-md-1">
                                    <h1>DETAILS</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center item bg-img" data-overlay-dark="2" data-background="../assets/img/slider/2.jpg">
                    <div class="v-middle caption">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-10 offset-md-1">
                                    <h1>DETAILS</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center item bg-img" data-overlay-dark="2" data-background="../assets/img/slider/5.jpg">
                    <div class="v-middle caption">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-10 offset-md-1">
                                    <h1>DETAILS</h1>
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
        <!-- Room Content -->
        <section class="rooms-page section-padding" data-scroll-index="1">
            <div class="container">
                <!-- project content -->
                <div class="row">
                    <div class="col-md-12">
                        <div class="section-subtitle">Hôtel de Luxe</div>
                        <div class="section-title">Suite Junior</div>
                    </div>
                    <div class="col-md-8">
                        <p class="mb-30">L'hôtel propose un confort exceptionnel et des services de qualité. Vous
                            pourrez profiter d’un séjour relaxant avec des équipements modernes et un service
                            attentionné.</p>
                        <p class="mb-30">Notre hôtel combine élégance et confort, offrant des solutions adaptées à tous
                            vos besoins. Venez découvrir une ambiance unique, idéale pour vos vacances ou vos voyages
                            d'affaires.</p>
                        <div class="row">
                            <div class="col-md-6">
                                <h6>Arrivée</h6>
                                <ul class="list-unstyled page-list mb-30">
                                    <li>
                                        <div class="page-list-icon"> <span class="ti-check"></span> </div>
                                        <div class="page-list-text">
                                            <p>Arrivée à partir de 9h00 - à tout moment</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="page-list-icon"> <span class="ti-check"></span> </div>
                                        <div class="page-list-text">
                                            <p>Arrivée anticipée selon disponibilité</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <h6>Départ</h6>
                                <ul class="list-unstyled page-list mb-30">
                                    <li>
                                        <div class="page-list-icon"> <span class="ti-check"></span> </div>
                                        <div class="page-list-text">
                                            <p>Départ avant midi</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="page-list-icon"> <span class="ti-check"></span> </div>
                                        <div class="page-list-text">
                                            <p>Départ express disponible</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-12">
                                <h6>Instructions spéciales pour l'arrivée</h6>
                                <p>Les clients recevront un email 5 jours avant leur arrivée avec les instructions pour
                                    l'enregistrement. Le personnel de la réception vous accueillera à votre arrivée.
                                    Pour plus d'informations, veuillez contacter l'établissement en utilisant les
                                    coordonnées figurant sur la confirmation de réservation.</p>
                            </div>
                            <div class="col-md-12">
                                <h6>Animaux</h6>
                                <p>Animaux non admis</p>
                            </div>
                            <div class="col-md-12">
                                <h6>Enfants et lits supplémentaires</h6>
                                <p>Les enfants sont les bienvenus ! Les enfants séjournent gratuitement en utilisant la
                                    literie existante, mais ils ne sont pas éligibles pour le petit-déjeuner gratuit.
                                    Des lits d'appoint sont disponibles pour 10 $ par jour.</p>
                            </div>
                            <div class="col-md-12">
                                <div class="butn-dark mt-15 mb-30"> <a href="/room_detail"><span>Voir
                                            Maintenant</span></a> </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 offset-md-1">
                        <h6>Équipements</h6>
                        <ul class="list-unstyled page-list mb-30">
                            <li>
                                <div class="page-list-icon"> <span class="flaticon-group"></span> </div>
                                <div class="page-list-text">
                                    <p>1-2 Personnes</p>
                                </div>
                            </li>
                            <li>
                                <div class="page-list-icon"> <span class="flaticon-wifi"></span> </div>
                                <div class="page-list-text">
                                    <p>Wifi Gratuit</p>
                                </div>
                            </li>
                            <li>
                                <div class="page-list-icon"> <span class="flaticon-clock-1"></span> </div>
                                <div class="page-list-text">
                                    <p>Chambre de 200 m²</p>
                                </div>
                            </li>
                            <li>
                                <div class="page-list-icon"> <span class="flaticon-breakfast"></span> </div>
                                <div class="page-list-text">
                                    <p>Petit-Déjeuner</p>
                                </div>
                            </li>
                            <li>
                                <div class="page-list-icon"> <span class="flaticon-towel"></span> </div>
                                <div class="page-list-text">
                                    <p>Serviettes</p>
                                </div>
                            </li>
                            <li>
                                <div class="page-list-icon"> <span class="flaticon-swimming"></span> </div>
                                <div class="page-list-text">
                                    <p>Piscine</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <!-- Similiar Room -->
        <section class="rooms1 section-padding bg-blck">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="section-subtitle"><span>Hôtel de luxe</span></div>
                        <div class="section-title"><span>Chambres similaires</span></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="owl-carousel owl-theme">
                            <div class="item">
                                <div class="position-re o-hidden"> <img src="../assets/img/rooms/1.jpg" alt=""> </div> <span
                                    class="category"><a href="/appartement">Livre</a></span>
                                <div class="con">
                                    <h6><a href="/room_detail"></a></h6>
                                    <h5><a href="/room_detail">Suite Junior</a> </h5>
                                    <div class="line"></div>
                                    <div class="row facilities">
                                        <div class="col col-md-7">
                                            <ul>
                                                <li><i class="flaticon-bed"></i></li>
                                                <li><i class="flaticon-bath"></i></li>
                                                <li><i class="flaticon-breakfast"></i></li>
                                                <li><i class="flaticon-towel"></i></li>
                                            </ul>
                                        </div>
                                        <div class="col col-md-5 text-end">
                                            <div class="permalink"><a href="/room_detail">Details <i
                                                        class="ti-arrow-right"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="position-re o-hidden"> <img src="../assets/img/rooms/2.jpg" alt=""> </div> <span
                                    class="category"><a href="/appartement">Livre</a></span>
                                <div class="con">
                                    <h6><a href="/room_detail"></a></h6>
                                    <h5><a href="/room_detail">Chambre Familiale</a></h5>
                                    <div class="line"></div>
                                    <div class="row facilities">
                                        <div class="col col-md-7">
                                            <ul>
                                                <li><i class="flaticon-bed"></i></li>
                                                <li><i class="flaticon-bath"></i></li>
                                                <li><i class="flaticon-breakfast"></i></li>
                                                <li><i class="flaticon-towel"></i></li>
                                            </ul>
                                        </div>
                                        <div class="col col-md-5 text-end">
                                            <div class="permalink"><a href="/room_detail">Details <i
                                                        class="ti-arrow-right"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="position-re o-hidden"> <img src="../assets/img/rooms/5.jpg" alt=""> </div> <span
                                    class="category"><a href="/appartement">Livre</a></span>
                                <div class="con">
                                    <h6><a href="/room_detail"></a></h6>
                                    <h5><a href="/room_detail">Chambre Double</a></h5>
                                    <div class="line"></div>
                                    <div class="row facilities">
                                        <div class="col col-md-7">
                                            <ul>
                                                <li><i class="flaticon-bed"></i></li>
                                                <li><i class="flaticon-bath"></i></li>
                                                <li><i class="flaticon-breakfast"></i></li>
                                                <li><i class="flaticon-towel"></i></li>
                                            </ul>
                                        </div>
                                        <div class="col col-md-5 text-end">
                                            <div class="permalink"><a href="/room_detail">Details <i
                                                        class="ti-arrow-right"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="position-re o-hidden"> <img src="../assets/img/rooms/6.jpg" alt=""> </div> <span
                                    class="category"><a href="/appartement">Livre</a></span>
                                <div class="con">
                                    <h6><a href="/room_detail"></a></h6>
                                    <h5><a href="/room_detail">Chambre Deluxe</a></h5>
                                    <div class="line"></div>
                                    <div class="row facilities">
                                        <div class="col col-md-7">
                                            <ul>
                                                <li><i class="flaticon-bed"></i></li>
                                                <li><i class="flaticon-bath"></i></li>
                                                <li><i class="flaticon-breakfast"></i></li>
                                                <li><i class="flaticon-towel"></i></li>
                                            </ul>
                                        </div>
                                        <div class="col col-md-5 text-end">
                                            <div class="permalink"><a href="/room_detail">Details <i
                                                        class="ti-arrow-right"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="position-re o-hidden"> <img src="../assets/img/rooms/8.jpg" alt=""> </div> <span
                                    class="category"><a href="/appartement">Livre</a></span>
                                <div class="con">
                                    <h6><a href="/room_detail"></a></h6>
                                    <h5><a href="/room_detail">Chambre Supérieure</a></h5>
                                    <div class="line"></div>
                                    <div class="row facilities">
                                        <div class="col col-md-7">
                                            <ul>
                                                <li><i class="flaticon-bed"></i></li>
                                                <li><i class="flaticon-bath"></i></li>
                                                <li><i class="flaticon-breakfast"></i></li>
                                                <li><i class="flaticon-towel"></i></li>
                                            </ul>
                                        </div>
                                        <div class="col col-md-5 text-end">
                                            <div class="permalink"><a href="/room_detail">Details <i
                                                        class="ti-arrow-right"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="position-re o-hidden"> <img src="../assets/img/rooms/5.jpg" alt=""> </div> <span
                                    class="category"><a href="/appatement">Livre</a></span>
                                <div class="con">
                                    <h6><a href="/room_detail"></a></h6>
                                    <h5><a href="/room_detail">Espace bien-être</a></h5>
                                    <div class="line"></div>
                                    <div class="row facilities">
                                        <div class="col col-md-7">
                                            <ul>
                                                <li><i class="flaticon-bed"></i></li>
                                                <li><i class="flaticon-bath"></i></li>
                                                <li><i class="flaticon-breakfast"></i></li>
                                                <li><i class="flaticon-towel"></i></li>
                                            </ul>
                                        </div>
                                        <div class="col col-md-5 text-end">
                                            <div class="permalink"><a href="/room_detail">Details <i
                                                        class="ti-arrow-right"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <p></p>
        <!-- Pricing -->
        <section class="pricing section-padding bg-blck">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="section-subtitle"><span id="best_prices">Meilleurs prix</span></div>
                        <div class="section-title"><span id="additional_services">Services supplémentaires</span></div>
                        <p class="color-2" id="service_description_1">Des options pour un séjour encore plus agréable
                        </p>
                        <p class="color-2" id="service_description_2">Profitez de nos services additionnels conçus pour
                            votre confort et votre tranquillité d’esprit. Que vous séjourniez chez nous pour affaires ou
                            pour le loisir, Micasa vous propose des services personnalisés pour répondre à tous vos
                            besoins.
                        </p>
                        <div class="reservations mb-30">
                            <div class="icon"><span class="flaticon-call"></span></div>
                            <div class="text">
                                <p class="color-2" id="more_info">Pour plus d’informations</p>
                                <a href="tel:855-100-4444" id="phone_numbers">+223 20 29 08 08 ACI <br>+223 20 28 38 80
                                    Golf</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-8">
                        <div class="owl-carousel owl-theme">
                            <div class="pricing-card">
                                <img src="../assets/img/pricing/1.jpg" alt="">
                                <div class="desc">
                                    <div class="name" id="room_cleaning">Nettoyage des chambres</div>
                                    <ul class="list-unstyled list">
                                        <li><i class="ti-check"></i> <span id="service_1_free">Gratuit</span></li>
                                        <li><i class="ti-check"></i> <span id="service_1_additional">Orci miss natoque
                                                vasa ince</span></li>
                                        <li><i class="ti-close unavailable"></i> <span id="service_1_unavailable">Non
                                                disponible</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pricing-card">
                                <img src="../assets/img/pricing/5.jpg" alt="">
                                <div class="desc">
                                    <div class="name" id="shuttle_service">Navette</div>
                                    <ul class="list-unstyled list">
                                        <li><i class="ti-check"></i> <span id="service_2_paid">Payante</span></li>
                                        <li><i class="ti-check"></i> <span id="service_2_additional">Orci miss natoque
                                                vasa ince</span></li>
                                        <li><i class="ti-close unavailable"></i> <span id="service_2_unavailable">Non
                                                disponible</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pricing-card">
                                <img src="../assets/img/pricing/6.jpg" alt="">
                                <div class="desc">
                                    <div class="name" id="car_rental">Location de voiture</div>
                                    <ul class="list-unstyled list">
                                        <li><i class="ti-check"></i> <span id="service_3_paid">Payante</span></li>
                                        <li><i class="ti-check"></i> <span id="service_3_additional">Orci miss natoque
                                                vasa ince</span></li>
                                        <li><i class="ti-close unavailable"></i> <span id="service_3_unavailable">Non
                                                disponible</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pricing-card">
                                <img src="../assets/img/pricing/7.jpg" alt="">
                                <div class="desc">
                                    <div class="name" id="tour_guide">Guide touristique</div>
                                    <ul class="list-unstyled list">
                                        <li><i class="ti-check"></i> <span id="service_4_paid">Payante</span></li>
                                        <li><i class="ti-check"></i> <span id="service_4_additional">Orci miss natoque
                                                vasa ince</span></li>
                                        <li><i class="ti-close unavailable"></i> <span id="service_4_unavailable">Non
                                                disponible</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pricing-card">
                                <img src="../assets/img/pricing/3.jpg" alt="">
                                <div class="desc">
                                    <div class="name" id="breakfast">Petit déjeuner</div>
                                    <ul class="list-unstyled list">
                                        <li><i class="ti-check"></i> <span id="service_5_paid">Payante</span></li>
                                        <li><i class="ti-check"></i> <span id="service_5_additional">Orci miss natoque
                                                vasa ince</span></li>
                                        <li><i class="ti-close unavailable"></i> <span id="service_5_unavailable">Non
                                                disponible</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pricing-card">
                                <img src="../assets/img/pricing/4.jpg" alt="">
                                <div class="desc">
                                    <div class="name" id="security">Sûr et sécurisé</div>
                                    <ul class="list-unstyled list">
                                        <li><i class="ti-check"></i> <span id="service_6_safe">Coffre Fort</span></li>
                                        <li><i class="ti-check"></i> <span id="service_6_free">Gratuit</span></li>
                                        <li><i class="ti-close unavailable"></i> <span id="service_6_unavailable">Non
                                                disponible</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pricing-card">
                                <img src="../assets/img/pricing/8.jpg" alt="">
                                <div class="desc">
                                    <div class="name" id="courses">Courses</div>
                                    <ul class="list-unstyled list">
                                        <li><i class="ti-check"></i> <span id="cours1"></span></li>
                                        <li><i class="ti-check"></i> <span id="cours2"></span></li>
                                        <li><i class="ti-close unavailable"></i> <span id="cours3"></span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pricing-card">
                                <img src="../assets/img/pricing/9.jpg" alt="">
                                <div class="desc">
                                    <div class="name" id="Restaurant">Restaurant</div>
                                    <ul class="list-unstyled list">
                                        <li><i class="ti-check"></i> <span id="restaurant1"></span></li>
                                        <li><i class="ti-check"></i> <span id="restaurant2"></span></li>
                                        <li><i class="ti-close unavailable"></i> <span id="restaurant3"></span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pricing-card">
                                <img src="../assets/img/pricing/10.jpg" alt="">
                                <div class="desc">
                                    <div class="name" id="pressing">Pressing</div>
                                    <ul class="list-unstyled list">
                                        <li><i class="ti-check"></i> <span id="pressing1"></span></li>
                                        <li><i class="ti-check"></i> <span id="pressing2"></span></li>
                                        <li><i class="ti-close unavailable"></i> <span id="pressing3"></span></li>

                                    </ul>
                                </div>
                            </div>
                            <div class="pricing-card">
                                <img src="../assets/img/pricing/11.jpg" alt="">
                                <div class="desc">
                                    <div class="name" id="conference">Conférence</div>
                                    <ul class="list-unstyled list">
                                        <li><i class="ti-check"></i> <span id="conference1"></span></li>
                                        <li><i class="ti-check"></i> <span id="conference2"></span></li>
                                        <li><i class="ti-close unavailable"></i> <span id="conference3"></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Reservation & Booking Form -->
        <section class="testimonials">
            <div class="background bg-img bg-fixed section-padding pb-0" data-background="../assets/img/slider/2.jpg"
                data-overlay-dark="2">
                <div class="container">
                    <div class="row">
                        <!-- Reservation -->
                        <div class="col-md-5 mb-30 mt-30">
                            <h5>Chaque appartement est équipé d’une salle de bain privée, d’une connexion Wi-Fi haut
                                débit et d’une télévision câblée pour un confort optimal. Profitez d’un cadre élégant et
                                fonctionnel pour vos séjours professionnels.
                            </h5>
                            <div class="reservations mb-30">
                                <div class="icon color-1"><span class="flaticon-call"></span></div>
                                <div class="text">
                                    <p class="color-1">Réservation</p>
                                    <a class="color-1" href="tel:+22320290808">20 29 08 08</a> <br>
                                    <a class="color-1" href="tel:+22320290807">20 29 08 07</a>
                                </div>
                            </div>
                            <p><i class="ti-check"></i><small>
                                    Appelez-nous.</small></p>
                        </div>
                        <!-- Booking From -->
                        <div class="col-md-5 offset-md-2">
                            <div class="booking-box">
                                <div class="head-box">
                                    <h6 id="rooms_suites">Chambres et suites</h6>
                                    <h4 id="reservation_form">Formulaire de réservation d'hôtel</h4>
                                </div>
                                <div class="booking-inner clearfix">
                                    <form id="reservationForm"
                                        action="https://duruthemes.com/demo/html/cappa/demo1-light/rooms2.html"
                                        class="form1 clearfix">
                                        <div class="row">
                                            <div class="select1_wrapper">
                                                <div class="select1_inner">
                                                    <label for="location" id="label_locationt">Location</label>
                                                    <select id="location" class="select2 select" style="width: 100%">
                                                        <option value="MiCasa_ACI">MiCasa ACI</option>
                                                        <option value="MiCasa_GOLF">MiCasa GOLF</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="input1_wrapper">
                                                    <label for="arrival" id="label_arrivalt">Arrivée</label>
                                                    <div class="input1_inner">
                                                        <input type="text" id="arrival"
                                                            class="form-control input datepicker" placeholder="Arrivée">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="input1_wrapper">
                                                    <label for="departure" id="label_departuret">Départ</label>
                                                    <div class="input1_inner">
                                                        <input type="text" id="departure"
                                                            class="form-control input datepicker" placeholder="Départ">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="select1_wrapper">
                                                    <label for="adults" id="label_adultst">Adultes</label>
                                                    <div class="select1_inner">
                                                        <select id="adults" class="select2 select" style="width: 100%">
                                                            <option value="0">Adultes</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="select1_wrapper">
                                                    <label for="children" id="enfantst">Enfants</label>
                                                    <div class="select1_inner">
                                                        <select id="children" class="select2 select"
                                                            style="width: 100%">
                                                            <option value="0">Enfants</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <button type="submit" class="btn-form1-submit mt-15"
                                                    id="check_availabilityt">Reserver</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
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
                                <ul class="navbar-nav ms-auto">
                                <li class="nav-item"><router-link class="nav-link" to="/">Accueil</router-link></li>
                                <li class="nav-item"><router-link class="nav-link"
                                        to="/appartement">Appartements</router-link></li>
                                <li class="nav-item"><router-link class="nav-link"
                                        to="/restaurant">Restaurant</router-link></li>
                                <li class="nav-item"><router-link class="nav-link" to="/offers">Offres</router-link>
                                </li>
                                <li class="nav-item"><router-link class="nav-link" to="/about">À Propos</router-link>
                                </li>
                                <li class="nav-item"><router-link class="nav-link" to="/contact">Contact</router-link>
                                </li>
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
    name: "RoomDetail",
};
</script>