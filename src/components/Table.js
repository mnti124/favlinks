import React from 'react';
import {ButtonToggle} from 'reactstrap';




const TableHeader = () => { 
    // boilerplate table header functional component
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>URL</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    // boilerplate table body functional component 
    // we use Array.map to create table rows from LinkData passed via props
    const rows = props.linkData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td><a href={row.URL}>{row.URL}</a></td>
                {/* <td><button onClick={() => props.removeLink(index)}>Delete</button></td> */}
                <td><ButtonToggle color="danger" onClick={() => props.removeLink(index)}>Delete</ButtonToggle></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { linkData, removeLink } = props;
    {/*TODO - return <table> component, TableHeader and TableBody  */}
    return(
        <table>
            <TableHeader />
            <TableBody linkData={linkData} removeLink={removeLink}/>
            {console.log(linkData)}
        </table>
        
    )
}


export default Table;