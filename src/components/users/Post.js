
const Post = ({posts}) => posts.map(({id, title, body}) => (
  <li key={id}>
    <strong>{title}</strong><br />
   {body}
  </li>
));

export const PostList = ({posts}) => {
  return (
    <div>
      <ul>
          <Post
            posts={posts}
          />
      </ul>
    </div>
  )
}
