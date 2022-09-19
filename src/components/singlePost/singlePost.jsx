import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://www.pexels.com/photo/man-standing-on-a-rock-1271619"
          alt=""
          className="singlePosting"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit.
          <div className="singlePostEdit"></div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Karthik</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          labore exercitationem nemo atque, deleniti facere blanditiis iure
          aperiam dolore modi, libero est placeat autem quam illum expedita,
          numquam nostrum. Modi! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatum labore exercitationem nemo atque,
          deleniti facere blanditiis iure aperiam dolore modi, libero est
          placeat autem quam illum expedita, numquam nostrum. Modi! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Voluptatum labore
          exercitationem nemo atque, deleniti facere blanditiis iure aperiam
          dolore modi, libero est placeat autem quam illum expedita, numquam
          nostrum. Modi! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Voluptatum labore exercitationem nemo atque, deleniti facere
          blanditiis iure aperiam dolore modi, libero est placeat autem quam
          illum expedita, numquam nostrum. Modi! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptatum labore exercitationem nemo
          atque, deleniti facere blanditiis iure aperiam dolore modi, libero est
          placeat autem quam illum expedita, numquam nostrum. Modi!
        </p>
      </div>
    </div>
  );
}
