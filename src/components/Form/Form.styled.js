import styled from 'styled-components';

export const FormStyled = styled.form`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-color:rgb(205, 225, 204);
`
export const InputStyle = styled.input`
min-width: 200px;
display:block;
height:auto;
margin-left:auto;
margin-right:auto;
background-color:antiquewhite;
border:0.5px solid rgb(30, 149, 86);

`
export const Btn = styled.button`
border: none;
background-color:rgb(30, 149, 86);
min-width:60px;
margin-top:20px;
color:antiquewhite;
cursor: pointer;
font-size:20px;
border-radius:30%;
padding: 10px;
`