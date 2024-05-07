import React from "react";


export default function Search() {
    return (
        <>
            <div className="event-sub-section event-sub-section--spaceY eventsearch-sub-section">
                <div className="container">
                    <nav>
                        <ol className="breadcrumb align-items-center bg-transparent p-0 mb-0">
                            <li className="breadcrumb-item">
                                <a href="index.html" className="fs-6 text-secondary">Home</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a href="course-search.html" className="fs-6 text-secondary">course</a>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-9 mx-auto">
                    <div className="event-search-bar">
                        <form action="#">
                            <div className="form-input-group">
                                <input type="text" className="form-control" placeholder="Search Course..." />
                                <button className="button button-lg button--primary" type="submit" id="button-addon2">
                                    Search
                                </button>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-search"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}