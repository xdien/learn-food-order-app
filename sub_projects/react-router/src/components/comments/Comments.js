import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "./Comments.module.css";
import CommentsList from "./CommentsList";
import NewCommentForm from "./NewCommentForm";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const param = useParams();
  const { id } = param;

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);
  const addedCommentHanlder = () => {};
  useEffect(() => {
    sendRequest(id);
  }, [id]);
  let commnets;

  if (status === "pending") {
    commnets = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if(status === "completed" && (loadedComments && loadedComments.length > 0)){
    commnets = <CommentsList comments={loadedComments} />
  }

  if(status === "completed" && (loadedComments && loadedComments.length === 0)){
    commnets = <p className="centered">No comment</p>;
  }
  const addNewCommentHandler = useCallback(() => {
    sendRequest(id);
  },[sendRequest,id]);

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm onAddedComment={addNewCommentHandler} id={id}/>}
      {commnets}
    </section>
  );
};

export default Comments;
