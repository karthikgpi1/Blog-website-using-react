import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://www.pexels.com/photo/man-standing-on-a-rock-1271619/"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis non
        accusamus adipisci vel earum ad, ducimus illo maiores fugiat. Possimus
        incidunt nesciunt ratione libero fuga vel maxime amet illum dolor Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Veritatis non
        accusamus adipisci vel earum ad, ducimus illo maiores fugiat. Possimus
        incidunt nesciunt ratione libero fuga vel maxime amet illum dolor.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis non
        accusamus adipisci vel earum ad, ducimus illo maiores fugiat. Possimus
        incidunt nesciunt ratione libero fuga vel maxime amet illum dolor.
      </p>
    </div>
  );
}
