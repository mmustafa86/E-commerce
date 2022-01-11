
import React, { Component } from 'react'
import SHOP_DATA from './shop.data'
 import CollectionPreview from '../../components/collection-preview/CollectionPreview'
import PropTypes from 'prop-types'

class Shop extends Component {
    constructor(props){
        super(props)
   this.state={
       collections:SHOP_DATA
   }
    }

    
    render() {
        const {collections}=this.state
        return (
            <div className='sho-page'>

            {
                collections.map(({id,...otherCollectionProps})=>(
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
          
            </div>
        )
    }
}
export default Shop;