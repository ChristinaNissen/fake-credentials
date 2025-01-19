import { useState, useEffect } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Text,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import getCurrentUser, { addVoter, loginVoter } from "../../API/Voter";
import BackgroundImage1 from "../../assets/folketinget-background-image.svg";
import "./Login.css";

export default function Login() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const voter = getCurrentUser();
  const navigate = useNavigate();

  const handleLogin = (values, actions) => {
    const { cprnummer, password } = values;
    setIsSubmitting(true);

    if (!voter) {
      // Add voter and log in
      addVoter(cprnummer, password)
        .then(() => {
          navigate("/welcome");
          console.log("Voter successfully added and logged in");
        })
        .catch(() => {
          console.error("Failed to add voter");
          actions.setSubmitting(false); // Reset Formik's submitting state
        })
        .finally(() => setIsSubmitting(false));
    } else {
      // Log in existing voter
      const existingID = voter.attributes.username;
      loginVoter(existingID)
        .then(() => {
          navigate("/welcome");
          console.log("Existing voter logged in successfully");
        })
        .catch(() => {
          console.error("Failed to log in voter");
          actions.setSubmitting(false); // Reset Formik's submitting state
        })
        .finally(() => setIsSubmitting(false));
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="outer-page-container-login">
   
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex flex={1}>
        <Image
          maxH={"100vh"}
          alt={"Login Image"}
          objectFit={"cover"}
          src={BackgroundImage1}
        />
      </Flex>

      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>

       
          <h2 className="headline-login">
            Velkommen til det digitale folketingsvalg
          </h2>

          <Text className="text-margin-top">
            For at stemme til folketingsvalget online, bedes du logge ind med de
            informationer, du har fået fysisk på valgkontoret.
          </Text>

          <Formik
            initialValues={{ cprnummer: "", password: "" }}
            onSubmit={(values, actions) => handleLogin(values, actions)}
          >
            {(props) => (
              <Form className="input-field">
                <Field name="cprnummer">
                  {({ field }) => (
                    <FormControl>
                      <FormLabel color={"#1C4E81"} marginTop="1rem">
                        CPR-nummer
                      </FormLabel>
                      <Input
                        id="cprnummer"
                        type="text"
                        placeholder="Indtast CPR-nummer"
                        borderRadius={"0"}
                        borderColor={"#1C4E81"}
                        color={"#1C4E81"}
                        {...field}
                      />
                    </FormControl>
                  )}
                </Field>

                <Field name="password">
                  {({ field }) => (
                    <FormControl>
                      <FormLabel color={"#1C4E81"} marginTop="1rem">
                        Stemme-nøgle
                      </FormLabel>
                      <Input
                        id="stemme-nøgle"
                        type="password" // Hide password input
                        placeholder="Indtast stemme-nøgle"
                        borderRadius={"0"}
                        borderColor={"#1C4E81"}
                        color={"#1C4E81"}
                        {...field}
                      />
                    </FormControl>
                  )}
                </Field>

                <Button
                  id="submit-pid"
                  isLoading={props.isSubmitting || isSubmitting}
                  isDisabled={props.isSubmitting || isSubmitting}
                  type="submit"
                  color={"#FFF"}
                  backgroundColor={"#1C4E81"}
                  width={"30%"}
                  className="blue-btn"
                  marginTop={"2rem"}
                >
                  Log ind
                </Button>
              </Form>
            )}
          </Formik>
        </Stack>

       
      </Flex>
    
    </Stack>
    
    </div>
  );
}
