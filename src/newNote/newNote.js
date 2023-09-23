export const data = `
sequenceDiagram

    participant form
    participant inputField
    participant button
    participant browser
    participant server

    form->>inputField: write something into the text field
    
    
    button->>form: click to save data

    
    form->>browser:  send form data
    activate button
    form-->>browser: note:form data is sent with HTTP POST


    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: HTTP status code 302
    deactivate server

    Note right of browser:the browser reloads the Notes page. The reload causes three more HTTP requests

    server->>browser: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server
    

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "form data is sent with HTTP POST", "date": "2023-1-1" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
    `;
