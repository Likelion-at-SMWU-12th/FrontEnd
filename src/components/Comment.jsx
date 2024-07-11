import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

let dummy = [
  {
    id: "1",
    author: "이예지",
    comment: "하이",
    timestamp: "2024-06-28T12:34:56Z",
  },
  {
    id: "2",
    author: "박상아",
    comment: "상아언니의 세미나",
    timestamp: "2024-06-28T12:34:56Z",
  },
  {
    id: "3",
    author: "이선아",
    comment: "상아언니의 세미나",
    timestamp: "2024-06-28T12:34:56Z",
  },
  {
    id: "4",
    author: "조성하",
    comment: "상아언니의 세미나",
    timestamp: "2024-06-28T12:34:56Z",
  },
  {
    id: "5",
    author: "강주은",
    comment: "상아언니의 세미나",
    timestamp: "2024-06-28T12:34:56Z",
  },
];

const Comment = () => {
  const navigate = useNavigate();
  return (
    <>
      {dummy.map((comment) => (
        <CommentBox onClick={() => navigate(`/comment/${comment.id}`)}>
          <Author>{comment.author}</Author>
          <Time>{comment.timestamp}</Time>
          <CommentTxt>{comment.comment}</CommentTxt>
        </CommentBox>
      ))}
    </>
  );
};

export default Comment;

const CommentBox = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  padding: 50px;
  background-color: white;
  &:hover {
    cursor: pointer;
    color: #f0873e;
    box-shadow: 0 0 10px rgba(238, 110, 67, 0.727);
    background-color: #fef5f0;
    > span {
      color: #ffcca8;
    }
  }
`;
const Author = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
const Time = styled.span`
  font-size: 15px;
  color: #c8c8c8;
  font-weight: 600;
  margin-top: 5px;
`;
const CommentTxt = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
`;
