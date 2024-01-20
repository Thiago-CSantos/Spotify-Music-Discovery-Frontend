// Routes.tsx
import React from 'react';
import { Switch, Route } from 'react-router-dom';
 // Importe a nova página

const Routes = () => {
      return (
            <Switch>
                  <Route path="/" exact component={PaginaInicial} />
                  <Route path="/outra-pagina" component={OutraPagina} />
                  <Route path="/detalhes" component={PaginaDetalhes} /> {/* Adicione a nova rota */}
            </Switch>
      );
};

export default Routes;
