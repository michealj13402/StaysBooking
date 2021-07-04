import React from "react";
import { Tabs, List, Card, message, Typography } from "antd";
import { getStaysByHost } from "../utils";

const { Text } = Typography;
const { TabPane } = Tabs;

class MyStays extends React.Component {
  state = {
    loading: false,
    data: [],
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    this.setState({
      loading: true,
    });

    try {
      const resp = await getStaysByHost();
      this.setState({
        data: resp,
      });
    } catch (error) {
      message.error(error.message);
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    return (
      <List
        loading={this.state.loading}
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={this.state.data}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.name}>
              <Text type="secondary">{item.address}</Text>
            </Card>
          </List.Item>
        )}
      />
    );
  }
}

class HostHomePage extends React.Component {
  render() {
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="My Stays" key="1">
          <MyStays />
        </TabPane>
        <TabPane tab="Upload Stay" key="2">
          Content of Tab Pane 2
        </TabPane>
        ane 3
      </Tabs>
    );
  }
}

export default HostHomePage;
