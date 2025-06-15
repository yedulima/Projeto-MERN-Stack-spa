import "./App.css";
import { GlobalStyle } from "./GlobalStyled";
import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main/Main";

import { ContentWrapper } from "./ContentWrapper";

function App() {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <ContentWrapper>
                <Main />
            </ContentWrapper>
        </>
    );
}

export default App;
