import { useEffect } from "react";
import { useFetch } from "../Hooks/useFetch";
import { Card, PageContainer } from "./styles/PageContainer";

export function Locations() {
  const { loading, data, requestApi } = useFetch('location');

  useEffect(() => {
    requestApi();
  }, []);

  if (loading) return <span>loading...</span>
  return (
    <PageContainer>
      <h1>Locations</h1>
      <div className="page_content">
        {data.map((cur) => (
          <Card key={cur.id}>
            <span>{cur.name}</span>
            <span>{cur.type}</span>
            <span>{cur.dimension}</span>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
}
