import React from 'react'
import Hero from '../components/Hero'
import Card from '../components/Card'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
    return (
        <>
        <Hero title="Become a Developer" subtitle="Find the job that fits your skills and needs"></Hero>
        <Card/>
        <JobListings isHome={true}/>
        <ViewAllJobs/>
        </>
    )
}

export default HomePage