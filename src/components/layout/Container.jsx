//ao criar container, poderá alterar as classes que irão alterar a disposição dos itens do container 
// E cada página receberá as propiedades gerais.

import styles from './Container.module.css'

function Container(props){
    return(
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    )
}

export default Container