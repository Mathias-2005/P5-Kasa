import BannerAbout from './BannerAbout';
import aboutList from "./data/aboutList.json"
import Collapse from './Collapse';


function About() {

    const datasList = aboutList.DataAboutList;

    return <div>
        <BannerAbout />
        <Collapse />
    </div>
}

export default About;