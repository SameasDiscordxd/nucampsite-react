import React from 'react';
import { Col } from 'reactstrap';
import Partner from './Partner'; // Import the Partner component
import { selectAllPartners } from './partnersSlice'; // Import the selectAllPartners function

const PartnersList = () => {
    const partners = selectAllPartners();

    return (
    <Col className='mt-4'>
        {partners.map((partner) => (
        <div className='d-flex mb-5' key={partner.id}>
          <Partner partner={partner} /> {/* Render the Partner component */}
        </div>
        ))}
    </Col>
    );
};

export default PartnersList;
