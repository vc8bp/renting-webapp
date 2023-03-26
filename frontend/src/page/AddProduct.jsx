import React, { useState } from "react";
import styled from "styled-components";
import { AxiosRequest } from '../axiosInstance'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.form`
  width: 500px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  width: 100%;
  max-width: 500px;
`;

const Label = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid #ddd;
  font-size: 1rem;
  padding: 10px;
  width: 100%;
  transition: border-bottom-color 0.3s ease-in-out;

  &:focus {
    outline: none;
    border-bottom-color: #0077ff;
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const CheckboxLabel = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 10px;
`;

const Button = styled.button`
  background-color: #0077ff;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px 20px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0055cc;
  }
`;

const AddProduct = () => {
  const [formInfo, setFormInfo] = useState({
    name: "",
    description: "",
    img: "",
    price: "",
    isPurchasable: false,
    isRentable: false,
    maxRent: 30,
    stock: 0,
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormInfo((p) => ({ ...p, [name]: value }));
  };

  const handleCheckBox = (e) => {
    const { name } = e.target;
    if(name === "isRentable"){
      if(formInfo.isRentable === false) setFormInfo(p => ({...p, isPurchasable: false}))
      setFormInfo((p) => ({ ...p, isRentable: !p.isRentable }))  

    }
    if(name === "isPurchasable"){
      if(formInfo.isPurchasable === false) setFormInfo(p => ({...p, isRentable: false}))
      setFormInfo((p) => ({ ...p, isPurchasable: !p.isPurchasable }))  
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    (async () => {
      try {
        const {data} = await AxiosRequest.post("/product", formInfo);
      } catch (error) {
        console.log(error)
      }
    })()
  };

  return (
    <Wrapper>
      <h1>Add Product</h1>
      <FormContainer onSubmit={handleSubmit}>
        <InputWrapper>
          <Label>Name:</Label>
          <Input
            name="name"
            type="text"
            value={formInfo.name}
            onChange={handleFormChange}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Description:</Label>
          <Input
            name="description"
            type="text"
            value={formInfo.description}
            onChange={handleFormChange}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Image URL:</Label>
          <Input
            name="img"
            type="text"
            value={formInfo.img}
            onChange={handleFormChange}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Price:</Label>
          <Input
            name="price"
            type="number"
            min="0"
            step="0.01"
            value={formInfo.price}
            onChange={handleFormChange}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Stock:</Label>
          <Input
            name="stock"
            type="number"
            min="0"
            value={formInfo.stock}
            onChange={handleFormChange}
            required
          />
          </InputWrapper>
          <InputWrapper>
          <CheckboxWrapper>
            <input
              name="isPurchasable"
              type="checkbox"
              checked={formInfo.isPurchasable}
              onChange={handleCheckBox}
            />
            <CheckboxLabel>Is purchasable?</CheckboxLabel>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <input
              className="check"
              name="isRentable"
              type="checkbox"
              checked={formInfo.isRentable}
              onChange={handleCheckBox}
            />
            <CheckboxLabel>Is rentable?</CheckboxLabel>
          </CheckboxWrapper>
          </InputWrapper>

          {formInfo.isRentable && (
            <InputWrapper>
              <Label>Max rent: in days</Label>
              <Input
                className="check"
                name="maxRent"
                type="number"
                min="1"
                value={formInfo.maxRent}
                onChange={handleFormChange}
              />
            </InputWrapper>
          )}
        <Button type="submit">Add Product</Button>
      </FormContainer>
    </Wrapper>
  );
};

export default AddProduct;
