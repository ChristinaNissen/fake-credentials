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

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Text,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveVote } from "../../API/Voter";
import "./Voting.css";

function PopOver({ vote }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();  
    setIsSubmitting(true);
    await saveVote(vote);
    navigate("/confirmation");
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button className="blue-btn" width="100%">
          Afgiv stemme
        </Button>
      </PopoverTrigger>
      <PopoverContent className="pop-over-container">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody className="pop-over-body">
          <Text>
            
Venligst tjek, om din stemme er indtastet korrekt. Er du sikker på, at du vil stemme på:
          </Text>
          <Text className="pop-over-text">{vote}</Text>
          <Flex>
            <PopoverCloseButton className="no-button">Nej</PopoverCloseButton>
            <Button
              className="blue-btn"
              mt={0}
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting && <Spinner size="sm" mr={"1rem"} />}
              Ja
            </Button>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default PopOver;
