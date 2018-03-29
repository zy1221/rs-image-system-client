import React from 'react';
import { Modal, Button,Input} from 'antd';


class AddCategoryDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            visible: false,
            categoryName:''
        }
    }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    var categoryName = this.state.categoryName;
    this.props.onAddCategoryName(categoryName)
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  
  onInputChange =(e) =>{
      this.setState({
          categoryName:e.target.value
      })
  }
  render() {
    return (
      <div>
        <Button  style={{left:'4px',width: '7vw',backgroundColor:'#E0EEE0',fontSize:'7pt'}} onClick ={this.showModal}>添加影像类别</Button>
        <Modal
          title="添加影像类别"
          okText="添加"
          cancelText="取消"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width = '200px'
        >
            <label>影像类别名称：</label>
            <Input onChange={this.onInputChange}></Input>
        </Modal>
      </div>
    );
  }
}
export default AddCategoryDialog;