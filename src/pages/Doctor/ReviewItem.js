import userPlaceholder from "../../assets/images/user-placeholder.png";
import "./Doctor.css";

const ReviewItem = (review) => {
  return (
    <div className="review">
      <div className="portfolio">
        <img src={userPlaceholder} alt="User Placeholder" />
        <p>{review.userName}</p> 
      </div>
      <div className="text-content">
        <div className="review-info">
          <h3>{review.title}</h3>
          <p>Rating: {review.rating}</p>
        </div>
        <p>{review.text}</p>
      </div>
    </div>
  );
};

export default ReviewItem;