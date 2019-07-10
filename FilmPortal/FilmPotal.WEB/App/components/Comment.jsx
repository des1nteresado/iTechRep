import React from 'react';
import Paper from '@material-ui/core/Paper';

const Comment = props => {
	const date = new Date(props.data.createDate)
	return (
		<Paper className="comment">
			<div className="comment__header">
				<div className="username">
					<p>{props.data.user.login}</p>
				</div>
				<div className="buttons">
					{
						props.user.userId == props.data.userId ?
							<button className="buttons__delete" onClick={() => {
								if (confirm('Вы уверены что хотите удалить комментарий?')) {
									props.deleteComment(props.data.commentId, props.data.filmId);
								}
							}}>x</button> : null
					}
				</div>
			</div>
			<div className="comment__body">
				<p> {props.data.body} </p>
			</div>
			<div className="comment__date">
				<p> {date.toDateString()}</p>
			</div>
		</Paper>
	);
};

export default Comment;