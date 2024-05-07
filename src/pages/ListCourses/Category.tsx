import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetCategories } from '../../redux/action/GetCategories.tsx';

const Category = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetCategories())
    }, [])
    const categories = useSelector(state => state.categories.list)
    return (
            <div className="col-lg-4 d-none d-lg-block">
                <div className="accordion sidebar-filter" id="sidebarFilter">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="categoryAcc">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#categoryCollapse" aria-expanded="true" aria-controls="categoryCollapse">
                                category
                            </button>
                        </h2>
                        <div id="categoryCollapse" className="accordion-collapse collapse show" aria-labelledby="categoryAcc" data-bs-parent="#sidebarFilter">
                            <div className="accordion-body">
                                <form action="#">
                                    <div className="accordion-body__item">
                                        <div className="check-box">
                                            <input type="checkbox" className="checkbox-primary" />
                                            <label> All </label>
                                        </div>
                                    </div>

                                  {categories?.map((item, index) => (
                                      <div key={index} className="accordion-body__item">
                                      <div className="check-box">
                                          <input type="checkbox" className="checkbox-primary" />
                                          <label>{item.name}</label>
                                      </div>
                                  </div>
                                  ))}
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="levelAcc">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#levelCollapse" aria-expanded="false" aria-controls="levelCollapse">
                                Level
                            </button>
                        </h2>
                        <div id="levelCollapse" className="accordion-collapse collapse" aria-labelledby="levelAcc" data-bs-parent="#sidebarFilter">
                            <div className="accordion-body">
                                <form action="#">
                                    <div className="accordion-body__item">
                                        <div className="check-box">
                                            <input type="checkbox" className="checkbox-primary" />
                                            <label> All </label>
                                        </div>
                                        <p className="check-details">
                                            1,54,750
                                        </p>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Category;