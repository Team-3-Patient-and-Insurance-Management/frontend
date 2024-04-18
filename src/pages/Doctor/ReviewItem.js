import userPlaceholder from "../../assets/images/user-placeholder.png";
import "./Doctor.css";

const ReviewItem = (review) => {
  return (
    <div className="review">
      <div className="portfolio">
        <img src={userPlaceholder} alt="User Placeholder" />
        <p>{review.patientName}</p> 
      </div>
      <div className="text-content">
        <div className="review-info">
          <h3>{review.title}</h3>
          <p>Rating: {review.stars}</p>
        </div>
        <p>{review.review}</p>
      </div>
    </div>
  );
};

export default ReviewItem;