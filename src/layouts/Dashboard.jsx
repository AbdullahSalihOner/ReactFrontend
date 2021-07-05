import React from 'react'
import {  Grid } from 'semantic-ui-react'
import JobSeekerList from '../pages/JobSeekerList'
import JobAdvertList from '../pages/JobAdvertList'
import Categories from './Categories'

export default function Dashboard() {
    return (
        <div>
            <Grid>
            <Grid.Row>
                <Grid.Column width={4}>
                    <Categories/>
                </Grid.Column>
                <Grid.Column width={12}>
                     <JobAdvertList/> 
                   {/*  <JobPositionList/>  */}
                    <JobSeekerList/>
                </Grid.Column>
                </Grid.Row>
            </Grid>
            
            {/* <ProductList/> */}
        </div>
    )
}