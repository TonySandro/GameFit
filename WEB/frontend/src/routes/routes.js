import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Missoes from '../pages/missoes';
import Ranking from '../pages/ranking';
import Pontuar from '../pages/pontuar';
import Cadastrar from '../pages/cadastrar';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Inicio} />
                <Route path="/missoes" component={Missoes} />
                <Route path="/ranking" component={Ranking} />
                <Route path="/pontuar" component={Pontuar} />
                <Route path="/cadastrar" component={Cadastrar} />
            </Switch>
        </Router>
    );
}

export default Routes;
