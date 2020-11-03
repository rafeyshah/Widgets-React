import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [

    {
        title : 'What is React?',
        content : 'React is a JavaScript library created by Facebook. React is a User Interface (UI) library. React is a tool for building UI components.'
    },
    {
        title : 'Why we use it?',
        content: 'React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple.'
    },
    {
        title: 'Why React is Popular?',
        content: "React basically gives developers the ability to work with a virtual browser that is more friendly than the real browser. React's virtual browser acts like an agent between the developer and the real browser"
    }
];

const options = [
{
    label : 'Color Green',
    value : 'green'
},
{
    label: 'Color Red',
    value: 'red'
},
{
    label: 'Color Blue',
    value: 'blue'
}
];


export default()=>{
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
        <Header />
        <Route path="/">
            <Accordion items={items}/>
        </Route>
        <Route path="/list">
            <Search />
        </Route>
        <Route path="/dropdown">
            <Dropdown 
            label="Select a color"
            options = {options}
            selected = {selected}
            onChangeSelection = {setSelected}
            />
        </Route>
        <Route path="/translate">
            <Translate />
        </Route>
        </div>
    );
};