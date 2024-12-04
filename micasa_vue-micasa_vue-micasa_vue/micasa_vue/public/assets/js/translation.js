function changeLanguage() {
    const language = document.getElementById("languageSelector").value;

    if (language === "en") {
        // Traduction en anglais
        document.getElementById('rooms_suites').innerText = "Rooms and Suites";
        document.getElementById('reservation_form').innerText = "Hotel Reservation Form";
        document.getElementById('label_locationt').innerText = "Location";
        document.getElementById('label_arrivalt').innerText = "Arrival";
        document.getElementById('label_departuret').innerText = "Departure";
        document.getElementById('label_adultst').innerText = "Adults";
        document.getElementById('enfantst').innerText = "Children";
        document.getElementById('check_availabilityt').innerText = "Check Availability";

        // Traductions pour la section des informations de réservation
        document.querySelector('.col-md-5.mb-30.mt-30 h5').innerText = "Each apartment is equipped with a private bathroom, high-speed Wi-Fi and cable TV for optimal comfort. Enjoy an elegant and functional setting for your business trips.";
        document.querySelector('.reservations .text p').innerText = "Booking";
        document.querySelector('.col-md-5.mb-30.mt-30 p small').innerText = "Call us.";

        // Traductions pour le pied de page
        document.querySelector('.footer-title').innerText = "About";
        document.querySelector('.footer-about-text').innerText = "Welcome! Our hotel offers a refined setting where every detail is designed for your comfort, with modern facilities and top-notch service for an exceptional stay.";
        document.querySelector('.footer-explore-list li:nth-child(1) a').innerText = "Home";
        document.querySelector('.footer-explore-list li:nth-child(2) a').innerText = "About";
        document.querySelector('.footer-explore-list li:nth-child(3) a').innerText = "Rooms";
        document.querySelector('.footer-explore-list li:nth-child(4) a').innerText = "Restaurant";
        document.querySelector('.footer-explore-list li:nth-child(5) a').innerText = "Contact";
        document.querySelector('.footer-contact h3').innerText = "Contact";
        document.querySelector('.footer-contact-text').innerText = "Hamdallaye ACI\Bamako Mali";
        document.querySelector('.footer-bottom-copy-right').innerText = "© Copyright 2024 Micasa, all rights reserved";

        // Traductions pour la section Expériences
        document.getElementById('exp_title').innerText = "Experiences";
        document.getElementById('health_club_title').innerText = "Health Club and Pool";
        document.getElementById('health_description').innerText = "The health club & pool offers top facilities with a tranquil ambiance, perfect for relaxation and rejuvenation.";
        document.getElementById('more_button').innerText = "More";
        
        //section modern
        document.getElementById('moderne_title').innerText = "Modern";
        document.getElementById('fitness_center_title').innerText = "Fitness Center";
        document.getElementById('fitness_center_description').innerText = "Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.";
        document.getElementById('more_button_fitness').innerText = "More";

        // salle de conférence
        document.getElementById('experiences_title').innerText = "Experiences";
        document.getElementById('conference_center_title').innerText = "Conference Room Center";
        document.getElementById('conference_center_description').innerText = "Conference room inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.";
        document.getElementById('more_button_conference').innerText = "More";

        // restaurant
        document.getElementById('discover_title').innerText = "Discover";
        document.getElementById('restaurant_title').innerText = "Restaurant";
        document.getElementById('restaurant_description').innerText = "Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.";
        document.getElementById('more_button_restaurant').innerText = "More";

        // Traduction des témoignages 1, 2, et 3
        document.getElementById('testimonials_title').innerText = "Testimonials";
        document.getElementById('client_reviews_title').innerText = "What do clients say?";
        document.getElementById('testimonial_1').innerText = "Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.";
        document.getElementById('author_1').innerText = "Emily Brown";
        document.getElementById('review_1').innerText = "Guest review";
        document.getElementById('testimonial_2').innerText = "Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.";
        document.getElementById('author_2').innerText = "Nolan White";
        document.getElementById('review_2').innerText = "Guest review";
        document.getElementById('testimonial_3').innerText = "Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.";
        document.getElementById('author_3').innerText = "Olivia Martin";
        document.getElementById('review_3').innerText = "Guest review";

        // Traduction en anglais
        document.getElementById('best_prices').innerText = "Best prices";
        document.getElementById('additional_services').innerText = "Additional Services";
        document.getElementById('service_description_1').innerText = "Options for an even more enjoyable stay";
        document.getElementById('service_description_2').innerText = "Take advantage of our additional services designed for your comfort and peace of mind. Whether you are staying with us for business or leisure, Micasa offers personalized services to meet all your needs.";
        document.getElementById('more_info').innerText = "For more information";
        document.getElementById('phone_numbers').innerHTML = "+223 20 29 08 08 ACI <br>+223 20 28 38 80 Golf";

        // services supplementaires
        document.getElementById('room_cleaning').innerText = "Room Cleaning";
        document.getElementById('service_1_free').innerText = "Free";
        document.getElementById('service_1_additional').innerText = "Orci miss natoque vasa ince";
        document.getElementById('service_1_unavailable').innerText = "Unavailable";
        document.getElementById('shuttle_service').innerText = "Shuttle Service";
        document.getElementById('service_2_paid').innerText = "Paid";
        document.getElementById('service_2_additional').innerText = "Orci miss natoque vasa ince";
        document.getElementById('service_2_unavailable').innerText = "Unavailable";
        document.getElementById('car_rental').innerText = "Car Rental";
        document.getElementById('service_3_paid').innerText = "Paid";
        document.getElementById('service_3_additional').innerText = "Orci miss natoque vasa ince";
        document.getElementById('service_3_unavailable').innerText = "Unavailable";
        document.getElementById('tour_guide').innerText = "Tour Guide";
        document.getElementById('service_4_paid').innerText = "Paid";
        document.getElementById('service_4_additional').innerText = "Orci miss natoque vasa ince";
        document.getElementById('service_4_unavailable').innerText = "Unavailable";
        document.getElementById('breakfast').innerText = "Breakfast";
        document.getElementById('service_5_paid').innerText = "Paid";
        document.getElementById('service_5_additional').innerText = "Orci miss natoque vasa ince";
        document.getElementById('service_5_unavailable').innerText = "Unavailable";
        document.getElementById('security').innerText = "Safe & Secure";
        document.getElementById('service_6_safe').innerText = "Safe Deposit Box";
        document.getElementById('service_6_free').innerText = "Free";
        document.getElementById('service_6_unavailable').innerText = "Unavailable";
        document.getElementById('courses').innerText = "shopping";
        document.getElementById('cours1').innerText = "Free";
        document.getElementById('cours2').innerText = "Free";
        document.getElementById('cours3').innerText = "Unavailable";
        document.getElementById('Restaurant').innerText = "Restaurant";
        document.getElementById('restaurant1').innerText = "Free";
        document.getElementById('restaurant2').innerText = "Free";
        document.getElementById('restaurant3').innerText = "Unavailable";
        document.getElementById('pressing').innerText = "Cleaner";
        document.getElementById('pressing1').innerText = "Free";
        document.getElementById('pressing2').innerText = "Free";
        document.getElementById('pressing3').innerText = "Unavailable";
        document.getElementById('conference').innerText = "Conference";
        document.getElementById('conference1').innerText = "Free";
        document.getElementById('conference2').innerText = "Free";
        document.getElementById('conference3').innerText = "Unavailable";

        //video
        document.getElementById('residence_title').innerText = "MiCasa Residence";
        document.getElementById('promo_video').innerText = "Promotional Video";

        // Services et commodités de l'hôtel
        document.getElementById("servicesSubtitle").innerText = "Our Services";
        document.getElementById("servicesTitle").innerText = "Hotel Services and Amenities";
        document.getElementById("service1Title").innerText = "Shuttle";
        document.getElementById("service1Desc").innerText = "We will pick you up from the airport while you enjoy a comfortable ride.";
        document.getElementById("service2Title").innerText = "Room Service";
        document.getElementById("service2Desc").innerText = "Room service once a day for optimal comfort during your stay.";
        document.getElementById("service3Title").innerText = "Swimming Pool";
        document.getElementById("service3Desc").innerText = "Relax in our outdoor pool.";
        document.getElementById("service4Title").innerText = "Fiber Internet";
        document.getElementById("service4Desc").innerText = "High-speed Wi-Fi to stay connected wherever you are.";
        document.getElementById("service5Title").innerText = "Breakfast";
        document.getElementById("service5Desc").innerText = "A full breakfast to start the day off right.";
        document.getElementById("service6Title").innerText = "Gym";
        document.getElementById("service6Desc").innerText = "Modern and varied equipment for your training: weight machines, cardio training and free weight space.";

        // les chambre golf
        document.getElementById("residenceSubtitle").innerText = "MiCasa Residence";
        document.getElementById("roomsTitle").innerText = "Rooms & Golf Suites";
        // Pour chaque chambre
        document.getElementById("book1").innerHTML = "<a href='rooms2.html'>Book</a>";
        document.getElementById("price1").innerHTML = "<a href='room-details.html'>60.000f / Night</a>";
        document.getElementById("roomTitle1").innerHTML = "<a href='room-details.html'>Junior Suite</a>";
        document.getElementById("details1").innerHTML = "Details <i class='ti-arrow-right'></i>";
        document.getElementById("book2").innerHTML = "<a href='rooms2.html'>Book</a>";
        document.getElementById("price2").innerHTML = "<a href='room-details.html'>60.000f / Night</a>";
        document.getElementById("roomTitle2").innerHTML = "<a href='room-details.html'>Junior Suite</a>";
        document.getElementById("details2").innerHTML = "Details <i class='ti-arrow-right'></i>";
        document.getElementById("book3").innerHTML = "<a href='rooms2.html'>Book</a>";
        document.getElementById("price3").innerHTML = "<a href='room-details.html'>60.000f / Night</a>";
        document.getElementById("roomTitle3").innerHTML = "<a href='room-details.html'>Junior Suite</a>";
        document.getElementById("details3").innerHTML = "Details <i class='ti-arrow-right'></i>";
        document.getElementById("book4").innerHTML = "<a href='rooms2.html'>Book</a>";
        document.getElementById("price4").innerHTML = "<a href='room-details.html'>80.000f / Night</a>";
        document.getElementById("roomTitle4").innerHTML = "<a href='room-details.html'>Senior Suite</a>";
        document.getElementById("details4").innerHTML = "Details <i class='ti-arrow-right'></i>";
        document.getElementById("book5").innerHTML = "<a href='rooms2.html'>Book</a>";
        document.getElementById("price5").innerHTML = "<a href='room-details.html'>80.000f / Night</a>";
        document.getElementById("roomTitle5").innerHTML = "<a href='room-details.html'>Senior Suite</a>";
        document.getElementById("details5").innerHTML = "Details <i class='ti-arrow-right'></i>";

        // chambre ACI
        document.getElementById("residenceSubtitle").innerText = "MiCasa Residence";
        document.getElementById("roomsTitle").innerText = "Rooms & Suites ACI";
        document.getElementById("bookACI1").innerHTML = "<a href='rooms2.html'>Book</a>";
        document.getElementById("priceACI1").innerHTML = "<a href='room-details.html'>110.000f / Night</a>";
        document.getElementById("roomTitleACI1").innerHTML = "<a href='room-details.html'>Junior Suite</a>";
        document.getElementById("detailsACI1").innerHTML = "Details <i class='ti-arrow-right'></i>";
        document.getElementById("bookACI2").innerHTML = "<a href='rooms2.html'>Book</a>";
        document.getElementById("priceACI2").innerHTML = "<a href='room-details.html'>110.000f / Night</a>";
        document.getElementById("roomTitleACI2").innerHTML = "<a href='room-details.html'>Junior Suite</a>";
        document.getElementById("detailsACI2").innerHTML = "Details <i class='ti-arrow-right'></i>";
        document.getElementById("bookACI3").innerHTML = "<a href='rooms2.html'>Book</a>";
        document.getElementById("priceACI3").innerHTML = "<a href='room-details.html'>110.000f / Night</a>";
        document.getElementById("roomTitleACI3").innerHTML = "<a href='room-details.html'>Junior Suite</a>";
        document.getElementById("detailsACI3").innerHTML = "Details <i class='ti-arrow-right'></i>";
        document.getElementById("bookACI4").innerHTML = "<a href='rooms2.html'>Book</a>";
        document.getElementById("priceACI4").innerHTML = "<a href='room-details.html'>175.000f / Night</a>";
        document.getElementById("roomTitleACI4").innerHTML = "<a href='room-details.html'>Senior Suite</a>";
        document.getElementById("detailsACI4").innerHTML = "Details <i class='ti-arrow-right'></i>";
        document.getElementById("bookACI5").innerHTML = "<a href='rooms2.html'>Book</a>";
        document.getElementById("priceACI5").innerHTML = "<a href='room-details.html'>175.000f / Night</a>";
        document.getElementById("roomTitleACI5").innerHTML = "<a href='room-details.html'>Senior Suite</a>";
        document.getElementById("detailsACI5").innerHTML = "Details <i class='ti-arrow-right'></i>";

        //residence micasa
        document.getElementById("aboutSubtitle").innerText = "MiCasa Residence";
        document.getElementById("aboutTitle").innerText = "Experience absolute elegance and comfort";
        document.getElementById("aboutDescription1").innerText = "Welcome to your space of comfort and refinement in the heart of Africa. At Micasa, we offer high-end aparthotels, designed to meet the expectations of business travelers and those looking for serenity. Our furnished apartments combine modern style with local influences, creating a warm and functional environment.";
        document.getElementById("aboutDescription2").innerText = "Take advantage of our personalized services for a carefree stay, with attentive staff available 24/7, modern meeting spaces, and wellness facilities for total relaxation.";
        document.getElementById("reservationText").innerText = "Book now";
        document.getElementById("reservationPhone").innerText = "+223 20 29 08 08";
        document.getElementById("reservationPhone").innerText = "+223 20 29 08 09";
        

        // tete
        // Anglais
        document.getElementById("label_location").innerText = "Choose";
        document.getElementById("label_arrival").innerText = "Arrival";
        document.getElementById("label_departure").innerText = "Departure";
        document.getElementById("label_adults").innerText = "Adults";
        document.getElementById("label_children").innerText = "Children";
        document.getElementById("label_rooms").innerText = "Rooms";
        document.querySelector(".btn-form1-submit").innerText = "Reserve";

        // en tete
        document.getElementById('slide1-title').innerText = "Luxury Hotel and Best Resort";
        document.getElementById('slide1-subtitle').innerText = "Enjoy a Luxury Experience";
        document.getElementById('slide1-button').innerText = "Rooms & Suites";
        document.getElementById('slide2-title').innerText = "Unique Place to Relax and Enjoy";
        document.getElementById('slide2-subtitle').innerText = "The Perfect Base for You";
        document.getElementById('slide2-button').innerText = "Rooms & Suites";
        document.getElementById('slide3-title').innerText = "The Ultimate Luxury Experience";
        document.getElementById('slide3-subtitle').innerText = "Enjoy the Best Moments of Life";
        document.getElementById('slide3-button').innerText = "Rooms & Suites";
        document.getElementById('reservation-phone').innerText = "+223 20 29 08 07";
        document.getElementById('reservation-label').innerText = "Reservation";
 

    } else if (language === "fr") {
        // Revenir au texte en français
        document.getElementById('rooms_suites').innerText = "Chambres et suites";
        document.getElementById('reservation_form').innerText = "Formulaire de réservation d'hôtel";
        document.getElementById('label_locationt').innerText = "Location";
        document.getElementById('label_arrivalt').innerText = "Arrivée";
        document.getElementById('label_departuret').innerText = "Départ";
        document.getElementById('label_adultst').innerText = "Adultes";
        document.getElementById('enfantst').innerText = "Enfants";
        document.getElementById('check_availabilityt').innerText = "Reserver";

        // Informations de réservation en français
        document.querySelector('.col-md-5.mb-30.mt-30 h5').innerText = "";
        document.querySelector('.reservations .text p').innerText = "Réservation";
        document.querySelector('.col-md-5.mb-30.mt-30 p small').innerText = "Appelez-nous.";

        // Pied de page en français
        document.querySelector('.footer-title').innerText = "A propos";
        document.querySelector('.footer-about-text').innerText = "Bienvenue ! Notre hôtel offre un cadre raffiné où chaque détail est pensé pour votre confort, avec des installations modernes et un service de premier ordre pour un séjour exceptionnel.";
        document.querySelector('.footer-explore-list li:nth-child(1) a').innerText = "Accueil";
        document.querySelector('.footer-explore-list li:nth-child(2) a').innerText = "A propos";
        document.querySelector('.footer-explore-list li:nth-child(3) a').innerText = "Appartements";
        document.querySelector('.footer-explore-list li:nth-child(4) a').innerText = "Restaurant";
        document.querySelector('.footer-explore-list li:nth-child(5) a').innerText = "Contact";
        document.querySelector('.footer-contact h3').innerText = "Contact";
        document.querySelector('.footer-contact-text').innerText = "Hamdallaye ACI\Bamako Mali";
        document.querySelector('.footer-bottom-copy-right').innerText = "© Copyright 2024 Micasa, tous droits réservés";

        // Section Expériences en français
        document.getElementById('exp_title').innerText = "Expériences";
        document.getElementById('health_club_title').innerText = "Le club de santé et la piscine";
        document.getElementById('health_description').innerText = "Le club de santé et la piscine offrent des installations de qualité dans une ambiance paisible, parfaites pour la détente et le bien-être.";
        document.getElementById('more_button').innerText = "Plus";

        //section modern
        document.getElementById('moderne_title').innerText = "Moderne";
        document.getElementById('fitness_center_title').innerText = "Centre de remise en forme";
        document.getElementById('fitness_center_description').innerText = "Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.";
        document.getElementById('more_button_fitness').innerText = "Plus";

        // salle de conférence
        document.getElementById('experiences_title').innerText = "Expériences";
        document.getElementById('conference_center_title').innerText = "Centre de Salle de conférence";
        document.getElementById('conference_center_description').innerText = "Salle de conférence inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.";
        document.getElementById('more_button_conference').innerText = "Plus";

        // Revenir au texte en français pour la section 4 (restaurant)
        document.getElementById('discover_title').innerText = "Découvrir";
        document.getElementById('restaurant_title').innerText = "Le restaurant";
        document.getElementById('restaurant_description').innerText = "Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.";
        document.getElementById('more_button_restaurant').innerText = "Plus";

        // Revenir au texte en français pour la section des témoignages
        document.getElementById('testimonials_title').innerText = "Témoignages";
        document.getElementById('client_reviews_title').innerText = "Que disent les clients ?";

        // Revenir aux témoignages en français
        document.getElementById('testimonial_1').innerText = "Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.";
        document.getElementById('author_1').innerText = "Emily Brown";
        document.getElementById('review_1').innerText = "Avis client";
        document.getElementById('testimonial_2').innerText = "Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.";
        document.getElementById('author_2').innerText = "Nolan White";
        document.getElementById('review_2').innerText = "Avis client";
        document.getElementById('testimonial_3').innerText = "Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.";
        document.getElementById('author_3').innerText = "Olivia Martin";
        document.getElementById('review_3').innerText = "Avis client";

         // Services supplémentaires
         document.getElementById('best_prices').innerText = "Meilleurs prix";
         document.getElementById('additional_services').innerText = "Services supplémentaires";
         document.getElementById('service_description_1').innerText = "Des options pour un séjour encore plus agréable";
         document.getElementById('service_description_2').innerText = "Profitez de nos services additionnels conçus pour votre confort et votre tranquillité d’esprit. Que vous séjourniez chez nous pour affaires ou pour le loisir, Micasa vous propose des services personnalisés pour répondre à tous vos besoins.";
         document.getElementById('more_info').innerText = "Pour plus d’informations";
         document.getElementById('phone_numbers').innerHTML = "+223 20 29 08 08 ACI <br>+223 20 28 38 80 Golf";

         // Traduction des services
         document.getElementById('room_cleaning').innerText = "Nettoyage des chambres";
         document.getElementById('service_1_free').innerText = "Gratuit";
         document.getElementById('service_1_additional').innerText = "Orci miss natoque vasa ince";
         document.getElementById('service_1_unavailable').innerText = "Non disponible";
         document.getElementById('shuttle_service').innerText = "Navette";
         document.getElementById('service_2_paid').innerText = "Payante";
         document.getElementById('service_2_additional').innerText = "Orci miss natoque vasa ince";
         document.getElementById('service_2_unavailable').innerText = "Non disponible";
         document.getElementById('car_rental').innerText = "Location de voiture";
         document.getElementById('service_3_paid').innerText = "Payante";
         document.getElementById('service_3_additional').innerText = "Orci miss natoque vasa ince";
         document.getElementById('service_3_unavailable').innerText = "Non disponible";
         document.getElementById('tour_guide').innerText = "Guide touristique";
         document.getElementById('service_4_paid').innerText = "Payante";
         document.getElementById('service_4_additional').innerText = "Orci miss natoque vasa ince";
         document.getElementById('service_4_unavailable').innerText = "Non disponible";
         document.getElementById('breakfast').innerText = "Petit déjeuner";
         document.getElementById('service_5_paid').innerText = "Payante";
         document.getElementById('service_5_additional').innerText = "Orci miss natoque vasa ince";
         document.getElementById('service_5_unavailable').innerText = "Non disponible";
         document.getElementById('security').innerText = "Sûr et sécurisé";
         document.getElementById('service_6_safe').innerText = "Coffre Fort";
         document.getElementById('service_6_free').innerText = "Gratuit";
         document.getElementById('service_6_unavailable').innerText = "Non disponible";
         document.getElementById('courses').innerText = "Courses";
         document.getElementById('cours1').innerText = "Free";
         document.getElementById('cours2').innerText = "Free";
         document.getElementById('cours3').innerText = "Unavailable";
         document.getElementById('Restaurant').innerText = "Restaurant";    
         document.getElementById('restaurant1').innerText = "Free";
         document.getElementById('restaurant2').innerText = "Free";
         document.getElementById('restaurant3').innerText = "Unavailable";
         document.getElementById('pressing').innerText = "Nettoyage";
         document.getElementById('pressing1').innerText = "Free";
         document.getElementById('pressing2').innerText = "Free";
         document.getElementById('pressing3').innerText = "Unavailable";
         document.getElementById('conference').innerText = "Salle de conférence";
         document.getElementById('conference1').innerText = "Free";
         document.getElementById('conference2').innerText = "Free";
         document.getElementById('conference3').innerText = "Unavailable";

        //video
        document.getElementById('residence_title').innerText = "Résidence MiCasa";
        document.getElementById('promo_video').innerText = "Vidéo promotionnelle";

        //Services et commodités de l'hôtel
        document.getElementById("servicesSubtitle").innerText = "Nos Services";
        document.getElementById("servicesTitle").innerText = "Services et commodités de l'hôtel";
        document.getElementById("service1Title").innerText = "Navette";
        document.getElementById("service1Desc").innerText = "Nous viendrons vous chercher à l'aéroport pendant que vous serez confortablement installé pendant votre trajet.";
        document.getElementById("service2Title").innerText = "Service de chambre";
        document.getElementById("service2Desc").innerText = "Service de chambre 1 fois/jours, un confort optimal pour un séjour agréable.";
        document.getElementById("service3Title").innerText = "Piscine";
        document.getElementById("service3Desc").innerText = "Détendez-vous dans notre piscine extérieure.";
        document.getElementById("service4Title").innerText = "Internet fibre";
        document.getElementById("service4Desc").innerText = "Wifi haut débit pour vous connecter où que vous soyez.";
        document.getElementById("service5Title").innerText = "Petit-déjeuner";
        document.getElementById("service5Desc").innerText = "Un petit-déjeuner complet pour bien commencer la journée.";
        document.getElementById("service6Title").innerText = "Salle de sport";
        document.getElementById("service6Desc").innerText = "Équipements modernes et variés pour votre entraînement : machines de musculation, cardio-training et espace de poids libres.";

        // les chambre golf
        document.getElementById("residenceSubtitle").innerText = "MiCasa Residence";
        document.getElementById("roomsTitle").innerText = "Rooms & Golf Suites";
        // Pour chaque chambre
        document.getElementById("book1").innerHTML = "<a href='rooms2.html'>Book</a>";
        document.getElementById("price1").innerHTML = "<a href='room-details.html'>60.000f / Nuit</a>";
        document.getElementById("roomTitle1").innerHTML = "<a href='room-details.html'>Junior Suite</a>";
        document.getElementById("details1").innerHTML = "Details <i class='ti-arrow-right'></i>";
        document.getElementById("book2").innerHTML = "<a href='rooms2.html'>Book</a>";
        document.getElementById("price2").innerHTML = "<a href='room-details.html'>60.000f / Nuit</a>";
        document.getElementById("roomTitle2").innerHTML = "<a href='room-details.html'>Junior Suite</a>";
        document.getElementById("details2").innerHTML = "Details <i class='ti-arrow-right'></i>";
        document.getElementById("book3").innerHTML = "<a href='rooms2.html'>Book</a>";
        document.getElementById("price3").innerHTML = "<a href='room-details.html'>60.000f / Nuit</a>";
        document.getElementById("roomTitle3").innerHTML = "<a href='room-details.html'>Junior Suite</a>";
        document.getElementById("details3").innerHTML = "Details <i class='ti-arrow-right'></i>";
        document.getElementById("book4").innerHTML = "<a href='rooms2.html'>Book</a>";
        document.getElementById("price4").innerHTML = "<a href='room-details.html'>80.000f / Nuit</a>";
        document.getElementById("roomTitle4").innerHTML = "<a href='room-details.html'>Senior Suite</a>";
        document.getElementById("details4").innerHTML = "Details <i class='ti-arrow-right'></i>";
        document.getElementById("book5").innerHTML = "<a href='rooms2.html'>Book</a>";
        document.getElementById("price5").innerHTML = "<a href='room-details.html'>80.000f / Nuit</a>";
        document.getElementById("roomTitle5").innerHTML = "<a href='room-details.html'>Senior Suite</a>";
        document.getElementById("details5").innerHTML = "Details <i class='ti-arrow-right'></i>";

        // CHAMBRE ACI
        document.getElementById("residenceSubtitle").innerText = "Résidence MiCasa";
        document.getElementById("roomsTitle").innerText = "Chambres & Suites ACI";
        // Pour chaque chambre
        document.getElementById("bookACI1").innerHTML = "<a href='rooms2.html'>Reserver</a>";
        document.getElementById("priceACI1").innerHTML = "<a href='room-details.html'>110 000fcfa / Nuit</a>";
        document.getElementById("roomTitleACI1").innerHTML = "<a href='room-details.html'>Suite Junior</a>";
        document.getElementById("detailsACI1").innerHTML = "Détails <i class='ti-arrow-right'></i>";
        document.getElementById("bookACI2").innerHTML = "<a href='rooms2.html'>Reserver</a>";
        document.getElementById("priceACI2").innerHTML = "<a href='room-details.html'>110 000fcfa / Nuit</a>";
        document.getElementById("roomTitleACI2").innerHTML = "<a href='room-details.html'>Suite Junior</a>";
        document.getElementById("detailsACI2").innerHTML = "Détails <i class='ti-arrow-right'></i>";
        document.getElementById("bookACI3").innerHTML = "<a href='rooms2.html'>Reserver</a>";
        document.getElementById("priceACI3").innerHTML = "<a href='room-details.html'>110 000fcfa / Nuit</a>";
        document.getElementById("roomTitleACI3").innerHTML = "<a href='room-details.html'>Suite Junior</a>";
        document.getElementById("detailsACI3").innerHTML = "Détails <i class='ti-arrow-right'></i>";
        document.getElementById("bookACI4").innerHTML = "<a href='rooms2.html'>Reserver</a>";
        document.getElementById("priceACI4").innerHTML = "<a href='room-details.html'>175.000f / Nuit</a>";
        document.getElementById("roomTitleACI4").innerHTML = "<a href='room-details.html'>Suite Senior</a>";
        document.getElementById("detailsACI4").innerHTML = "Détails <i class='ti-arrow-right'></i>";
        document.getElementById("bookACI5").innerHTML = "<a href='rooms2.html'>Reserver</a>";
        document.getElementById("priceACI5").innerHTML = "<a href='room-details.html'>175.000f / Nuit</a>";
        document.getElementById("roomTitleACI5").innerHTML = "<a href='room-details.html'>Suite Senior</a>";
        document.getElementById("detailsACI5").innerHTML = "Détails <i class='ti-arrow-right'></i>";

        // residence micasa
        document.getElementById("aboutSubtitle").innerText = "Résidence MiCasa";
        document.getElementById("aboutTitle").innerText = "Découvrez l’élégance et le confort absolus";
        document.getElementById("aboutDescription1").innerText = "Bienvenue dans votre espace de confort et de raffinement au cœur de l’Afrique. À Micasa, nous vous proposons des appart’hôtels haut de gamme, conçus pour répondre aux attentes des voyageurs d’affaires et de ceux en quête de sérénité. Nos appartements meublés allient le style moderne aux influences locales, créant un environnement chaleureux et fonctionnel.";
        document.getElementById("aboutDescription2").innerText = "Profitez de nos services personnalisés pour un séjour sans souci, avec un personnel attentif et disponible 24/7, des espaces de réunion modernes, et des installations de bien-être pour une relaxation totale.";
        document.getElementById("reservationText").innerText = "Réservez dès maintenant";
        document.getElementById("reservationPhone").innerText = "+223 20 29 08 08";
        document.getElementById("reservationPhone").innerText = "+223 20 29 08 09";

        // tete
        // Français
        document.getElementById("label_location").innerText = "Choisir";
        document.getElementById("label_arrival").innerText = "Arrivée";
        document.getElementById("label_departure").innerText = "Départ";
        document.getElementById("label_adults").innerText = "Adultes";
        document.getElementById("label_children").innerText = "Enfants";
        document.getElementById("label_rooms").innerText = "Chambres";
        document.querySelector(".btn-form1-submit").innerText = "Reserver";

        // en tete
        document.getElementById('slide1-title').innerText = "Hôtel de luxe et meilleur complexe hôtelier";
        document.getElementById('slide1-subtitle').innerText = "Profitez d'une expérience de luxe";
        document.getElementById('slide1-button').innerText = "Chambres & Suites";
        document.getElementById('slide2-title').innerText = "Endroit unique pour se détendre et profiter";
        document.getElementById('slide2-subtitle').innerText = "La base parfaite pour vous";
        document.getElementById('slide2-button').innerText = "Chambres & Suites";
        document.getElementById('slide3-title').innerText = "L'expérience de luxe ultime";
        document.getElementById('slide3-subtitle').innerText = "Profitez des meilleurs moments de la vie";
        document.getElementById('slide3-button').innerText = "Chambres & Suites";
        document.getElementById('reservation-phone').innerText = "+223 20 29 08 07";
        document.getElementById('reservation-label').innerText = "Réservation";
        
    }
}
