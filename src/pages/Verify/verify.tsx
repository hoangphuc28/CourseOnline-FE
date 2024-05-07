import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { VerifyAccount } from '../../redux/action/Verify.tsx';

const Verify = () => {
    function useQuery() {
        const { search } = useLocation();
        return React.useMemo(() => new URLSearchParams(search), [search]);
    }
    let query = useQuery();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(VerifyAccount(query.get("token")))
    }, [])
    return (
        <section className="section signin-area verify section-padding overflow-hidden">
            <div className="container">
                <div className="row align-items-center justify-content-center text-center">
                    <div className="col-lg-5 order-2 order-lg-0">
                        <h2 className="font-title--md mb-0">Verify Successfully</h2>
                        <p className="mt-2 mb-lg-4 mb-3 text-secondary">
                            Now you can access your account!
                        </p>
                        <a href="/signin" type="submit" className="button button-lg button--primary w-100">Sign In</a>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Verify;