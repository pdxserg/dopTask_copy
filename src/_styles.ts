import styled from "styled-components";

export const NavWrapper = styled.div`
    margin-left: 10px;
    font-size: 40px;
	
	& > a {
		text-decoration: none;
		color: #61dafb;
	}
	& > a.active {
		color: red;
		font-weight: bold;
	}
	& > a:hover {
		color: steelblue;
	}

`