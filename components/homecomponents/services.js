
import React from 'react'
import { Typography,Container } from '@material-ui/core'
import Link from '../../src/Link'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export default function Services() {
    return (
        <div className="services py-24">
            <Container>
                <div className="grid lg:grid-cols-2 xs:grid-cols-1 gap-4">
                    <div>
                        <Typography component="h4" className="xl:text-3xl md:text-2xl xs:text-xl text-secondary font-f-bold mb-4">
                        All your favorite banks at one place!
                        </Typography>
                        <Typography component="p" className="xl:text-lg xs:text-sm">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum 
                        </Typography>
                        <Link href="/" className="xl:text-lg xs:text-sm block lg:text-right  mt-8">View registered banks <ArrowForwardIcon className="xl:text-2xl xs:text-sm" /></Link>
                    </div>
                    <div>
                        <img src ="/images/Group 4068.png" className="lg:-mt-24 mx-auto" alt="" />
                    </div>
                    <div>
                        <img src ="/images/Group 3364.png" className="lg:-mt-24 mr-auto" alt="" />
                    </div>
                    <div>
                        <Typography component="h4" className="xl:text-3xl md:text-2xl xs:text-xl text-secondary font-f-bold mb-4 lg:text-right">
                        Multiple payment methods!
                        </Typography>
                        <Typography component="p" className="xl:text-lg xs:text-sm lg:text-right">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum 
                        </Typography>
                        <Link href="/" className="xl:text-lg xs:text-sm block mt-8">View registered banks <ArrowForwardIcon className="xl:text-2xl xs:text-sm" /></Link>
                    </div>
                    <div>
                        <Typography component="h4" className="xl:text-3xl md:text-2xl xs:text-xl text-secondary font-f-bold mb-4">
                        Book at the last minute!
                        </Typography>
                        <Typography component="p" className="xl:text-lg xs:text-sm">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum 
                        </Typography>
                        <Link href="/" className="xl:text-lg xs:text-sm block lg:text-right mt-8">View registered banks <ArrowForwardIcon className="xl:text-2xl xs:text-sm" /></Link>
                    </div>
                    <div>
                        <img src ="/images/Group 3367.png" className="lg:-mt-4 mx-auto" alt="" />
                    </div>
                </div>
            </Container>
        </div>
    )
}
