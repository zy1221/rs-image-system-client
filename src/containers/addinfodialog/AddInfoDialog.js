import React from 'react';
import { Modal, Button} from 'antd';
import MyForm from './MyForm';


class AddInfoDialog extends React.Component {
  state = {
       visible: false,
     }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }

  render() {
    const submitForm = this.props.submitForm;
    return (
      <div>
        <Button  onClick={this.showModal} 
            style={{float:'left',width: '7vw',backgroundColor:'#E0EEE0',fontSize:'7pt'}}
        >
        添加影像信息
        </Button>
        <Modal
          title="添加影像信息"
          cancelText ='取消'
          okText = '上传'
          mask = {false}
          maskClosable = {false}
          footer = {null}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <MyForm submitForm= {submitForm} dialogVisiable={this.handleCancel} selectData ={this.props.listData}></MyForm>
            
        </Modal>
      </div>
    );
  }
}
export default AddInfoDialog;
