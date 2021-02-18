import React from "react";
import useSound from "use-sound";
import { Icon, Intent, Card, H3 } from "@blueprintjs/core";

// @ts-ignore
// import Sound from "s../../../public/sounds/Ba_dum_tss.mp3";

// const importSound = (clipPath) => {
//   const sound = import(`../../../public/sounds/${clipPath}`);
//   return sound;
// };

const ByteCard = (props: {
  clipPath: string;
  title: string;
  description: string;
}) => {
  const [play] = useSound(`/sounds/${props.clipPath}`);

  return (
    <div>
      <Card
        interactive
        style={{ width: "300px", height: "150px", margin: "8px" }}
        onClick={() => play()}
      >
        <Icon
          style={{ margin: "5px" }}
          iconSize={32}
          icon="play"
          intent={Intent.SUCCESS}
        />
        <div>
          <H3>{props.title}</H3>
        </div>
      </Card>
    </div>
  );
};

export default ByteCard;
