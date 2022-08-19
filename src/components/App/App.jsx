import { Avatar, Card } from '@mui/material';
import { Component } from 'react';
import logo from '../../logo.svg';
import MyCard from '../Card/Bull';
import './App.css';
import { CardContent, CardMedia, Typography } from "@mui/material";
import Bull from '../Card/Bull';
import { CallReceived, CallMade, SwapVert } from '@mui/icons-material';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';


class App extends Component{
  constructor(props){
    super(props)

    this.state = {}
  }

  render(){
    return(
      <Card sx={{ maxWidth: 500, maxHeight: 700 }} className="container" elevation={8}>
         {/* <MyCard/> */}
         <center>
         <CardContent>
             <Typography utterBottom variant="h5" component="div">SRX</Typography>
             <Typography variant="caption" display="block" gutterBottom>{ Bull }Rinkeby Test Network</Typography>
         </CardContent>

         <CardContent>
           <div className='border' >
           <Avatar sx={{ bgcolor: 'skyblue', width: 56, height: 56 }}>S</Avatar>
           </div>
           <br></br>
           <Typography utterBottom variant="subtitle2" component="div">Account 1</Typography>
           <Typography utterBottom variant="caption" component="div" sx={{ marginTop: 1.5 }}>$15</Typography>
           <Typography utterBottom variant="overline" component="div" className='addressBackground' sx={{ marginTop: 1.5 }}>0x9898de...Adys6432</Typography>
         </CardContent>
         </center>

         <Stack direction={"row"} alignItems={"center"} spacing={4} sx={{ marginTop: 2}} alignSelf={ "center" }>
           <div>
           <Avatar sx={{ bgcolor: 'green'}}>
               <CallReceived/>
             </Avatar>
             <Typography sx={{ color: 'green', marginTop: 1}} variant="caption" display="block" gutterBottom>Receive</Typography>
           </div>

           <div>
           <Avatar sx={{ bgcolor: 'red'}}>
               <CallMade/>
             </Avatar>
             <Typography sx={{ color: 'red', marginTop: 1}} variant="caption" display="block" gutterBottom>Send</Typography>
           </div>

           <div>
           <Avatar sx={{ bgcolor: 'skyblue'}}>
               <SwapVert/>
             </Avatar>
             <Typography sx={{ color: 'skyblue', marginTop: 1}} variant="caption" display="block" gutterBottom>Swap</Typography>
           </div>
        </Stack>

        <Divider sx={{ marginTop: 6 }} />
      </Card>
    )
  }
}

export default App;
