import styled from 'styled-components';
import { AccountBox } from './components/accountBox';

const AppContainer = styled.div`
	width: 100%;
	min-height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

function App() {
	return (
		<AppContainer>
			<AccountBox></AccountBox>
		</AppContainer>
	);
}

export default App;
