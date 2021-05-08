import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import CardList from './components/card-list/card-list.component';
import Header from './components/header/header.component';
import SearchBox from './components/search-box/search-box.component';
import { fetchMonsters } from './redux/monsters/monstersSlice';
import { changeSearchField } from './redux/searchField/searchFieldSlice';

const App = () => {
    const [filteredMonsters, setFilteredMonsters] = useState([]);

    const monsters = useSelector((state) => state.monsters.monstersProfiles);

    const searchField = useSelector((state) => state.searchField.searchField);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMonsters());
    }, [dispatch]);

    const handleChange = (e) => {
        dispatch(changeSearchField(e.target.value));
    };

    useEffect(() => {
        const monstersData = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );

        setFilteredMonsters(monstersData);
    }, [monsters, searchField]);

    return (
        <div className="App">
            <Header />
            <SearchBox placeholder="Search Monsters" handleChange={handleChange} />
            <CardList monsters={searchField === '' ? monsters : filteredMonsters} />
        </div>
    );
};

export default App;
