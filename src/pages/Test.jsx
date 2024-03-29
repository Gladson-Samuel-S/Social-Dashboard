import { Tab, TabList, TabPanel } from "react-tabs";
import { TabsStyled } from "../styles/GlobalStyledComponents/Tabs";

const Test = () => {
  return (
    <TabsStyled>
      <TabList>
        <Tab>Title 1</Tab>
        <Tab>Title 2</Tab>
      </TabList>

      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </TabsStyled>
  );
};

export default Test;
