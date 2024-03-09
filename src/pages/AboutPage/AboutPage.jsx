import BannerAbout from "../../layout/BannerAbout/BannerAbout.jsx";
import Collapse from "../../components/Collapse/Collapse.jsx";
import aboutJson from "../../../public/about.json";

const AboutPage = () => {
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

export default AboutPage;
