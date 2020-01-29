import React from 'react';
import logo from './logo.svg';
import './App.css';
import image1 from './photo/f9573958-72d7-4fd2-b138-33ff0f744167_200x200.png'
import Home from './home'
function App() {
  return (
    <div>
      <ul class="nav jj">
  <li class="nav-item">
    <a class="nav-link active" ><img className=" tu mr-5 ml-3" src={image1} width="60" height="60">
      </img><font color="white">ข้อมูลเกรษกรผู้เลี้ยงสัตว์ในประเทศไทย</font></a>
  </li>
  <li class="nav-item">
  </li>
</ul>
<Home></Home>
</div>
  );
}
export default App;
