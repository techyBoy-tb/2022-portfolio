import React from 'react';

import './App.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SideBar from './components/SideBar/SideBar';
import palette from './theme/palette';
import { List, Grid, ListItem, ListItemText, Link } from '@mui/material';

const App = () => {
  const skillList: string[] = [
    'React Native',
    'ReactJS',
    'GraphQL',
    'Angular',
    'Yarn',
    'GIT VCS',
    'AWS',
    'Native iOS',
    'PostgreSQL',
    'Kibana',
    'Jira',
    'Javascript',
    'NodeJS',
    'REST API',
    'HTML5',
    'NPM',
    'CI/CD',
    'Openshift',
    'XML',
    'SQLite',
    'Dynatrace',
    'Asana',
    'Typescript',
    'NextJS',
    'NodeJS',
    'CSS3',
    'WordPress',
    'Jenkins',
    'Native android',
    'Gradle',
    'MixPanel',
    'Confluence',
    'Twilio',
  ];

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  // function renderRow(props: ListChildComponentProps) {
  //   const { index, style } = props;

  //   return (
  //     <ListItem style={style} key={index} component="div" disablePadding>
  //       <ListItemButton>
  //         <ListItemText primary={`Item ${index + 1}`} />
  //       </ListItemButton>
  //     </ListItem>
  //   );
  // }

  const renderListItem = (skill: string, index: number) => (
    <Typography variant="body2">{skill}</Typography>
  );

  return (
    <div className="container">
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* About */}
        <Card sx={{ borderRadius: 0.5 }} id="about">
          <CardContent>
            <Grid container>
              <Grid item xs={10} md={10}>
                <Typography gutterBottom variant="h4" component="div">
                  About
                </Typography>
                <Typography variant="body2">
                  So what can I say other than I love programming! I have made
                  this portfolio to showcase my skills. My background is quite
                  varied, So I have listed below the tech stacks that I have
                  used within both my professional career and my own personal
                  development.
                </Typography>
                <Grid item xs={5} md={10}>
                  <List>
                    {skillList.map((skill, index) => {
                      return renderListItem(skill, index);
                    })}
                  </List>
                </Grid>

                {/* <Box sx={{ display: 'flex', pt: 1, gap: 4 }}>
                  <Typography variant="body2" color="text.secondary">
                    1 / 123
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    879354 workouts
                  </Typography>
                </Box> */}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        {/* Career */}
        <Card sx={{ borderRadius: 0.5 }} id="career">
          <CardContent>
            <Grid container>
              <Grid item xs={10} md={10}>
                <Typography gutterBottom variant="h4" component="div">
                  Career
                </Typography>
                {/* NoblePro */}
                <Box>
                  <Typography variant="h5">
                    <Link
                      href="https://noble-pro.com"
                      target="_blank"
                      rel="noopener"
                    >
                      NoblePro
                    </Link>{' '}
                    - Senior developer
                  </Typography>
                  <Typography>
                    • Full stack app developer working with React Native,
                    NodeJS, Android and iOS development.
                  </Typography>
                  <Typography>
                    • Updated existing app on the treadmill to allow users to
                    have accurate data following their session.
                  </Typography>
                  <Typography>
                    • Rebranded existing mobile app to brand and UX guidelines.
                  </Typography>
                  <Typography>
                    • Including native changes using iOS and Android
                    development.
                  </Typography>
                  <Typography>
                    • Live testing beta users to collect feedback to make
                    improvements and fix bugs.
                  </Typography>
                  <Typography>
                    • Researching and implementing new features.
                  </Typography>
                  <Typography>
                    • Creation and distribution of social media announcements
                    for feature release.
                  </Typography>
                  <Typography>
                    • Support technical feedback to customers.
                  </Typography>
                  {/* <Box sx={{ display: 'flex', pt: 1, gap: 4 }}>
                  <Typography variant="body2" color="text.secondary">
                    1 / 123
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    879354 workouts
                  </Typography>
                </Box> */}
                </Box>
                {/* Breathe Happy */}
                <Box>
                  <Typography variant="h5">
                    <Link
                      href="https://www.letsbreathehappy.com/"
                      target="_blank"
                      rel="noopener"
                    >
                      Breathe Happy
                    </Link>{' '}
                    - Software engineer
                  </Typography>
                  <Typography>
                    • Full stack developer working with Angular and NodeJS.
                  </Typography>
                  <Typography>
                    • Creating services which integrated password protected
                    video content to the website.
                  </Typography>
                  <Typography>
                    • Freedom to implement and research new technologies which
                    made key business recommendations.
                  </Typography>
                  <Typography>
                    • Designed and developed a fitness support aid where people
                    can play a YouTube video alongside themselves with a
                    skeleton overlay.
                  </Typography>
                  <Typography>
                    • Contributing to existing projects to implement customer
                    feature requests
                  </Typography>
                </Box>
                {/* Santander */}
                <Box>
                  <Typography variant="h5">
                    <Link
                      href="https://www.santander.co.uk/"
                      target="_blank"
                      rel="noopener"
                    >
                      Santander
                    </Link>{' '}
                    - Full Stack Software Developer
                  </Typography>
                  <Typography>
                    • Full stack developer working with Java, Spring and Angular
                    creating online forms for Financial Crime.
                  </Typography>
                  <Typography>
                    • Ops Engineer which allowed me to expand my knowledge and
                    gain experience in Jenkins, Docker, Openshift and more.
                  </Typography>
                  <Typography>
                    • Deployed, supported and maintained the product in the
                    production environment.
                  </Typography>
                  <Typography>
                    • Liaising with multiple teams of varying seniority
                    throughout the bank to gain the approvals and sign off to
                    achieve product go-live.
                  </Typography>
                  <Typography>
                    • Mentoring junior developers, supporting them to develop
                    their skills and challenge their thinking to help them
                    progress to a more senior role.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        {/* Projects */}
        {/**
         * Kinni
         * Sidekick
         * Media hookup
         * Tax calc
         * Jono portfolio
         * This portfolio
         */}
        {/* Kinni Sidekick Media hookup Tax calc */}
      </Box>
      {/* </Drawer> */}
    </div>
  );
};

export default App;
