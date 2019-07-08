import React from 'react';

export default class Comment extends React.Component {

	render() {
		return (
			<div className="commentLayout">
				<div className="header">
					<div className="inline-block"><span className="bold">{this.props.data.user.login}</span></div>
					{
						this.props.user.userId == this.props.data.userId ? <div className="action rightFloat">&nbsp;&nbsp;&nbsp;<a className="link" onClick={() => {
							if (confirm('Вы уверены что хотите удалить запись?')) {
								this.props.deleteComment(this.props.data.commentId, this.props.data.filmId);
							}
						}}>x</a></div> : null
					}
				</div>

				<div className="content">
					<div>
						{this.props.data.body}
					</div>
				</div>
				<div className="rightFloat">{this.props.data.createDate}</div>
			</div>
		);
	}
};