import "./style.css";
import { setupArticle } from "./setup-article";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>OpenAPI Fetch example</h1>
    <article>
      <h2 id="article-title"></h2>
    </article>
  </div>
`;

setupArticle(document.querySelector<HTMLButtonElement>("#article-title")!);
