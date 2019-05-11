
const Post = ({ posts }) => posts.map(({ id, title, body }) => (
  <li key={id}>
    <strong>{title}</strong>
    <br />
    {body}
  </li>
));

export const PostList = (props) => {
  const { posts } = props;

  return (
    <div className="post-list">
      <h2>Posts List</h2>
      <ul>
        <Post
          posts={posts}
        />
      </ul>
    </div>
  );
};
