import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

export default function InsertForm({ onAddItem }) {
  const [text, setText] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    const newItem = { text };
    // Save item to server
    const body = {text}
    axios.post('http://localhost:4000/new-item', body)
    .then((res) => {
      setText("");
      onAddItem();
    })
    .catch((err) => {
      console.log(err)
      alert('Ocorreu um erro')
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Insert a new item..."
        required
      />
    </form>
  );
}

const Input = styled.input`
  width: 400px;
  line-height: 40px;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  padding: 0 10px;
  outline: none;
`;
