import Button from "../../button/Button";

function Home() {
    return (
        <>
        <div className="colum home-container">
            <h1 className="home-title">
                🐱 КОШОЧЬКИ 🐱
            </h1>
            <h1 className="home-title">
                И
            </h1>
            <h1 className="home-title">
                🐶 САБАЧЕНЬКИ 🐶
            </h1>
            <img 
                src="https://avatars.mds.yandex.net/i?id=a06c24970492c41db728201ca47f76e07ecb86dd-5297754-images-thumbs&n=13"
                className="home-image"
                alt="Cute animals"
            />
        </div>
        </>
    )
}

export default Home;