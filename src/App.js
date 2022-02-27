import React from 'react';
import './index.css';


const Item = (props) => {
    console.log(props)
    return (
      <>  
        <li className={props.item.complete ? 'completed-item' : ''}>{props.item.value}</li>
        <button onClick={() => props.handleToggle(props.item)}>toggle</button>
      </>  
    )
}

const List = (props) => {
    return (
      <>  
        {props.list.map(el => <Item item={el} key={el} handleToggle={props.handleToggle}/>)}
      </>  
    )
}
class Form extends React.Component {
    state = {
        inputValue: ''
    }
    handleChange = (e) => {
       this.setState({inputValue: e.target.value})
    }
    handleSubmit = (e) => {
       e.preventDefault();
       this.setState({inputValue: ''})
       this.props.handleSubmit(this.state.inputValue)
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.inputValue} onChange={this.handleChange}/>
            </form>
        )
    }
}

class App extends React.Component{
   state = {
        list: []
    }
    handleSubmit = (value) => {
       const item = {
           id: `${Math.random() - Math.random()}`,
           value,
           complete: false
       }
       this.setState({list: [...this.state.list, item]})
    }

    handleToggle = (val) => {
       const newList = this.state.list.map(el => {
           if(el.id === val.id) {
             el.complete = !el.complete
           }
           return el
       })
       this.setState({list: newList})
    }

    render() {
      return (
        <>
         <Form handleSubmit={this.handleSubmit} />
         <List list={this.state.list} handleToggle={this.handleToggle}/>
        </>
      )
    }
}

export default App;