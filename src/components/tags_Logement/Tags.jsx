import PropTypes from "prop-types";

function Tags({text}) {
    return <p className="tags">{text}</p>;
};

Tags.propTypes = {
    text : PropTypes.string.isRequired,
};

export default Tags;