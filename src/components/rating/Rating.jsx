import PropTypes from "prop-types";
import starActiveImg from "../../assets/image/star_active.svg";
import starInactiveImg from "../../assets/image/star_inactive.svg";

const Rating = ({rating}) => {
    const fullRating = 5;

    let starActive = [];
    let starInactive = [];

    for (let index = 0; index < rating; index++) {
        starActive.push(<img className="starActive" key={`active-${index}`} src={starActiveImg} alt="Star  Active" />);
    }

    for (let index = 0; index < (fullRating - rating); index++) {
        starInactive.push(<img className="starInactive" key={`inactive-${index}`} src={starInactiveImg} alt="Star Inactive" />);
    }

    return (
        <>
            {starActive}
            {starInactive}
        </>
    );
};

Rating.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default Rating;