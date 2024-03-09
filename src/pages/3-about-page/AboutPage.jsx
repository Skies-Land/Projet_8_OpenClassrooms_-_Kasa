import BannerAbout from "../../layout/banner-about/BannerAbout";
import Collapse from "../../components/collapse/Collapse";
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
