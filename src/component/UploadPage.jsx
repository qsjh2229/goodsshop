import { AiFillCamera } from "react-icons/ai";
import React from "react";
import { Button, InputNumber, Divider, Form, Input } from "antd";
import "./UploadPage.scss";

const { TextArea } = Input;

const UploadPage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <div id="upload-container">
      <Form name="uploadForm" onFinish={onFinish}>
        <Form.Item name="upload">
          <div id="uploadImg">
            <AiFillCamera className="icon-carmera" />
            <span>이미지를 업로드해주세요</span>
          </div>
        </Form.Item>
        <Divider />
        <Form.Item
          label={<span className="upload-label">상품명</span>}
          name="name"
          rules={[
            { required: true, message: "상품명은 필수 입력 사항입니다." },
          ]}
        >
          <Input
            className="upload-name"
            placeholder="상품명을 입력해주세요"
            size="large"
          />
        </Form.Item>
        <Divider></Divider>

        <Form.Item
          label={<span className="upload-label">판매자명</span>}
          name="seller"
          rules={[
            { required: true, message: "판매자명은 필수 입력 사항입니다." },
          ]}
        >
          <Input
            className="upload-seller"
            placeholder="판매자명을 입력해주세요"
            size="large"
          />
        </Form.Item>

        <Form.Item
          label={<span className="upload-price">판매가</span>}
          name="price"
          rules={[
            { required: true, message: "판매가는 필수 입력 사항입니다." },
          ]}
          initialValue={0}
        >
          <InputNumber
            className="upload-price"
            size="large"
            min={0}
            defaultValue={0}
          />
        </Form.Item>
        <Divider></Divider>
        <Form.Item
          label={<span className="upload-label">상품설명</span>}
          name="description"
          rules={[
            { required: true, message: "상품설명은 필수 입력 사항입니다." },
          ]}
        >
          <TextArea
            size="large"
            id="product-description"
            showCount
            maxLength={300}
            placeholder="상품설명을 작성해주세요"
          ></TextArea>
        </Form.Item>
        <Form.Item>
          {/* {contextHolder} */}
          <Button id="submit-button" htmlType="submit" /* onClick={info} */>
            상품등록하기
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UploadPage;
