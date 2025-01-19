/**
 * Copyright 2023 Christina Frederikke Nissen, Elisabeth Fredrich
 *
 * This file is part of e-voting-system-self-replace.
 *
 * e-voting-system-self-replace is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * e-voting-system-self-replace is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the 
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with e-voting-system-self-replace. If not, see <https://www.gnu.org/licenses/>.
 */

import React from "react";
import {
  Button,
  FormControl,
  Textarea,
  FormErrorMessage,
  FormLabel,
  Spinner,
} from "@chakra-ui/react";
//import { saveReportOfProblem } from "../../API/Voter";
import { Field, Form, Formik } from "formik";
import Navbar from "../Navbar/Navbar";
import { ReportingConfirmation } from "./ReportingConformation";
import { useState } from "react";
import "./Reporting.css";
import getCurrentUser from "../../API/Voter";

export default function Reporting() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const voter = getCurrentUser();

  const validateText = (value) => {
    if (value === "") {
      return "Input field cannot be empty";
    }
    if (voter === null){
      return "You cannot report a problem because you have not clicked the 'Start' button on the webpage where you are supposed to download the instructions for the voting system."
    }
  };

  const handleSubmit = async (value) => {
    setIsSubmitting(true);
    //await saveReportOfProblem(value.text);
    document.querySelector("#reporting-form").style.display = "none";
    document.querySelector("#reporting-confirmation").style.visibility =
      "visible";
  };

  return (
    <div>
      <Navbar />
      <div className="outer-page-container">
        <div className="inner-page-container-narrow">
          <div id="reporting-form">
            <h1 className="blue-text">Rapportér et problem</h1>
            <Formik initialValues={{ text: "" }} onSubmit={handleSubmit}>
              {({ errors, touched }) => (
                <Form>
                  <FormControl isInvalid={!!errors.text && touched.text}>
                    <FormLabel marginBottom={"1rem"}>
                      
Nedenfor kan du rapportere enhver form for problemer, du har oplevet under Folketingsvalget 2023.
                    </FormLabel>
                    <Field
                      as={Textarea}
                      name="text"
                      type="text"
                      className="report-form"
                      placeholder="Beskriv dit problem(er) her"
                      validate={validateText}
                    />
                    <FormErrorMessage className="error-message-voting-system">
                      {errors.text}
                    </FormErrorMessage>
                  </FormControl>
                  <Button
                    className="blue-btn"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting && <Spinner size="sm" mr={"1rem"} />} Send
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
          <ReportingConfirmation
            id="reporting-confirmation"
            visibility={"hidden"}
          />
        </div>
      </div>
    </div>
  );
}
