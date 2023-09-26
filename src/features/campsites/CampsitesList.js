import React from 'react';
import { Col, Row } from 'reactstrap';
import CampsiteCard from './CampsiteCard';
import { selectAllCampsites } from './campsitesSlice';
import { useSelector } from 'react-redux';

const CampsitesList = () => {
  const campsites = useSelector(selectAllCampsites);
  console.log('campsites:', campsites);


  return (
    <Row className="ms-auto">
      {campsites.map((campsite) => {
        // Define a function to handle campsite clicks
        return (
          <Col
            md="5"
            className="m-4"
            key={campsite.id}
          >
            <CampsiteCard campsite={campsite} />
          </Col>
        );
      })}
    </Row>
  );
};

export default CampsitesList;
