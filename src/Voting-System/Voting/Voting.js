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
import { RadioGroup, Radio, Box, GridItem, Grid, Text } from "@chakra-ui/react";
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
            For at kunne stemme i Folketingsvalget, vælg venligst en kandidat nedenfor og klik på "Afgiv stemme".
            </Text>
          </div>
          {voter.attributes.Vote === "" ?
    <Box>
          <RadioGroup onChange={setVote} value={vote} className="radio-group">
            <Grid className="voting-options">
              {Candidates.map((candidate) => (
                <Box key={candidate.id}>
                  <GridItem className="voting-option">
                    <Radio
                      className="radio candidate-party-wrapper"
                      value={`${candidate.candidate} (${candidate.party})`}
                    >
                      <div>{candidate.candidate}</div>
                      <div>{candidate.party}</div>
                    </Radio>
                  </GridItem>
                </Box>
              ))}
            </Grid>
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
