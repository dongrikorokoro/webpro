import "../node_modules/bulma/css/bulma.css";

import {useEffect,useState} from "react";
import {fetchImage} from "./api";


function Header() {
  return (
    <header>
      <section class = "hero is-dark">
        <div class="hero-body">
          <div class ="container">
            <div class ="title">
              <h1>ディズニーキャラクター集</h1>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

function Image(props) {
  return (
    <div>
      <figure className = "image">
        <img src = {props.src} alt = "disney character"/>
      </figure>
    </div>
  );
}

function Random() {
  var num = Math.floor( Math.random() * 7438 + 1 ) ;
  return num;
}



function Form() {
  return (
    <div>
      <form>
        <div className = "control">
          <button className ="button is-dark">
            Reload
          </button>
        </div>
      </form>
    </div>
  );
}

function Main() {
  let id = Math.floor( Math.random() * 7438 + 1 ) ;
  const [url, setUrl] = useState(null);
  useEffect(() => {
    fetchImage(id).then((url) => {
      setUrl(url);
    });
  },[]);
  return (
    <main>
      <div className = "section">
        <div className ="container">
          <Form />
        </div>
      </div>
      <div className = "section">
        <div className ="container">
          <Image src = {url} />
        </div>
      </div>
    </main>
  )
}

function Footer() {
  return (
    <footer class = "footer">
      <div class = "content has-text-centered">
        <p>images are retrieved from Disney API</p>
        <p><a href = "https://disneyapi.dev/">Donate to Disney API</a></p>
        <p>日本大学文理学部情報科学科webプログラミングの演習課題 5420036 渡辺好汰</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;