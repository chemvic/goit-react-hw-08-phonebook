import css from "./Home.module.css";
import { Typography } from '@mui/material';
export default function Home() {
    return (
      <div className={css.container}>
       <Typography variant="h4"  >
       Phone book welcome page 
       </Typography>
      </div>
    );
  }
  