import React from 'react';

const Results = (props) => {
    const { repos } = props;
    console.log('Repos is : ', repos.data);

    const ListRepos =
        repos.length !== 0 ? (
            repos.data.map((item) => <li key={item.id}><a href={item.html_url}>{item.name}</a> </li>)
        ) : (
            <li>No Repos Found</li>
        );

    return <ul>{ListRepos}</ul>;

};

export default Results;