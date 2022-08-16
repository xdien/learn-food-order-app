import { Route, Redirect, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import QuoteDetail from "./pages/QuoteDetail";

function App() {
  return (
    <main>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>

          <Route path="/quotes" exact>
            <AllQuotes></AllQuotes>
          </Route>

          <Route path="/new-quote">
            <NewQuote></NewQuote>
          </Route>

          <Route path="/quotes/:id">
            <QuoteDetail></QuoteDetail>
          </Route>

          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </main>
  );
}

export default App;
