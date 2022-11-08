import React from 'react';
import {Button} from "react-bootstrap";
import PropTypes from 'prop-types';

const Cover = ({name, coverImg, connect}) => {
    return (
        <div className="gradient-custom d-flex justify-content-center flex-column text-center min-vh-100">
            <div className="mt-auto text-dark mb-5">
                <div
                    className=" ratio ratio-1x1 mx-auto mb-2"
                    style={{maxWidth: "320px"}}
                >
                    <img src={coverImg} alt=""/>
                </div>
                <h1>{name}</h1>
                <p>Identify yourself with your entity wallet to negotiate Public Sector contracts</p>
                <Button
                    onClick={() => connect()}
                    variant="outline-dark"
                    className="rounded-pill px-3 mt-3"
                >
                    Secure Identification
                </Button>

            </div>
            <p className="mt-auto text-secondary">Powered by Algorand</p>
        </div>
    );
};

Cover.propTypes = {
    name: PropTypes.string,
    coverImg: PropTypes.string,
    connect: PropTypes.func
};

export default Cover;