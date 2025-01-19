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
import { Text } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import "./Error.css";

export default function Error() {
  return (
    <div>
      <Navbar />
      <div className="outer-page-container">
        <div className="container-error-page">
          <div className="icon-and-headline">
            <span className="material-symbols-outlined margin-right-icon">
              fejl
            </span>
            <h1 className="darkblue-text">UGYLDIG URL</h1>
          </div>
          <Text>
          Hmm... Det ser ikke ud til, at der er en webside på denne URL.
          Dobbelttjek stavningen, og prøv igen.
          </Text>
        </div>
      </div>
    </div>
  );
}
