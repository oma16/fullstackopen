export const data2 = `
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
    


    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server->>browser:{"content":"help","date":"2023-09-20T12:14:29.483Z"}
    deactivate server
    server-->>browser: HTTP status code 201
    `;
