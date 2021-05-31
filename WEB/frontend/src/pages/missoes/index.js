import { Component } from 'react'
import Bar from '../../components/Bar'
import api from '../../services/api';

import { CardsQuests } from '../../style/style';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import './styles.css'
import 'core-js'

export default class Missoes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            missoes: [],
        }
    }

    async componentDidMount() {
        this.buscarMissoes();
    }

    async buscarMissoes() {
        const response = await api.get('/readMissoes').then(res => {
            // console.log(res.data)
            return res.data
        }).catch(error => {
            console.log({ error: error });
        });

        this.setState({
            missoes: response,
        })
    }

    render() {
        const { missoes } = this.state;

        return (
            <div>
                <Bar />
                <CardsQuests>
                    {missoes.map((item, index) => (
                        <li key={index}>
                            <div className="top" >
                                {item.titulo}

                                <div className="star">
                                    <StarBorderIcon />
                                    <StarBorderIcon />
                                    <StarBorderIcon />
                                    <StarBorderIcon />
                                    <StarBorderIcon />
                                </div>
                            </div>

                            <div className="info">
                                <div className="basicInfos" >
                                    <p>Duração: {item.pontos}</p>
                                    <p>Repetições: {item.pontos}</p>
                                    <p>Exercicios: 1</p>
                                </div>

                                <div className="missionPoints">
                                    <p>+ {item.pontos}</p>
                                </div>
                            </div>

                            <div className="footer">
                                <p>Ver Detalhes</p>
                            </div>

                            {/* {item.exercicios.map(item2 => {
                                        return <p>{item2.exercicio}: {item2.rep}x</p>
                                    })} */}
                        </li>
                    ))}
                </CardsQuests>
            </div>
        );
    }
}