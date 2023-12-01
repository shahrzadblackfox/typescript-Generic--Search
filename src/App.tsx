import React, { useState } from 'react';
import widgets  from './mock-data/widgets';
import people from './mock-data/people.ts';
import genericSearch from './utlist/genericSearch';
import { SearchUInput } from './components/Searchinput';


function App() {
  //const query = '';
  const [query, setQuery] = useState<string>('');
    return (
    <>
    <SearchUInput setSearchQuery={setQuery}/>
    <h2>Widgets: </h2>
    {widgets.filter((widget)=> genericSearch(widget,['title','description'], query,false)).map(widget =>{
      return(
        <h3>{widget.title}</h3>
      )
    })}
    <h2>
      People: 
    </h2>
    {people.filter((person)=> genericSearch(person,['firstName','lastName','eyeColor'], query,false)).map(person =>{
      return(
        <h3>{person.firstName} {person.lastName}</h3>
      )
    })}
    </>
  );
}

export default App;
