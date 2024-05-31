import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Container } from "react-bootstrap";
import TabSec from "./cards/TabSec";
const Work = () => {
  const [key, setKey] = useState("tab1");

  return (
    <Container>
      <h4 className="sec-title">
        Put connected fleet intelligence <br /> to work to drive better outcomes
      </h4>

      <section className="carbrowse_con" id="">
        <Tabs className="Tabs" activeKey={key} onSelect={(k) => setKey(k)}>
          <TabList>
            <Tab eventKey="tab1">Reduce Cost</Tab>
            <Tab eventKey="tab2">Enhance Safety</Tab>
            <Tab eventKey="tab3">Sustainability</Tab>
            <Tab eventKey="tab4">Expand Value</Tab>
          </TabList>
          <TabPanel>
            <TabSec />
          </TabPanel>

          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </section>
    </Container>
  );
};

export default Work;
