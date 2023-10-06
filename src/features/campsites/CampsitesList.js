import React from 'react';
import { Col, Row } from 'reactstrap';
import CampsiteCard from './CampsiteCard';
import { selectAllCampsites } from './campsitesSlice';
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading';  // Imported Loading component
import Error from '../../components/Error';      // Imported Error component

const CampsitesList = () => {
    const campsites = useSelector(selectAllCampsites);

    // Add isLoading and errMsg using useSelector hook
    const isLoading = useSelector((state) => state.campsites.isLoading);
    const errMsg = useSelector((state) => state.campsites.errMsg);

    // Check for loading state
    if (isLoading) {
        return (
            <Row>
                <Loading />
            </Row>
        );
    }

    // Check for error message
    if (errMsg) {
        return (
            <Row>
                <Error errMsg={errMsg} />
            </Row>
        );
    }

    return (
        <Row className="ms-auto">
            {campsites.map((campsite) => (
                <Col md="5" className="m-4" key={campsite.id}>
                    <CampsiteCard campsite={campsite} />
                </Col>
            ))}
        </Row>
    );
};

export default CampsitesList;
