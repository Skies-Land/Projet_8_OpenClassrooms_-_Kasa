import PropTypes from "prop-types";
import starActiveSvg from "../../assets/image/starActive.svg";
import starInactiveSvg from "../../assets/image/starInactive.svg";

const Rating = ({rating}) => {
    const fullRating = 5;

    let starActive = [];
    let starInactive = [];

    for (let index = 0; index < rating; index++) {
        starActive.push(<img className="starActive" key={`active-${index}`} src={starActiveSvg} alt="Star  Active" />);
    }

    for (let index = 0; index < (fullRating - rating); index++) {
        starInactive.push(<img className="starInactive" key={`inactive-${index}`} src={starInactiveSvg} alt="Star Inactive" />);
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