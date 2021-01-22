import React from 'react';
import Card from '../card/card.components';
import './card-list.styles.css';
const CardList = props => {
    return (
        <div className='card-list'>
          {props.monsters.map(monster => <Card monster={monster} ></Card>)}
        </div>
    );
};

export default CardList;