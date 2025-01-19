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

import { Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useEffect } from "react";

export default function Welcome() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="outer-page-container">
        <div className="inner-page-container-wide">
          <h1 className="blue-text">Velkommen</h1>

          <Text>Velkommen til Folketingsvalget!</Text>
          <Text className="text-margin-top" marginBottom={"2rem"}>
          Vi er glade for at præsentere et praktisk online stemmesystem, der er designet til at styrke din stemme i den demokratiske proces. Vores brugervenlige grænseflade sikrer en problemfri stemmeoplevelse, så du kan afgive din stemme fra din egen enhed i komfort.
          </Text>
          <Text>Klik på "Næste" og afgiv din stemme.</Text>

          {/*    <div>
            <Image src={VotingOverview} />
          </div> */}
          {/*        <Text className="text-margin-top" marginBottom={"2rem"}>
            The demo video below will give you a brief introduction to the
            online voting system. We highly encourage you to watch it, as this
            online election is a bit different from a paper-based election.
          </Text>

          <div>
            <h3 className="headline-results">Demo video</h3>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/KITaaepWDwA"
              title="demo video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div> */}
          <Button
            onClick={() => navigate("/voting")}
            className="blue-btn"
            marginTop={"2rem"}
          >
            Næste
          </Button>
        </div>
      </div>
    </div>
  );
}
