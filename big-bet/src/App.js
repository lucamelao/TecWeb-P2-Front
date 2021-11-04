import './App.css';
import Main from './components/Main'
function App() {
  return (
    <Main />
    );
  }
  export default App;
  
  
    // PARA DEPOIS!!
    // const loadData= () => {
    //   axios
    //     .get("rota api/jogos")
    //     .then((res) => setGames(res.data));
    // }
    // useEffect(()=> {
    //   loadData();
    // }, []);