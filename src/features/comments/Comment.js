import { formatDate } from '../../utils/formatDate';

const Comment = ({ comment }) => {
    const { text: commentText, date, rating, author } = comment;
    return (
        <p>
            {commentText}
            <br />
            {rating} / 5 stars -- {author} -- {formatDate(date)}
        </p>
    );
};

export default Comment;