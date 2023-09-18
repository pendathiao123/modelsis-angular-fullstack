# o-modelsis-angular-fullstack
Introduction:

Ce projet consiste à créer une application web de vente de produits informatiques.
Il permettra à l'administrateur d'effectuer des opération CRUD sur les différents produits qu'il vend.
Pour ce faire on a utilisé Spring Boot pour gérer la logique métier de l'application et angular 16.1.4 pour gérer les interfaces
utilisateurs.
L'application est doté d'une page d'acceuil qui contient un bouton "Se Connecter" qui permet de transiter vers la page de connexion.
Une fois l'utilisateur connecté, il a accés à liste des produits oû il pourra ajouter un produit, modifier un produit, supprimer un produit ou même 
d'ajouter un nouveau type de produit.

Mode d'utilisation:
- Cloner les projets modelsis-angular-fullstack et modelsis-springboot-fullstack dans un meme dossier
- Creer une base de données protgres en local
- Ouvrez le backend(modelsis-springboot-fullstack), dans src/ressources/application.properties modifiez l'URL de la base de données, ainsi que l'utilisateur et le mot de
 passe afin qu'il pointe sur votre base de données local, et creer un utilisateur qui vous permettra de vous connecter.
- Naviger vers le repertoire modelsis-springboot-fullstack, Compilez et exécutez le projet en utilisant "mvn spring-boot:run"
- Naviger vers le repertoire modelsis-angular-fullstack, installer d'abord les dépendances du projet avec "npm install", puis Compilez et exécutez le projet en utilisant "ng serve"
- C'est tout, vous n'avez qu'à tester les differentes fonctionalités en "localhost:4200".
