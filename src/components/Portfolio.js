import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PortfolioCard from './PortfolioCard';
import PortfolioCardList from './PortfolioCardList';
import { Container } from '@mui/material';
import PortfolioCard3 from './PortfolioCard3';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const Portfolio = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <div className="mt-12 p-12 bg-[#398F60]">
      <Container>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Typography
              variant="h4"
              className="text-white  font-bold leading-[3rem] max-w-lg mx-auto pt-12 pb-5"
            >
              PORTFOLIO
            </Typography>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              centered
              scrollButtons="auto"
              className='w-full'
            >
              <Tab
                label="Project 1"
                sx={{
                  color: "white",
                  "&.Mui-selected": {
                    color: "white"
                  },
                }}
                {...a11yProps(0)}
              />
              <Tab label="Project 2"  sx={{
                  color: "white",
                  "&.Mui-selected": {
                    color: "white",
                  },
                }} {...a11yProps(1)} />
              <Tab
                label="Project 3"
                sx={{
                  color: "white",
                  "&.Mui-selected": {
                    color: "white",
                  },
                }}
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <PortfolioCardList />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <PortfolioCard />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <PortfolioCard3 />
          </CustomTabPanel>
        </Box>
      </Container>
    </div>
  );
}

export default Portfolio