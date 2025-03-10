import { useLocation } from "react-router-dom"

import { useState, useEffect } from "react"

import Message from "../layout/Message"

import styles from 'D:/Users/ALLAN/Desktop/projetos/docker/Docker/src/components/Pages/Projects.module.css'
import Container from '../layout/Container.jsx'
import LinkButton from "../layout/LinkButton.jsx"
import ProjectCard from "../project/ProjectCard.jsx"

function Projects() {
    const [projects, setProjects] = useState([])

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
                headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(resp => resp.json())
            .then(data =>{
                setProjects(data)
            })
            .catch((err) =>console.log(err))
        
}, [])

return (
    <div className={styles.project_container}>
        <div className={styles.title_container}>
            <h1>Meus projetos</h1>
            <LinkButton to="/newproject" text="Criar projeto" />
        </div>
        {message && <Message type="success" msg={message} />}
        <Container customclass ="start">
            {projects.length > 0 ? (
                projects.map((project) => (
                <ProjectCard 
                id={project.id || "ID não disponível"}
                name={project.name || "Nome não disponível"} 
                budget={project.budget || "Orçamento não disponível"}
                category={project.category.name || "Categoria não disponível"}
                key={project.id || Math.random()}
                />
                ))
            ):(
                <p>Nenhum projeto encontrado.</p>
            )}
        </Container>
    </div>
)
}
export default Projects