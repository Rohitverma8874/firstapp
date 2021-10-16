import './App.css';
import Home from './components/home';
import Login from './components/login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import ProductDetails from './components/productdetails';
import ProductList from './components/productList';
import State from './components/states';
import Gallery from './components/gallery';
import Slider from './components/slider';
import Signup from './components/signup';
import { ProductProvider } from './productContext';
import { createTheme, ThemeProvider } from '@mui/material';
import AddVideo from './components/addVideo';



function App() {

  const theme = createTheme({
    palette: {
      mode: 'light'
    }
  })

  return (
    <div>
      <ThemeProvider theme={theme}>
        <ProductProvider>
          <Router>
            <Header></Header>
            <Route path="/login" component={Login}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/productdetails/:id" component={ProductDetails}></Route>
            <Route path="/productlist" component={ProductList}></Route>
            <Route path="/state" component={State}></Route>
            <Route path="/gallery" component={Gallery}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/addvideo" component={AddVideo}></Route>
          </Router>
        </ProductProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;