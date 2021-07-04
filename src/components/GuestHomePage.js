import React from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

class GuestHomePage extends React.Component {
  render() {
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="My Stays" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Upload Stay" key="2">
          Content of Tab Pane 2
        </TabPane>
        ane 3
      </Tabs>
    );
  }
}

export default GuestHomePage;
