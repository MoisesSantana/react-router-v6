import { useLoaderData } from "react-router-dom";
import { Card, PageContainer } from "./styles/PageContainer";
import { handleFetch } from "../utils/fetch";

export function Episodes() {
  const loaderData = useLoaderData();

  return (
    <PageContainer>
      <h1>Episodes</h1>
      <div className="page_content">
        {loaderData.map((cur) => (
          <Card key={cur.id}>
            <span>{cur.name}</span>
            <span>{cur.air_date}</span>
            <span>{cur.episode}</span>
          </Card>
        ))}
      </div>
    </PageContainer>
  )
}

export function episodesLoader() {
  return handleFetch('episode');
}