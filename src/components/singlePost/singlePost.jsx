import "./singlePost.css";
import pic from "../pic/post.jpg";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={pic} alt="" className="singlePostImg" />

        {/* https://www.pexels.com/photo/landscape-photography-of-mountain-and-body-of-water-2387418 */}
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i class="singlePostIcon fa-regular fa-trash"></i>
          </div>
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
