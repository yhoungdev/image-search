import React , { Component  } from 'react';
class Photos extends Component {
    state={}
    
    render(){
        return(
            <div className='container'>
                {/* images part  */}
                <center>
                <h5 style={{'color':'rgba(158, 158, 158, 0.877)','fontSize':15,'alignItems':'center'}} className='mt-3'>PHOTOS FOR TODAY</h5>
                </center>
            {/* images */}
            <div id='img'>
           <center>
           <img src="https://picsum.photos/200/200?random=8" className='mr-4 mt-3'  />
            <img src="https://picsum.photos/200/200?random=9" className='mr-4 mt-3'/>
            <img src="https://picsum.photos/200/200?random=12" className='mr-4 mt-3 '/>
            <img src="https://picsum.photos/200/200?random=0" className='mt-3'/>
            <br/>
            <img src="https://picsum.photos/200/200?random=1" className='mr-4 mt-3'  />
            <img src="https://picsum.photos/200/200?random=2" className='mr-4 mt-3'/>
            <img src="https://picsum.photos/200/200?random=17" className='mr-4 mt-3 '/>
            <img src="https://picsum.photos/200/200?random=5" className='mt-3'/>
           </center>
            </div>

            </div>
        )
    }
}
export default Photos;