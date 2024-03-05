import BannerAbout from "../../layout/banner_about/BannerAbout";
import Collapse from "../../components/Collapse/Collapse";
import aboutJson from "../../../public/about.json";

const About = () => {
    return (
        <div>
            <BannerAbout />

            <div className="about">
                {aboutJson.map((collapse, index) => (
                    <Collapse key={index} index={index} title={collapse.title}>
                        {collapse.text}
                    </Collapse>
                ))}
            </div>
        </div>
    );
};

export default About;