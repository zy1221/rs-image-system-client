import React from 'react';
import { Form, Row, Col, Input, Button, Icon,Select,DatePicker } from 'antd';
import { Upload} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;


const MyCol =({getFieldDecorator,label,required,id})=>{
    return(
        <Col span ={6} style = {{}}>
            <FormItem label ={label} style ={{margin:'0 2px'}}>
                {
                    getFieldDecorator(
                        id,
                        {rules: [{ required: required, message: '请填写‘'+label+'’!'}]}
                    )(
                        <Input placeholder={id}/>
                    )
                }
            </FormItem>
        </Col>
    )
}

class MyFormModel extends React.Component{
    state = {
        visible: false,
        imageCategoryInfo:'',
        fileList:[],
    }
//为影像类别选择框构造Options。
    onSelectOptions =(data) =>{
        var options = data.map((item) =>
          <Option key={item.key}>{item.title}</Option>
        )
        return options;
      }
//影像类别选择框发证改变是执行。
    onSelectChange = (e) =>{
        this.setState({
          imageCategoryInfo: e,
        });
      }
//提交按钮执行函数。
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
       
            const formData = new FormData();
            for(var key in values){
                if(key !== 'image_name'){
                    console.log(values[key]);
                    formData.append(key,values[key]);
                }
            }
            const { fileList } = this.state;
            fileList.forEach((file) => {
                formData.append('image_name', file);
            });
            this.props.submitForm(formData);
            
            console.log('Received values of form: ', values);
            console.log(this.state.fileList);
        });
        
    }
    handleReset = () => {
        this.props.form.resetFields();
        this.setState({
            fileList: [],
          });
    }
    handleCancle = () => {
        this.props.dialogVisiable();
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        // const props = {
        //     beforeUpload:() =>{
        //         return false;
        //     },
        // };
        const props = {
            onRemove: (file) => {
              this.setState(({ fileList }) => {
                const index = fileList.indexOf(file);
                const newFileList = fileList.slice();
                newFileList.splice(index, 1);
                return {
                  fileList: newFileList,
                };
              });
            },
            beforeUpload: (file) => {
              this.setState(({ fileList }) => ({
                fileList: [...fileList, file],
              }));
              return false;
            },
            fileList: this.state.fileList,
          };


        return (
            <Form>
                <Row gutter ={24}>
                    <MyCol getFieldDecorator ={getFieldDecorator} id = 'location_name' label ='拍摄地点：' required={true}></MyCol>
                    <MyCol getFieldDecorator ={getFieldDecorator} id = 'satellite_name' label ='拍摄卫星：' required={true}></MyCol>
                    <MyCol getFieldDecorator ={getFieldDecorator} id = 'image_resolution' label ='影像分辨率：' required={true}></MyCol>
                    <MyCol getFieldDecorator ={getFieldDecorator} id = 'image_description' label ='影像描述：' required={false}></MyCol>
                </Row>
                <Row gutter ={24}>
                    <MyCol getFieldDecorator ={getFieldDecorator} id ='lt_lon' label ='左上角经度：' required={true}></MyCol>
                    <MyCol getFieldDecorator ={getFieldDecorator} id ='lt_lat' label ='左上角纬度：' required={true}></MyCol>
                    <MyCol getFieldDecorator ={getFieldDecorator} id ='rt_lon' label ='右上角经度：' required={true}></MyCol>
                    <MyCol getFieldDecorator ={getFieldDecorator} id ='rt_lat' label ='右上角纬度：' required={true}></MyCol>
                    <MyCol getFieldDecorator ={getFieldDecorator} id ='lb_lon' label ='左下角经度：' required={true}></MyCol>
                    <MyCol getFieldDecorator ={getFieldDecorator} id ='lb_lat' label ='左下角纬度：' required={true}></MyCol>
                    <MyCol getFieldDecorator ={getFieldDecorator} id ='rb_lon' label ='右下角经度：' required={true}></MyCol>
                    <MyCol getFieldDecorator ={getFieldDecorator} id ='rb_lat' label ='右下角纬度：' required={true}></MyCol> 
                </Row> 
                <Row gutter ={24}>
                    <Col key={0} span ={8}>
                        <FormItem label ='影像类别'>
                        {
                            getFieldDecorator(
                                'category_id',
                                {rules: [{ required: true, message: '请选择‘影像类别’！'}]}
                            )(
                                <Select>
                                    {this.onSelectOptions(this.props.selectData)} 
                                </Select>
                            )
                        } 
                        </FormItem>
                    </Col>
                    <Col key={9} span ={8}>
                        <FormItem label ='拍摄时间'>
                            {
                                getFieldDecorator(
                                    'image_time',
                                    {rules: [{ required: true, message: '请选择‘拍摄时间’！'}]}
                                )(
                                    <DatePicker ></DatePicker>
                                )
                            }  
                        </FormItem>
                    </Col>
                    <Col key={10} span ={8}>
                        <FormItem label ='上传影像'>
                            {
                                getFieldDecorator(
                                    'image_name',
                                    {rules: [{ required: true, message: '请上传影像！'}]}
                                )(
                                    <Upload  {...props}>
                                        <Button style={{width:'150px'}}>
                                            <Icon type="upload" />select
                                        </Button>
                                    </Upload>
                                )
                            }
                        </FormItem>
                    </Col>
                </Row>   
              
                <Row>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>提交</Button>
                        <Button type="primary" style={{ marginLeft: 8 }} onClick={this.handleReset}>重置</Button>
                        <Button type="primary" style={{ marginLeft: 8 }} onClick={this.handleCancle}>取消</Button>
                    </Col>
                </Row>
            </Form>
        )
    }
    
}
const MyForm = Form.create()(MyFormModel);
export default MyForm;