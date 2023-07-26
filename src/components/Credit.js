import React from "react";
import styled from "styled-components";
const Credit = () => {
	return (
		<CreditContainer>
			<Link href="https://photos.google.com/share/AF1QipOxwJcL8k22wVstYUTfeunebTLhEy9hNpFNpt6XhJLKR-4yT3Ar0G6VoeFjyiPlVA" target="_blank">
				Made by Nhien Nguyen's love for @iamurcaffeine, vast as the night sky.
			</Link>
			<br></br>
		</CreditContainer>
	);
};

const CreditContainer = styled.div`
	user-select: none;
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: flex-end;
	z-index: 12;
	bottom: 5px;
	right: 5px;
	color: rgb(155, 155, 155);
	font-size: 0.75rem;
`;

const Link = styled.a`
	color: rgb(155, 155, 155);
`;
export default Credit;
