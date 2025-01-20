import { useLocation } from "react-router-dom"

import Message from "../layout/Message"

import styles from 'D:/Users/ALLAN/Desktop/projetos/docker/Docker/src/components/Pages/Projects.module.css'
import Container from '../layout/Container.jsx'
import LinkButton from "../layout/LinkButton.jsx"

function Projects(){
    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    return (
       <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus projetos</h1>
                <LinkButton to="/newproject" text="Criar projeto" />
            </div>
            {message && <Message type = "success" msg={message}/>}
            <Container>
               <p>Projetos...</p> 
            </Container>
       </div>
    )
}
export default Projects