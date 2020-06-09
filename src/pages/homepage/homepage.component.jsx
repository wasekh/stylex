import React, { Component } from 'react';

// import SHOP_DATA from './shop.data.js';

import ListItem from '../../components/list-item/list-item.component';
import './homepage.styles.scss';

// class HomePage extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             collections: SHOP_DATA
//         };
//     }

//     render() {
//         const { collections } = this.state;
//         return (
//             <div className='shop-page'>
//                 {collections.map(({ id, ...otherCollectionProps }) => (
//                     <CollectionPreview key={id} {...otherCollectionProps} />
//                 ))}
//             </div>
//         );
//     }
// }

class HomePage extends Component {
    constructor() {
        super();

        this.state = {
            items: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(photos => {
                return photos.map((item) => {
                    const price = Math.floor(Math.random() * 200) + 10; // price ranges from 10 to 200
                    return Object.assign({}, item, { price });
                })
            })
            .then(newPhotos => { this.setState({ items: newPhotos }) });
    }

    render() {
        const { items } = this.state;

        return (
            <div className='homepage-container'>
                {items.map(( item ) => (
                    <ListItem key={item.id} item={item} />
                ))}
            </div>
        );
    }
}

export default HomePage;