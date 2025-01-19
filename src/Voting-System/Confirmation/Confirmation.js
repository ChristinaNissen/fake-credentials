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
import { useNavigate } from "react-router-dom";
import { Button, Text } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import { logoutVoter } from "../../API/Voter";

export default function Confirmation() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();  
    logoutVoter();
    navigate("/start");
  };

  return (
    <div>
      <Navbar />
      <div className="outer-page-container">
        <div className="inner-page-container-narrow">
          <h1 className="blue-text">
          Tak for din stemme!</h1>
          <Text>
          Din stemme er blevet registreret og vil blive talt med.
          </Text>
          <Button className="blue-btn" onClick={handleSubmit}>
            Log ud 
          </Button>
        </div>
      </div>
    </div>
  );
}
