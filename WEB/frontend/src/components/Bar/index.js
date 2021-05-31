import { Component } from 'react'
// import user from '../../assets/images/user.png'
import './styles.css'

export default class Bar extends Component {

    render() {
        return (
            <div className="menu-container" >

                <div className="menu-top" >
                    <p>GAME-FIT</p>
                </div>

                <div className="menu-body">
                    <ul>
                        <a href="/">
                            Inicio
                        </a>
                        <a href="/missoes">
                            Missões
                        </a>
                        <a href="/ranking">
                            Ranking
                        </a>
                        <a href="/pontuar">
                            Pontuar
                        </a>
                        <a href="/cadastrar">
                            Cadastrar
                        </a>
                        <a href="/configs">
                            Configurações
                        </a>
                    </ul>
                </div>

            </div>
        );
    }
}