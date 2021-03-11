import React from 'react';
import Header from '../../components/header/header.component';

import SHOP_DATA from './shop.data.jsx';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                <Header/>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
        </div>);
    }
}

export default ShopPage;