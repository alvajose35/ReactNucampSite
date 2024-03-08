import { PROMOTIONS } from "../../app/shared/PROMOTIONS";

export const selectFeaturedPromotion = () => {
	return PROMOTIONS.find((promo) => promo.featured);
};