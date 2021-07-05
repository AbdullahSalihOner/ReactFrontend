import React from 'react'
import { Grid, Menu } from 'semantic-ui-react'

export default function Categories() {
    return (
        <div>
            
            <Grid>
        <Grid.Column>
          <Menu pointing vertical >
            <Menu.Item
              name='JobAdverts'
            />
            <Menu.Item
              name='JobPositions'
            />
            <Menu.Item
              name='JobSeekers'
            />
          </Menu>
        </Grid.Column>

       
      </Grid>
        </div>
    )
}