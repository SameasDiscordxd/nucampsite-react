import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import React from 'react';

const CampsiteCard = ({ campsite }) => {
    const { image, name} = campsite;
    return (
    <Card>
        //destructure campsite object
        <CardImg width="100%" src={image} alt={name} />
        <CardImgOverlay>
            <CardTitle>{campsite.name}</CardTitle>
        </CardImgOverlay>
    </Card>
    );
}

export default CampsiteCard