import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import MyNavbar from "../../components/navbar/MyNavbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function EditArticle() {
  const articleId = useParams().articleId;
  const [editArticleData, setEditArticleData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/articles/${articleId}`)
      .then((response) => setEditArticleData(response.data));
  }, []);
  const editArticleHandler = (e) => {
    setEditArticleData({ ...editArticleData, [e.target.name]: e.target.value });
  };
  const editArticle = () => {
    axios.patch(`http://localhost:3001/articles/${articleId}`, editArticleData);
    Swal.fire({
      title: "مقاله با موفقیت ویرایش شد",
      icon: "success",
    });
    navigate("/");
  };
  return (
    <>
      <MyNavbar />
      <div className="formContainer">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control
              onChange={editArticleHandler}
              value={editArticleData.title}
              name="title"
              type="text"
              placeholder="عنوان مقاله خود را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control
              onChange={editArticleHandler}
              value={editArticleData.desc}
              name="desc"
              type="text"
              placeholder="یه توضیح کوتاه در مورد مقاله وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control
              onChange={editArticleHandler}
              value={editArticleData.writter}
              name="writter"
              type="text"
              placeholder="نام نویسنده مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control
              onChange={editArticleHandler}
              value={editArticleData.category}
              name="category"
              type="text"
              placeholder="موضوع مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control
              onChange={editArticleHandler}
              value={editArticleData.image}
              name="image"
              type="text"
              placeholder="آدرس عکس مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>مدت زمان خواندن</Form.Label>
            <Form.Control
              onChange={editArticleHandler}
              value={editArticleData.readingTime}
              name="readingTime"
              type="number"
            />
          </Form.Group>
          <Button onClick={editArticle} variant="primary" type="button">
            ویرایش مقاله
          </Button>
        </Form>
      </div>
    </>
  );
}

export default EditArticle;
