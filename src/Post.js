const Post = ({ post }) => {
    return (
        <article>
            <p>{post.id}</p>
            <p>{post.name}</p>
            <p>address : {post.address}</p>
            <p>Pincode : {post.pincode}</p>
        </article>
    )
}
export default Post;