import Card from '../card/card.components';
import './card-list.styles.css';

const CardList = ({ monsters }) => (
    <div className="card-list">
        {monsters.map((monster) => (
            <Card key={monster.id} monster={monster} />
        ))}
    </div>
);

export default CardList;
