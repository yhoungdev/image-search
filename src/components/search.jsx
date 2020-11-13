import React, { Component } from 'react';
class Find extends Component {
    state = { 
        value:false,
        datas:[]
     }
    getData=()=>{
        const api=`https://api.unsplash.com/search/photos?page=1&query=school&client_id=49DrcQCvE6O_UzkFPOWP7zbHO_xEaqtb7a5-7oNJFWI`
         fetch(api)
         .then( res => res.json())
         .then( data => {
             this.setState({
                vaue:true,
                datas:data ,
            })
         })
        
       
    }
    render() { 
        var { value , datas }=this.state;
        if(!value){
            return (
                <div>failed</div>
            )
        } else {
            return ( 
                <div className='container'>
                    <ul>
                        {
                            datas.map( item => (
                                <li key={item.id} ></li>
                            ))
                        }
                    </ul>
                </div>
             );

        }
    }
}
 
export default Find;