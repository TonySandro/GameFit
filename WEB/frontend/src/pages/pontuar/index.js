import { Component } from 'react';
import Bar from '../../components/Bar'
import api from '../../services/api';
import { Cards } from '../../style/style';
import './styles.css'
// import './button'

export default class Pontuar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            atleta: [],
            missoes: [],
            missaoSelecionada: [],
        }
    }

    async componentDidMount() {
        this.buscarDados();
    }

    async buscarDados() {
        const response = await api.get('/read').then(res => {
            console.log(res.data)
            return res.data
        }).catch(error => {
            console.log({ error: error });
        });

        const response2 = await api.get('/readMissoes').then(res => {
            console.log(res.data)
            return res.data
        }).catch(error => {
            console.log({ error: error });
        });

        this.setState({
            atleta: response,
            missoes: response2
        })
    }

    alterar = (e) => {
        this.setState({
            missaoSelecionada: parseInt(e.target.value),
        })
    }

    render() {
        const { atleta, missoes, missaoSelecionada } = this.state;

        return (
            <div>
                <Bar />
                <Cards>
                    {atleta.map(item => (
                        <li key={item.key}>
                            <h1>{item.nome}</h1>
                            <p>{item.patente}</p>
                            <p className="exp">Exp: {item.exp}</p>

                            <div className="container">
                                <select onChange={this.alterar}>
                                    <option defaultValue={0}>Selecione a missão</option>
                                    {missoes.map(item2 => {
                                        return (
                                            <option value={item2.pontos}>{item2.titulo}: {item2.pontos} px</option>
                                        )
                                    })}
                                </select>

                                <button type="submit" onClick={() => {
                                    let pontosMissao = missaoSelecionada
                                    if (missaoSelecionada < 1) {
                                        pontosMissao = 0;
                                    }
                                    api.put(`/updateExp`, ({
                                        pontos: pontosMissao + item.exp,
                                        key: item.key
                                    }))
                                    window.location.reload()
                                }}>
                                    Pontuar
                                </button>
                            </div>

                        </li>
                    ))}
                </Cards>
            </div>
        );
    }
}