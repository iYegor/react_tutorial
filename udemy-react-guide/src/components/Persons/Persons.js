import Person from "./Person/Person";
import React from "react";

const persons = (props) => (
    <div>
        {
            props.persons.map((person, index) => {
                return <Person
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    deletePerson={() => props.clicked(index)}
                    changed={(event) => props.changed(event, person.id)}
                />
            })
        }
    </div>
);

export default persons;