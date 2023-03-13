import { useLoaderData } from "react-router-dom";
import { Card, PageContainer } from "./styles/PageContainer";
import { handleFetch } from "../utils/fetch";

export function Characters() {
  const loaderData = useLoaderData();

  return (
    <PageContainer>
      <h1>characters</h1>
      <div className="page_content">
        {loaderData.map((cur) => (
          <Card key={cur.id}>
            <span>{cur.name}</span>
            <img src={cur.image} alt={cur.name} />
            <span>{cur.species}</span>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
}

export function charactersLoader() {
  return handleFetch('character');
}