import "./Main.scss";

import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import About from "./Pages/About";

const Main = () => {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Main />;

      break;

    case "/home":
      component = <Home />;
      break;

    case "/projects":
      component = <Projects />;
      break;

    case "/about":
      component = <About />;
      break;

    default:
      break;
  }

  return (
    <main className="main">
      {/* <div>
        <div>
          <h2>Lorem 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quod
            maxime eum quas illum expedita saepe consectetur fugit aliquam ex
            iusto deserunt adipisci modi velit veniam qui et quae quisquam,
            laudantium recusandae, commodi nemo tenetur ipsum? Officiis beatae,
            error obcaecati illum rerum quas, molestias suscipit ratione
            provident, aliquam minima praesentium?
          </p>
        </div>
        <br />
        <div>
          <h2>Lorem 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
            laboriosam labore, est porro voluptatibus temporibus!{" "}
          </p>
        </div>
        <br />
        <div>
          <h2>Lorem 3</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum et,
            quidem beatae modi quisquam voluptatibus dignissimos consequuntur,
            doloribus, mollitia magnam reiciendis quibusdam dolores! Quibusdam
            necessitatibus magni atque cupiditate nostrum quasi accusamus quas
            ex ullam libero laudantium earum recusandae cumque debitis
            reprehenderit, voluptatem, dolorum ab ratione ea sit amet magnam
            molestiae. Ea odio quasi nesciunt praesentium accusantium ad facere
            libero minima, repellat consequatur possimus cum, vero tenetur
            quibusdam similique, sit iure debitis aliquam dolores! Labore, quas
            perspiciatis ipsum quis fugiat excepturi animi commodi numquam ullam
            reiciendis, corporis dolorem aliquid! Ipsum maxime asperiores iusto
            ipsam at, labore voluptas non dolorum voluptatibus.
          </p>
        </div>
        <div>
          <h2>Lorem 4</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
            laboriosam labore, est porro voluptatibus temporibus! Lorem ipsum
            dolor sit amet consectt praesentium dolore odio, voluptate cumque
            earum nostrum, tempora possimus maxime. Sapiente praesentium, autem
            incidunt sed perspiciatis consequuntur tenetur. Suscipit numquam
            quas perferendis incidunt eius libero corporis nostrum!
          </p>
        </div>
        <div>
          <h2>Lorem 5</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
            laboriosam labore, est porro voluptatibus temporibus! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ex necessitatibus vero
            eos possimus unde quas animi suscipit facere reprehenderit quis.
          </p>
        </div>
        <br />
        <div>
          <h2>Lorem 6</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum et,
            quidem beatae modi quisquam voluptatibus dignissimos consequuntur,
            doloribus, mollitia magnam reiciendis quibusdam dolores! Quibusdam
            necessitatibus magni atque cupiditate nostrum quasi accusamus quas
            ex ullam libero laudantium eam, vero tenetur quibusdam similique,
            sit iure debitis aliquam dolores! Labore, quas perspiciatis ipsum
            quis fugiat excepturi animi commodi numquam ullam reiciendis,
            corporis dolorem aliquid! Ipsum maxime asperiores iusto ipsam at,
            labore voluptas non dolorum voluptatibus.
          </p>
        </div>
      </div> */}
      {component}
    </main>
  );
};

export default Main;
