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
import { Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function ReportingConfirmation(props) {
  const navigate = useNavigate();

  return (
    <div id={props.id} style={{ visibility: props.visibility }}>
      <h1 className="blue-text">Tak for din rapport</h1>
      <Text>
        
Vi har modtaget din besked og vender tilbage til dig så hurtigt som muligt.
      </Text>
      <Button
        className="blue-btn"
        width={"100%"}
        onClick={() => navigate("/welcome")}
      >
        Afslut
      </Button>
    </div>
  );
}
