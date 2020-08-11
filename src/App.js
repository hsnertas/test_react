import React from 'react';
import {Layout, Header, Navigation, Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import './App.css';
import Main from './components/main';
import Footer from "./components/footer";
function App() {
  return (

<div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header className='header-color' title={<span><span style={{ color: '#ddd' }}>Hasan Ertas / </span><strong>Full Stack Devloper</strong></span>}>
            <Navigation>
                
                <Link to="/">Home</Link>
                <Link to="/project">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
       
        <Content>
            <Main/>
            <Footer>Made with love by Hasan Ertas</Footer>
        </Content>
    </Layout>
</div>
  );
}

export default App;
