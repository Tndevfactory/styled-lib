/** @format */

import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Card_com_st = styled(motion.div)`
  position: relative;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  height: 500px;
  overflow: hidden;
  width: 400px;

  & > figure {
    width: 90%;
    margin: 20px auto 0 auto;
  }

  & > figure > img {
    width: 100%;
  }

  .details {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    position: absolute;
    top: 85%;
    width: 100%;
    transition: box-shadow 0.3s ease-in-out, top 0.3s ease-in-out;
  }

  &:hover .details {
    box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.3);
    top: 40%;
  }

  .details > .min-details,
  .details > .options,
  .details > .options > .options-size,
  .details > .options > .options-colors {
    margin-bottom: 20px;
  }

  .details > .min-details {
    display: flex;
    justify-content: space-between;
  }

  .details > .min-details > h1 > span {
    color: #7b7b7b;
    display: block;
    font-size: 0.9rem;
    font-weight: 400;
  }

  .details > .options h1 {
    margin-bottom: 5px;
  }

  .details > .options ul {
    list-style-type: none;
    display: flex;
  }

  .details > .options ul li {
    border-radius: 50%;
    cursor: pointer;
    height: 30px;
    line-height: 30px;
    margin-right: 5px;
    text-align: center;
    width: 30px;
  }

  .options-size > ul > li {
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 0.7rem;
    font-weight: 900;
    text-transform: uppercase;
    transition: background-color 0.3s ease-in-out;
  }

  .options-size > ul > li:hover {
    background-color: #192a56;
  }

  .options-colors > ul > li {
    border: none;
  }

  .options-colors > ul > li:nth-child(1) {
    background-color: #ff1;
  }

  .options-colors > ul > li:nth-child(2) {
    background-color: #000;
  }

  .options-colors > ul > li:nth-child(3) {
    background-color: #fb0000;
  }

  .options-colors > ul > li:nth-child(4) {
    background-color: #ff69b4;
  }

  .options-colors > ul > li:nth-child(5) {
    background-color: #192a56;
  }

  .btn {
    background-color: #192a56;
    border-radius: 5px;
    color: #fff;
    display: block;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    text-transform: capitalize;
    width: 100%;
    transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

  .btn:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }
`;
