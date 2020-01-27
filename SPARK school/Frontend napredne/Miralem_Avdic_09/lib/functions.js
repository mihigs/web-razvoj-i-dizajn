export default function appendRelational(posts, users, byId = true) {
	return users.map(function(user) {
		user.posts = posts.filter(function(post) {
			return user.id === post.userId;
		});
		return user;
	});
}
