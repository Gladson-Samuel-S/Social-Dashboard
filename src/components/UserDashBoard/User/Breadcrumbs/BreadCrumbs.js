import { TabContent } from "../../../../Data/Dashboard-data/UserData";
import { Tab, TabList, TabPanel } from "react-tabs";
import { TabsStyled } from "../../../../styles/GlobalStyledComponents/Tabs";
import MyProjects from "../../MyProjects/MyProjects";
import Temp from "../Temp/Temp";

const BreadCrumbs = () => {
  return (
    <TabsStyled defaultIndex={1}>
      <div className='wrapper'>
        <TabList>
          {TabContent.map((tab) => (
            <Tab key={tab}>{tab}</Tab>
          ))}
        </TabList>
      </div>

      <TabPanel>
        <Temp />
      </TabPanel>
      <TabPanel>
        <MyProjects />
      </TabPanel>
      <TabPanel>
        <Temp />
      </TabPanel>
      <TabPanel>
        <Temp />
      </TabPanel>
      <TabPanel>
        <Temp />
      </TabPanel>
      <TabPanel>
        <Temp />
      </TabPanel>
    </TabsStyled>
  );
};

export default BreadCrumbs;
