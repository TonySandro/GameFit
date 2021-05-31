import { Component } from 'react'
import Bar from '../../components/Bar'
import api from '../../services/api';
import { Cards } from '../../style/style';
import './styles.css'

export default class Cadastrar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            atleta: [],
        }
    }

    async componentDidMount() {
        this.buscarAtletas();
    }

    async buscarAtletas() {
        const response = await api.get('/read').then(res => {
            console.log(res.data)
            return res.data
        }).catch(error => {
            alert("erro")
            console.log({ error: error });
        });

        this.setState({
            atleta: response,
        })
    }

    render() {
        const { atleta } = this.state;
        
        return (
            <div>
                <Bar />
                <Cards>
                    {atleta.map(item => (
                        <li key={item.key}>
                            <h1>{item.nome}</h1>
                            <p>{item.patente}</p>
                            <p className="exp">Exp: {item.exp}</p>
                        </li>
                    ))}
                </Cards>
            </div>
        );
    }
}