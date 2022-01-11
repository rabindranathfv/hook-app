import React, { useRef } from 'react';

import '../../App.css';

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleSelect = () => {
        console.log(inputRef);
        inputRef.current.select()
        inputRef.current.value = 'test value';
        console.log(inputRef);
    }

    return (
        <div>
            <h1> Focus Screen </h1>
            <hr />

            <div className="form-group">
              <input type="text"
                ref={inputRef}
                className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
              <small id="helpId" className="form-text text-muted">Help text</small>
            </div>

            <button type="button" className="btn btn-primary" onClick={handleSelect}> Focus </button>
        </div>
    )
}
