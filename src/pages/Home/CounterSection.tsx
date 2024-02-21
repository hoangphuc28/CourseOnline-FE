import React from 'react';

const CounterSection = () => {
  return (
   <>
    <section className="section section--bg-offwhite-three featured-popular-courses main-popular-course">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="featured-popular-courses-heading d-flex align-content-center justify-content-between">
                            <div className="main-heading">
                                <h3 className="font-title--md">Our Popular Courses</h3>
                            </div>
                            <div className="nav-button featured-popular-courses-tabs">
                                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active ps-0" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">
                                            All
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-design-tab" data-bs-toggle="pill" data-bs-target="#pills-design" type="button" role="tab" aria-controls="pills-design" aria-selected="false">
                                            Design
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-dev-tab" data-bs-toggle="pill" data-bs-target="#pills-dev" type="button" role="tab" aria-controls="pills-dev" aria-selected="false">
                                            Development
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-bus-tab" data-bs-toggle="pill" data-bs-target="#pills-bus" type="button" role="tab" aria-controls="pills-bus" aria-selected="false">
                                            Business
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link me-0" id="pills-its-tab" data-bs-toggle="pill" data-bs-target="#pills-its" type="button" role="tab" aria-controls="pills-its" aria-selected="false">
                                            IT & Software
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab">
                            <div className="row">
                                <div className="col-xl-4 col-md-6">
                                    <div className="contentCard contentCard--course">
                                        <div className="contentCard-top">
                                            <a href="course-details.html"><img src="../images/courses/demo-img-01.png" alt="images" className="img-fluid" /></a>
                                        </div>
                                        <div className="contentCard-bottom">
                                            <h5>
                                                <a href="course-details.html" className="font-title--card">Chicago International Conference on Education</a>
                                            </h5>
                                            <div className="contentCard-info d-flex align-items-center justify-content-between">
                                                <a href="instructor-profile.html" className="contentCard-user d-flex align-items-center">
                                                    <img src="../images/courses/7.png" alt="client-image" className="rounded-circle" />
                                                    <p className="font-para--md">Brandon Dias</p>
                                                </a>
                                                <div className="price">
                                                    <span>$12</span>
                                                    <del>$95</del>
                                                </div>
                                            </div>
                                            <div className="contentCard-more">
                                                <div className="d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/star.png" alt="star" />
                                                    </div>
                                                    <span>4.5</span>
                                                </div>
                                                <div className="eye d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/eye.png" alt="eye" />
                                                    </div>
                                                    <span>24,517</span>
                                                </div>
                                                <div className="book d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/book.png" alt="location" />
                                                    </div>
                                                    <span>37 Lesson</span>
                                                </div>
                                                <div className="clock d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/Clock.png" alt="clock" />
                                                    </div>
                                                    <span>3 Hours</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <a href="course-search.html" className="button button-lg button--primary">Browse all Courses</a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-design" role="tabpanel" aria-labelledby="pills-design-tab">
                            <div className="row">
                                <div className="col-xl-4 col-md-6">
                                    <div className="contentCard contentCard--course">
                                        <div className="contentCard-top">
                                            <a href="course-details.html"><img src="../images/courses/demo-img-01.png" alt="images" className="img-fluid" /></a>
                                        </div>
                                        <div className="contentCard-bottom">
                                            <h5>
                                                <a href="course-details.html" className="font-title--card">Chicago International Conference on Education</a>
                                            </h5>
                                            <div className="contentCard-info d-flex align-items-center justify-content-between">
                                                <a href="instructor-profile.html" className="contentCard-user d-flex align-items-center">
                                                    <img src="../images/courses/7.png" alt="client-image" className="rounded-circle" />
                                                    <p className="font-para--md">Brandon Dias</p>
                                                </a>
                                                <div className="price">
                                                    <span>$12</span>
                                                    <del>$95</del>
                                                </div>
                                            </div>
                                            <div className="contentCard-more">
                                                <div className="d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/star.png" alt="star" />
                                                    </div>
                                                    <span>4.5</span>
                                                </div>
                                                <div className="eye d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/eye.png" alt="eye" />
                                                    </div>
                                                    <span>24,517</span>
                                                </div>
                                                <div className="book d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/book.png" alt="location" />
                                                    </div>
                                                    <span>37 Lesson</span>
                                                </div>
                                                <div className="clock d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/Clock.png" alt="clock" />
                                                    </div>
                                                    <span>3 Hours</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="contentCard contentCard--course">
                                        <div className="contentCard-top">
                                            <a href="course-details.html"><img src="../images/courses/demo-img-02.png" alt="images" className="img-fluid" /></a>
                                        </div>
                                        <div className="contentCard-bottom">
                                            <h5>
                                                <a href="course-details.html" className="font-title--card">Chicago International Conference on Education</a>
                                            </h5>
                                            <div className="contentCard-info d-flex align-items-center justify-content-between">
                                                <a href="instructor-profile.html" className="contentCard-user d-flex align-items-center">
                                                    <img src="../images/courses/7.png" alt="client-image" className="rounded-circle" />
                                                    <p className="font-para--md">Brandon Dias</p>
                                                </a>
                                                <div className="price">
                                                    <span>$12</span>
                                                    <del>$95</del>
                                                </div>
                                            </div>
                                            <div className="contentCard-more">
                                                <div className="d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/star.png" alt="star" />
                                                    </div>
                                                    <span>4.5</span>
                                                </div>
                                                <div className="eye d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/eye.png" alt="eye" />
                                                    </div>
                                                    <span>24,517</span>
                                                </div>
                                                <div className="book d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/book.png" alt="location" />
                                                    </div>
                                                    <span>37 Lesson</span>
                                                </div>
                                                <div className="clock d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/Clock.png" alt="clock" />
                                                    </div>
                                                    <span>3 Hours</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="contentCard contentCard--course">
                                        <div className="contentCard-top">
                                            <a href="course-details.html"><img src="../images/courses/demo-img-03.png" alt="images" className="img-fluid" /></a>
                                        </div>
                                        <div className="contentCard-bottom">
                                            <h5>
                                                <a href="course-details.html" className="font-title--card">Chicago International Conference on Education</a>
                                            </h5>
                                            <div className="contentCard-info d-flex align-items-center justify-content-between">
                                                <a href="instructor-profile.html" className="contentCard-user d-flex align-items-center">
                                                    <img src="../images/courses/7.png" alt="client-image" className="rounded-circle" />
                                                    <p className="font-para--md">Brandon Dias</p>
                                                </a>
                                                <div className="price">
                                                    <span>$12</span>
                                                    <del>$95</del>
                                                </div>
                                            </div>
                                            <div className="contentCard-more">
                                                <div className="d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/star.png" alt="star" />
                                                    </div>
                                                    <span>4.5</span>
                                                </div>
                                                <div className="eye d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/eye.png" alt="eye" />
                                                    </div>
                                                    <span>24,517</span>
                                                </div>
                                                <div className="book d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/book.png" alt="location" />
                                                    </div>
                                                    <span>37 Lesson</span>
                                                </div>
                                                <div className="clock d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/Clock.png" alt="clock" />
                                                    </div>
                                                    <span>3 Hours</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <a href="course-search.html" className="button button-lg button--primary">Browse all Courses</a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-dev" role="tabpanel" aria-labelledby="pills-dev-tab">
                            <div className="row">
                                <div className="col-xl-4 col-md-6">
                                    <div className="contentCard contentCard--course">
                                        <div className="contentCard-top">
                                            <a href="course-details.html"><img src="../images/courses/demo-img-01.png" alt="images" className="img-fluid" /></a>
                                        </div>
                                        <div className="contentCard-bottom">
                                            <h5>
                                                <a href="course-details.html" className="font-title--card">Chicago International Conference on Education</a>
                                            </h5>
                                            <div className="contentCard-info d-flex align-items-center justify-content-between">
                                                <a href="instructor-profile.html" className="contentCard-user d-flex align-items-center">
                                                    <img src="../images/courses/7.png" alt="client-image" className="rounded-circle" />
                                                    <p className="font-para--md">Brandon Dias</p>
                                                </a>
                                                <div className="price">
                                                    <span>$12</span>
                                                    <del>$95</del>
                                                </div>
                                            </div>
                                            <div className="contentCard-more">
                                                <div className="d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/star.png" alt="star" />
                                                    </div>
                                                    <span>4.5</span>
                                                </div>
                                                <div className="eye d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/eye.png" alt="eye" />
                                                    </div>
                                                    <span>24,517</span>
                                                </div>
                                                <div className="book d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/book.png" alt="location" />
                                                    </div>
                                                    <span>37 Lesson</span>
                                                </div>
                                                <div className="clock d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/Clock.png" alt="clock" />
                                                    </div>
                                                    <span>3 Hours</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="contentCard contentCard--course">
                                        <div className="contentCard-top">
                                            <a href="course-details.html"><img src="../images/courses/demo-img-02.png" alt="images" className="img-fluid" /></a>
                                        </div>
                                        <div className="contentCard-bottom">
                                            <h5>
                                                <a href="course-details.html" className="font-title--card">Chicago International Conference on Education</a>
                                            </h5>
                                            <div className="contentCard-info d-flex align-items-center justify-content-between">
                                                <a href="instructor-profile.html" className="contentCard-user d-flex align-items-center">
                                                    <img src="../images/courses/7.png" alt="client-image" className="rounded-circle" />
                                                    <p className="font-para--md">Brandon Dias</p>
                                                </a>
                                                <div className="price">
                                                    <span>$12</span>
                                                    <del>$95</del>
                                                </div>
                                            </div>
                                            <div className="contentCard-more">
                                                <div className="d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/star.png" alt="star" />
                                                    </div>
                                                    <span>4.5</span>
                                                </div>
                                                <div className="eye d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/eye.png" alt="eye" />
                                                    </div>
                                                    <span>24,517</span>
                                                </div>
                                                <div className="book d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/book.png" alt="location" />
                                                    </div>
                                                    <span>37 Lesson</span>
                                                </div>
                                                <div className="clock d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/Clock.png" alt="clock" />
                                                    </div>
                                                    <span>3 Hours</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <a href="course-search.html" className="button button-lg button--primary">Browse all Courses</a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-bus" role="tabpanel" aria-labelledby="pills-bus-tab">
                            <div className="row">
                                <div className="col-xl-4 col-md-6">
                                    <div className="contentCard contentCard--course">
                                        <div className="contentCard-top">
                                            <a href="course-details.html"><img src="../images/courses/demo-img-01.png" alt="images" className="img-fluid" /></a>
                                        </div>
                                        <div className="contentCard-bottom">
                                            <h5>
                                                <a href="course-details.html" className="font-title--card">Chicago International Conference on Education</a>
                                            </h5>
                                            <div className="contentCard-info d-flex align-items-center justify-content-between">
                                                <a href="instructor-profile.html" className="contentCard-user d-flex align-items-center">
                                                    <img src="../images/courses/7.png" alt="client-image" className="rounded-circle" />
                                                    <p className="font-para--md">Brandon Dias</p>
                                                </a>
                                                <div className="price">
                                                    <span>$12</span>
                                                    <del>$95</del>
                                                </div>
                                            </div>
                                            <div className="contentCard-more">
                                                <div className="d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/star.png" alt="star" />
                                                    </div>
                                                    <span>4.5</span>
                                                </div>
                                                <div className="eye d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/eye.png" alt="eye" />
                                                    </div>
                                                    <span>24,517</span>
                                                </div>
                                                <div className="book d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/book.png" alt="location" />
                                                    </div>
                                                    <span>37 Lesson</span>
                                                </div>
                                                <div className="clock d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/Clock.png" alt="clock" />
                                                    </div>
                                                    <span>3 Hours</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="contentCard contentCard--course">
                                        <div className="contentCard-top">
                                            <a href="course-details.html"><img src="../images/courses/demo-img-02.png" alt="images" className="img-fluid" /></a>
                                        </div>
                                        <div className="contentCard-bottom">
                                            <h5>
                                                <a href="course-details.html" className="font-title--card">Chicago International Conference on Education</a>
                                            </h5>
                                            <div className="contentCard-info d-flex align-items-center justify-content-between">
                                                <a href="instructor-profile.html" className="contentCard-user d-flex align-items-center">
                                                    <img src="../images/courses/7.png" alt="client-image" className="rounded-circle" />
                                                    <p className="font-para--md">Brandon Dias</p>
                                                </a>
                                                <div className="price">
                                                    <span>$12</span>
                                                    <del>$95</del>
                                                </div>
                                            </div>
                                            <div className="contentCard-more">
                                                <div className="d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/star.png" alt="star" />
                                                    </div>
                                                    <span>4.5</span>
                                                </div>
                                                <div className="eye d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/eye.png" alt="eye" />
                                                    </div>
                                                    <span>24,517</span>
                                                </div>
                                                <div className="book d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/book.png" alt="location" />
                                                    </div>
                                                    <span>37 Lesson</span>
                                                </div>
                                                <div className="clock d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/Clock.png" alt="clock" />
                                                    </div>
                                                    <span>3 Hours</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="contentCard contentCard--course">
                                        <div className="contentCard-top">
                                            <a href="course-details.html"><img src="../images/courses/demo-img-03.png" alt="images" className="img-fluid" /></a>
                                        </div>
                                        <div className="contentCard-bottom">
                                            <h5>
                                                <a href="course-details.html" className="font-title--card">Chicago International Conference on Education</a>
                                            </h5>
                                            <div className="contentCard-info d-flex align-items-center justify-content-between">
                                                <a href="instructor-profile.html" className="contentCard-user d-flex align-items-center">
                                                    <img src="../images/courses/7.png" alt="client-image" className="rounded-circle" />
                                                    <p className="font-para--md">Brandon Dias</p>
                                                </a>
                                                <div className="price">
                                                    <span>$12</span>
                                                    <del>$95</del>
                                                </div>
                                            </div>
                                            <div className="contentCard-more">
                                                <div className="d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/star.png" alt="star" />
                                                    </div>
                                                    <span>4.5</span>
                                                </div>
                                                <div className="eye d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/eye.png" alt="eye" />
                                                    </div>
                                                    <span>24,517</span>
                                                </div>
                                                <div className="book d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/book.png" alt="location" />
                                                    </div>
                                                    <span>37 Lesson</span>
                                                </div>
                                                <div className="clock d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/Clock.png" alt="clock" />
                                                    </div>
                                                    <span>3 Hours</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="contentCard contentCard--course">
                                        <div className="contentCard-top">
                                            <a href="course-details.html"><img src="../images/courses/demo-img-04.png" alt="images" className="img-fluid" /></a>
                                        </div>
                                        <div className="contentCard-bottom">
                                            <h5>
                                                <a href="course-details.html" className="font-title--card">Chicago International Conference on Education</a>
                                            </h5>
                                            <div className="contentCard-info d-flex align-items-center justify-content-between">
                                                <a href="instructor-profile.html" className="contentCard-user d-flex align-items-center">
                                                    <img src="../images/courses/7.png" alt="client-image" className="rounded-circle" />
                                                    <p className="font-para--md">Brandon Dias</p>
                                                </a>
                                                <div className="price">
                                                    <span>$12</span>
                                                    <del>$95</del>
                                                </div>
                                            </div>
                                            <div className="contentCard-more">
                                                <div className="d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/star.png" alt="star" />
                                                    </div>
                                                    <span>4.5</span>
                                                </div>
                                                <div className="eye d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/eye.png" alt="eye" />
                                                    </div>
                                                    <span>24,517</span>
                                                </div>
                                                <div className="book d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/book.png" alt="location" />
                                                    </div>
                                                    <span>37 Lesson</span>
                                                </div>
                                                <div className="clock d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/Clock.png" alt="clock" />
                                                    </div>
                                                    <span>3 Hours</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <a href="course-search.html" className="button button-lg button--primary">Browse all Courses</a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-its" role="tabpanel" aria-labelledby="pills-its-tab">
                            <div className="row">
                                <div className="col-xl-4 col-md-6">
                                    <div className="contentCard contentCard--course">
                                        <div className="contentCard-top">
                                            <a href="course-details.html"><img src="../images/courses/demo-img-01.png" alt="images" className="img-fluid" /></a>
                                        </div>
                                        <div className="contentCard-bottom">
                                            <h5>
                                                <a href="course-details.html" className="font-title--card">Chicago International Conference on Education</a>
                                            </h5>
                                            <div className="contentCard-info d-flex align-items-center justify-content-between">
                                                <a href="instructor-profile.html" className="contentCard-user d-flex align-items-center">
                                                    <img src="../images/courses/7.png" alt="client-image" className="rounded-circle" />
                                                    <p className="font-para--md">Brandon Dias</p>
                                                </a>
                                                <div className="price">
                                                    <span>$12</span>
                                                    <del>$95</del>
                                                </div>
                                            </div>
                                            <div className="contentCard-more">
                                                <div className="d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/star.png" alt="star" />
                                                    </div>
                                                    <span>4.5</span>
                                                </div>
                                                <div className="eye d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/eye.png" alt="eye" />
                                                    </div>
                                                    <span>24,517</span>
                                                </div>
                                                <div className="book d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/book.png" alt="location" />
                                                    </div>
                                                    <span>37 Lesson</span>
                                                </div>
                                                <div className="clock d-flex align-items-center">
                                                    <div className="icon">
                                                        <img src="../images/icon/Clock.png" alt="clock" />
                                                    </div>
                                                    <span>3 Hours</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <a href="course-search.html" className="button button-lg button--primary">Browse all Courses</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="featured-popular-courses-shape">
                <img src="../images/shape/dots/dots-img-12.png" alt="Shape" className="img-fluid dot-06" />
                <img src="../images/shape/triangel.png" alt="Shape" className="img-fluid dot-07" />
            </div>
        </section>
    </> 
  );
};

export default CounterSection;
