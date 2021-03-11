import * as React from 'react';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { Link,Redirect ,useHistory,hashHistory  }  from "react-router-dom";

import * as ReactDOM from 'react-dom';
import { enableRipple } from '@syncfusion/ej2-base';
import Checkbox2 from './CheckBox2';


enableRipple(true);
export default class CheckApp extends React.Component {
    constructor(props) {
        super(...arguments);
        this.state = {
            datas:[]          };
      
        // define the JSON of data
        this.countries =
         [
            { id: 1, name: "Australia", hasChild: true, expanded: true },
            { id: 2, pid: 1, name: "New South Wales" },
            { id: 3, pid: 1, name: "Victoria" },
            { id: 4, pid: 1, name: "South Australia" },
            { id: 6, pid: 1, name: "Western Australia" },
            { id: 7, name: "Brazil", hasChild: true },
            { id: 8, pid: 7, name: "Paraná" },
            { id: 9, pid: 7, name: "Ceará" },
            { id: 10, pid: 7, name: "Acre" }
           
         
        ];
        this.field = { dataSource: this.countries, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
        this.isChecked = true;
    }
    nodeChecked(text) {
        alert("The checked node's id: " + this.checkedNodes); 
        // To alert the checked node's id.
        var item=this.checkedNodes
        // this.props.history.push("/CreateArticle",item);
        localStorage.setItem("checkedNodes", item);

        // this.props.CreateArticle("/CreateArticle",item)
        // <CreateArticle id=item/>
    }

componentDidMount(){

    this.listData()
}

    listData = () =>{
        fetch('http://8f0687dad474.ngrok.io//admin/category')
        .then(response => response.json())
        .then(data =>
           this.setState({...data.categorys})
            //  setCatagery(data.categorys)  
             
             )
    }
  

 
    render() {
        console.log("datas",this.field)

        return (

            <div>


<Checkbox2/>
         
        {/* <TreeViewComponent fields={this.field} showCheckBox={this.isChecked} nodeChecked={this.nodeChecked}/> */}
        </div>)
        }
}
