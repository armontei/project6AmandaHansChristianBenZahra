import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
// import { faThumbsDown , faThumbsUp } from "@fortawesome/free-regular-svg-icons";

library.add(faThumbsDown, faThumbsUp);


const UserMeme = ({ topText, bottomText, tags, image, alt, likes, dislikes, totalVotes, upVoteHandler, propertyKey, downVoteHandler }) => {

  let memeTags = `${tags}`.replace(/[^a-zA-Z ]/g, " ");
  let memeAlt = `${alt}`.replace(/[^a-zA-Z ]/g, " ");
  let memetopText = `${topText}`.replace(/[^a-zA-Z ]/g, " ");
  let memebottomText = `${bottomText}`.replace(/[^a-zA-Z ]/g, " ");

  return (
    <li className={`eachMemeStyleContainer ${memeTags} ${memeAlt} ${memetopText} ${memebottomText} `}>

      <div>
        <p>{topText}</p>
        <img src={image} alt={memeAlt} />
        <p>{bottomText}</p>
        {/* <p>{tags}</p> */}
      </div>
      
      <div clasName="voteBtns">
        <button aria-label="upvote this meme" onClick={() => { upVoteHandler(propertyKey, likes, totalVotes)}} >
          <p>{likes}</p>
          <FontAwesomeIcon icon={faThumbsUp} />
        </button>

        <button>{totalVotes}</button>

        <button aria-label="downvote this meme" onClick={() => { downVoteHandler(propertyKey, dislikes, totalVotes) }} > 
          <p>{dislikes}</p>
          <FontAwesomeIcon icon={faThumbsDown} />
        </button>
      </div>
      
    </li>
  );
};

export default UserMeme;