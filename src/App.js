import { useState } from 'react';
import './App.css';

const App = () => {

    let post = 'REACT_PRAC';
    let [title, setTitle] = useState(['리액트 공부하는 법', '리액트로 API 적용하는 법', '리액트 독학']);
    let [like, setLike] = useState(0);
    

	return (
    <div className="App">
        <div className="black-nav">
        <h4>{post}</h4>
        </div>
        <button onClick={()=>{
            let copy1 = {...title}; 
            copy1.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1); 
            setTitle(title);}}>가나다순</button>

        <button onClick={()=>{
            let copy = [...title]; 
            copy[0] = '프론트 공부하는 법';
            setTitle(copy);
            }}>글 수정</button>
        <div className="list">
            <h4>{title[0]} <span onClick={()=>{setLike(like+1) }}>👍</span>{like}</h4>
            <p>10월 31일 발행</p>
        </div>
        <div className="list">
            <h4>{title[1]}</h4>
            <p>10월 31일 발행</p>
        </div>
        
    </div>
    );
};

export default App;
