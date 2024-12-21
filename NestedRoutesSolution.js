```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} >
          <Route path="child1" element={<Child1/>}/>
          <Route path="child2" element={<Child2/>}/>
        </Route> 
        {/* ... other routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  const location = useLocation();
  return (
    <div>
      About {location.pathname}
    <Routes>
        <Route path="/about/*" element={<Outlet/>}/>
    </Routes>
    </div>
  );
}

function Child1(){
  return <div>Child1</div>;
}

function Child2(){
  return <div>Child2</div>;
}
export default App;
```