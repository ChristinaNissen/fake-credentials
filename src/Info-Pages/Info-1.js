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

import React, { useEffect } from "react";
import "./InfoPages.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Button,
  Box,
  Text,
  Grid,
  GridItem,
  Checkbox,
  Spinner,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import getCurrentUser, { addVoter, loginVoter } from "../API/Voter";

export default function Info1() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const voter = getCurrentUser();
  const navigate = useNavigate();


  const submitForm = () => {
    setIsSubmitting(true);
    document
      .querySelector("#submit-pid")
      .setAttribute("disabled", isSubmitting);
    let rndInt = Math.floor(Math.random() * 901) + 100;
    if (voter === null) {
      rndInt = rndInt.toString();
      addVoter(rndInt).then(
        (resolveSignUp) => {
          navigate("/welcome");
          console.log("signup");
        },
        (rejectSignUp) => {
          setIsSubmitting(false);
          document.querySelector("#submit-pid").removeAttribute("disabled");
          document.querySelector("#submission-error").style.visibility =
            "visible";
        }
      );
    } else {
      rndInt = voter.attributes.username;
      loginVoter(rndInt).then(
        (resolveLogIn) => {
          navigate("/welcome");
          console.log("login");
        },
        (rejectLogIn) => {
          setIsSubmitting(false);
          document.querySelector("#submit-pid").removeAttribute("disabled");
          document.querySelector("#submission-error").style.visibility =
            "visible";
        }
      );
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-info-pages">
      <Box className="inner-box-info padding-top-info-page">
        <Box>
          <div className="space-between">
            <h1 className="h1-info-pages">Before you start</h1>
          </div>
          <Formik initialValues={{ pid: "" }} onSubmit={submitForm}>
            {({ errors, touched }) => (
              <Form>
                <Grid className="info1-steps-grid">
                  <GridItem className="info1-steps-numbers">
                    <Text>1</Text>
                  </GridItem>
                  <GridItem className="info1-steps-griditem">
                    <Text>
                      For the purpose of this
                      study we ask you to vote for{" "}
                      <span className="bold-text red-text">Sarah Wilson.</span>
                    </Text>
                  
                  </GridItem>
                 
                  <GridItem className="info1-steps-numbers" />

                  <GridItem
                    className="info1-steps-griditem"
                    paddingTop={"1rem"}
                  >
                    <Text
                      id="submission-error"
                      className="error-text-db-submission"
                    >
                      Something went wrong, please try again later.{" "}
                    </Text>
                    <Button
                      id="submit-pid"
                      type="submit"
                      className="red-btn"
                      mt={"1rem"}
                    >
                      {isSubmitting && <Spinner size="sm" mr={"1rem"} />} Start
                    </Button>
                  </GridItem>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </div>
  );
}
