import React from 'react';


const NestedListComponent = (props) => {

    return (
        <div>
            <ul className="nested-list">
                <li>{props.list1}</li>
                <li>{props.list2}</li>
                <li>{props.list3}</li>
                <li>{props.list4}</li>
                <li>{props.list5}</li>
                <li>{props.list6}</li>
                <li>{props.list7}</li>
                <li>{props.list8}</li>
                <li>{props.list9}</li>
            </ul>

        </div>
    )
}

export default NestedListComponent;