import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Bonjour et bienvenue !</h1>
            <p><b>Ce projet est le résultat de la formation MERN</b> que j'ai suivie sur le site <a href="https://www.udemy.com/course/nodejs-le-guide" target="_blank" rel="noreferrer">Udemy.com</a>, 
                afin de postuler dans votre entreprise sur un poste de full-stack junior React/Node.js.</p>
            <p>Ayant vite pris goût à cette stack technique, <b>j'ai amélioré au mieux le projet proposé</b>, 
                afin de vous montrer mes capacités ainsi que mon envie d'aller toujours plus loin.</p>
            <p><b>Vous pouvez tester les fonctionnalités</b> présentes dans la partie <Link to="/rooms">Exercice appliqué</Link> de l'application, mise en ligne sur <b>Heroku</b>, 
                et dont la BDD est tenue par <b>MongoDB</b>.</p>
            <br/>
            <p><b>Si vous souhaitez me contacter</b> pour une proposition de poste, ou pour me faire un éventuel retour sur mon travail afin de l'améliorer,
                je vous invite à retrouver toutes mes coordonnées utiles sur la page <Link to="/contact">Contact</Link> !
            </p>
            <br/>
            <p><b>Pour consulter le repository GitHub</b> correspondant à ce projet, je vous invite à suivre ce lien : <a href="https://github.com/CyrielleGl/node-crud-tuto" target="_blank" rel="noreferrer">mon repository.</a></p>
            <br/>
            <p>Enfin, <b>pour en savoir plus sur moi</b>, rendez-vous sur la page <Link to="/about">A propos</Link>.</p>
            <br/>
            <h2>A bientôt !</h2>
        </div>
    )
}

export default Home