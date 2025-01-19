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
import { Box, Flex, Button } from "@chakra-ui/react";
import Logo from "../../assets/logo-folketinget.svg";
import "./Navbar.css";

export default function Navbar() {

  const navigate = useNavigate();

  return (
    <Box className="navbar-container">
      <Flex gap="1350" height={"90%"}>
        <img src={Logo} alt="logo" />
        <Button
        className="blue-btn-help"
        onClick={() => navigate("/reporting")}>Hjælp</Button>
      
      </Flex>
      
    </Box>
  );
}
