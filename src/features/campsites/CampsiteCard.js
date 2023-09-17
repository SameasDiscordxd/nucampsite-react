import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const CampsiteCard = ({ campsite }) => {
  const { id, image, name } = campsite;

  return (
    <Link to={`${id}`}> {/* Use Link to wrap around content */}
      <Card>
        <CardImg width="100%" src={image} alt={name} />
        <CardImgOverlay>
          <CardTitle>{name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </Link>
  );
};

export default CampsiteCard;
