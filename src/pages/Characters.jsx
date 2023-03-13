import { useEffect } from "react";
import { useFetch } from "../Hooks/useFetch";
import { Card, PageContainer } from "./styles/PageContainer";

export function Characters() {
  const { loading, data, requestApi } = useFetch('character');

  useEffect(() => {
    requestApi();
  }, []);

  if (loading) return <span>Loading...</span>
  return (
    <PageContainer>
      <h1>characters</h1>
      <div className="page_content">
        {data.map((cur) => (
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