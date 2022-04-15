import React from "react";
import Style from "../styles/Frequentlyaskedquestions.module.css";

export const Frequentlyaskedquestionsmapcomp = (props) => {
  const { index, item, isOpen, onClick } = props;
  // console.log("Item ==>", item);

  return (
    <div className="">
      <div
        className={Style.FrequentlyaskedquestionsColMainDiv}
        onClick={() => onClick(item)}
      >
        <h3 className={Style.FrequentlyaskedquestionsCol1H3}>0{index + 1}</h3>
        <h3 className={Style.FrequentlyaskedquestionsCol1H31}>{item.H3}</h3>
        <p className={Style.FrequentlyaskedquestionsCol1P}>
          {isOpen ? "-" : "+"}
        </p>
      </div>
      {isOpen && (
        <h4 className={Style.FrequentlyaskedquestionsCol1H4}>{item.h4}</h4>
      )}
      <hr></hr>
    </div>
  );
};
