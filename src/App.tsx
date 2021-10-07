import { ThemeProvider } from 'styled-components';
import theme from './config/theme';
import { LocaleContextProvider } from './context/Locale';
import GlobalStyles from './config/globalStyles';
import Home from './pages/Home';
import PageWrapper from './components/PageWrapper';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <LocaleContextProvider>
                <PageWrapper>
                    <Home />
                </PageWrapper>
            </LocaleContextProvider>
        </ThemeProvider>
    );
}

export default App;
