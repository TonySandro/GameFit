import { Component } from 'react'
import api from '../../services/api';
import { Cards } from '../../style/style';
import Bar from '../../components/Bar'
import './styles.css'

export default class Ranking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            atleta: [],
        }
    }

    async componentDidMount() {
        await this.buscarAtletas();
    }

    async buscarAtletas() {
        const resAtleta = await api.get('/read').then(res => {
            return res.data
        }).catch(error => {
            alert("erro")
            console.log({ error: error });
        });

        // ranking.map(item => {
        //     if (item[posicaoInicial].exp >= item[posicaoFinal].exp || item[posicaoInicial] === undefined) {

        //     }
        // })

        this.rankear(resAtleta)
        // console.log(resAtleta)
        this.setState({
            atleta: resAtleta,
        })
    }

    //Insertion Sort
    async rankear(vetor) {
        let atual;
        for (let i = 1; i < vetor.length; i++) {
            let j = i - 1;
            atual = vetor[i]
            while(j >= 0 && atual.exp > vetor[j].exp){
                vetor[j+1] = vetor[j];
                j--
            }
            vetor[j+1] = atual
        }
        return vetor
    }

    render() {
        const { atleta } = this.state;

        return (
            <div>
                <Bar />
                <Cards className="tamanho">
                    {atleta.map(item => {
                        return <li key={item.key}>
                            <h1>{item.nome}</h1>
                            <p>{item.patente}</p>
                            <p1>Exp: {item.exp}</p1>
                        </li>
                    })}
                </Cards>
            </div>
        );
    }
}