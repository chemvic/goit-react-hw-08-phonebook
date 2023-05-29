import css from "./Home.module.css";
import { Typography } from '@mui/material';

const Home=() =>{
    return (
      <div className={css.container}>
       <Typography variant="h4"  >
       Phone book welcome page 
       </Typography>
      </div>
    );
  }
  export default Home;