// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav__link');
const quoteBtn = document.getElementById('quote-btn');
const quoteFormContainer = document.getElementById('quote-form-container');
const quoteForm = document.getElementById('quote-form');
const header = document.querySelector('.header');

// Language system variables
let currentLanguage = 'en';

// Simple translations object
const translations = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About Us',
        'nav.services': 'Services',
        'nav.portfolio': 'Portfolio',
        'nav.contact': 'Contact',
        'nav.free_estimate': 'Free Estimate',
        'hero.subtitle': 'Your Reliable Partner in Belgium',
        'hero.title1': 'Professional Roof Installation &',
        'hero.title2': 'Repair',
        'hero.description': 'Over 15 years of experience working with roofs in Belgium. We use only quality materials and provide warranty on all types of work. From simple repairs to complete installation of new roofing.',
        'hero.btn_quote': 'Get Free Quote',
        'hero.btn_services': 'Our Services',
        'contact.call_now': 'Call Now',
        'contact.write_to_us': 'Write to Us',
        'contact.visit_office': 'Visit Our Office',
        'services.subtitle': 'Our Services',
        'services.title': 'Comprehensive Solutions for Your Roofing',
        'services.description': 'We offer a full range of services for installation, repair and maintenance of roofing systems',
        'services.installation.title': 'New Roof Installation',
        'services.installation.description': 'Professional roof installation using modern materials: tiles, metal roofing, bitumen shingles, membrane roofing.',
        'services.repair.title': 'Roof Repair',
        'services.repair.description': 'Quick repair of leaks, replacement of damaged elements, restoration of waterproofing and elimination of any roof defects.',
        'services.storm.title': 'Storm Damage Repair',
        'services.storm.description': 'Emergency repairs after storms, hail and other weather conditions. We work with insurance companies for cost compensation.',
        'services.financing.title': 'Financing & Insurance',
        'services.financing.description': 'We help with insurance claim processing, offer flexible payment terms and provide financing consultation.',
        'services.learn_more': 'Learn More',
        'advantages.subtitle': 'Why Choose Us',
        'advantages.title': 'Advantages of Working with RoofMaster',
        'advantages.experienced.title': 'Experienced Professionals',
        'advantages.experienced.description': 'Our team has over 15 years of experience working with roofing systems of various complexity.',
        'advantages.quality.title': 'Quality Workmanship',
        'advantages.quality.description': 'We use only proven materials from leading European manufacturers.',
        'advantages.schedule.title': 'Flexible Schedule',
        'advantages.schedule.description': 'We adapt to your schedule and perform work at a time convenient for you.',
        'advantages.prices.title': 'Affordable Prices',
        'advantages.prices.description': 'Competitive prices for all types of work without hidden fees and additional costs.',
        'advantages.guarantee.title': 'Quality Guarantee',
        'advantages.guarantee.description': 'We provide extended warranty on all types of work and materials used.',
        'advantages.support.title': '24/7 Support',
        'advantages.support.description': 'Emergency service works 24/7 to resolve urgent roofing issues.',
        'portfolio.subtitle': 'Our Projects',
        'portfolio.title': 'Our Work Results Speak for Themselves',
        'portfolio.btn_quote': 'Get Free Quote',
        'portfolio.btn_services': 'View Services',
        'portfolio.project1.title': 'Metal Roofing Installation in Brussels',
        'portfolio.project1.description': 'Complete roof installation for a private house using premium metal roofing.',
        'portfolio.project1.category': 'Installation',
        'portfolio.project2.title': 'Tile Roof Repair in Antwerp',
        'portfolio.project2.description': 'Comprehensive repair of a historic building with restoration of authentic appearance.',
        'portfolio.project2.category': 'Repair',
        'quote.title': 'Need a Free Estimate?',
        'quote.description': 'Leave a request and our specialist will conduct a free inspection of your roof and provide a detailed cost proposal within 24 hours.',
        'quote.btn_quote': 'Get Free Quote',
        'quote.btn_call': 'Call Now',
        'quote.form.title': 'Free Estimate',
        'quote.form.name': 'Full Name*',
        'quote.form.email': 'Email Address*',
        'quote.form.phone': 'Phone Number*',
        'quote.form.subject': 'Subject*',
        'quote.form.message': 'Describe your problem or needs*',
        'quote.form.submit': 'Send Request',
        'quote.form.required': '* Required Fields',
        'about.subtitle': 'About Us',
        'about.title': 'A Team of Reliable and Experienced Professionals',
        'about.description1': 'RoofMaster is a team of professionals with many years of experience working in the Belgian roofing market. We specialize in all types of roofing systems and guarantee high quality work execution.',
        'about.description2': 'Our mission is to provide each client with a reliable and durable roof that will protect your home for many years. We constantly monitor new technologies and materials to offer the best solutions.',
        'about.stats.projects': 'Completed Projects',
        'about.stats.experience': 'Years of Experience',
        'about.stats.support': 'Customer Support',
        'about.btn_more': 'Learn More About Our Company',
        'footer.description': 'Professional roof installation and repair services in Belgium. We guarantee quality and reliability.',
        'footer.contact.title': 'Contact Information',
        'footer.contact.directions': 'Get Directions',
        'footer.links.title': 'Quick Links',
        'footer.services.title': 'Our Services',
        'footer.services.installation': 'Roof Installation',
        'footer.services.repair': 'Roof Repair',
        'footer.services.storm': 'Storm Damage Repair',
        'footer.services.insurance': 'Insurance',
        'footer.services.estimate': 'Free Estimate',
        'footer.copyright': '© 2024 RoofMaster Belgium. All rights reserved.',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Use',
        'contact.subtitle': 'Get in Touch',
        'contact.title': 'Contact Us Today',
        'contact.description': 'Ready to start your roofing project? Contact us for a free consultation and estimate.',
        'contact.address.title': 'Our Office',
        'contact.address.text': 'Brussels, Belgium',
        'contact.phone.title': 'Call Us',
        'contact.phone.text': '+32 12 345 67 89',
        'contact.email.title': 'Email Us',
        'contact.email.text': 'info@roofmaster.be',
        'contact.hours.title': 'Working Hours',
        'contact.hours.text': 'Mon-Fri: 8:00-18:00<br>Sat: 9:00-15:00<br>Sun: Emergency only',
        'contact.form.title': 'Send us a Message',
        'contact.form.name': 'Full Name*',
        'contact.form.email': 'Email Address*',
        'contact.form.phone': 'Phone Number',
        'contact.form.subject': 'Subject*',
        'contact.form.message': 'Your Message*',
        'contact.form.submit': 'Send Message',
        'message.success': 'Thank you! Your request has been successfully submitted. We will contact you soon.',
        'message.sending': 'Sending...',
        'message.loading': 'Loading website...'
    },
    nl: {
        'nav.home': 'Home',
        'nav.about': 'Over Ons',
        'nav.services': 'Diensten',
        'nav.portfolio': 'Portfolio',
        'nav.contact': 'Contact',
        'nav.free_estimate': 'Gratis Offerte',
        'hero.subtitle': 'Uw Betrouwbare Partner in België',
        'hero.title1': 'Professionele Dakinstallatie &',
        'hero.title2': 'Reparatie',
        'hero.description': 'Meer dan 15 jaar ervaring met daken in België. We gebruiken alleen kwaliteitsmaterialen en bieden garantie op alle soorten werk. Van eenvoudige reparaties tot complete installatie van nieuwe daken.',
        'hero.btn_quote': 'Gratis Offerte',
        'hero.btn_services': 'Onze Diensten',
        'contact.call_now': 'Bel Nu',
        'contact.write_to_us': 'Schrijf Ons',
        'contact.visit_office': 'Bezoek Ons Kantoor',
        'services.subtitle': 'Onze Diensten',
        'services.title': 'Uitgebreide Oplossingen voor Uw Dak',
        'services.description': 'We bieden een volledig scala aan diensten voor installatie, reparatie en onderhoud van daksystemen',
        'services.installation.title': 'Nieuwe Dakinstallatie',
        'services.installation.description': 'Professionele dakinstallatie met moderne materialen: tegels, metalen daken, bitumen shingles, membraan daken.',
        'services.repair.title': 'Dakreparatie',
        'services.repair.description': 'Snelle reparatie van lekken, vervanging van beschadigde elementen, herstel van waterdichtheid en eliminatie van dakdefecten.',
        'services.storm.title': 'Stormschade Reparatie',
        'services.storm.description': 'Noodreparaties na stormen, hagel en andere weersomstandigheden. We werken samen met verzekeringsmaatschappijen voor kostenvergoeding.',
        'services.financing.title': 'Financiering & Verzekering',
        'services.financing.description': 'We helpen bij het verwerken van verzekeringsclaims, bieden flexibele betalingsvoorwaarden en adviseren over financiering.',
        'services.learn_more': 'Meer Informatie',
        'advantages.subtitle': 'Waarom Kiezen voor Ons',
        'advantages.title': 'Voordelen van Samenwerken met RoofMaster',
        'advantages.experienced.title': 'Ervaren Professionals',
        'advantages.experienced.description': 'Ons team heeft meer dan 15 jaar ervaring met daksystemen van verschillende complexiteit.',
        'advantages.quality.title': 'Kwaliteitswerk',
        'advantages.quality.description': 'We gebruiken alleen bewezen materialen van toonaangevende Europese fabrikanten.',
        'advantages.schedule.title': 'Flexibel Schema',
        'advantages.schedule.description': 'We passen ons aan uw schema aan en voeren werk uit op een tijdstip dat u uitkomt.',
        'advantages.prices.title': 'Voordelige Prijzen',
        'advantages.prices.description': 'Concurrerende prijzen voor alle soorten werk zonder verborgen kosten en extra kosten.',
        'advantages.guarantee.title': 'Kwaliteitsgarantie',
        'advantages.guarantee.description': 'We bieden uitgebreide garantie op alle soorten werk en gebruikte materialen.',
        'advantages.support.title': '24/7 Ondersteuning',
        'advantages.support.description': 'Noodservice werkt 24/7 om urgente dakproblemen op te lossen.',
        'portfolio.subtitle': 'Onze Projecten',
        'portfolio.title': 'Onze Werkresultaten Spreken voor Zich',
        'portfolio.btn_quote': 'Gratis Offerte',
        'portfolio.btn_services': 'Bekijk Diensten',
        'portfolio.project1.title': 'Metalen Dakinstallatie in Brussel',
        'portfolio.project1.description': 'Volledige dakinstallatie voor een privéwoning met premium metalen dakbedekking.',
        'portfolio.project1.category': 'Installatie',
        'portfolio.project2.title': 'Tegeldakreparatie in Antwerpen',
        'portfolio.project2.description': 'Uitgebreide reparatie van een historisch gebouw met herstel van authentiek uiterlijk.',
        'portfolio.project2.category': 'Reparatie',
        'quote.title': 'Heeft u een Gratis Offerte Nodig?',
        'quote.description': 'Laat een verzoek achter en onze specialist voert een gratis inspectie van uw dak uit en biedt binnen 24 uur een gedetailleerde kostenraming.',
        'quote.btn_quote': 'Gratis Offerte',
        'quote.btn_call': 'Bel Nu',
        'quote.form.title': 'Gratis Offerte',
        'quote.form.name': 'Volledige Naam*',
        'quote.form.email': 'E-mailadres*',
        'quote.form.phone': 'Telefoonnummer*',
        'quote.form.subject': 'Onderwerp*',
        'quote.form.message': 'Beschrijf uw probleem of behoeften*',
        'quote.form.submit': 'Verstuur Verzoek',
        'quote.form.required': '* Verplichte Velden',
        'about.subtitle': 'Over Ons',
        'about.title': 'Een Team van Betrouwbare en Ervaren Professionals',
        'about.description1': 'RoofMaster is een team van professionals met jarenlange ervaring in de Belgische dakmarkt. We zijn gespecialiseerd in alle soorten daksystemen en garanderen hoogwaardige werkuitvoering.',
        'about.description2': 'Onze missie is om elke klant een betrouwbaar en duurzaam dak te bieden dat uw huis vele jaren zal beschermen. We monitoren voortdurend nieuwe technologieën en materialen om de beste oplossingen te bieden.',
        'about.stats.projects': 'Voltooide Projecten',
        'about.stats.experience': 'Jaren Ervaring',
        'about.stats.support': 'Klantenservice',
        'about.btn_more': 'Meer Weten over Ons Bedrijf',
        'footer.description': 'Professionele dakinstallatie en reparatiediensten in België. We garanderen kwaliteit en betrouwbaarheid.',
        'footer.contact.title': 'Contactinformatie',
        'footer.contact.directions': 'Routebeschrijving',
        'footer.links.title': 'Snelle Links',
        'footer.services.title': 'Onze Diensten',
        'footer.services.installation': 'Dakinstallatie',
        'footer.services.repair': 'Dakreparatie',
        'footer.services.storm': 'Stormschade Reparatie',
        'footer.services.insurance': 'Verzekering',
        'footer.services.estimate': 'Gratis Offerte',
        'footer.copyright': '© 2024 RoofMaster België. Alle rechten voorbehouden.',
        'footer.privacy': 'Privacybeleid',
        'footer.terms': 'Gebruiksvoorwaarden',
        'contact.subtitle': 'Neem Contact Op',
        'contact.title': 'Contacteer Ons Vandaag',
        'contact.description': 'Klaar om uw dakproject te starten? Neem contact met ons op voor een gratis consultatie en offerte.',
        'contact.address.title': 'Ons Kantoor',
        'contact.address.text': 'Brussel, België',
        'contact.phone.title': 'Bel Ons',
        'contact.phone.text': '+32 12 345 67 89',
        'contact.email.title': 'E-mail Ons',
        'contact.email.text': 'info@roofmaster.be',
        'contact.hours.title': 'Werkuren',
        'contact.hours.text': 'Ma-Vr: 8:00-18:00<br>Za: 9:00-15:00<br>Zo: Alleen noodgevallen',
        'contact.form.title': 'Stuur Ons een Bericht',
        'contact.form.name': 'Volledige Naam*',
        'contact.form.email': 'E-mailadres*',
        'contact.form.phone': 'Telefoonnummer',
        'contact.form.subject': 'Onderwerp*',
        'contact.form.message': 'Uw Bericht*',
        'contact.form.submit': 'Verstuur Bericht',
        'message.success': 'Bedankt! Uw verzoek is succesvol verzonden. We nemen binnenkort contact met u op.',
        'message.sending': 'Verzenden...',
        'message.loading': 'Website laden...'
    },
    fr: {
        'nav.home': 'Accueil',
        'nav.about': 'À Propos',
        'nav.services': 'Services',
        'nav.portfolio': 'Portfolio',
        'nav.contact': 'Contact',
        'nav.free_estimate': 'Devis Gratuit',
        'hero.subtitle': 'Votre Partenaire de Confiance en Belgique',
        'hero.title1': 'Installation & Réparation de Toiture',
        'hero.title2': 'Professionnelle',
        'hero.description': 'Plus de 15 ans d\'expérience dans le domaine des toitures en Belgique. Nous utilisons uniquement des matériaux de qualité et offrons une garantie sur tous types de travaux. Des réparations simples à l\'installation complète de nouvelles toitures.',
        'hero.btn_quote': 'Devis Gratuit',
        'hero.btn_services': 'Nos Services',
        'contact.call_now': 'Appeler Maintenant',
        'contact.write_to_us': 'Nous Écrire',
        'contact.visit_office': 'Visiter Notre Bureau',
        'services.subtitle': 'Nos Services',
        'services.title': 'Solutions Complètes pour Votre Toiture',
        'services.description': 'Nous offrons une gamme complète de services pour l\'installation, la réparation et l\'entretien des systèmes de toiture',
        'services.installation.title': 'Installation de Nouvelle Toiture',
        'services.installation.description': 'Installation professionnelle de toiture utilisant des matériaux modernes : tuiles, toiture métallique, bardeaux bitumés, toiture membrane.',
        'services.repair.title': 'Réparation de Toiture',
        'services.repair.description': 'Réparation rapide des fuites, remplacement des éléments endommagés, restauration de l\'étanchéité et élimination de tout défaut de toiture.',
        'services.storm.title': 'Réparation des Dégâts d\'Orage',
        'services.storm.description': 'Réparations d\'urgence après tempêtes, grêle et autres conditions météorologiques. Nous travaillons avec les compagnies d\'assurance pour la compensation des coûts.',
        'services.financing.title': 'Financement & Assurance',
        'services.financing.description': 'Nous aidons au traitement des réclamations d\'assurance, offrons des conditions de paiement flexibles et fournissons des conseils en financement.',
        'services.learn_more': 'En Savoir Plus',
        'advantages.subtitle': 'Pourquoi Nous Choisir',
        'advantages.title': 'Avantages de Travailler avec RoofMaster',
        'advantages.experienced.title': 'Professionnels Expérimentés',
        'advantages.experienced.description': 'Notre équipe a plus de 15 ans d\'expérience dans les systèmes de toiture de complexité variée.',
        'advantages.quality.title': 'Travail de Qualité',
        'advantages.quality.description': 'Nous utilisons uniquement des matériaux éprouvés des fabricants européens leaders.',
        'advantages.schedule.title': 'Horaire Flexible',
        'advantages.schedule.description': 'Nous nous adaptons à votre horaire et effectuons les travaux à un moment qui vous convient.',
        'advantages.prices.title': 'Prix Abordables',
        'advantages.prices.description': 'Prix compétitifs pour tous types de travaux sans frais cachés et coûts supplémentaires.',
        'advantages.guarantee.title': 'Garantie Qualité',
        'advantages.guarantee.description': 'Nous offrons une garantie étendue sur tous types de travaux et matériaux utilisés.',
        'advantages.support.title': 'Support 24/7',
        'advantages.support.description': 'Service d\'urgence fonctionne 24/7 pour résoudre les problèmes urgents de toiture.',
        'portfolio.subtitle': 'Nos Projets',
        'portfolio.title': 'Nos Résultats Parlent d\'Eux-Mêmes',
        'portfolio.btn_quote': 'Devis Gratuit',
        'portfolio.btn_services': 'Voir Services',
        'portfolio.project1.title': 'Installation de Toiture Métallique à Bruxelles',
        'portfolio.project1.description': 'Installation complète de toiture pour une maison privée utilisant une toiture métallique premium.',
        'portfolio.project1.category': 'Installation',
        'portfolio.project2.title': 'Réparation de Toiture en Tuiles à Anvers',
        'portfolio.project2.description': 'Réparation complète d\'un bâtiment historique avec restauration de l\'apparence authentique.',
        'portfolio.project2.category': 'Réparation',
        'quote.title': 'Besoin d\'un Devis Gratuit ?',
        'quote.description': 'Laissez une demande et notre spécialiste effectuera une inspection gratuite de votre toiture et fournira une proposition de coût détaillée dans les 24 heures.',
        'quote.btn_quote': 'Devis Gratuit',
        'quote.btn_call': 'Appeler Maintenant',
        'quote.form.title': 'Devis Gratuit',
        'quote.form.name': 'Nom Complet*',
        'quote.form.email': 'Adresse E-mail*',
        'quote.form.phone': 'Numéro de Téléphone*',
        'quote.form.subject': 'Sujet*',
        'quote.form.message': 'Décrivez votre problème ou vos besoins*',
        'quote.form.submit': 'Envoyer Demande',
        'quote.form.required': '* Champs Obligatoires',
        'about.subtitle': 'À Propos',
        'about.title': 'Une Équipe de Professionnels Fiables et Expérimentés',
        'about.description1': 'RoofMaster est une équipe de professionnels avec de nombreuses années d\'expérience sur le marché belge de la toiture. Nous nous spécialisons dans tous types de systèmes de toiture et garantissons une exécution de travail de haute qualité.',
        'about.description2': 'Notre mission est de fournir à chaque client une toiture fiable et durable qui protégera votre maison pendant de nombreuses années. Nous surveillons constamment les nouvelles technologies et matériaux pour offrir les meilleures solutions.',
        'about.stats.projects': 'Projets Terminés',
        'about.stats.experience': 'Années d\'Expérience',
        'about.stats.support': 'Support Client',
        'about.btn_more': 'En Savoir Plus sur Notre Entreprise',
        'footer.description': 'Services professionnels d\'installation et de réparation de toiture en Belgique. Nous garantissons qualité et fiabilité.',
        'footer.contact.title': 'Informations de Contact',
        'footer.contact.directions': 'Obtenir l\'Itinéraire',
        'footer.links.title': 'Liens Rapides',
        'footer.services.title': 'Nos Services',
        'footer.services.installation': 'Installation de Toiture',
        'footer.services.repair': 'Réparation de Toiture',
        'footer.services.storm': 'Réparation des Dégâts d\'Orage',
        'footer.services.insurance': 'Assurance',
        'footer.services.estimate': 'Devis Gratuit',
        'footer.copyright': '© 2024 RoofMaster Belgique. Tous droits réservés.',
        'footer.privacy': 'Politique de Confidentialité',
        'footer.terms': 'Conditions d\'Utilisation',
        'contact.subtitle': 'Contactez-Nous',
        'contact.title': 'Contactez-Nous Aujourd\'hui',
        'contact.description': 'Prêt à commencer votre projet de toiture ? Contactez-nous pour une consultation gratuite et un devis.',
        'contact.address.title': 'Notre Bureau',
        'contact.address.text': 'Bruxelles, Belgique',
        'contact.phone.title': 'Appelez-Nous',
        'contact.phone.text': '+32 12 345 67 89',
        'contact.email.title': 'Écrivez-Nous',
        'contact.email.text': 'info@roofmaster.be',
        'contact.hours.title': 'Heures de Travail',
        'contact.hours.text': 'Lun-Ven: 8:00-18:00<br>Sam: 9:00-15:00<br>Dim: Urgences seulement',
        'contact.form.title': 'Envoyez-Nous un Message',
        'contact.form.name': 'Nom Complet*',
        'contact.form.email': 'Adresse E-mail*',
        'contact.form.phone': 'Numéro de Téléphone',
        'contact.form.subject': 'Sujet*',
        'contact.form.message': 'Votre Message*',
        'contact.form.submit': 'Envoyer Message',
        'message.success': 'Merci ! Votre demande a été envoyée avec succès. Nous vous contacterons bientôt.',
        'message.sending': 'Envoi en cours...',
        'message.loading': 'Chargement du site web...'
    }
};

// Simple translate function
function translate(key, lang = currentLanguage) {
    return translations[lang] && translations[lang][key] ? translations[lang][key] : translations['en'][key] || key;
}

// Update page language
function updatePageLanguage(lang) {
    currentLanguage = lang;
    
    // Update all elements with data-translate attribute
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = translate(key, lang);
        
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translation;
        } else {
            element.textContent = translation;
        }
    });
    
    // Update all elements with data-translate-placeholder attribute
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        const translation = translate(key, lang);
        element.placeholder = translation;
    });
    
    // Update current language indicator
    const currentLangElement = document.getElementById('current-lang');
    if (currentLangElement) {
        const langCodes = { 'en': 'EN', 'nl': 'NL', 'fr': 'FR' };
        currentLangElement.textContent = langCodes[lang] || 'EN';
    }
    
    // Update active language option
    const languageOptions = document.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        }
    });
    
    // Save language preference
    localStorage.setItem('preferred-language', lang);
}

// Mobile Navigation Toggle
function toggleMobileNav() {
    navMenu.classList.toggle('active');
    const icon = navToggle.querySelector('i');
    
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

// Close mobile nav when clicking on a link
function closeMobileNav() {
    navMenu.classList.remove('active');
    const icon = navToggle.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
}

// Header scroll effect
function handleHeaderScroll() {
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = 'var(--white-color)';
        header.style.backdropFilter = 'none';
    }
}

// Active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const correspondingLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add active class to current link
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });
}

// Smooth scroll for anchor links
function smoothScrollToSection(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    
    // Special handling for home link
    if (targetId === 'home' || targetId === '') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        closeMobileNav();
        return;
    }
    
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
        const headerHeight = header.offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Close mobile nav if open
        closeMobileNav();
    }
}

// Show/Hide quote form
function toggleQuoteForm() {
    quoteFormContainer.classList.toggle('active');
    
    if (quoteFormContainer.classList.contains('active')) {
        // Scroll to form
        quoteFormContainer.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
        
        // Focus on first input
        setTimeout(() => {
            const firstInput = quoteFormContainer.querySelector('.form__input');
            if (firstInput) {
                firstInput.focus();
            }
        }, 300);
    }
}

// Form submission handler
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(quoteForm);
    const formObject = {};
    
    // Convert FormData to object
    for (let [key, value] of formData.entries()) {
        formObject[key] = value;
    }
    
    // Add loading state
    const submitBtn = quoteForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + translate('message.sending');
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Success message
        showNotification(translate('message.success'), 'success');
        
        // Reset form
        quoteForm.reset();
        quoteFormContainer.classList.remove('active');
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        console.log('Form submitted:', formObject);
    }, 2000);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <div class="notification__content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="notification__close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10B981' : '#3B82F6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 9999;
        max-width: 400px;
        transform: translateX(100%);
        transition: transform 0.3s ease-in-out;
    `;
    
    // Add notification styles
    const notificationStyles = `
        .notification__content {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }
        .notification__close {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            padding: 0.25rem;
            margin-left: auto;
        }
        .notification__close:hover {
            opacity: 0.8;
        }
    `;
    
    // Add styles to head if not already added
    if (!document.querySelector('#notification-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'notification-styles';
        styleSheet.textContent = notificationStyles;
        document.head.appendChild(styleSheet);
    }
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button handler
    const closeBtn = notification.querySelector('.notification__close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Intersection Observer for animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.service__card, .advantage__card, .portfolio__card, .section__header'
    );
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Phone number formatting
function formatPhoneNumber(input) {
    // Remove all non-digit characters
    let value = input.value.replace(/\D/g, '');
    
    // Limit to 12 digits (including country code)
    if (value.length > 12) {
        value = value.slice(0, 12);
    }
    
    // Format as +32 XX XXX XX XX for Belgian numbers
    if (value.startsWith('32')) {
        if (value.length >= 2) value = value.replace(/^32/, '+32 ');
        if (value.length >= 6) value = value.replace(/(\+32 \d{2})(\d)/, '$1 $2');
        if (value.length >= 10) value = value.replace(/(\+32 \d{2} \d{3})(\d)/, '$1 $2');
        if (value.length >= 13) value = value.replace(/(\+32 \d{2} \d{3} \d{2})(\d)/, '$1 $2');
    } else if (value.length > 0 && !value.startsWith('32')) {
        // Add +32 prefix for Belgian numbers
        value = '+32 ' + value;
    }
    
    input.value = value;
}

// Email validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Form validation
function validateForm() {
    const inputs = quoteForm.querySelectorAll('.form__input[required], .form__textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        const value = input.value.trim();
        
        // Remove existing error styling
        input.classList.remove('error');
        
        // Check if field is empty
        if (!value) {
            input.classList.add('error');
            isValid = false;
            return;
        }
        
        // Validate email
        if (input.type === 'email' && !validateEmail(value)) {
            input.classList.add('error');
            isValid = false;
            return;
        }
        
        // Validate phone
        if (input.type === 'tel' && value.length < 10) {
            input.classList.add('error');
            isValid = false;
            return;
        }
    });
    
    return isValid;
}

// Add error styles
function addFormErrorStyles() {
    const errorStyles = `
        .form__input.error,
        .form__textarea.error {
            border-color: #EF4444;
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        }
    `;
    
    if (!document.querySelector('#form-error-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'form-error-styles';
        styleSheet.textContent = errorStyles;
        document.head.appendChild(styleSheet);
    }
}

// Back to top functionality
function createBackToTopButton() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    
    // Styles for back to top button
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: 0 4px 12px rgba(229, 90, 43, 0.3);
        transform: translateY(100px);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(backToTopBtn);
    
    // Show/hide based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.style.transform = 'translateY(0)';
        } else {
            backToTopBtn.style.transform = 'translateY(100px)';
        }
    });
    
    // Scroll to top on click
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    backToTopBtn.addEventListener('mouseenter', () => {
        backToTopBtn.style.background = 'var(--primary-dark)';
        backToTopBtn.style.transform = 'translateY(0) scale(1.1)';
    });
    
    backToTopBtn.addEventListener('mouseleave', () => {
        backToTopBtn.style.background = 'var(--primary-color)';
        backToTopBtn.style.transform = 'translateY(0) scale(1)';
    });
}

// Loading screen
function createLoadingScreen() {
    const loadingScreen = document.createElement('div');
    loadingScreen.id = 'loading-screen';
    loadingScreen.innerHTML = `
        <div class="loading-content">
            <div class="loading-logo">
                <i class="fas fa-home"></i>
                <span>RoofMaster</span>
            </div>
            <div class="loading-spinner"></div>
            <p>${translate('message.loading')}</p>
        </div>
    `;
    
    loadingScreen.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, var(--secondary-color) 0%, var(--secondary-dark) 100%);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.5s ease, visibility 0.5s ease;
    `;
    
    const loadingStyles = `
        .loading-content {
            text-align: center;
        }
        .loading-logo {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 2rem;
            color: var(--primary-color);
        }
        .loading-logo i {
            font-size: 2.5rem;
        }
        .loading-spinner {
            width: 50px;
            height: 50px;
            border: 4px solid rgba(255,255,255,0.3);
            border-top: 4px solid var(--primary-color);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 1rem;
        }
        .loading-content p {
            font-size: 1.1rem;
            opacity: 0.8;
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = loadingStyles;
    document.head.appendChild(styleSheet);
    
    document.body.appendChild(loadingScreen);
    
    // Hide loading screen when page is loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.visibility = 'hidden';
            setTimeout(() => {
                loadingScreen.remove();
            }, 500);
        }, 1000);
    });
}

// Language switcher functionality
function initLanguageSwitcher() {
    const languageBtn = document.getElementById('language-btn');
    const languageDropdown = document.getElementById('language-dropdown');
    const languageSwitcher = document.querySelector('.language-switcher');
    const languageOptions = document.querySelectorAll('.language-option');
    
    console.log('Initializing language switcher...');
    console.log('Elements found:', {
        languageBtn: !!languageBtn,
        languageDropdown: !!languageDropdown,
        languageSwitcher: !!languageSwitcher,
        languageOptions: languageOptions.length
    });
    
    if (languageBtn && languageDropdown && languageSwitcher) {
        console.log('All language switcher elements found - setting up event listeners');
        
        // Toggle dropdown
        languageBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Language button clicked!');
            
            const isActive = languageSwitcher.classList.contains('active');
            console.log('Current state:', isActive ? 'active' : 'inactive');
            
            if (isActive) {
                languageSwitcher.classList.remove('active');
                console.log('Removed active class');
            } else {
                languageSwitcher.classList.add('active');
                console.log('Added active class');
            }
        });
        
        // Handle language selection
        languageOptions.forEach((option, index) => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const selectedLang = option.getAttribute('data-lang');
                console.log(`Language option ${index} clicked:`, selectedLang);
                
                updatePageLanguage(selectedLang);
                languageSwitcher.classList.remove('active');
                console.log('Language changed to:', selectedLang);
            });
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!languageSwitcher.contains(e.target)) {
                languageSwitcher.classList.remove('active');
            }
        });
        
        // Close dropdown on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                languageSwitcher.classList.remove('active');
            }
        });
        
        console.log('Language switcher initialized successfully');
    } else {
        console.error('Language switcher elements not found!');
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Starting initialization...');
    
    // Force scroll to top on page load/refresh
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Initialize language switcher first
    console.log('Initializing language switcher...');
    initLanguageSwitcher();
    
    // Initialize language system
    console.log('Initializing language system...');
    const savedLanguage = localStorage.getItem('preferred-language') || 'en';
    updatePageLanguage(savedLanguage);
    
    // Initialize loading screen
    createLoadingScreen();
    
    // Mobile navigation
    if (navToggle) {
        navToggle.addEventListener('click', toggleMobileNav);
    }
    
    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScrollToSection);
    });
    
    // Quote form toggle
    if (quoteBtn) {
        quoteBtn.addEventListener('click', toggleQuoteForm);
    }
    
    // Form submission
    if (quoteForm) {
        quoteForm.addEventListener('submit', handleFormSubmit);
        
        // Phone number formatting
        const phoneInput = quoteForm.querySelector('input[type="tel"]');
        if (phoneInput) {
            phoneInput.addEventListener('input', function() {
                formatPhoneNumber(this);
            });
        }
        
        // Real-time validation
        const inputs = quoteForm.querySelectorAll('.form__input, .form__textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.hasAttribute('required') && !this.value.trim()) {
                    this.classList.add('error');
                } else {
                    this.classList.remove('error');
                }
            });
            
            input.addEventListener('input', function() {
                this.classList.remove('error');
            });
        });
    }
    
    // Scroll effects
    window.addEventListener('scroll', () => {
        handleHeaderScroll();
        updateActiveNavLink();
    });
    
    // Initialize animations
    initScrollAnimations();
    
    // Add form error styles
    addFormErrorStyles();
    
    // Create back to top button
    createBackToTopButton();
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            closeMobileNav();
        }
    });
    
    // Close quote form when clicking outside
    document.addEventListener('click', (e) => {
        if (quoteFormContainer && quoteFormContainer.classList.contains('active')) {
            if (!quoteFormContainer.contains(e.target) && !quoteBtn.contains(e.target)) {
                quoteFormContainer.classList.remove('active');
            }
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        // Close mobile menu with Escape key
        if (e.key === 'Escape') {
            closeMobileNav();
            if (quoteFormContainer && quoteFormContainer.classList.contains('active')) {
                quoteFormContainer.classList.remove('active');
            }
        }
    });
    
    // Handle resize events
    window.addEventListener('resize', () => {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768) {
            closeMobileNav();
        }
    });
    
    console.log('RoofMaster website initialized successfully!');
});

// Additional scroll to top on window load
window.addEventListener('load', function() {
    // Force scroll to top after everything is loaded
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
});

// Handle browser back/forward navigation
window.addEventListener('pageshow', function(event) {
    // Force scroll to top when page is shown (including back/forward navigation)
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
});

// Performance optimization
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Analytics and tracking (placeholder)
function trackEvent(eventName, eventData = {}) {
    console.log('Event tracked:', eventName, eventData);
    
    // Google Analytics 4 example (uncomment when GA4 is set up)
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', eventName, eventData);
    // }
}

// Track important interactions
document.addEventListener('DOMContentLoaded', function() {
    // Track form submissions
    if (quoteForm) {
        quoteForm.addEventListener('submit', () => {
            trackEvent('form_submit', {
                form_name: 'quote_request'
            });
        });
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${translate('message.sending')}`;
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                // Show success message
                showNotification(translate('message.success'), 'success');
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
    
    // Track button clicks
    const ctaButtons = document.querySelectorAll('.btn--primary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            trackEvent('cta_click', {
                button_text: e.target.textContent.trim(),
                page_location: window.location.href
            });
        });
    });
    
    // Track phone number clicks
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', () => {
            trackEvent('phone_click', {
                phone_number: link.href.replace('tel:', '')
            });
        });
    });
    
    // Track email clicks
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', () => {
            trackEvent('email_click', {
                email_address: link.href.replace('mailto:', '')
            });
        });
    });
});

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateEmail,
        formatPhoneNumber,
        showNotification,
        trackEvent
    };
}
