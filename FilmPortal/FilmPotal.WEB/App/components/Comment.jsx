import React from 'react';

const Comment = props => {
	return (
		<div className="commentLayout">
			<div className="header">
				<div className="inline-block"><span className="bold">{props.data.user.login}</span></div>
				{
					props.user.userId == props.data.userId ? <div className="action rightFloat"><a className="link" onClick={() => {
						if (confirm('Вы уверены что хотите удалить запись?')) {
							props.deleteComment(props.data.commentId, props.data.filmId);
						}
					}}>x</a></div> : <div />
				}
			</div>
			<div className="content">
				<div>
					{props.data.body}
				</div>
			</div>
			<div className="rightFloat">{props.data.createDate}</div>
		</div>
	);
};

export default Comment;