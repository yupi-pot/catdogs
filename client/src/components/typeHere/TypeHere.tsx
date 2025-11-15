import { useState } from "react";
import "./TypeHere.css";

export default function TypeHere({ imageURL, onSubmit, onCancel }) {
  const [comment, setComment] = useState("");

  return (
    <div className="typehere-container">
      <input
        type="text"
        className="typehere-input"
        placeholder="✨ Ваш комментарий..."
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      />
      <div className="typehere-buttons">
        <button 
          className="typehere-button typehere-button-primary"
          onClick={() => onSubmit(comment)}
        >
          💖 Добавить в избранное
        </button>
        <button 
          className="typehere-button typehere-button-secondary"
          onClick={onCancel}
        >
          ❌ Отмена
        </button>
      </div>
    </div>
  );
}
