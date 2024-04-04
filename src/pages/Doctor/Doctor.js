import { Link } from "react-router-dom";
import DoctorHeader from "../../components/DoctorHeader/DoctorHeader";
import userPlaceholder from "../../assets/images/user-placeholder.png";
import React, { useState } from 'react';
import ReviewItem from "./ReviewItem";
import "./Doctor.css";

export default function Doctor() {
    const [reviews, setReviews] = useState([
        {
            userName: 'John Doe',
            rating: 4.5,
            title: 'Great Experience for My Child',
            text: 'Great experience!',
            profilePictureUrl: 'https://example.com/profile_picture.jpg'
        },
        {
            userName: 'John Doe',
            rating: 5.0,
            title: 'Great Experience for My Child',
            text: 'Great experience!',
            profilePictureUrl: 'https://example.com/profile_picture.jpg'
        },
        {
            userName: 'Jason Doe',
            rating: 3.0,
            title: 'Fixed my knee problems',
            text: 'They took my leg, dont have a knee anymore.',
            profilePictureUrl: 'https://example.com/profile_picture.jpg'
        },
        {
            userName: 'Jannet Doe',
            rating: 3.5,
            title: 'Not a good experience',
            text: 'I would not recommend this doctor to anyone.',
            profilePictureUrl: 'https://example.com/profile_picture.jpg'
        }
    ]);

    const calculateAverageRating = () => {
        if (reviews.length === 0) return 0;
        const totalRating = reviews.reduce((acc, curr) => acc + curr.rating, 0);
        return totalRating / reviews.length;
    };

    return (
        <div className="doctor-page">
            <DoctorHeader />
            <div className="content">
                <h1 className="welcome">Your Reviews</h1>
                <div className="doctor-reviews">
                    <div className="dr-portfolio">
                        <img src={userPlaceholder} alt="User Placeholder" />
                        <div className="dr-info">
                            <h1>Dr First Last</h1>
                            <h3>Specialty:</h3>
                            <h3>Average Rating: {calculateAverageRating()}</h3>
                        </div>
                    </div>
                    <div className="reviews">
                        {reviews.map((review, index) => (
                            <ReviewItem key={index} {...review} />
                        ))}
                    </div>
                </div>
                <div className="doctor-services">
                    <div className="find-a-patient">
                        <h2>Find a Patient</h2>
                        <hr />
                        <p>Looking for your patients' details? We've got you covered! Click here to access all your patients' information conveniently organized for easy access.</p>
                        <Link to="/doctor/myPatients">
                            <button>MY PATIENTS</button>
                        </Link>
                    </div>
                    <div className="bedAvailability">
                        <h2>Find Bed Availability</h2>
                        <hr />
                        <p>CareConnect360 simplifies your patient care experience. Pick a hospital, and find bed availablility for your patients comfort.</p>
                        <Link to="/doctors/bedAvailability">
                            <button>SEARCH BED AVAILABILITY</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
