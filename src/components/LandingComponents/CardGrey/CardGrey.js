import React from "react";
import { Card, Modal } from "antd";
class CardGrey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOK = (event) => {
    console.log(event);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (event) => {
    console.log(event);
    this.setState({ visible: false });
  };
  render() {
    const height = this.props.height || "100%";

    return (
      <Card
        onClick={this.showModal}
        bordered={false}
        style={{ backgroundColor: "grey", height: height, direction: "revert" }}
      >
        <Modal
          title="Book"
          visible={this.state.visible}
          onOk={this.handleOK}
          onCancel={this.handleCancel}
        >
          <div>
            <h1 style={{ textAlign: "center" }}>21.660</h1>
          </div>
        </Modal>
      </Card>
    );
  }
}
export default CardGrey;
