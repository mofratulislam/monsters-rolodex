import './card.styles.css';

const Card = ({ monster: { id, name, email } }) => (
    <div className="card-container">
        <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="" />
        <h2>{name}</h2>
        <h3>{email}</h3>
    </div>
);

export default Card;
