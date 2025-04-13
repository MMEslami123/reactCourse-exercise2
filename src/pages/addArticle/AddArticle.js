import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import MyNavbar from "../../components/navbar/MyNavbar";
import "./AddArticle.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
function AddArticle() {
  const [formData, SetFormData] = useState({});
  const navigate = useNavigate();
  // const formHandler = (e, propertyName) => {
  //   SetFormData({ ...formData, [propertyName]: e.target.value });
  //
  //
  //
  // behine :
  //
  //
  //
  //
  const formHandler = (e) => {
    // console.log(e);

    SetFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const resetFormData = () => {
    SetFormData({
      title: "",
      desc: "",
      writter: "",
      category: "",
      image: "",
      readingTime: "",
    });
  };
  const addArticleHandler = () => {
    axios
      .post("http://localhost:3001/articles22", formData)
      .then((response) => {
        if (response.status === 201) {
          Swal.fire({
            text: "مقاله با موفقیت ایجاد شد",
            icon: "success",
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          text: "مقاله ایجاد نشد",
          icon: "error",
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
        });
      });
    resetFormData();
    // navigate("/");
  };
  return (
    <>
      <MyNavbar />
      <div className="formContainer">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control
              value={formData.title}
              name="title"
              onChange={formHandler}
              type="text"
              placeholder="عنوان مقاله خود را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control
              value={formData.desc}
              name="desc"
              onChange={formHandler}
              type="text"
              placeholder="یه توضیح کوتاه در مورد مقاله وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control
              value={formData.writter}
              name="writter"
              onChange={formHandler}
              type="text"
              placeholder="نام نویسنده مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control
              value={formData.category}
              name="category"
              onChange={formHandler}
              type="text"
              placeholder="موضوع مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control
              value={formData.image}
              name="image"
              onChange={formHandler}
              type="text"
              placeholder="آدرس عکس مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>مدت زمان خواندن</Form.Label>
            <Form.Control
              value={formData.readingTime}
              name="readingTime"
              onChange={formHandler}
              type="number"
            />
          </Form.Group>
          <Button onClick={addArticleHandler} variant="primary" type="button">
            ساخت مقاله
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddArticle;
