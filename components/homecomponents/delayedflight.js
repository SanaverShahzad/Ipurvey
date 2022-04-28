import React, {useRef} from 'react'
import { Button, Typography,Grid,Box,Slide,Container} from '@material-ui/core'
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

const data = [
    {
    start:0,
     end:5000,
     text:'DOMESTIC FLIGHTS'
    },
    {
    start:0,
    end:2000,
    text:'DOMESTIC TRAINS'
    },
    {
        start:0,
        end:5000,
        text:'DOMESTIC FLIGHTS'
       },
       {
       start:0,
       end:2000,
       text:'DOMESTIC TRAINS'
       }
   
]
export default function Delayedflight() {
    const [focus, setFocus] = React.useState(false);
    return (
        <div className="delayed-flight pb-24">
            <Container>
            <Typography component="h4" className="heading xl:text-4xl md:text-3xl xs:text-xl font-f-bold text-secondary text-center xl:pt-20 xl:pb-12 xs:pt-12 xs:pb-8">
             Delayed Flights this Year
            </Typography>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-10">
              {data.map((value ,i) => 
                <div className="flex flex-col lg:items-start xs:items-center" key={i}>
                <CountUp 
                start={focus ? value.start : null}
                end={value.end}
                redraw={true}
                duration={2.75}
                separator=","
                
                
                >
                    {({ countUpRef }) => (
              <div className="counter-text mb-5 pb-5">
                <span className="text-6xl font-f-bold" ref={countUpRef} />
                <VisibilitySensor
                  onChange={isVisible => {
                    if (isVisible) {
                      setFocus(true);
                    } 
                  }}
                >
                <a className="text-6xl font-f-bold">+</a>
                </VisibilitySensor>
              </div>
            )}
                </CountUp>
                <Typography component="p" className="text-lg font-f-medium text-secondary">
                    {value.text}
                </Typography>
                 </div>
                
                )}  
             
            </div>
            </Container>
        </div>
    )
}
