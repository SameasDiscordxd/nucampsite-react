import React from 'react'; // Make sure to import React
import { Col, Row } from 'reactstrap';
import CampsiteCard from './CampsiteCard';
import { selectAllCampsites } from './campsitesSlice';

const CampsitesList = ({ setCampsiteId }) => {
  const campsites = selectAllCampsites();

  // Define a function to handle campsite clicks
  const handleCampsiteClick = (campsiteId) => {
    setCampsiteId(campsiteId); // Update the campsiteId state
  };

  return (
    <Row className="ms-auto">
      {campsites.map((campsite) => {
        return (
          <Col
            md="5"
            className="m-4"
            key={campsite.id}
            onClick={() => handleCampsiteClick(campsite.id)} // Attach the click handler
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
