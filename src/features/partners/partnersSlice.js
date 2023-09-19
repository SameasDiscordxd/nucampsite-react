import { PARTNERS } from '../../app/shared/PARTNERS';

export const selectAllPartners = () => {
    return PARTNERS;
};


export const selectFeaturedPartner = () => {
    const featuredPartner = PARTNERS.find((partner) => partner.featured);
    return featuredPartner || null;
};