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

import "./Voting.css";
import { RadioGroup, Radio, Box, GridItem, Grid, Text, Stack } from "@chakra-ui/react";
import Candidates from "../../JSON/candidates.json";
import PopOver from "./PopOver";
import { useState, useEffect } from "react";
import React from "react";
import Navbar from "../Navbar/Navbar";
import getCurrentUser from "../../API/Voter";

export default function Voting() {
  const [vote, setVote] = useState("blank");
  const voter = getCurrentUser();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="outer-page-container">
        <div className="inner-page-container-wide">
          <div className="header">
            <h1 className="blue-text">Afstemning</h1>

            <Text  display={voter.attributes.Vote === "" ? "box" : "none"}>
            For at afgive din stemme, sæt venligst et kryds(X) ud fra enten et
            parti eller en kandidat.
            De listede kandidater herunder er respektive i forhold til din
            bopæl.
            </Text>
          </div>
          {voter.attributes.Vote === "" ?
    <Box>
          <RadioGroup onChange={setVote} value={vote} className="radio-group">
          {Candidates.map((party) => (
            <div id="party" key={party.id}>
              <Radio
                value={party.id.toString()}
                marginBottom="1rem"
                padding="1rem"
                borderColor="#1C4E81"
              >
                <h2>{party.party}</h2>
              </Radio>
              <Stack
                className="stack"
                display="grid"
                gridTemplateColumns="1fr 1fr"
                color="#1C4E81"
                alignItems={"end"}
              >
                {party.candidates.map((candidate) => (
                  <GridItem key={candidate.id} className="grid-item">
                    <Radio
                      value={candidate.id.toString()}
                      borderColor="#1C4E81"
                    >
                      {candidate.candidate}
                    </Radio>
                  </GridItem>
                ))}
              </Stack>
            </div>
          ))}

          </RadioGroup>



          <PopOver vote={vote}></PopOver>
          </Box> : <Text className="red-text">
          Afstemningsfasen er afsluttet, og det er ikke længere muligt at stemme.
            </Text>
            
}
        </div>
      </div>
    </div>
  );
}
