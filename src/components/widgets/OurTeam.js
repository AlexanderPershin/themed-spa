import React from 'react';
import styled from 'styled-components';
import Widget from '../widgets/Widget';

const OurTeam = () => {
  return (
    <Widget
      title='Our Team'
      colStart={5}
      colEnd={-2}
      rowStart={22}
      rowEnd={28}
      leftRad
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores animi
        earum optio. Quod fugiat, corporis eum maxime expedita, sequi
        voluptatibus tenetur nulla quisquam reiciendis inventore aut,
        perspiciatis vero tempore veniam voluptatum repudiandae ut id minus
        nobis delectus! Corrupti excepturi a possimus aliquid perferendis
        voluptas assumenda maxime similique exercitationem saepe voluptatem
        nihil illo accusamus optio repudiandae reiciendis alias, perspiciatis
        earum iure dicta ducimus. Nihil ipsam
      </p>
    </Widget>
  );
};

export default OurTeam;
