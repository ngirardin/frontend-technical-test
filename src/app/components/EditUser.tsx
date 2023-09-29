"use client";

import { useState } from "react";
import { User } from "../lib/searchUsers";
import { Input } from "./Input";

type Props = {
  user: User;
};

export default function EditUser(props: Props) {
  const [showInput, setShowInput] = useState(false);
  const [name, setName] = useState(props.user.name);

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") {
      return;
    }

    if (name === "") {
      setName(props.user.name);
    }

    setShowInput(false);
  };

  return (
    <>
      {!showInput && (
        <div className="cursor-pointer" onClick={() => setShowInput(true)}>
          {name}
        </div>
      )}

      {showInput && (
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyUp={onKeyUp}
        />
      )}
    </>
  );
}
