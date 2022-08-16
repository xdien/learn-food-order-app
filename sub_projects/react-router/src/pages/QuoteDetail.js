import { Fragment, useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
const DUMMY_QUOTES = [
  {id: "q1", author: "Dien", text : "Hoc reactjs "},
  {id: "q2", author: "Bao", text : "Hoc reactjs 1"},
];

const QuoteDetail = (props) => {
  const param = useParams();
  const match = useRouteMatch();

  const {id} = param;
  const {sendRequest,status,data:loadedQuote,error} = useHttp(getSingleQuote,true);

  useEffect(()=>{
    sendRequest(id);
  },[sendRequest,id]);

  if(status === "pending"){
    return <div className="centered" >
      <LoadingSpinner />
    </div>
  }


  if(!loadedQuote.text){
    return <p>Not found</p>
  }
  return (
    <Fragment>

      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path} exact >
      <div className="centered">
        <Link className="btn-flat" to={`${match.url}/comments`}>Load comments</Link>
      </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
