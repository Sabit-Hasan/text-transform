import React, { useRef, useState } from 'react';

const TextForm = ({ heading }) => {

    const [text, setText] = useState("");

    const [success, setSuccess] = useState(false);
    const [sbutton, setsButton] = useState(' ');
    const [color, setColor] = useState(' ');
    let wordCount = 0

    const textAreaRef = useRef(null);


    const handleChange = (event) => {

        setText(event.target.value);
    }

    // To Upper Case
    const handleUpperClick = () => {

        const newText = text.toUpperCase(text);
        setText(newText);
        setsButton(" converted to upper case!!");
        setColor("success");
        setSuccess(true);
    }

    // To lower Case
    const handleLowerClick = () => {

        const newText = text.toLowerCase(text);
        setText(newText);
        setsButton(" converted to lower case!!");
        setColor("primary");
        setSuccess(true);
    }

    // Text Copy 
    function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setsButton(" copied!!");
        setColor("warning");
        setSuccess(true);
    };

    // Handle Delete
    const handleDelete = () => {
        const newText = "";
        setText(newText);
        setSuccess(false);

    }

    return (
        <>
            {
                success && <div className="container my-3">
                    <div class={`alert alert-${color}`} role="alert">
                        Your text successfully {sbutton}
                    </div>
                </div>
            }
            <div className="container mt-2">
                <h3>{heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" ref={textAreaRef} onChange={handleChange} value={text} id="text-form" rows="10"></textarea>
                </div>
                <div className="d-flex">
                    <button className="btn btn-success mx-3" onClick={handleUpperClick}>Convert to Upper Case</button>
                    <button className="btn btn-primary" onClick={handleLowerClick}>Convert to Lower Case</button>
                    <button className="btn btn-warning mx-3" onClick={copyToClipboard}>Copy Text</button>
                    <button className="btn btn-danger" onClick={handleDelete}>Delete Text</button>
                </div>

                <div className="text-summary my-5">
                    <h3>Text Summary</h3>
                    <p>Total Word: {text.length == 0 ? wordCount : text.split(' ').length}</p>
                    <p>Total Characters: {text.length} </p>
                </div>
            </div>
        </>
    );
};

export default TextForm;