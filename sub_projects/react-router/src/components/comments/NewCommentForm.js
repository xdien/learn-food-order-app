import { useEffect, useRef } from 'react';
import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';

import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
  const {onAddedComment} = props;
  const commentTextRef = useRef();
  const {sendRequest,status,error} = useHttp(addComment);

  const submitFormHandler = (event) => {
    event.preventDefault();

    // optional: Could validate here
    
    // send comment to server
    console.log(props);
    const enteredText = commentTextRef.current.value;
    sendRequest({commentData: {text: enteredText}, quoteId: props.id});
  };
  useEffect(() =>{
    if(status === 'completed' && !error){
      onAddedComment();
    }
  },[status,error,onAddedComment]);

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
