import React, { Component } from 'react';
import '../App.css'
class Top extends Component {
    state={}
    //styling
    style={
        'display':'flex',
        'justifyContent':'space-between'
    }
    render(){
        return(
            <header  >
               <div className='head container' style={this.style}>
               <div>
                    <h5> photoMe </h5>
                </div>
                <div style={{'display':'flex'}} >
                    <input type="text" className='form-control' style={{'width':300}} placeholder='search'  />
                    <button className='btn btn-info ml-2'>Search</button>
                </div>
               </div>
            </header>
        )
    }
}
export default Top; 