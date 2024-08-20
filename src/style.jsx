import styled from "styled-components";

export const Block = styled.div`
  img {
    user-select: none;
    -webkit-user-drag: none;
  }
  .head-image {
    width: 100%;
  }
  section {
    border: 0.1px solid transparent;
  }
  .line {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-top: 2px solid #d9d9d9;
    padding-top: 15px;
    margin-block: 30px;
  }
  .first {
    width: 100%;
    background-color: #121212;
    color: #fff;
    padding: 50px 70px;
    img {
      display: flex;
      margin: 80px auto;
    }
    .box {
      width: 50%;
      position: relative;
      left: 50%;
      margin-top: 100px;
      .content {
        display: flex;
        gap: 30px;
        flex-direction: column;
        p {
          text-align: end;
          display: flex;
          justify-content: space-between;
          flex-direction: row-reverse;
        }
      }
      hr {
        border: none;
        height: 1px;
        background-color: #fff;
        margin-block: 35px;
      }
    }
  }
  .second {
    width: 100%;
    padding: 50px 70px;
    img {
      display: flex;
      margin: 80px auto;
    }
  }
  .third {
    width: 100%;
    padding: 50px 70px;
    background: url(${require("./assets/bg-image-1.png")}) no-repeat #121212;
    .images {
      padding: 100px;
      .box {
        width: 100%;
        display: flex;
      }
      .box:nth-child(1) {
        justify-content: start;
        align-items: start;
        img:nth-child(2) {
          margin: 50px;
        }
      }
      .box:nth-child(2) {
        justify-content: end;
        align-items: end;
        img:nth-child(1) {
          margin: 50px;
        }
      }
    }
    .line {
      p {
        color: #fff;
      }
    }
    .image {
      display: flex;
      margin: 150px auto;
    }
  }
  .fourth {
    background-color: #121212;
    padding: 50px 70px;
    .images {
      padding-block: 70px;
      display: flex;
      justify-content: space-between;
      .image {
        transform: translateY(50%);
      }
      .box {
        width: 100%;
        display: flex;
      }
      .box:nth-child(1) {
        justify-content: start;
        align-items: start;
        img:nth-child(2) {
          margin: 50px;
        }
      }
    }
    .line {
      color: #fff;
    }
  }
  .fifth {
    background-color: #121212;
    padding: 50px 70px;
    .line {
      color: #fff;
    }
    .blog {
      margin-block: 50px;
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      justify-content: space-between;
      .box {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 50px;
        position: relative;
        h1 {
          text-transform: uppercase;
          color: #fff;
          font-size: 50px;
          margin-top: 65px;
        }
        div {
          width: 430px;
          p {
            display: flex;
            justify-content: space-between;
            color: #606060;
            margin-bottom: 20px;
          }
          img {
            margin-inline: 10px;
          }
        }
      }
    }
    .img {
      width: 100%;
    }
  }
  .sixth {
    padding: 50px 70px;
    .images {
      display: flex;
      justify-content: space-between;
      margin-block: 50px;
      align-items: start;
      padding-top: 50px;
    }
    .image {
      display: flex;
      margin: 150px auto;
    }
  }
  .seventh {
    background-color: #121212;
    padding: 50px 70px;
    .line {
      color: #fff;
    }
    .images {
      display: flex;
      justify-content: end;
      margin-block: 50px;
      gap: 50px;
      align-items: start;
      padding-top: 50px;
    }
  }
  .eighth {
    padding: 50px 70px;
    background: url(${require("./assets/bg-image-3.png")}) no-repeat;
    .line {
      p {
        color: #fff;
      }
    }
    .image {
      display: flex;
      margin: auto;
      margin-top: 100px;
    }
  }
  .nineth {
    background-color: #121212;
    padding: 50px 70px;
    .line {
      color: #fff;
    }
    .images {
      display: flex;
      justify-content: end;
      margin-block: 50px;
      gap: 50px;
      align-items: start;
      padding-top: 50px;
    }
    h1 {
      font-size: 55px;
      color: #fff;
      text-transform: uppercase;
      text-align: center;
      margin-block: 150px;
    }
  }
  @media screen and (max-width: 700px) {
    .image {
      width: 100%;
    }
    .line {
      flex-wrap: wrap !important;
      gap: 10px 35px;
      justify-content: center;
      p {
        white-space: nowrap;
        font-size: 15px;
      }
    }
    section {
      padding: 10px !important;
    }
    .first {
      img {
        width: 90%;
      }
      .box {
        width: 90%;
        left: 10%;
      }
    }
    .second {
      img {
        width: 100%;
      }
    }
    .third {
      .images {
        padding: 50px 10px;
        .box {
          img {
            width: 40%;
          }
        }
        .box:nth-child(1) img:nth-child(2) {
          margin: 30px;
        }
        .box:nth-child(2) img:nth-child(1) {
          margin: 30px;
        }
      }
      .image {
        width: 100%;
      }
    }
    .fourth {
      .images {
        flex-direction: column;
        .image {
          transform: translateY(0);
        }
        .box img {
          width: 40%;
        }
        .box:nth-child(1) img:nth-child(2) {
          margin: 20px;
        }
      }
    }
    .fifth {
      .blog {
        margin-block: 20px;
        .box {
          h1 {
            text-transform: uppercase;
            color: #fff;
            font-size: 50px;
            margin-top: 65px;
          }
          div,
          img {
            width: 95%;
          }
        }
        img {
          width: 100%;
        }
      }
    }
    .sixth {
      width: 100%;
      .images {
        img:nth-child(1) {
          width: 70%;
        }
        img:nth-child(2) {
          width: 20%;
        }
      }
    }
    .seventh,
    .nineth {
      .images {
        justify-content: center;
        gap: 20px;
        img:nth-child(1) {
          width: 20%;
        }
        img:nth-child(2) {
          width: 70%;
        }
        .mobile-image {
          width: 100% !important;
        }
      }
      h1 {
        font-size: 35px;
      }
    }
  }
`;
