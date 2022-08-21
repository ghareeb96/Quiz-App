import React from 'react'
import './Loading.scss'

const Loading = () => {

    return (
        <div id='Loading-screen' className='page'>
            <div className="container">
                <div class="lds-ellipsis">
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Loading