import "./App.css";
import { useState } from "react";

function App() {
  let logo = "Trudy";
  let [postName, changePostName] = useState(["Seoul", "Busan", "Daegu"]);
  let [likeCount, setLikeCount] = useState([0, 0, 0]);
  let [postModal, setPostModal] = useState([false, false, false]);
  let [postTitle, setpostTitle] = useState(0);
  let [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <div className="nav">
        <div>{logo}</div>
        <div>Map</div>
        <div>Forum</div>
        <div>Trudy Square</div>
      </div>

      <button
        onClick={() => {
          let copy = [...postName];
          copy.sort();
          changePostName(copy);
        }}
      >
        정렬하기
      </button>

      <button
        onClick={() => {
          let copy = [...postName];
          copy[0] = "Incheon";
          changePostName(copy);
        }}
      >
        글 수정
      </button>

      {postName.map((postInfo, i) => {
        return (
          <div className="postList">
            <h4
              onClick={() => {
                setPostModal(!postModal);
                setpostTitle(i);
              }}
            >
              {postInfo}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...likeCount];
                  copy[i] = copy[i] + 1;
                  setLikeCount(copy);
                }}
              >
                👍
              </span>{" "}
              {likeCount[i]}
            </h4>
            <p>01 24 테스트</p>
            <button onClick={()=>{
              let copy = [...postName];
              copy.splice(i, 1);
              changePostName(copy)
            }}>삭제</button>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          setInputValue(e.target.value);
          console.log(inputValue);
        }}
      />

      <button
        onClick={() => {
          let copy = [...postName];
          copy.unshift(inputValue);
          changePostName(copy);
        }}
      >
        글생성
      </button>

      <button
        onClick={() => {
          setpostTitle(0);
        }}
      >
        글제목0
      </button>

      <button
        onClick={() => {
          setpostTitle(1);
        }}
      >
        글제목1
      </button>
      <button
        onClick={() => {
          setpostTitle(2);
        }}
      > 글제목2
      </button>

      {/* '' 에 null도 가능 */}      {postModal === true ? (
        <Modal postName={postName} postTitle={postTitle} color={"skyblue"} />
      ) : (
        ""
      )}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="postModal" style={{ background: props.color }}>
      <h4>제목 : {props.postName[props.postTitle]}</h4>
      <p>카테고리 :</p>
      <p>주소 :</p>
      <p>상세내용 :</p>
    </div>
  );
}

export default App;
