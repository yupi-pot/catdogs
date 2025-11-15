import { useEffect, useState } from "react";
import Button from "../../button/Button";
import TypeHere from "../../typeHere/TypeHere";
import { addToBlacklist, isBlacklisted } from "../../../utils/blacklist";
import { $api } from "../../../utils/axios.instance";

type FoxData = {
  image: string;
};

const Fox = () => {
  const [fox, setFox] = useState<FoxData | null>(null);
  const [showInput, setShowInput] = useState(false);

  const loadFox = () => {
    fetch("https://randomfox.ca/floof")
      .then((response) => response.json())
      .then((data) => {
        if (data.image && isBlacklisted(data.image)) {
          loadFox();
        } else {
          setFox(data);
        }
      })
      .catch((error) => console.error("Ошибка:", error));
  };

  useEffect(() => {
    loadFox();
  }, []);

  const handleSubmit = async (comment: string) => {
    try {
      if (!fox || !fox.image) {
        console.log("Нет картинки для добавления");
        return;
      }

      await $api.post("/favorites", {
        imageURL: fox.image,
        comment: comment,
      });

      setShowInput(false);

      loadFox();

      console.log("Картинка добавлена в избранное!");
    } catch (err: any) {
      if (err.response) {
        console.log(`Ошибка: ${err.response.data?.error || err.message}`);
      } else if (err.request) {
        console.log("Ошибка: не удалось подключиться к серверу");
      } else {
        console.log(`Ошибка: ${err.message}`);
      }
    }
  };

  function handleClick(actionType: string) {
    switch (actionType) {
      case "like":
        setShowInput(true);
        break;
      case "neutral":
        loadFox();
        break;
      case "dislike":
        if (fox && fox.image) {
          addToBlacklist(fox.image);
        }
        loadFox();
        break;
      default:
        break;
    }
  }

  return (
    <div className="colum">
      {fox ? (
        <>
          <h2>Кошки и собаки - зло. Лисички - няшки:</h2>
          <img
            src={fox.image}
            className="cat-picture"
            alt="Random Fox"
            style={{ width: "640px", height: "480px" }}
          />

          {showInput && (
            <TypeHere
              imageURL={fox.image}
              onSubmit={handleSubmit}
              onCancel={() => setShowInput(false)}
            />
          )}

          {!showInput && <Button handleClick={handleClick} />}
        </>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
};

export default Fox;
