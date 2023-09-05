import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'


export const BackButton = styled(NavLink)`
display: inline-flex; 
align-items: flex-end;
gap: 3px;
border: none;
border-radius: 5px;
padding: 8px 6px;
background-color: skyblue;
color: black;
  :hover {
    color: orange;
  }
`