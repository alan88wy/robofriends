// @ts-nocheck
import React from 'react';
import Card from './Card'

const CardList = ({ robots }) => {

    return (
        <div>
            {
                robots.map((robot, i) => {
                    // need to put the key in i there so that it will not gives error
                    return (
                        <Card
                            key={i}
                            id={robot.id}
                            name={robot.name}
                            email={robot.email}
                        />
                    );
                })
            }
        </div>
    )
}

export default CardList;