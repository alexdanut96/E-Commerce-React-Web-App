import React from "react";
import Card from "@mui/material/Card";
import STYLE from "../products features skeleton/Skeleton.module.css";

export const Skeleton = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const windowWidthSize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", windowWidthSize);
    return function () {
      window.removeEventListener("resize", windowWidthSize);
    };
  }, []);
  return (
    <div
      style={{
        padding: "0 1.5rem 0 1.5rem",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        width: "100%",
        alignItems: "center",
      }}
    >
      <Card
        sx={
          windowWidth > 480
            ? {
                boxShadow: "0px 0px 10px 6px #6F38C5",
                opacity: "0.95",
                display: "flex",
                color: "white",
                maxWidth: "70rem",
                marginRight: "auto",
                marginLeft: "auto",
                width: "100%",
                boxSizing: "border-box",
                background: "none",
              }
            : {
                flexDirection: "column",
                boxShadow: "0px 0px 10px 6px #6F38C5",
                opacity: "0.95",
                display: "flex",
                color: "white",
                maxWidth: "70rem",
                marginRight: "auto",
                marginLeft: "auto",
                width: "100%",
                boxSizing: "border-box",
              }
        }
      >
        <div
          style={
            windowWidth > 480
              ? {
                  width: "50%",
                  height: "500px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "2rem",
                  boxSizing: "border-box",
                }
              : {
                  width: "100%",
                  height: "300px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "2rem 2rem 0 2rem",
                  boxSizing: "border-box",
                }
          }
        >
          <div
            className={STYLE.image}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
              borderRadius: "5px",
              boxSizing: "border-box",
            }}
          ></div>
        </div>
        <div
          style={
            windowWidth > 480
              ? {
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  padding: "2rem",
                  boxSizing: "border-box",
                }
              : {
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  padding: "2rem",
                  boxSizing: "border-box",
                }
          }
        >
          <div
            className={STYLE.animation}
            style={
              windowWidth > 480
                ? {
                    height: "35px",
                    marginBottom: "2px",
                    borderRadius: "5px",
                    boxSizing: "border-box",
                  }
                : {
                    height: "31.2px",
                    marginBottom: "2px",
                    borderRadius: "5px",
                    boxSizing: "border-box",
                  }
            }
          ></div>
          <div
            className={STYLE.animation}
            style={
              windowWidth > 480
                ? {
                    height: "35px",
                    width: "80%",
                    borderRadius: "5px",
                    boxSizing: "border-box",
                    marginBottom: "30px",
                  }
                : {
                    height: "31.2px",
                    width: "80%",
                    borderRadius: "5px",
                    boxSizing: "border-box",
                    marginBottom: "20px",
                  }
            }
          ></div>
          <div
            className={STYLE.animation}
            style={
              windowWidth > 480
                ? {
                    height: "35px",
                    width: "20%",
                    alignSelf: "center",
                    borderRadius: "5px",
                    boxSizing: "border-box",
                    marginBottom: "30px",
                  }
                : {
                    height: "35px",
                    width: "20%",
                    alignSelf: "center",
                    borderRadius: "5px",
                    boxSizing: "border-box",
                    marginBottom: "20px",
                  }
            }
          ></div>
          <div
            className={STYLE.animation}
            style={
              windowWidth > 480
                ? {
                    height: "35px",
                    width: "80%",
                    alignSelf: "center",
                    borderRadius: "5px",
                    boxSizing: "border-box",
                    marginBottom: "30px",
                  }
                : {
                    height: "35px",
                    width: "80%",
                    alignSelf: "center",
                    borderRadius: "5px",
                    boxSizing: "border-box",
                    marginBottom: "20px",
                  }
            }
          ></div>
          <div
            className={STYLE.animation}
            style={
              windowWidth > 480
                ? {
                    height: "100px",
                    width: "80%",
                    alignSelf: "center",
                    borderRadius: "5px",
                    boxSizing: "border-box",
                  }
                : {
                    height: "100px",
                    width: "100%",
                    alignSelf: "center",
                    borderRadius: "5px",
                    boxSizing: "border-box",
                  }
            }
          ></div>
        </div>
      </Card>
    </div>
  );
};
