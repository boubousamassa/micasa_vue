<template>
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
    <div class="banner-header section-padding valign bg-img bg-fixed" data-overlay-dark="4"
        data-background="/assets/img/slider/3.jpg">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-right caption mt-90">
                    <h1>APPARTEMENTS</h1>
                </div>
            </div>
        </div>
    </div>

    <!-- Rooms 3 -->
    <div class="rooms3 section-padding">
        <div class="container">
            <div class="row">
                <div class="row">
                    <div class="col-md-12">
                        <div class="section-subtitle" id="residenceSubtitle">Résidence MiCasa</div>
                        <div class="section-title" id="roomsTitle">Chambres & Suites</div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="square-flip">
                        <div class="square bg-img" data-background="/assets/img/rooms/1.jpg">
                            <span class="category"><a href="/appartement">Réserver</a></span>
                            <div class="square-container d-flex align-items-end justify-content-end">
                                <div class="box-title">
                                    <h4>Suite Junior</h4>
                                </div>
                            </div>
                            <div class="flip-overlay"></div>
                        </div>
                        <div class="square2">
                            <div class="square-container2">
                                <h4>Suite Junior</h4>
                                <p>Une expérience unique avec un hébergement confortable et des équipements modernes.
                                </p>
                                <div class="row room-facilities mb-30">
                                    <div class="col-md-6">
                                        <ul>
                                            <li><i class="flaticon-group"></i> 1-2 Personnes</li>
                                            <li><i class="flaticon-wifi"></i> Wifi Gratuit</li>
                                        </ul>
                                    </div>
                                    <div class="col-md-6">
                                        <ul>
                                            <li><i class="flaticon-bed"></i> Lit Jumeau</li>
                                            <li><i class="flaticon-breakfast"></i> Petit-Déjeuner Inclus</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="btn-line"><a href="/room_detail">Détails</a></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-md-4">
                    <div class="square-flip">
                        <div class="square bg-img" data-background="/assets/img/rooms/2.jpg">
                            <span class="category"><a href="/appartement">Réserver</a></span>
                            <div class="square-container d-flex align-items-end justify-content-end">
                                <div class="box-title">
                                    <h4>Chambre Familiale</h4>
                                </div>
                            </div>
                            <div class="flip-overlay"></div>
                        </div>
                        <div class="square2">
                            <div class="square-container2">
                                <h4>Chambre Familiale</h4>
                                <p>Profitez d'un séjour confortable pour toute la famille avec des services et
                                    commodités de qualité.</p>
                                <div class="row room-facilities mb-30">
                                    <div class="col-md-6">
                                        <ul>
                                            <li><i class="flaticon-group"></i> 1-2 Personnes</li>
                                            <li><i class="flaticon-wifi"></i> Wifi Gratuit</li>
                                        </ul>
                                    </div>
                                    <div class="col-md-6">
                                        <ul>
                                            <li><i class="flaticon-bed"></i> Lit Jumeau</li>
                                            <li><i class="flaticon-breakfast"></i> Petit-Déjeuner Inclus</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="btn-line"><a href="/room_detail">Détails</a></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="square-flip">
                        <div class="square bg-img" data-background="/assets/img/rooms/3.jpg">
                            <span class="category"><a href="/appartement">Réserver</a></span>
                            <div class="square-container d-flex align-items-end justify-content-end">
                                <div class="box-title">
                                    <h4>Chambre Double</h4>
                                </div>
                            </div>
                            <div class="flip-overlay"></div>
                        </div>
                        <div class="square2">
                            <div class="square-container2">
                                <h4>Chambre Double</h4>
                                <p>Profitez d'une chambre élégante et spacieuse, idéale pour un séjour relaxant à deux.
                                </p>
                                <div class="row room-facilities mb-30">
                                    <div class="col-md-6">
                                        <ul>
                                            <li><i class="flaticon-group"></i> 1-2 Personnes</li>
                                            <li><i class="flaticon-wifi"></i> Wifi Gratuit</li>
                                        </ul>
                                    </div>
                                    <div class="col-md-6">
                                        <ul>
                                            <li><i class="flaticon-bed"></i> Lit Jumeau</li>
                                            <li><i class="flaticon-breakfast"></i> Petit-Déjeuner Inclus</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="btn-line"><a href="/room_detail">Détails</a></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="square-flip">
                        <div class="square bg-img" data-background="/assets/img/rooms/6.jpg">
                            <span class="category"><a href="/appartement">Réserver</a></span>
                            <div class="square-container d-flex align-items-end justify-content-end">
                                <div class="box-title">
                                    <h4>Chambre Deluxe</h4>
                                </div>
                            </div>
                            <div class="flip-overlay"></div>
                        </div>
                        <div class="square2">
                            <div class="square-container2">
                                <h4>Chambre Deluxe</h4>
                                <p>Profitez d'un confort supérieur et d'une atmosphère raffinée pour un séjour
                                    mémorable.</p>
                                <div class="row room-facilities mb-30">
                                    <div class="col-md-6">
                                        <ul>
                                            <li><i class="flaticon-group"></i> 1-2 Personnes</li>
                                            <li><i class="flaticon-wifi"></i> Wifi Gratuit</li>
                                        </ul>
                                    </div>
                                    <div class="col-md-6">
                                        <ul>
                                            <li><i class="flaticon-bed"></i> Lit Jumeau</li>
                                            <li><i class="flaticon-breakfast"></i> Petit-Déjeuner Inclus</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="btn-line"><a href="/room_detail">Détails</a></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="square-flip">
                        <div class="square bg-img" data-background="/assets/img/rooms/8.jpg">
                            <span class="category"><a href="/appartement">Réserver</a></span>
                            <div class="square-container d-flex align-items-end justify-content-end">
                                <div class="box-title">
                                    <h4>Chambre Supérieure</h4>
                                </div>
                            </div>
                            <div class="flip-overlay"></div>
                        </div>
                        <div class="square2">
                            <div class="square-container2">
                                <h4>Chambre Supérieure</h4>
                                <p>Profitez d'un séjour exceptionnel avec des équipements modernes et un cadre agréable.
                                </p>
                                <div class="row room-facilities mb-30">
                                    <div class="col-md-6">
                                        <ul>
                                            <li><i class="flaticon-group"></i> 1-2 Personnes</li>
                                            <li><i class="flaticon-wifi"></i> Wifi Gratuit</li>
                                        </ul>
                                    </div>
                                    <div class="col-md-6">
                                        <ul>
                                            <li><i class="flaticon-bed"></i> Lit Jumeau</li>
                                            <li><i class="flaticon-breakfast"></i> Petit-Déjeuner Inclus</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="btn-line"><a href="/room_detail">Détails</a></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="square-flip">
                        <div class="square bg-img" data-background="/assets/img/rooms/9.jpg">
                            <span class="category"><a href="/appartement">Réserver</a></span>
                            <div class="square-container d-flex align-items-end justify-content-end">
                                <div class="box-title">
                                    <h4>Chambre Bien-être</h4>
                                </div>
                            </div>
                            <div class="flip-overlay"></div>
                        </div>
                        <div class="square2">
                            <div class="square-container2">
                                <h4>Chambre Bien-être</h4>
                                <p>Profitez d'un espace calme et relaxant conçu pour votre bien-être.</p>
                                <div class="row room-facilities mb-30">
                                    <div class="col-md-6">
                                        <ul>
                                            <li><i class="flaticon-group"></i> 1-2 Personnes</li>
                                            <li><i class="flaticon-wifi"></i> Wifi Gratuit</li>
                                        </ul>
                                    </div>
                                    <div class="col-md-6">
                                        <ul>
                                            <li><i class="flaticon-bed"></i> Lit Jumeau</li>
                                            <li><i class="flaticon-breakfast"></i> Petit-Déjeuner Inclus</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="btn-line"><a href="/room_detail">Détails</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <!-- Pricing -->
    <section class="pricing section-padding bg-blck">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="section-subtitle"><span id="best_prices">Meilleurs prix</span></div>
                    <div class="section-title"><span id="additional_services">Services supplémentaires</span></div>
                    <p class="color-2" id="service_description_1">Des options pour un séjour encore plus agréable</p>
                    <p class="color-2" id="service_description_2">Profitez de nos services additionnels conçus pour
                        votre confort et votre tranquillité d’esprit. Que vous séjourniez chez nous pour affaires ou
                        pour le loisir, Micasa vous propose des services personnalisés pour répondre à tous vos besoins.
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
                                    <li><i class="ti-check"></i> <span id="service_1_additional">Orci miss natoque vasa
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
                                    <li><i class="ti-check"></i> <span id="service_2_additional">Orci miss natoque vasa
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
                                    <li><i class="ti-check"></i> <span id="service_3_additional">Orci miss natoque vasa
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
                                    <li><i class="ti-check"></i> <span id="service_4_additional">Orci miss natoque vasa
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
                                    <li><i class="ti-check"></i> <span id="service_5_additional">Orci miss natoque vasa
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
                                <p class="footer-contact-phone"><span class="flaticon-call"></span> +223 20 29 08 08 ACI
                                </p>
                                <p class="footer-contact-phone"><span class="flaticon-call"></span> +223 20 28 38 80
                                    Golf</p>
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

</template>

<script>
export default {
    name: "AppartementPage",
    data() {
        return {
            rooms: [
                {
                    id: 1,
                    title: "Suite Junior",
                    description: "Une expérience unique avec un hébergement confortable et des équipements modernes.",
                    capacity: "1-2 Personnes",
                    image: "@/assets/rooms/1.jpg",
                },
                {
                    id: 2,
                    title: "Chambre Familiale",
                    description: "Profitez d'un séjour confortable pour toute la famille.",
                    capacity: "1-4 Personnes",
                    image: "@/assets/rooms/2.jpg",
                },
                {
                    id: 3,
                    title: "Chambre Deluxe",
                    description: "Un confort supérieur pour un séjour mémorable.",
                    capacity: "1-3 Personnes",
                    image: "@/assets/rooms/3.jpg",
                },
                // Ajoute d'autres chambres ici
            ],
        };
    },
};
</script>

<style scoped>
/* Copie ici les styles spécifiques pour cette page */
.banner-header {
    background-size: cover;
    color: white;
}

.rooms3 .square {
    position: relative;
    overflow: hidden;
    height: 300px;
}

.square-container {
    padding: 15px;
}

.btn-line {
    margin-top: 10px;
    display: inline-block;
    padding: 10px 20px;
    background-color: #333;
    color: white;
    text-decoration: none;
}

.btn-line:hover {
    background-color: #555;
}
</style>