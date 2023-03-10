import { useLoaderData } from "react-router-dom";
import { Card, PageContainer } from "./styles/PageContainer";
import { handleFetch } from "../utils/fetch";

export function Locations() {
  const loaderData = useLoaderData();

  return (
    <PageContainer>
      <h1>Locations</h1>
      <div className="page_content">
        {loaderData.map((cur) => (
          <Card key={cur.id}>
            <span>{cur.name}</span>
            <span>{cur.type}</span>
            <span>{cur.dimension}</span>
          </Card>
        ))}
      </div>
    </PageContainer>
  )
}

export function locationsLoader() {
  return handleFetch('location');
}