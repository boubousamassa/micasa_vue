<template>
    <!-- Progress scroll totop -->
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
    <!-- Slider -->
    <header class="header slider-fade">
        <!-- Menu de sélection de la langue -->
        <div class="owl-carousel owl-theme">
            <!-- Slide 1 -->
            <div class="text-center item bg-img" data-overlay-dark="2" data-background="../assets/img/slider/2.jpg">
                <div class="v-middle caption">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10 offset-md-1">
                                <h4 id="slide1-title">Profitez de chaque instant de votre séjour avec Micasa</h4>
                                <h1 id="slide1-subtitle">Vivez l’Expérience du Confort et de la Tranquillité</h1>
                                <div class="butn-light mt-30 mb-30">
                                    <a href="/" data-scroll-nav="1">
                                        <span id="slide1-button">Appartements et Suites</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Slide 2 -->
            <div class="text-center item bg-img" data-overlay-dark="2" data-background="../assets/img/slider/3.jpg">
                <div class="v-middle caption">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10 offset-md-1">
                                <h4 id="slide2-title">Endroit unique pour se détendre et profiter</h4>
                                <h1 id="slide2-subtitle">La base parfaite pour vous</h1>
                                <div class="butn-light mt-30 mb-30">
                                    <a href="#" data-scroll-nav="1">
                                        <span id="slide2-button">Appartements et Suites</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Slide 3 -->
            <div class="text-center item bg-img" data-overlay-dark="3" data-background="../assets/img/slider/1.jpg">
                <div class="v-middle caption">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10 offset-md-1">
                                <h4 id="slide3-title">L'expérience de luxe ultime</h4>
                                <h1 id="slide3-subtitle">Profitez des meilleurs moments de la vie</h1>
                                <div class="butn-light mt-30 mb-30">
                                    <a href="#" data-scroll-nav="1">
                                        <span id="slide3-button">Appartements et Suites</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Slider Reservation -->
        <div class="reservation">
            <a href="tel:8551004444">
                <div class="icon d-flex justify-content-center align-items-center">
                    <i class="flaticon-call"></i>
                </div>
                <div class="call">
                    <span id="reservation-phone">+223 20 29 08 07</span> <br>
                    <span id="reservation-label">Réservation</span>
                </div>
            </a>
        </div>

    </header>
    <!-- Booking Search -->
    <div class="booking-wrapper">
        <div class="container">
            <div class="booking-inner clearfix">
                <!-- Formulaire -->
                <form id="booking-form" class="form1 clearfix">
                    <div class="col0 c0">
                        <div class="select1_wrapper">
                            <label id="label_location">Choisir</label>
                            <div class="select1_inner">
                                <select class="select2 select" style="width: 100%">
                                    <option value="MiCasa ACI">MiCasa ACI</option>
                                    <option value="MiCasa Golf">MiCasa Golf</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col1 c1">
                        <div class="input1_wrapper">
                            <label id="label_arrival">Arrivée</label>
                            <div class="input1_inner">
                                <input type="text" id="arrival" class="form-control input datepicker"
                                    placeholder="Arrivée">
                            </div>
                        </div>
                    </div>
                    <div class="col1 c2">
                        <div class="input1_wrapper">
                            <label id="label_departure">Départ</label>
                            <div class="input1_inner">
                                <input type="text" id="departure" class="form-control input datepicker"
                                    placeholder="Départ">
                            </div>
                        </div>
                    </div>
                    <div class="col2 c3">
                        <div class="select1_wrapper">
                            <label id="label_adults">Adultes</label>
                            <div class="select1_inner">
                                <select class="select2 select" style="width: 100%">
                                    <option value="1">1 Adulte</option>
                                    <option value="2">2 Adultes</option>
                                    <option value="3">3 Adultes</option>
                                    <option value="4">4 Adultes</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col2 c4">
                        <div class="select1_wrapper">
                            <label id="label_children">Enfants</label>
                            <div class="select1_inner">
                                <select class="select2 select" style="width: 100%">
                                    <option value="1">1 Enfant</option>
                                    <option value="2">2 Enfants</option>
                                    <option value="3">3 Enfants</option>
                                    <option value="4">4 Enfants</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col2 c5">
                        <div class="select1_wrapper">
                            <label id="label_rooms">Chambres</label>
                            <div class="select1_inner">
                                <select id="rooms" class="select2 select" style="width: 100%">
                                    <option value="1">1 Chambre</option>
                                    <option value="2">2 Chambres</option>
                                    <option value="3">3 Chambres</option>
                                    <option value="4">4 Chambres</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col3 c6">
                        <button type="submit" id="check_availability" class="btn-form1-submit">Reserver</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- About -->
    <section class="about section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-6 mb-30 animate-box" data-animate-effect="fadeInUp">
                    <div class="section-subtitle" id="aboutSubtitle">Résidence MiCasa</div>
                    <div class="section-title" id="aboutTitle">Découvrez l’élégance et le confort absolus</div>
                    <p id="aboutDescription1">Bienvenue dans votre espace de confort et de raffinement au cœur de
                        l’Afrique. À Micasa, nous vous proposons des appart’hôtels haut de gamme, conçus pour
                        répondre
                        aux attentes des voyageurs d’affaires et de ceux en quête de sérénité.
                        Nos appartements meublés allient le style moderne aux influences locales, créant un
                        environnement chaleureux et fonctionnel.
                    </p>
                    <p id="aboutDescription2">Profitez de nos services personnalisés pour un séjour sans souci, avec
                        un
                        personnel attentif et disponible 24/7, des espaces de réunion modernes, et des installations
                        de
                        bien-être pour une relaxation totale.</p>
                    <!-- call -->
                    <div class="reservations" id="reservationCall">
                        <div class="icon"><span class="flaticon-call"></span></div>
                        <div class="text">
                            <p id="reservationText">Réservez dès maintenant</p>
                            <a href="tel:855-100-4444" id="reservationPhone">+223 20 29 08 08</a> <br>
                            <a href="tel:855-100-4444" id="reservationPhone1">+223 20 29 08 09</a>
                        </div>
                    </div>
                </div>
                <div class="col col-md-3 animate-box" data-animate-effect="fadeInUp">
                    <img src="../assets/img/rooms/8.jpg" alt="" class="mt-90 mb-30">
                </div>
                <div class="col col-md-3 animate-box" data-animate-effect="fadeInUp">
                    <img src="../assets/img/rooms/2.jpg" alt="">
                </div>
            </div>
        </div>
    </section>

    <!-- Rooms -->
    <section class="rooms1 section-padding bg-cream" data-scroll-index="1">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-subtitle" id="residenceSubtitle">Résidence MiCasa</div>
                    <div class="section-title" id="roomsTitle">Chambres & Suites ACI</div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="item">
                        <div class="position-re o-hidden"> <img src="../assets/img/rooms/1.jpg" alt=""> </div>
                        <span class="category"><a href="/appartement" id="bookACI1">Reserver</a></span>
                        <div class="con">
                            <h6><a href="/room_detail" id="priceACI1">110000fcfa / Nuit</a></h6>
                            <h5><a href="/room_detail" id="roomTitleACI1">Suite Junior</a></h5>
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
                                    <div class="permalink"><a href="/room_detail" id="detailsACI1">Détails <i
                                                class="ti-arrow-right"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="item">
                        <div class="position-re o-hidden"> <img src="../assets/img/rooms/2.jpg" alt=""> </div>
                        <span class="category"><a href="/appartement" id="bookACI2">Reserver</a></span>
                        <div class="con">
                            <h6><a href="/room_detail" id="priceACI2">110000fcfa / Nuit</a></h6>
                            <h5><a href="/room_detail" id="roomTitleACI2">Suite Junior</a></h5>
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
                                    <div class="permalink"><a href="/room_detail" id="detailsACI2">Détails <i
                                                class="ti-arrow-right"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="item">
                        <div class="position-re o-hidden"> <img src="../assets/img/rooms/3.jpg" alt=""> </div>
                        <span class="category"><a href="/appartement" id="bookACI3">Reserver</a></span>
                        <div class="con">
                            <h6><a href="/room_detail" id="priceACI3">110000fcfa / Nuit</a></h6>
                            <h5><a href="/room_detail" id="roomTitleACI3">Suite Junior</a></h5>
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
                                    <div class="permalink"><a href="/room_detail" id="detailsACI3">Détails <i
                                                class="ti-arrow-right"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="item">
                        <div class="position-re o-hidden"> <img src="../assets/img/rooms/4.jpg" alt=""> </div>
                        <span class="category"><a href="/appartement" id="bookACI4">Reserver</a></span>
                        <div class="con">
                            <h6><a href="/room_detail" id="priceACI4">175.000f / Nuit</a></h6>
                            <h5><a href="/room_detail" id="roomTitleACI4">Suite Senior</a></h5>
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
                                    <div class="permalink"><a href="/room_detail" id="detailsACI4">Détails <i
                                                class="ti-arrow-right"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="item">
                        <div class="position-re o-hidden"> <img src="../assets/img/rooms/7.jpg" alt=""> </div>
                        <span class="category"><a href="/appartement" id="bookACI5">Reserver</a></span>
                        <div class="con">
                            <h6><a href="/room_detail" id="priceACI5">175.000f / Nuit</a></h6>
                            <h5><a href="/room_detail" id="roomTitleACI5">Suite Senior</a></h5>
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
                                    <div class="permalink"><a href="/room_detail" id="detailsACI5">Détails <i
                                                class="ti-arrow-right"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <p></p>
    <section class="rooms1 section-padding bg-cream" data-scroll-index="1">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-subtitle" id="residenceSubtitle">Résidence MiCasa</div>
                    <div class="section-title" id="roomsTitle">Chambres & Suites Golf</div>
                </div>
            </div>
            <div class="row">
                <!-- Chambre 1 -->
                <div class="col-md-4">
                    <div class="item">
                        <div class="position-re o-hidden">
                            <img src="../assets/img/rooms/1.jpg" alt="">
                        </div>
                        <span class="category" id="book1"><a href="/appartement">Reserver</a></span>
                        <div class="con">
                            <h6 id="price1"><a href="/room_detail">60000fcfa / Nuit</a></h6>
                            <h5 id="roomTitle1"><a href="/room_detail">Suite Junior</a></h5>
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
                                    <div class="permalink"><a href="/room_detail" id="details1">Détails <i
                                                class="ti-arrow-right"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Chambre 2 -->
                <div class="col-md-4">
                    <div class="item">
                        <div class="position-re o-hidden">
                            <img src="../assets/img/rooms/2.jpg" alt="">
                        </div>
                        <span class="category" id="book2"><a href="/appartement">Reserver</a></span>
                        <div class="con">
                            <h6 id="price2"><a href="/room_detail">60000fcfa / Nuit</a></h6>
                            <h5 id="roomTitle2"><a href="/room_detail">Suite Junior</a></h5>
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
                                    <div class="permalink"><a href="/room_detail" id="details2">Détails <i
                                                class="ti-arrow-right"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Chambre 3 -->
                <div class="col-md-4">
                    <div class="item">
                        <div class="position-re o-hidden">
                            <img src="../assets/img/rooms/3.jpg" alt="">
                        </div>
                        <span class="category" id="book3"><a href="/appartement">Reserver</a></span>
                        <div class="con">
                            <h6 id="price3"><a href="/room_detail">60000fcfa / Nuit</a></h6>
                            <h5 id="roomTitle3"><a href="/room_detail">Suite Junior</a></h5>
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
                                    <div class="permalink"><a href="/room_detail" id="details3">Détails <i
                                                class="ti-arrow-right"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Chambre 4 -->
                <div class="col-md-6">
                    <div class="item">
                        <div class="position-re o-hidden">
                            <img src="../assets/img/rooms/4.jpg" alt="">
                        </div>
                        <span class="category" id="book4"><a href="/appartement">Reserver</a></span>
                        <div class="con">
                            <h6 id="price4"><a href="/room_detail">80 000 / NUIT</a></h6>
                            <h5 id="roomTitle4"><a href="/room_detail">Suite Senior</a></h5>
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
                                    <div class="permalink"><a href="/room_detail" id="details4">Details <i
                                                class="ti-arrow-right"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Chambre 5 -->
                <div class="col-md-6">
                    <div class="item">
                        <div class="position-re o-hidden">
                            <img src="../assets/img/rooms/7.jpg" alt="">
                        </div>
                        <span class="category" id="book5"><a href="/appartement">Reserver</a></span>
                        <div class="con">
                            <h6 id="price5"><a href="/room_detail">80 000 / NUIT</a></h6>
                            <h5 id="roomTitle5"><a href="/room_detail">Suite Senior</a></h5>
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
                                    <div class="permalink"><a href="/room_detail" id="details5">Details <i
                                                class="ti-arrow-right"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Pricing -->
    <section class="facilties section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div id="servicesSubtitle" class="section-subtitle">Nos Services</div>
                    <div id="servicesTitle" class="section-title">Services et commodités de l'hôtel</div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="single-facility animate-box" data-animate-effect="fadeInUp">
                        <span class="flaticon-world"></span>
                        <h5 id="service1Title">Navette</h5>
                        <p id="service1Desc">Nous viendrons vous chercher à l'aéroport pendant que vous serez
                            confortablement installé pendant votre trajet.</p>
                        <div class="facility-shape"> <span class="flaticon-world"></span> </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="single-facility animate-box" data-animate-effect="fadeInUp">
                        <span class="flaticon-bed"></span>
                        <h5 id="service2Title">Service de chambre</h5>
                        <p id="service2Desc">Service de chambre 1 fois/jours, un confort optimal pour un séjour
                            agréable.</p>
                        <div class="facility-shape"> <span class="flaticon-bed"></span> </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="single-facility animate-box" data-animate-effect="fadeInUp">
                        <span class="flaticon-bed"></span>
                        <h5 id="service6Title">Salle de sport</h5>
                        <p id="service6Desc">Équipements modernes et variés pour votre entraînement : machines de
                            musculation, cardio-training et espace de poids libres.</p>
                        <div class="facility-shape"> <span class="flaticon-bed"></span> </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="single-facility animate-box" data-animate-effect="fadeInUp">
                        <span class="flaticon-swimming"></span>
                        <h5 id="service3Title">Piscine</h5>
                        <p id="service3Desc">Détendez-vous dans notre piscine extérieure.</p>
                        <div class="facility-shape"> <span class="flaticon-swimming"></span> </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="single-facility animate-box" data-animate-effect="fadeInUp">
                        <span class="flaticon-wifi"></span>
                        <h5 id="service4Title">Internet fibre</h5>
                        <p id="service4Desc">Wifi haut débit pour vous connecter où que vous soyez.</p>
                        <div class="facility-shape"> <span class="flaticon-wifi"></span> </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="single-facility animate-box" data-animate-effect="fadeInUp">
                        <span class="flaticon-breakfast"></span>
                        <h5 id="service5Title">Petit-déjeuner</h5>
                        <p id="service5Desc">Un petit-déjeuner complet pour bien commencer la journée.</p>
                        <div class="facility-shape"> <span class="flaticon-breakfast"></span> </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <!-- Promo Video -->
    <section class="video-wrapper video section-padding bg-img bg-fixed" data-overlay-dark="3"
        data-background="../assets/img/slider/2.jpg">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2 text-center">
                    <div class="section-subtitle"><span id="residence_title">Résidence MiCasa</span></div>
                    <div class="section-title"><span id="promo_video">Vidéo promotionnelle</span></div>
                </div>
            </div>
            <div class="row">
                <div class="text-center col-md-12">
                    <a class="vid" href="https://youtu.be/7BGNAGahig8">
                        <div class="vid-butn">
                            <span class="icon">
                                <i class="ti-control-play"></i>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Facilties -->
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
                                            vasa
                                            ince</span></li>
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
                                            vasa
                                            ince</span></li>
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
                                            vasa
                                            ince</span></li>
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
                                            vasa
                                            ince</span></li>
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
                                            vasa
                                            ince</span></li>
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
                                        hendreri
                                        net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante
                                        otel
                                        inilla duiman at finibus viverra neca the sene on satien the miss drana inc
                                        fermen norttito sit space, mus nellentesque habitan.</p>
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
                                        hendreri
                                        net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante
                                        otel
                                        inilla duiman at finibus viverra neca the sene on satien the miss drana inc
                                        fermen norttito sit space, mus nellentesque habitan.</p>
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
                                        hendreri
                                        net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante
                                        otel
                                        inilla duiman at finibus viverra neca the sene on satien the miss drana inc
                                        fermen norttito sit space, mus nellentesque habitan.</p>
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

    <!-- Services -->
    <section class="services section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-6 p-0 animate-box" data-animate-effect="fadeInLeft">
                    <div class="img left">
                        <a href="/restaurant"><img src="../assets/img/restaurant/1.jpg" alt=""></a>
                    </div>
                </div>
                <div class="col-md-6 p-0 bg-cream valign animate-box" data-animate-effect="fadeInRight">
                    <div class="content">
                        <div class="cont text-left">
                            <div class="info">
                                <h6 id="discover_title">Découvrir</h6>
                            </div>
                            <h4 id="restaurant_title">Le restaurant</h4>
                            <p id="restaurant_description">Restaurant inilla duiman at elit finibus viverra nec a
                                lacus
                                themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the
                                ivite dianne onen nivami acsestion augue artine.</p>
                            <div class="butn-dark"> <a href="/restaurant"><span
                                        id="more_button_restaurant">Plus</span></a> </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="row">
                <div class="col-md-6 bg-cream p-0 order2 valign animate-box" data-animate-effect="fadeInLeft">
                    <div class="content">
                        <div class="cont text-left">
                            <div class="info">
                                <h6 id="experiences_title">Expériences</h6>
                            </div>
                            <h4 id="conference_center_title">Salle de conférence</h4>
                            <p id="conference_center_description">Salle de conférence inilla duiman at elit finibus
                                viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen
                                ziverra
                                tristiue duru the ivite dianne onen nivami acsestion augue artine.</p>
                            <div class="butn-dark"> <a href="/offers"><span
                                        id="more_button_conference">Plus</span></a> </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 p-0 order1 animate-box" data-animate-effect="fadeInRight">
                    <div class="img">
                        <a href="/offers"><img src="../assets/img/spa/11.jpg" alt=""></a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 p-0 animate-box" data-animate-effect="fadeInLeft">
                    <div class="img left">
                        <a href="/offers"><img src="../assets/img/spa/2.jpg" alt=""></a>
                    </div>
                </div>
                <div class="col-md-6 p-0 bg-cream valign animate-box" data-animate-effect="fadeInRight">
                    <div class="content">
                        <div class="cont text-left">
                            <div class="info">
                                <h6 id="moderne_title">Moderne</h6>
                            </div>
                            <h4 id="fitness_center_title">Centre de remise en forme</h4>
                            <p id="fitness_center_description">Restaurant inilla duiman at elit finibus viverra nec
                                a
                                lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue
                                duru
                                the ivite dianne onen nivami acsestion augue artine.</p>
                            <div class="butn-dark"> <a href="/offers"><span
                                        id="more_button_fitness">Plus</span></a> </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="row">

                <div class="col-md-6 bg-cream p-0 order2 valign animate-box" data-animate-effect="fadeInLeft">
                    <div class="content">
                        <div class="cont text-left">
                            <div class="info">
                                <h6 id="exp_title">Expériences</h6>
                            </div>
                            <h4 id="health_club_title">Le club de santé et la piscine</h4>
                            <p id="health_description">Le club de santé et la piscine à elit finibus viverra nec a
                                lacus
                                themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the
                                ivite dianne onen nivami acsestion augue artine.</p>
                            <div class="butn-dark"> <a href="/offers"><span id="more_button">Plus</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 p-0 order1 animate-box" data-animate-effect="fadeInRight">
                    <div class="img">
                        <a href="/offers"><img src="../assets/img/spa/1.jpg" alt=""></a>
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
                                <li class="nav-item"><router-link class="nav-link" to="/about">À
                                        Propos</router-link></li>
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
                                    ACI
                                </p>
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
                            <p class="footer-bottom-copy-right">© Copyright 2024 Micasa, tous droits réservés</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      booking: {
        location: "",
        arrival: "",
        departure: "",
        adults: "",
      },
      loadedScripts: {} // Suivi des scripts chargés
    };
  },
  methods: {
    // Méthode de réservation existante
    handleBooking() {
      console.log("Réservation effectuée :", this.booking);
    },

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

