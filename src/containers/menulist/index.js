import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import * as MenuListAction from '../../action';
import { Tree, Button } from 'antd';
import 'antd/dist/antd.css';
import AddInfoDialog from '../addinfodialog/AddInfoDialog';
import AddCategoryDialog from '../addinfodialog/AddCategoryDialog'; 

const TreeNode = Tree.TreeNode;
class MainList extends Component{
state = {
  expandedKeys: [],
  autoExpandParent: true,
  checkedKeys: [],
  selectedKeys: [],
}
componentDidMount(){
    this.props.fetchCategoryImageInfo()
}
onExpand = (expandedKeys) => {
  console.log('onExpand', arguments);
  this.setState({
    expandedKeys,
    autoExpandParent: false,
  });
}
onCheck = (checkedKeys) => {
  console.log('onCheck', checkedKeys);
  this.setState({ checkedKeys });
}
onSelect = (selectedKeys, info) => {
  console.log('onSelect', info);
  this.setState({ selectedKeys });
  
}

onDelete = () => {
  if(this.state.checkedKeys.checked !== undefined ){
    var checkedArray = this.state.checkedKeys.checked;
    var deleteArray =[];
    // checkedArray.map((item) =>{
    //   if(item.split('&').length>1){
    //     deleteArray.push(item);
    //   }
    // })
    for(var item of checkedArray){
      if(item.split('&').length>1){
        deleteArray.push(item);
      }
    }
    if(deleteArray.length>0){
      this.props.deleteInfo(deleteArray)
    }
    else{
      console.log('不能删除根节点');
    }
  }
  else{
      console.log('请选择要删除的项');
    }
}

renderTreeNodes = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} />;
    });
}

render() {
    const { listData=[] } = this.props;
    const addCategoryName = this.props.addCategoryName;
    const submitForm = this.props.submitForm;
    return (
      <div>
        <AddInfoDialog submitForm={submitForm} listData={listData}>添加影像信息</AddInfoDialog>
        <AddCategoryDialog onAddCategoryName ={addCategoryName}></AddCategoryDialog>
        <Button onClick={this.onDelete} 
          style={{marginTop:'4px',width: '7vw',backgroundColor:'#E0EEE0',fontSize:'7pt'}}
        >
          删除选择项
        </Button>
        <Tree 
          checkable
          checkStrictly
          showLine={true}
          showIcon={false}
          onExpand={this.onExpand}
          expandedKeys={this.state.expandedKeys}
          autoExpandParent={this.state.autoExpandParent}
          onCheck={this.onCheck}
          checkedKeys={this.state.checkedKeys}
          onSelect={this.onSelect}
          selectedKeys={this.state.selectedKeys}
        >
          {this.renderTreeNodes(listData)}
        </Tree>
      </div>
      
    );
    
  }
  
}
function mapStateToPropd(state){
    return {
        listData:state.listData,
    };
}
export default connect(mapStateToPropd,{
    ...MenuListAction
})(MainList);