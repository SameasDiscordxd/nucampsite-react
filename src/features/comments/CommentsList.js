import { Col } from "reactstrap";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { useSelector } from "react-redux"; // Import useSelector
import { selectCommentsByCampsiteId } from "./commentsSlice";

const CommentsList = ({ campsiteId }) => {
  // Use useSelector to select the comments
  const comments = useSelector((state) => selectCommentsByCampsiteId(campsiteId)(state));

  if (comments && comments.length > 0) {
    return (
      <Col md="5" className="m-1">
        <h4>Comments</h4>
        {comments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
        <CommentForm campsiteId={campsiteId} />
      </Col>
    );
  }
  return (
    <Col md="5" className="m-1">
      There are no comments for this campsite yet.
    </Col>
  );
};

export default CommentsList;
