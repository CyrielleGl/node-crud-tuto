import React from 'react'
import { Badge, Card } from 'antd'
import CV from '../pages/files/CV.pdf'

const About = () => {
    return (
        <>
            <div>
                <h1>A Propos</h1>
                <p>Après la <b>validation d'un Master en marketing et communication</b> suivie d'une expérience professionnelle dans la communication,
                    j'ai souhaité poursuivre mon apprentissage vers un <b>métier de plus en plus digital</b>. 
                </p>
                <p>Ce pourquoi je me suis <b>rapidement tournée vers le développement informatique</b>.</p>
                <p>Je me suis tout d'abord formée seule sur Angular, 
                    avant de rejoindre une <b>formation d'un an en alternance</b>. 
                    J'ai pu développer mes compétences sur <b>Angular, Java et PostgreSQL</b> au sein de mon entreprise, <a href="https://www.afterdata.com/" target="_blank" rel="noreferrer">AfterData</a>, 
                    mais aussi de nombreuses autres durant mes semaines de formation, et notamment une bonne appréhension d'autres languages, 
                    et particulièrement <b>JavaScript, React et NodeJs</b>.</p>
                <br/>
                <p>Lors de ma recherche d'emploi, j'ai réalisé que de <b>nombreuses start-up en pleine évolution travaillent avec React et NodeJs</b>.
                    Beaucoup d'entreprises proposent des postes sur la <b>MERN (MongoDB, Express, React, NodeJS) stack</b>. 
                    Ce pourquoi j'ai décidé de me former sur cette stack, via une formation complète orientée autour de projets réels (que j'ai pu réaliser, et plus encore !).
                </p>
                <br/>
                <p><b>J'ai codé cette application avec grand plaisir</b> avec cette nouvelle stack technique que je souhaite aujourd'hui totalement maîtriser. 
                Et alors que je doutais pouvoir me régaler autant qu'avec Angular/Java, je souhaite finalement <b>poursuivre mon apprentissage sur React/NodeJs</b>, 
                et bien sûr avoir l'opportunité de monter sur un poste de full-stack sur ces technologies.</p>
                <br/>
                <p><b>Vous souhaitez en savoir plus</b> sur mes compétences et expériences ? <a href={CV} target="_blank" rel="noreferrer">Consultez mon CV en cliquant sur ce lien !</a></p>
            </div>
            <div style={{ textAlign: 'center' }}>
                <div style={{ width: 300, margin: '3rem', display: 'inline-block' }}>
                    <Badge count='Mes compétences' style={{ backgroundColor: 'purple', right: '1.2rem'}}>
                        <Card style={{ minWidth: '18rem'}}>
                            <h2>Une fullstack junior compétente</h2>
                            <ul>
                                <li>React</li>
                                <li>JavaScript</li>
                                <li>NodeJs (Express)</li>
                                <li>Angular</li>
                                <li>Java (Jhipster)</li>
                            </ul>
                            <ul>
                                <li>MongoDB</li>
                                <li>PostgreSQL</li>
                                <li>Liquibase</li>
                            </ul>
                        </Card>
                    </Badge>
                </div>
                <div style={{ width: 300, margin: '3rem', display: 'inline-block' }}>
                    <Badge count='React/NodeJs' style={{ backgroundColor: 'purple', right: '1.2rem'}}>
                        <Card style={{ minWidth: '18rem'}}>
                            <h2>Ce que j'aime dans React/NodeJs</h2>
                            <ul>
                                <li>Rapidité</li>
                                <li>Utilisation du JavaScript</li>
                                <li>Découpage en composants</li>
                                <li>Beaucoup de documentation</li>
                                <li>React Native</li>
                            </ul>
                        </Card>
                    </Badge>
                </div>
            </div>

        </>

    )
}

export default About