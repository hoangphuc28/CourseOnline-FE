import React, { Fragment } from 'react';
import bookIcon from '../../assests/images/icon/book.png';
import starIcon from "../../assests/images/icon/star.png";
const Card = (props) => {
    const  truncateDescription = (description: string, maxLength: number) => {
        if (description.length <= maxLength) {
            return description;
        }
        return `${description.substr(0, maxLength)}...`;
    }
    const formatCurrency = (price) => {
        return parseInt(price.value).toLocaleString('it-IT', {style : 'currency', currency : `${price.currency}`})
    }
    return (
        <Fragment>
             <div className="contentCard contentCard--course">
                                        <div className="contentCard-top">
                                            <a href="#"><img src={props.data.thumbnail.url} alt="images" className="img-fluid" /></a>
                                        </div>
                                        <div className="contentCard-bottom">
                                            <h5>
                                                <a href="course-details.html" className="font-title--card">{props.data.title}</a>
                                            </h5>
                                            <div className="contentCard-info">
                                                <a href="instructor-profile.html" className="contentCard-user d-flex align-items-center">
                                                    <p className="font-para--md">{props.data.instructor.firstName} {props.data.instructor.lastName}</p>
                                                </a>
                                                <div className="price">
                                                    <span>{formatCurrency(props.data.price)}</span>
                                                </div>
                                            </div>
                                            <div className="contentCard-more">
                                                <div className="d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src={starIcon} alt="star" />
                                                    </div>
                                                    <span>{props.data.AvgRating}</span>
                                                </div>
                                                <div className="book d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src={bookIcon} alt="location" />
                                                    </div>
                                                    <span>{props.data.level}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
        </Fragment>
    );
};

export default Card;