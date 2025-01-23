# MyBank# Projet React & Symfony avec Docker

Ce projet contient une application web composée de deux parties :

**Frontend (React)** : L'interface utilisateur construite avec React.

## Structure du projet

Le projet est structuré de la manière suivante :
/myBank
   ├── /frontend # Code source du frontend React 


## Prérequis

Avant de démarrer, assurez-vous d'avoir installé Docker et Docker Compose sur votre machine.

- Docker : [Installation Docker](https://docs.docker.com/get-docker/)
- Docker Compose : [Installation Docker Compose](https://docs.docker.com/compose/install/)

## Installation

### 1. Cloner le dépôt

Clonez ce projet sur votre machine locale :


### 2. Accéder à l'application
**Frontend (React)**
  Le Dockerfile dans le dossier frontend crée une image Docker pour l'application React.
  - Commandes principales :
    - docker build -t frontend . : Crée l'image Docker pour le frontend.
    - docker run -p 3000:3000 frontend : Lance le conteneur React.