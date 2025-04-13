import { Col, Container, Row } from "react-bootstrap";
import ArticleItem from "../../components/article/ArticleItem";
import MyNavbar from "../../components/navbar/MyNavbar";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [articles, SetArticles] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/articles")
      .then((res) => SetArticles(res.data));
  }, []);
  return (
    <>
      <MyNavbar />
      <Container>
        <h1 className="mt-4">لیست مقالات</h1>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4 py-3">
          {articles.map((article) => (
            <Col key={article.id}>
              <ArticleItem {...article} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
