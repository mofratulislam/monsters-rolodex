import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { fetchMonsters } from './redux/monsters/monstersSlice';

const App = () => {
    const [searchField, setSearchField] = useState('');
    const [filteredMonsters, setFilteredMonsters] = useState([]);

    const monsters = useSelector((state) => state.monsters.monstersProfiles);
    console.log(monsters);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMonsters());
    }, [dispatch]);

    const handleChange = (e) => {
        setSearchField(e.target.value);
    };

    useEffect(() => {
        const monstersData = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        setFilteredMonsters(monstersData);
    }, [monsters, searchField]);

    return (
        <div className="App">
            <h1>Monsters Rolodex</h1>
            <SearchBox placeholder="Search Monsters" handleChange={handleChange} />
            <CardList monsters={searchField === '' ? monsters : filteredMonsters} />
        </div>
    );
};

export default App;
