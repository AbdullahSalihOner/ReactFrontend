
import React from "react";

import { Button, Container, Dropdown, Menu } from "semantic-ui-react";

export default function Navi() {
    
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <Dropdown item text="Language">
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Russian</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>
              <Button color="purple">Sign Up</Button>
              <Button color="violet">Sign In</Button>
              </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}