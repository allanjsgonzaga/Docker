import { useNavigate } from 'react-router-dom'

import ProjectForm from "../project/ProjectForm"

import styles from "./NewProject.module.css"

function NewProject(){
    const navigate = useNavigate()

    function createPost(project){

        //initialize docker and services
        project.docker = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) =>{
                console.log(data)
                // redirect
            })
            .catch((err) => console.log(err))

    }

    return(
        <div className={styles.newproject_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="criar projeto" />
        </div>
    )
}

export default NewProject