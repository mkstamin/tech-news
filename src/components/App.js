import Container from './App.styles';
import Header from './Header/Header';
import News from './News/News';
import Pagination from './Pagination/Pagination';
import Search from './Search/Search';

function App() {
    return (
        <Container>
            <Header />
            <Search />
            <Pagination />
            <News />
            {/* <Pagination /> */}
        </Container>
    );
}

export default App;
