import React from 'react';
import { Col, Row } from 'reactstrap';
import CampsiteCard from './CampsiteCard';
import { selectAllCampsites } from './campsitesSlice';

const CampsitesList = ({ setCampsiteId }) => {
  const campsites = selectAllCampsites();

  return (
    <Row className="ms-auto">
      {campsites.map((campsite) => {
        // Define a function to handle campsite clicks
        const handleCampsiteClick = () => {
          setCampsiteId(campsite.id); // Update the campsiteId state
        };

        return (
          <Col
            md="5"
            className="m-4"
            key={campsite.id}
            onClick={handleCampsiteClick} // Attach the click handler
            style={{ cursor: 'pointer' }} // Add a pointer cursor to indicate clickability
          >
            <CampsiteCard campsite={campsite} />
          </Col>
        );
      })}
    </Row>
  );
};

export default CampsitesList;
