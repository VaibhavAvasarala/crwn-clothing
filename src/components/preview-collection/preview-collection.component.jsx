import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component'

import './preview-collection.styles.scss';

const PreviewCollection = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title}</h1>
        <div className='preview'>
            {
                items.filter((item, idx) => idx < 4)
                .map(({id, ...otherItemProps}) => (<CollectionItem key={id} {...otherItemProps}></CollectionItem>))
            }

        </div>
    </div>
);

export default PreviewCollection;