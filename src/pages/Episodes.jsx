import { useEffect } from "react";
import { useFetch } from "../Hooks/useFetch";
import { Card, PageContainer } from "./styles/PageContainer";

export function Episodes() {
  const { loading, data, requestApi } = useFetch('episode');

  useEffect(() => {
    requestApi();
  }, []);

  if (loading) return <span>loading...</span>
  return (
    <PageContainer>
      <h1>Episodes</h1>
      <div className="page_content">
        {data.map((cur) => (
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
