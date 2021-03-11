import React ,{useState,useEffect}from 'react'
import ReactDOM from 'react-dom'
import DropdownTreeSelect from 'react-dropdown-tree-select'
import 'react-dropdown-tree-select/dist/styles.css';



function CheckBox2() {
  const [Catagery, setCatagery] = useState([]);
  const [newCatagery, setNewCatagery] = useState([]);


const listData = () =>{
  fetch('http://13acbf7b0049.ngrok.io /admin/category')
  .then(response => response.json())
  .then(data =>
     
       setCatagery(data.categorys)  
       
       )
}
useEffect(() => {
  listData()

}, [])


const onChange = (currentNode, selectedNodes) => {
  console.log('onChange::',
   currentNode,
   
   selectedNodes)
}
const onAction = (node, action) => {
  console.log('onAction::', action, node)
}
const onNodeToggle = currentNode => {
  console.log('onNodeToggle::', currentNode)
}
console.log("Catagery---",Catagery)

    return (
        <div>
          <DropdownTreeSelect data={Catagery} onChange={onChange} onAction={onAction} onNodeToggle={onNodeToggle} />  
        </div>
    )
}

export default CheckBox2


// const data = {
//   label: 'search me',
//   value: 'searchme',
//   children: [
//     {
//       label: 'search me too',
//       value: 'searchmetoo',
//       children: [
//         {
//           label: 'No one can get me',
//           value: 'anonymous',
//           children:[{
//               label: 'search me too',
//               value: 'searchmetoo',
//            } ],

//         },
//       ],
//     },
//   ],
// }