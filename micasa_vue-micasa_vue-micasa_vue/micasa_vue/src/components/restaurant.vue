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
        <!-- Restaurant Slider -->
        <header class="header slider">
            <div class="owl-carousel owl-theme">
                <!-- The opacity on the image is made with "data-overlay-dark="number". You can change it using the numbers 0-9. -->
                <div class="text-center item bg-img" :style="{ backgroundImage: 'url(' + backgroundImage + ')' }"
                    data-overlay-dark="2">
                    <div class="v-middle caption">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-10 offset-md-1">
                                    <h1>RESTAURANT</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center item bg-img" data-overlay-dark="2"
                    data-background="/assets/img/restaurant/2.jpg">
                    <div class="v-middle caption">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-10 offset-md-1">
                                    <h1>RESTAURANT</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center item bg-img" data-overlay-dark="2"
                    data-background="/assets/img/restaurant/3.jpg">
                    <div class="v-middle caption">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-10 offset-md-1">
                                    <h1>RESTAURANT</h1>
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
        <!-- Restaurant Content -->
        <section class="rooms-page section-padding" data-scroll-index="1">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-left">
                        <div class="section-subtitle">Une expérience pour les sens</div>
                        <div class="section-title">Le Restaurant</div>
                    </div>
                    <div class="col-md-12">
                        <p class="mb-30">Plongez dans une expérience culinaire unique où saveurs, convivialité et
                            créativité se rencontrent. Situé au cœur du GOLF/ACI, notre restaurant vous accueille dans
                            une ambiance chaleureuse et élégante, idéale pour un repas en famille, entre amis ou pour
                            des occasions spéciales. <br>

                            Notre chef passionné vous propose une carte variée, alliant les cuisines traditions locales
                            et inspirations internationales. Chaque plat est préparé avec des ingrédients frais et de
                            saison, soigneusement sélectionnés pour garantir une qualité exceptionnelle.</p>
                        <h6>Horaires</h6>
                        <ul class="list-unstyled page-list mb-30">
                            <li>
                                <div class="page-list-icon"> <span class="ti-time"></span> </div>
                                <div class="page-list-text">
                                    <p>Petit déjeuner : 7h00 – 11h00 (tous les jours)</p>
                                </div>
                            </li>
                            <li>
                                <div class="page-list-icon"> <span class="ti-time"></span> </div>
                                <div class="page-list-text">
                                    <p>Déjeuner : 12h00 – 14h00 (tous les jours)</p>
                                </div>
                            </li>
                            <li>
                                <div class="page-list-icon"> <span class="ti-time"></span> </div>
                                <div class="page-list-text">
                                    <p>Dîner : ouvert à partir de 18h30, dernière commande à 22h00 (tous les jours)</p>
                                </div>
                            </li>
                        </ul>
                        <h6>Code vestimentaire</h6>
                        <p>Tenue décontractée et élégante (les shorts, chapeaux et sandales ne sont pas autorisés)</p>
                        <h6>Terrasse</h6>
                        <p>Ouverte uniquement pour les boissons</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- Restaurant Menu -->
        <section id="menu" class="restaurant-menu menu section-padding bg-blck">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <div class="section-subtitle"><span>Hôtel de luxe</span></div>
                        <div class="section-title"><span>Menu du Restaurant</span></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="tabs-icon col-md-10 offset-md-1 text-center">
                                <div class="owl-carousel owl-theme">
                                    <div id="tab-1" class="active item">
                                        <h6>Entrées</h6>
                                    </div>
                                    <div id="tab-2" class="item">
                                        <h6>Plats principaux</h6>
                                    </div>
                                    <div id="tab-3" class="item">
                                        <h6>Salades</h6>
                                    </div>
                                    <div id="tab-4" class="item">
                                        <h6>Vin</h6>
                                    </div>
                                    <div id="tab-5" class="item">
                                        <h6>Petit déjeuner</h6>
                                    </div>
                                    <div id="tab-6" class="item">
                                        <h6>Dessert</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="restaurant-menu-content col-md-12">
                                <!-- Starters -->
                                <div id="tab-1-content" class="cont active">
                                    <div class="row">
                                        <div class="col-md-5">
                                            <div class="menu-info">
                                                <h5>Trempettes de mozzarella <span class="price">27$</span></h5>
                                                <p>Bâtonnets de mozzarella frits, sauce marinara</p>
                                            </div>
                                            <div class="menu-info">
                                                <h5>Rondelles d'oignon <span class="price">32$</span></h5>
                                                <p>Rondelles d'oignons frites, aïoli fumé</p>
                                            </div>
                                            <div class="menu-info">
                                                <h5>Jalapeno frit <span class="price">52$</span></h5>
                                                <p>Piments jalapeños frits, sauce cheddar</p>
                                            </div>
                                        </div>
                                        <div class="col-md-5 offset-md-2">
                                            <div class="menu-info">
                                                <h5>Ailes de poulet Buffalo <span class="price">37$</span></h5>
                                                <p>Ailes de poulet épicées, sauce au fromage bleu, carotte, céleri</p>
                                            </div>
                                            <div class="menu-info">
                                                <h5>Chili con carne <span class="price">32$</span></h5>
                                                <p>Bœuf haché épicé, bacon, haricots rouges</p>
                                            </div>
                                            <div class="menu-info">
                                                <h5>Pelures de pommes de terre <span class="price">42$</span></h5>
                                                <p>Peaux de pommes de terre croustillantes; bacon et cheddar ou légumes
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Mains -->
                                <div id="tab-2-content" class="cont">
                                    <div class="row">
                                        <div class="col-md-5">
                                            <div class="menu-info">
                                                <h5>Burger de Rusty <span class="price">27$</span></h5>
                                                <p>Côtes de bœuf fumées effilochées, sauce barbecue, cheddar, oignons
                                                    croustillants</p>
                                            </div>
                                            <div class="menu-info">
                                                <h5>Steak de poisson cajun <span class="price">32$</span></h5>
                                                <p>Bar aux épices cajun, pommes de terre grelots frites, salade
                                                    d'accompagnement</p>
                                            </div>
                                            <div class="menu-info">
                                                <h5>Poulet frit du sud <span class="price">52$</span></h5>
                                                <p>Poitrine de poulet panée à la cajun, frites et moutarde au miel</p>
                                            </div>
                                        </div>
                                        <div class="col-md-5 offset-md-2">
                                            <div class="menu-info">
                                                <h5>Gâteau au crabe <span class="price">37$</span></h5>
                                                <p>Galettes de crabe panées, sauce tartare, salade de pommes et fenouil
                                                </p>
                                            </div>
                                            <div class="menu-info">
                                                <h5>Côtes levées de dos de bébé <span class="price">32$</span></h5>
                                                <p>Côtes de porc glacées au barbecue, salade de chou, frites</p>
                                            </div>
                                            <div class="menu-info">
                                                <h5>Combo fumoir <span class="price">42$</span></h5>
                                                <p>Poitrine de bœuf fumée, côtes et saucisses, salade de chou, pain de
                                                    maïs</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Salads -->
                                <div id="tab-3-content" class="cont">
                                    <div class="row">
                                        <div class="col-md-5">
                                            <div class="menu-info">
                                                <h5>Salade César <span class="price">47$</span></h5>
                                                <p>Laitue romaine, croûtons, parmesan, vinaigrette César.</p>
                                            </div>
                                            <div class="menu-info">
                                                <h5>Salade Waldorf <span class="price">52$</span></h5>
                                                <p>Laitue, céleri, pomme, raisin, noix, sauce Waldorf</p>
                                            </div>
                                            <div class="menu-info">
                                                <h5>Salade de quinoa et d'avocat <span class="price">52$</span></h5>
                                                <p>Quinoa, avocat, légumes verts mélangés. Noix, fruits secs et frais
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-md-5 offset-md-2">
                                            <div class="menu-info">
                                                <h5>Salade de saumon grillé <span class="price">37$</span></h5>
                                                <p>Saumon grillé, mesclun, câpres, tranches d'orange</p>
                                            </div>
                                            <div class="menu-info">
                                                <h5>Salade Cobb au poulet <span class="price">32$</span></h5>
                                                <p>Laitue iceberg, tomates cerises, fromage bleu, avocat, bacon</p>
                                            </div>
                                            <div class="menu-info">
                                                <h5>Salade de poulet <span class="price">42$</span></h5>
                                                <p> Sauce César. Poitrine de poulet grillée en option</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Wine -->
                                <div id="tab-4-content" class="cont">
                                    <div class="row">
                                        <div class="col-md-5">
                                            <div class="menu-info">
                                                <h5>Château d'Yquem 2011 <span class="price">400$</span></h5>
                                                <p>Vin de Dessert, Bordeaux, Graves, Sauternes</p>
                                            </div>
                                            <div class="menu-info">
                                                <h5>Crème Alvear NV <span class="price">30$</span></h5>
                                                <p>Dessert, Vin fortifié, Andalousie</p>
                                            </div>
                                            <div class="menu-info">
                                                <h5>Chateau D'yquem 1990 <span class="price">900$</span></h5>
                                                <p>Vin de Dessert, Bordeaux, Graves, Sauternes</p>
                                            </div>
                                        </div>
                                        <div class="col-md-5 offset-md-2">
                                            <div class="menu-info">
                                                <h5>La Grande Année 2007 <span class="price">400$</span></h5>
                                                <p>Rosé, Champagne</p>
                                            </div>
                                            <div class="menu-info">
                                                <h5>Sine Qua Non 2012 <span class="price">520$</span></h5>
                                                <p>Syrah, Shiraz et assemblages, Californie</p>
                                            </div>
                                            <div class="menu-info">
                                                <h5>Domaine W.S. Keyes 2006 <span class="price">240$</span></h5>
                                                <p>Merlot, Californie, Napa, Howell Mountain</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Breakfast -->
                                <div id="tab-5-content" class="cont">
                                    <div class="row">
                                        <div class="col-md-5">
                                            <div class="menu-info">
                                                <h5>Œufs Bénédicte<span class="price">60$</span></h5>
                                                <p>Muffin anglais, bœuf, sauce hollandaise, œuf poché.</p>
                                            </div>
                                            <div class="menu-info">
                                                <h5>Benedicte du Texas <span class="price">30$</span></h5>
                                                <p>Muffin anglais, côtes courtes, sauce barbecue, œuf poché.</p>
                                            </div>
                                            <div class="menu-info">
                                                <h5>Omelette de Rusty <span class="price">22$</span></h5>
                                                <p>Mozzarella, cheddar, oignons caramélisés, haricots noirs.</p>
                                            </div>
                                        </div>
                                        <div class="col-md-5 offset-md-2">
                                            <div class="menu-info">
                                                <h5>Bagel au saumon <span class="price">30$</span></h5>
                                                <p>Saumon fumé, fromage à la crème, aneth, roquette, oignon rouge.</p>
                                            </div>
                                            <div class="menu-info">
                                                <h5>Bagel pour le petit-déjeuner <span class="price">33$</span></h5>
                                                <p>Barre chocolatée, guimauve et biscuit</p>
                                            </div>
                                            <div class="menu-info">
                                                <h5>Crêpes de Rusty <span class="price">40$</span></h5>
                                                <p>Fraise, chocolat blanc, chocolat noir, chips crispearls</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Dessert -->
                                <div id="tab-6-content" class="cont">
                                    <div class="row">
                                        <div class="col-md-5">
                                            <div class="menu-info">
                                                <h5>Tarte aux pacanes et au bourbon <span class="price">67$</span></h5>
                                                <p>Tarte farcie aux pacanes Bourbon, glace vanille</p>
                                            </div>
                                            <div class="menu-info">
                                                <h5>Gâteau au fromage new-yorkais<span class="price">50$</span></h5>
                                                <p>Salade de cheesecake, fraises et citron vert</p>
                                            </div>
                                            <div class="menu-info">
                                                <h5>La glace de Rusty <span class="price">32$</span></h5>
                                                <p>Glace à la vanille, au bourbon, aux biscuits et au chocolat</p>
                                            </div>
                                        </div>
                                        <div class="col-md-5 offset-md-2">
                                            <div class="menu-info">
                                                <h5>S’mores <span class="price">40$</span></h5>
                                                <p>Biscuits aux pépites de chocolat, guimauve, chocolat</p>
                                            </div>
                                            <div class="menu-info">
                                                <h5>Chemin rocailleux <span class="price">42$</span></h5>
                                                <p>Barre chocolatée, guimauve et biscuit</p>
                                            </div>
                                            <div class="menu-info">
                                                <h5>Crumble aux pommes et aux poires <span class="price">42$</span></h5>
                                                <p>Poire et pomme caramélisées, crumble d'avoine, glace vanille</p>
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
        <!-- Testiominals -->
        <section class="testimonials">
            <div class="background bg-img bg-fixed section-padding pb-0" data-background="/assets/img/slider/2.jpg"
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
                                        <span class="quote"><img src="/assets/img/quot.png" alt=""></span>
                                        <p id="testimonial_1">Hotel dapibus asue metus the nec feusiate eraten miss
                                            hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis
                                            ve ante otel inilla duiman at finibus viverra neca the sene on satien the
                                            miss drana inc fermen norttito sit space, mus nellentesque habitan.</p>
                                        <div class="info">
                                            <div class="author-img"><img src="/assets/img/team/4.jpg" alt=""></div>
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
                                        <span class="quote"><img src="/assets/img/quot.png" alt=""></span>
                                        <p id="testimonial_2">Hotel dapibus asue metus the nec feusiate eraten miss
                                            hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis
                                            ve ante otel inilla duiman at finibus viverra neca the sene on satien the
                                            miss drana inc fermen norttito sit space, mus nellentesque habitan.</p>
                                        <div class="info">
                                            <div class="author-img"><img src="/assets/img/team/1.jpg" alt=""></div>
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
                                        <span class="quote"><img src="/assets/img/quot.png" alt=""></span>
                                        <p id="testimonial_3">Hotel dapibus asue metus the nec feusiate eraten miss
                                            hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis
                                            ve ante otel inilla duiman at finibus viverra neca the sene on satien the
                                            miss drana inc fermen norttito sit space, mus nellentesque habitan.</p>
                                        <div class="info">
                                            <div class="author-img"><img src="/assets/img/team/5.jpg" alt=""></div>
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
  name: "RestaurantPage",
  data() {
    return {
      backgroundImage: require('../assets/img/restaurant/1.jpg'), // Chemin de l'image de fond
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


<style scoped>
/* Copie tes styles CSS ici */
</style>
