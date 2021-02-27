import React, { useContext } from 'react';
import ReplyComment from '../ReplyComment/ReplyComment';
import { CommentContext } from '../../../../context/CommentContext';

const ReplyCommentList = ({ parrentId, currentUser }) => {
  // eslint-disable-next-line
  const [getCommentAll, commnetList] = useContext(CommentContext);

  return (
    <div>
      {commnetList.map(
        (comment, index) =>
          comment.toWhom === parrentId && (
            <ReplyComment
              key={index}
              data={comment}
              currentUser={currentUser}
            />
          )
      )}
    </div>
  );
};

export default ReplyCommentList;
