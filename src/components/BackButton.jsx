import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'


export const BackButton = styled(NavLink)`
display: inline-flex; 
align-items: flex-end;
gap: 3px;
border: none;
padding: 12px 6px;
background-color: grey;
color: black;
  &.active {
    color: orange;
  }
`