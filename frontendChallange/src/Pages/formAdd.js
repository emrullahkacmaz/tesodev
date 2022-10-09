import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import logo from "../../src/Assets/tesodev.png";
import closeIcon from "../../src/Assets/closeIcon.png";
import backArrow from "../../src/Assets/backArrow.png";
import { useNavigate } from "react-router-dom";


const FormAdd = () => {
  const DisplayingErrorMessagesSchema = Yup.object().shape({
    nameSurname: Yup.string()
      .min(2, "Too Short!")
      .max(60, "Too Long!")
      .required(" "),
    country: Yup.string()
      .min(2, "Too Short!")
      .max(40, "Too Long!")
      .required(" "),

    city: Yup.string()
      .min(2, "Too Short!")
      .max(40, "Too Long!")
      .required(" "),

    email: Yup.string()
      .email("Invalid Email")
      .required(" "),
  });

  let navigate = useNavigate();
  const goToMain = () => {
    navigate(`/`);
  };

  const [errPop, setErrPop] = useState(false);
  const SelectFieldStyle = {
    padding: 7,
    fontSize: "0.75rem",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#E5E5E5",
      }}
    >
      <div style={{ flexDirection: "row", flex: 1 }}>
        <div style={{ flex: 1 }}>
          {" "}
          <img
            src={logo}
            alt="Canvas Logo"
            style={{
              width: "149px",
              height: "63px",
              marginLeft: "37px",
              marginTop: "27px",
            }}
          />{" "}
          <button
            onClick={goToMain}
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            <div style={{ flexDirection: "row", display: "flex" }}>
              <div>
                <img
                  src={backArrow}
                  alt="Canvas Logo"
                  style={{
                    width: "26px",
                    marginLeft: "37px",
                    marginTop: "27px",
                  }}
                />
              </div>
              <div
                style={{
                  marginTop: "24px",
                  marginLeft: "12px",
                  fontFamily: "Roboto",
                  fontWeight: 700,
                  fontSize: "24px",
                  lineHeight: "28px",
                }}
              >
                {" "}
                Return to List Page{" "}
              </div>
            </div>
          </button>
        </div>
      </div>

      <Formik
        style={{ display: "flex" }}
        isInitialValid={false}
        initialValues={{
          nameSurname: "",
          country: "",
          city: "",
          email: "",
        }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched, isValid }) => (
          <Form>
            <div
              style={{
                display: "flex",

                flexDirection: "column",
              }}
            >
              <div style={{ dispay: "flex", flex: 1 }}>
                <div
                  style={{
                    marginTop: "65px",
                    width: "206px",
                    height: "26px",
                    fontFamily: "Roboto",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "21px",
                    marginLeft: "229px",

                    color: errors.nameSurname ? "#FF4E78" : "#686868",
                  }}
                >
                  Name Surname
                </div>
                <Field
                  SelectProps={{
                    style: SelectFieldStyle,
                  }}
                  style={{
                    width: "590px",
                    height: "46px",
                    marginLeft: "225px",
                    backgroundColor: "#FFFFFF",
                    borderStyle: "solid",
                    borderWidth: 1.5,
                    paddingLeft: "17px",

                    borderRadius: "12px",
                    marginTop: "7px",
                    borderColor: errors.nameSurname ? "#FF4E78" : "#484848",
                  }}
                  name="nameSurname"
                  placeholder="Enter name and surname"
                />
                {touched.nameSurname && errors.nameSurname && (
                  <div style={{ marginLeft: "225px", color: "#FF4E78" }}>
                    {errors.nameSurname}
                  </div>
                )}
              </div>

              <div style={{ dispay: "flex", flex: 1 }}>
                <div
                  style={{
                    marginTop: "37px",
                    width: "206px",
                    height: "26px",
                    fontFamily: "Roboto",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "21px",
                    marginLeft: "229px",

                    color: errors.nameSurname ? "#FF4E78" : "#686868",
                  }}
                >
                  Country
                </div>
                <Field
                  style={{
                    width: "590px",
                    height: "46px",
                    marginLeft: "225px",
                    backgroundColor: "#FFFFFF",
                    borderStyle: "solid",
                    borderWidth: 1.5,
                    paddingLeft: "17px",

                    borderRadius: "12px",
                    marginTop: "7px",
                    borderColor: errors.nameSurname ? "#FF4E78" : "#484848",
                  }}
                  name="country"
                  placeholder="Enter a country"
                />
                {touched.country && errors.country && (
                  <div style={{ marginLeft: "225px", color: "#FF4E78" }}>
                    {errors.country}
                  </div>
                )}
              </div>

              <div style={{ dispay: "flex", flex: 1 }}>
                <div
                  style={{
                    marginTop: "37px",
                    width: "206px",
                    height: "26px",
                    fontFamily: "Roboto",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "21px",
                    marginLeft: "229px",

                    color: errors.nameSurname ? "#FF4E78" : "#686868",
                  }}
                >
                  City
                </div>
                <Field
                  style={{
                    width: "590px",
                    height: "46px",
                    marginLeft: "225px",
                    backgroundColor: "#FFFFFF",
                    borderStyle: "solid",
                    borderWidth: 1.5,
                    paddingLeft: "17px",

                    borderRadius: "12px",
                    marginTop: "7px",
                    borderColor: errors.nameSurname ? "#FF4E78" : "#484848",
                  }}
                  name="city"
                  placeholder="Enter a city"
                />
                {touched.city && errors.city && (
                  <div style={{ marginLeft: "225px", color: "#FF4E78" }}>
                    {errors.city}
                  </div>
                )}
              </div>

              <div style={{ dispay: "flex", flex: 1 }}>
                <div
                  style={{
                    marginTop: "37px",
                    width: "206px",
                    height: "26px",
                    fontFamily: "Roboto",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "21px",
                    marginLeft: "229px",

                    color: errors.nameSurname ? "#FF4E78" : "#686868",
                  }}
                >
                  Email
                </div>

                <Field
                  style={{
                    width: "590px",
                    height: "46px",
                    marginLeft: "225px",
                    backgroundColor: "#FFFFFF",
                    borderStyle: "solid",
                    borderWidth: 1.5,
                    paddingLeft: "17px",

                    borderRadius: "12px",
                    marginTop: "7px",
                    borderColor: errors.nameSurname ? "#FF4E78" : "#484848",
                  }}
                  name="email"
                  placeholder="Enter a email(abc@xyz.com)"
                />
                {touched.email && errors.email && (
                  <div style={{ marginLeft: "225px", color: "#FF4E78" }}>
                    {errors.email}
                  </div>
                )}
              </div>

              <div style={{}}>
                <button
                  onClick={() =>
                    isValid === false ? setErrPop(true) : setErrPop(false)
                  }
                  style={{
                    marginTop: "70px",
                    width: "138px",
                    height: "46px",
                    marginLeft: "674px",
                    borderRadius: "12px",
                    fontFamily: "Roboto",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "21px",
                    marginBottom: "206px",
                    borderColor: "transparent",
                    color: "white",
                    backgroundColor: !isValid ? "#4F75C2" : "#204080",
                  }}
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>

      {errPop && (
        <div
          style={{
            width: "375px",
            height: "133px",
            backgroundColor: "#C4C4C4",
            marginLeft: "888px",
            borderRadius: "8px",
            marginBottom: "24px",
            marginTop: "-54px",
          }}
        >
          <div style={{ height: 15 }}>
            <button
              onClick={() => setErrPop(false)}
              style={{
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            >
              <img
                src={closeIcon}
                alt="Canvas Logo"
                style={{
                  width: "20px",
                  height: "20px",
                  marginLeft: "331px",
                  marginTop: "11px",
                }}
              />{" "}
            </button>
          </div>
          <div
            style={{
              fontFamily: "Inter",
              fontWeight: 700,
              fontSize: "14px",
              lineHeight: "36px",
              color: "#090A0A",
              marginLeft: "18px",
            }}
          >
            Error while adding with element
          </div>
          <div
            style={{
              height: "28px",
              width: "70px",
              fontSize: "14px",
              fontWeight: "bold",
              backgroundColor: "#FF4E78",
              borderRadius: "48px",
              marginLeft: 275,
            }}
          >
            <div style={{ color: "white", marginLeft: "16px" }}> Error </div>
          </div>
          <div
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "13px",
              lineHeight: "24px",
              color: "#090A0A",
              marginLeft: "18px",
              width: "204px",
              height: "48px",
            }}
          >
            {" "}
            Name and surname should contain at least 2 words
          </div>
        </div>
      )}
    </div>
  );
};

export default FormAdd;
