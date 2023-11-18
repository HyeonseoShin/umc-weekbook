import React from 'react'
import styled from 'styled-components'

export const body = styled.div`
  margin: 0;
  background-color: black;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

export const code = styled.div`
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
`

export const contain = styled.div`
  margin: 7px;
  margin-top: 20px;
  margin-bottom: 20px;

  width: 160px;
  border-radius: 5px;

  background-color: gray;
  position: relative;
`

/*const app-container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: baseline;
`;*/

export const image = styled.div`
  width: 100%;
`

export const text = styled.div`
  height: 50px;
  font-size: 13px;
  display: flex;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  justify-content: space-around;

  /*margin-left: 15px;*/
  margin-top: 15px;
  margin-bottom: 15px;

  color: white;
`

export const inform = styled.div`
  display: block;

  top: 0px;
  left: 0px;

  padding-left: 5px;
  padding-right: 5px;

  height: 100%;
  font-size: 9px;

  color: whitesmoke;

  position: absolute;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const b = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`

export const component = styled.div`
  width : 170px;
  margin : 7px;
  background-color : #ffffff;
  border-radius : 5px;
  margin-bottom : 15px;
  margin-top : 20px;
  position : relative;
`

export const movie_img = styled.div`
  width : 150px;
  margin : 7px;
  background-color : #373737;
  border-radius : 5px;
  margin-bottom : 15px;
  margin-top : 20px;
  position : relative;
`

export const img = styled.div`
  width : 150px;
`

export const movie_info = styled.div`
  margin-left : 15px;
  margin-top : 10px;
  matgin-bottom : 15px;
  color : #ffffff;
`

export const hide_info = styled.div`
  display : block;
  position : absolute;
  top : 0px;
  left : 0px;
  color : #d6d6d6;
  padding-left : 5px;
  padding-right : 5px;
  height : 100%;
  border-radius : 0 0 5px 5px;
  background-color : rgba(0, 0, 0, 0.7);
  overflow : hidden;
  text-overflow : ellipsis;
`