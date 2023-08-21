const imgPath = 'images/projets/maquettes/';

const projects = [
    {
        title: "Sophie-Bluel architecte d'interieur",
        desc: "Développement de la partie front-end d'un site pour une architecte d'intérieur, avec la gestion des données grâce à des requêtes API. Connexion de l'utilisateur en récupérant un token d'authentification, récupération / création / modification et suppression des travaux. Puis gestion / affichage dynamique de ces données (affichage des travaux, création d'une logique de filtrage). Projet réalisé dans le cadre de ma formation chez OpenClassRooms.",
        tech: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        mainImg: 'images/projets/images-cards/Sophie-Bluel.webp',
        imgs: [
            `${imgPath}Portfolio-Sophie-Bluel/home.webp`,
            `${imgPath}Portfolio-Sophie-Bluel/edit-home.webp`,
            `${imgPath}Portfolio-Sophie-Bluel/login.webp`,
            `${imgPath}Portfolio-Sophie-Bluel/empty-modal.webp`,
            `${imgPath}Portfolio-Sophie-Bluel/full-modal.webp`
        ]
    },
    {
        title: "Nina Carducci Photographie",
        desc: "Restauration d'un site complet pour optimiser la performance, l'accessibilité et le référencement naturel (SEO). Récupération du code entier en supprimant les librairies trop lourdes au profit d'un code en Javascript vanilla, création de microdonées grâce à Schema.org pour le référencement local. Projet réalisé dans le cadre de ma formation chez OpenClassRooms.",
        tech: [
            'JavaScript',
            'Google Light House',
            'Google Rich Snippet',
            'Wave'
        ],
        mainImg: 'images/projets/images-cards/Nina-Carducci.webp',
        imgs: [
            `${imgPath}Nina-Carducci/page.webp`,
            `${imgPath}Nina-Carducci/modale.webp`,
            `${imgPath}Nina-Carducci/lighthouse.webp`
        ]
    },
    {
        title: "Kasa",
        desc: "Développement de la partie front-end d'un site de location de biens immobiliers, avec gestion / affichage des données. Création de composants React, routes, state et context management. Projet réalisé dans le cadre de ma formation chez OpenClassRooms.",
        tech: [
            'React',
            'SASS'
        ],
        mainImg: 'images/projets/images-cards/Kasa.webp',
        imgs: [
            `${imgPath}Kasa/D_Home.webp`,
            `${imgPath}Kasa/D_Fiche-Logement.webp`,
            `${imgPath}Kasa/D_404.webp`,
            `${imgPath}Kasa/D_A-Propos.webp`,
            `${imgPath}Kasa/M_Home.webp`,
            `${imgPath}Kasa/M_Fiche-Logement.webp`
        ]
    },
    {
        title: "Mon Vieux Grimoire",
        desc: "Création d'un serveur Express et d'une API grâce à Node Js gérant des requêtes CRUD (create, read, update, delete). Utilisation d'une base de données MongoDB grace à des schémas de données. Gestion des erreurs, création d'un système d'inscription / connexion utilisateur puis implementation de la sécurité grace à json web token et d'une logique d'authentification, hashage des mots de passe enregistrée en base de données. Projet réalisé dans le cadre de ma formation chez OpenClassRooms.",
        tech: [
            'Node',
            'Express',
            'MongoDB'
        ],
        mainImg: 'images/projets/images-cards/MVG.webp',
        imgs: [
            `${imgPath}Mon-vieux-grimoire/Signup.webp`,
            `${imgPath}Mon-vieux-grimoire/accueil.webp`,
            `${imgPath}Mon-vieux-grimoire/Single-livre-admin.webp`,
            `${imgPath}Mon-vieux-grimoire/ajout-livre.webp`
        ]
    },
]

export default projects;