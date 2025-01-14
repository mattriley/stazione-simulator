import React from 'react';

export default () => ({ onSearch }) => {

    const searchInputRef = React.createRef();

    const clear = () => {
        searchInputRef.current.value = '';
        searchInputRef.current.focus();
        onSearch('');
    };

    return <div className="search-bar">
        <div>
            <img src="caffe-stazione.jpg" alt="Caffe Stazione logo" />
        </div>
        <div className="search-box">
            <input ref={searchInputRef} type="text" onChange={e => onSearch(e.target.value)} autoFocus />
            <span className="clear" role="button" onClick={clear}>🅧</span>
        </div>
        <div></div>
    </div>;
};
