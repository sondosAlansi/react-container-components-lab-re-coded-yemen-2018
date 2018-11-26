// Code MovieReviews Here
import React, { Component } from 'react';

const MovieReviews=(props) =>
<div className='review-list'>
{props.reviews.map(review => li key={review.display_title} className="review">
{review.display_title}
</li>
)}
</div>

