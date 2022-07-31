var data = {
    langs: ['fr', 'en']
}

var messages = {
    fr: {
        menu: {
            menu1: 'Home',
            menu2: 'A propos',
            menu3: 'Parcours',
            menu4: 'Realisations',
            menu5: 'Blog',
            menu6: 'Contact'
        },
        home: {
            hello: 'Bonjour, Je suis',
            iam: 'Je suis',
            jobs: 'Entrepreneur., Créateur., Voyageur.',
            dev: 'Développeur.'
        },
        about: {
            capacity: 'Mes Capacités',
            entreprenor: 'Entrepreneur',
            entreprenor_desc: 'L\'entreprenariat m\'a intéressé très jeune, dès lors l\'envie de créer des produits et de les vendre à des clients est devenue une évidence pour moi. Ainsi en 2014 j\'ai crée ma première StartUp : Wazunix',
            frontend: 'Développement Front-end',
            frontend_desc: 'L\'aspect visuel des projets est ce qui compte le plus pour les clients, c\'est pourquoi je me suis spécialisé à mes débuts dans la création d\'interfaces dynamiques en Materials Design.',
            backend: 'Développement Backend',
            backend_desc: 'Spécialistes de la création de framework Custom, les intranets d\'entreprises n\'ont plus de secrets pour moi. Ces derniers sont donc faits sur-mesure à une vitesse battante toute concurrence.',
            infra: 'Infrastructure & Devops',
            infra_desc: 'Du logiciel de posts simultanées sur tous les réseaux sociaux en passant par l\'analyse de données BigData sur AWS, je suis un développeur FullStack autant Software que Web.',
            languages: 'Mes langages & Frameworks',
            whoiam: 'Qui suis-je ?',
            iam: 'Je suis',
            ilike: 'J\'aime',
            iam_desc: 'Evan Barberousse, 22 ans et je suis en école d\'ingénieur informatique à Epita. J\'Habite à Louveciennes, non loin de Versailles. Je parle Anglais, Francais, Espagnol, Chinois et les bases en Thai. Je suis travailleur, j\'ai toujours plein de projets et j\'adore les réaliser ! Je suis actuellement Développeur FullStack, spécialisé en JS avec NuxtJS et VueJS, mais aussi en Backend avec Python DRF et GraphQL, enfin je maitrise AWS et GCP ainsi que l\'administration serveur. N\'oubliez pas de les <a href="#portfolio">visualiser</a> ! ',
            ilike_desc: 'L\'informatique, je parle de nombreux langages tel que cité ci-dessus. J\'aime aussi le sport, le Football, le ski ou j\'ai atteint le niveau compétitaire et le karaté ou j\'ai été troisième en championnat de France. Par ailleurs, j\'ai aussi des maitrîses en électronique et mécanique, j\'ai réparé et construit de nombreux Ordinateurs, créé des modules Raspberry pie , construit des accessoires Hi-tech à <a href="http://www.thailande-fr.com/tourisme/29511-pantip-plaza-temple-lelectronique">Pantip Plaza</a> et découvert la-bas de nombreux Gadgets inaccessible en France.',
            ihave: 'J\'ai',
            ihave_desc: 'décidé à 14 ans d\'apprendre les langages de programmation, à 15 ans, j\'ai crée une entreprise de création de site internet dénommée <a href="http://wazunix.fr/"> Wazunix </a>, ce qui m\'a permis de crée de nombreux sites pour des sociétés tel que Ucar, FMA ou CoreForTech. Par la suite, la demande devenant trop importante, je ne pouvais continuer seul. En 2015, j\'ai décidé de créer un systeme de post automatique sur Instagram Mypushup, étant une innovation mondiale, de nombreux clients ont rapidement souhaité collaboré avec nous tel que Microsoft, Adobe, Huawei, Orange, Lagardere, Prisma Media, PSG et bien d\'autres encore...',
            itravel: 'J\'ai voyagé',
            itravel_desc: 'Dans de nombreux pays, plus particuliêrement Asiatique. En effet j\'ai eu l\'occasion de partir 1 an en Thailande dans le cadre de mes études et de vivre 1 an avec une famille chinoise, ces expériences m\'ont permis de mieux comprendre le monde, notamment du point de vue Asiatique qui differe grandement du notre.J\'ai par ailleurs appris le Chinois et le Thailandais afin de réellement m\'intégrer. De plus j\'ai effectué de nombreux voyages afin de découvrir le monde tel que les Emirats Arabe Unis,la Malaysie,l\'Europe du Nord et de l\'Ouest et bien d\'autres encore.'
        },
        career: {
            career: 'Mon Parcours',
            myprojects: 'Mes Réalisations',
            projects: [{
                    date: '2019-2022',
                    name: 'Mybizup devient Cloudby',
                    role: 'Fondateur',
                    desc: 'Innovation mondiale, Création du premier CMS entièrement en Javascript Cloud-first avec Génération de milions de sites internets en instantané dans le cloud de façon serverless sans coût de départ.'
                },
                {
                    date: '2019-2021',
                    name: 'Wazunix',
                    role: 'Fondateur',
                    desc: 'Ajout de nombreux clients tel que Cometik, société d\'édition de sites internet pour les particuliers et professionnels, ou CoreForTech, création du premier systeme de mesure des chauffeurs routiers grâce au battements du coeurs.'
                },
                {
                    date: '2018-2019',
                    name: 'Création de MyBizUp',
                    role: 'Fondateur',
                    desc: 'Création d\'une plateforme de création de sites internet vitrine et e-commerces ainsi qu\'un intranet en 5 minutes pour tous les particuliers. Les produits sont choisis par les particuliers eux-mêmes, tout est personnalisables, nous utilisons un systeme de dropshipping. Tout est GRATUIT !'
                },
                {
                    date: '2017',
                    name: 'Création de MyNetUp',
                    role: 'Fondateur',
                    desc: 'Création d\'un système de posts sur tous les réseaux sociaux depuis son ordinateur ou son smartphone. C\'est une innovation mondiale promise à un belle avenir !'
                },
                {
                    date: '2015-2017',
                    name: 'Développement - Wazunix',
                    role: 'Chef de Projet',
                    desc: 'Après avoir développé une certaine expérience, j\'ai décidé que wazunix devait grandir. Pour cela, nous avons commencé à démarcher des clients et prendre en charges des infrastructures bien plus grandes. Ainsi nous avons crée à ce jour plus de 20 sites dont certains atteignent les 100K visitent par jours. Pour plus d\'informations.'
                },
                {
                    date: '2014-2015',
                    name: 'Création de MyPushUp',
                    role: 'Fondateur',
                    desc: 'Création d\'un système de posts sur Instagram depuis son PC, mac ou Linux. C\'est une innovation mondiale, + de 90 000 Clients dont de grandes sociétés tel que Microsoft, ShowroomPrivée, Mercedes-Benz, Adobe, Orange, Huawei, Prisma Media, PSG, Canal+, FranceTV, Auchan, Decathlon, Haribo, FDJ, Courchevel, le Ministere de la Justice, Action contre la faim et bien plus encore... MyPushUp - 2 Milions de visites'
                },
                {
                    date: '2014',
                    name: 'Création de Wazunix',
                    role: 'Fondateur',
                    desc: 'J\'ai créé mon entreprise de création de sites internet, je faisais le développement, le graphisme, la relation client, le marketing et je mettais en place des équipes et des serveurs. j\'ai crée de nombreux sites pour de nombreuses sociétés'
                },
                {
                    date: '2013',
                    name: 'Stage chez Epadservices & PMEdeals',
                    role: 'Developper',
                    desc: 'Apprentissage de l\'informatique lors de stage en entreprise.'
                },
            ],
            schools: [{
                    date: '2021 - 2023',
                    name: 'Master Of Science Computer Science',
                    role: 'Boston University',
                    desc: 'Double Degree in computer science at Boston University.'
                },
                {
                    date: '2016 - 2021',
                    name: 'Ecole d\'Ingénieur Informatique',
                    role: 'Epita',
                    desc: 'En ecole d\'ingenieur informatique pendant 5 ans afin de connaitre davantage le secteur, j\'ai appris durant ces 5 ans toute la partie software avec du C, C++, C#, Go, Java et beaucoup d\'algorithmies.'
                },
                {
                    date: '2014-2016',
                    name: 'Lycée Privé',
                    role: 'Blanche de Castille',
                    desc: 'Je suis allé en Scientifique à Blanche de Castille, ou j\'ai obtenu mon Bac avec Mention.'
                },
                {
                    date: '2010 - 2014',
                    name: 'Collège privé',
                    role: 'Blanche De Castille',
                    desc: 'De la sixieme à la troisieme, j\'ai étudié dans le College Blanche de Castille au Chesnay.'
                }
            ]
        },
        achievments: {
            achievments: 'Mes Réalisations',
            wazunix: 'Société de création de site',
            cloudby: 'Générateur de sites E-commerce Cloud-first',
            corefortech: 'Système de gestion de risques',
            novadoc: 'App de gestions de contrats & Documents',
            mathopera: 'Forum de mathématiques',
            mypushup: 'Posts sur Instagram',
            as2r: '1er Comparateur 100% Digital',
            yongjiawood: 'Vendeur de Meubles Chinois',
            mynetup: 'Posts sur tous les Réseaux sociaux',
            mytofo: 'Application pour Photographe Pro',
            pritify: 'Ventes de produits Physiques',
            socialify: 'Ventes de produits sociaux',
            assuretonpret: 'Assurance de Prêt Immobilier',
            mybizup: 'Créateur de sites',
            cotchee: 'Plateforme d\'enseignements',
            visualize: ' Pour Visualiser l\'ensemble de mes Solutions, rendez-vous sur <a href="http://wazunix.fr/"> Wazunix.fr </a>'
        },
        blog: {
            blog: 'Mon Blog',
            possibility: 'Mes Possibilités',
            discover: 'Découvrir',
            create: 'Créer',
            design: 'Designer',
            develop: 'Développer',
            realize: 'Réaliser',
            promote: 'Promouvoir',
            blog1: 'Ma maison de reve en Thailande',
            blog2: 'Cinéphile depuis toujours, je ne rate jamais un bon film',
            blog3: 'Programme de Course à Pied Commencé',
            blog4: 'Début des gros Projets',
            blog5: 'Une superbe experience en thailande',
            blog6: 'Le Ski, Chamois d\'or, couleur piou-piou :)',
            blog7: 'Ma petite soeur toujours la <s>pour m\'aider</s>',
            blog8: 'Voyager, c\'est donner un sens à sa vie, voyager, c\'est donner de la vie à ses sens',
            blog9: 'Fan du Paris Saint-Germain',
            contact: 'CONTACTEZ-MOI'
        },
        contact: {
            contact: 'Contactez-moi',
            iamsocial: 'Je suis social :)',
            searchme: 'Cherchez-moi',
            letmessage: 'Laisser un message',
            send: 'Envoyer',
            job: 'Entrepreneur & Etudiant & Developpeur'
        }
    },
    en: {
        menu: {
            menu1: 'Home',
            menu2: 'About me',
            menu3: 'Career',
            menu4: 'Achievements',
            menu5: 'Blog',
            menu6: 'Contact'
        },
        home: {
            hello: 'Hello, I am',
            iam: 'I am',
            jobs: 'Entreprenor., Innovator., Traveler.',
            dev: 'Developer.'
        },
        about: {
            capacity: 'My Skills',
            entreprenor: 'Entreprenor',
            entreprenor_desc: 'Entrepreneurship interested me at a very young age, when the desire to create products and sell them to customers became obvious to me. So in 2014 I created my first StartUp: Wazunix',
            frontend: 'Front end development',
            frontend_desc: 'The visual aspect of projects is what matters most to clients, which is why I specialized in my early days in the creation of dynamic interfaces in Materials Design.',
            backend: 'Back-end development',
            backend_desc: 'Specialists in the creation of Custom frameworks, corporate intranets have no more secrets for me. These are therefore tailor-made at a beating speed.',
            infra: 'Infrastructure & Devops',
            infra_desc: 'From simultaneous posting software on all social networks to BigData data analysis on AWS, I am a FullStack developer, both Software and Web.',
            languages: 'My languages & Frameworks',
            whoiam: 'Who am I ?',
            iam: 'I am',
            ilike: 'I like',
            iam_desc: 'Evan Barberousse, 22 years old and I am in computer engineering school in Epita. I live in Louveciennes, not far from Versailles. I speak English, French, Spanish, Chinese and basic Thai. I am hardworking, I always have lots of projects and I love to make them happen! I am currently a FullStack Developer, specialized in JS with NuxtJS and VueJS, but also in Backend with Python DRF and GraphQL, finally I master AWS and GCP as well as server administration. Don\'t forget to <a href="#portfolio">view</a> them!',
            ilike_desc: 'Computers, I speak many languages as mentioned above. I also like sport, football, skiing where I reached the competitive level and karate where I was third in the French championship. In addition, I also have masters in electronics and mechanics, I have repaired and built many computers, created Raspberry pie modules, built Hi-tech accessories at <a href="http://www. thailande-fr.com/tourisme/29511-pantip-plaza-temple-lelectronique">Pantip Plaza</a> and discovered there many Gadgets inaccessible in France.',
            ihave: 'I have',
            ihave_desc: 'decided at 14 to learn programming languages, at 15, I created a website creation company called <a href="http://wazunix.fr/"> Wazunix </a> , which allowed me to create many sites for companies such as Ucar, FMA or CoreForTech. Subsequently, the demand becoming too great, I could not continue alone. In 2015, I decided to create an automatic post system on Instagram Mypushup, being a global innovation, many customers quickly wanted to collaborate with us such as Microsoft, Adobe, Huawei, Orange, Lagardere, Prisma Media, PSG and many more...',
            itravel: 'I traveled',
            itravel_desc: 'In many countries, especially Asian. Indeed I had the opportunity to go to Thailand for 1 year as part of my studies and to live for 1 year with a Chinese family, these experiences allowed me to better understand the world, especially from the point of view of Asian view which differs greatly from ours. I also learned Chinese and Thai in order to really integrate myself. In addition I have made many trips to discover the world such as the United Arab Emirates, Malaysia, Northern and Western Europe and many others.'
        },
        career: {
            career: 'My Career',
            myprojects: 'My achievements',
            projects: [{
                    date: '2019-2022',
                    name: 'Mybizup becomes Cloudby',
                    role: 'Fondator',
                    desc: 'World innovation, Creation of the first CMS entirely in Javascript Cloud-first with Generation of millions of websites instantly in the cloud in a serverless way without starting cost.'
                },
                {
                    date: '2019-2021',
                    name: 'Wazunix',
                    role: 'Fondator',
                    desc: 'Addition of many customers such as Troi.io, Workshop Mobile, Cometik, a company that publishes websites for individuals and professionals, or CoreForTech, creation of the first system for measuring truck drivers using heartbeats.'
                },
                {
                    date: '2018-2019',
                    name: 'Creation of MyBizUp',
                    role: 'Fondator',
                    desc: 'Creation of a platform for creating showcase and e-commerce websites as well as an intranet in 5 minutes for all individuals. The products are chosen by the individuals themselves, everything is customizable, we use a dropshipping system. Everything is free !'
                },
                {
                    date: '2017',
                    name: 'Creation of MyNetUp',
                    role: 'Fondator',
                    desc: 'Creation of a system of posts on all social networks from your computer or smartphone. It is a global innovation with a bright future!'
                },
                {
                    date: '2015-2017',
                    name: 'Developement - Wazunix',
                    role: 'Chef de Projet',
                    desc: 'After gaining some experience, I decided that wazunix needed to grow. For this, we have started to canvass customers and take charge of much larger infrastructures. Thus we have created to date more than 20 sites, some of which reach 100K visits per day. For more information.'
                },
                {
                    date: '2014-2015',
                    name: 'Creation of MyPushUp',
                    role: 'Fondator',
                    desc: 'Creation of a system of posts on Instagram from your PC, Mac or Linux. It is a global innovation, more than 90,000 Customers including large companies such as Microsoft, ShowroomPrivée, Mercedes-Benz, Adobe, Orange, Huawei, Prisma Media, PSG, Canal+, FranceTV, Auchan, Decathlon, Haribo, FDJ, Courchevel, the Ministry of Justice, Action Against Hunger and much more... MyPushUp - 2 Million visits'
                },
                {
                    date: '2014',
                    name: 'Creation of Wazunix',
                    role: 'Fondator',
                    desc: 'I created my website creation company, I did development, graphic design, customer relations, marketing and I set up teams and servers. I have created many sites for many companies'
                },
                {
                    date: '2013',
                    name: 'Intership at Epadservices & PMEdeals',
                    role: 'Developer',
                    desc: 'I started learning IT during intership in multiple comapnies.'
                },
            ],
            schools: [{
                    date: '2021 - 2023',
                    name: 'Master Of Science Computer Science',
                    role: 'Boston University',
                    desc: 'Double Degree in computer science at Boston University.'
                },
                {
                    date: '2016 - 2021',
                    name: 'School of Computer Engineering',
                    role: 'Epita',
                    desc: 'In computer engineering school for 5 years in order to know more about the sector, I learned during these 5 years all the software part with C, C++, C#, Go, Java and a lot of algorithms.'
                },
                {
                    date: '2014-2016',
                    name: 'Lycée Privé',
                    role: 'Blanche de Castille',
                    desc: 'I went to Science at Blanche de Castille, where I obtained my Bac with Honors.'
                },
                {
                    date: '2010 - 2014',
                    name: 'Collège privé',
                    role: 'Blanche De Castille',
                    desc: 'From sixth to third grade, I studied at the College Blanche de Castille in Le Chesnay.'
                }
            ]
        },
        achievments: {
            achievments: 'My achievements',
            wazunix: 'Website creation company',
            cloudby: 'Cloud-first E-commerce site builder',
            corefortech: 'Risk management system',
            novadoc: 'Contract and Document Management App',
            mathopera: 'Math Forum',
            mypushup: 'Instagram posts',
            as2r: '1st 100% Digital Comparator',
            yongjiawood: 'Chinese Furniture Seller',
            mynetup: 'Posts on all Social Networks',
            mytofo: 'Application for Pro Photographer',
            pritify: 'Sales of physical products',
            socialify: 'Sales of social products',
            assuretonpret: 'Real Estate Loan Insurance',
            mybizup: 'Site builder',
            cotchee: 'Teaching platform',
            visualize: 'To View all of my Solutions, go to <a href="http://wazunix.fr/"> Wazunix.fr </a>'
        },
        blog: {
            blog: 'My blog',
            possibility: 'My Possibilities',
            discover: 'Discover',
            create: 'Create',
            design: 'Designate',
            develop: 'Develop',
            realize: 'Achieve',
            promote: 'Promote',
            blog1: 'My dream house in Thailand',
            blog2: 'A lifelong cinephile, I never miss a good movie',
            blog3: 'Running Program Started',
            blog4: 'Start of big projects',
            blog5: 'A great experience in Thailand',
            blog6: 'Skiing, Chamois d\'or, piou-piou color :)',
            blog7: 'My little sister always there <s>to help me</s>',
            blog8: 'To travel is to give meaning to your life, to travel is to give life to your senses',
            blog9: 'Paris Saint Germain fan',
            contact: 'CONTACT ME'
        },
        contact: {
            contact: 'Contact me',
            iamsocial: 'I\'m social :)',
            searchme: 'Looking for me',
            letmessage: 'Leave a message',
            send: 'Send',
            job: 'Entrepreneur & Student & Developer'
        }
    }
};

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: 'en', // set locale
    messages: messages, // set locale messages
})

// Create a Vue instance with `i18n` option
new Vue({
    i18n,
    data: data
}).$mount('#app')