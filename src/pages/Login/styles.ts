import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 12px;


    .login-sm {
        width: 100%;
        background-color: green;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 12px;

        form {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            padding: 12px;

            input {
                width: 100%;
                margin: 14px 0;
                padding: 12px 0;
                border-radius: 4px;
                padding-left: 12px;
            }

            button {
                margin: 14px 0;
                width: 100%;
                padding: 12px;
                color: #fff;
                font-weight: 400;
                border-radius: 4px;
                background-color: #742904;
               
            }
        }
    }

    .login-md {
        width: 20%;
        height: 30%;
        background-color: green;
        border-radius: 4px;
        opacity: .9;
        

        form {
            width: 100%;
            height: 100%;
            padding: 24px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            input {
                margin-bottom: 30px;
                width: 100%;
                padding: 18px;
                border-radius: 4px;
                font-size: 1rem;
                font-weight: 100;
            }

            button {
                padding: 12px 30px;
                border: 0;
                background-color: #742904;
                font-size: 1.2rem;
                color: #fff;
                font-weight: 400;
                border-radius: 4px;
                width: 100%;
            }
        }
    }
`

