import React from 'react';
import styled from 'styled-components';

const AppHeaderWrapper = styled.div`
    align-items: flex-end;
    justify-content: space-between;
    display: flex;
   h1 {
    font-size: 26px;
  }
  
   h2 {
    font-size: 1.2rem;
    color: grey;
  }
`;

const AppHeader = () => {
    return(
        <AppHeaderWrapper>
            <h1>bahuzz</h1>
            <h2>5 posts, liked 2</h2>
        </AppHeaderWrapper>
    )
}

export default AppHeader;