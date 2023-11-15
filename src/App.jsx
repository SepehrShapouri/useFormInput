import React from "react";
import { useState } from "react";
import useFormInput from "./useFormInput";

function Form() {
  const firstName = useFormInput("Sepehr");
  const lastName = useFormInput("Shapouri");
  return (
    <div>
      <label>
        FirstName :
        <input {...firstName} />
      </label>
      <br />
      <label>
        LastName :
        <input {...lastName}/>
      </label>
      <p>
        <b>
          Good Morning {firstName.value} {lastName.value}
        </b>
      </p>
    </div>
  );
}

export default Form;
