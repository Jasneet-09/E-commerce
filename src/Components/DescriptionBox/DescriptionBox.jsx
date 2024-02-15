import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () =>{
    return(
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-navbox">Description</div>
                <div className="descriptionbox-navbox fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores cumque rerum perferendis deleniti, ratione voluptatum mollitia natus aut eum iste nam, nulla incidunt facere iusto
                    .</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste perspiciatis eum totam dolor eos?</p>
            </div>
        </div>
    )
}

export default DescriptionBox;