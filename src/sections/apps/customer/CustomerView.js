import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  useMediaQuery,
  Grid,
  Chip,
  Divider,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  Stack,
  TableCell,
  TableRow,
  Typography
} from '@mui/material';

// third-party
import NumberFormat from 'react-number-format';

// project import
import Avatar from 'components/@extended/Avatar';
import MainCard from 'components/MainCard';

// assets
import { EnvironmentOutlined, LinkOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

const avatarImage = require.context('assets/images/users', true);

// ==============================|| CUSTOMER - VIEW ||============================== //

const CustomerView = ({ data }) => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <TableRow sx={{ '&:hover': { bgcolor: `transparent !important` } }}>
      <TableCell colSpan={8} sx={{ p: 2.5 }}>
        <Grid container spacing={2.5} sx={{ pl: { xs: 0, sm: 5, md: 6, lg: 10, xl: 12 } }}>
          <Grid item xs={12} sm={5} md={4} lg={3}>
            <MainCard>
              <Chip
                label={data.status}
                size="small"
                color="primary"
                sx={{
                  position: 'absolute',
                  right: 10,
                  top: 10,
                  fontSize: '0.675rem'
                }}
              />
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Stack spacing={2.5} alignItems="center">
                    <Avatar alt="Avatar 1" size="xl" src={avatarImage(`./avatar-${data.avatar}.png`)} />
                    <Stack spacing={0.5} alignItems="center">
                      <Typography variant="h5">{data.fatherName}</Typography>
                      <Typography color="secondary">{data.role}</Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Stack direction="row" justifyContent="space-around" alignItems="center">
                    <Stack spacing={0.5} alignItems="center">
                      <Typography variant="h5">{data.age}</Typography>
                      <Typography color="secondary">Age</Typography>
                    </Stack>
                    <Divider orientation="vertical" flexItem />
                    <Stack spacing={0.5} alignItems="center">
                      <Typography variant="h5">{data.progress}%</Typography>
                      <Typography color="secondary">Progress</Typography>
                    </Stack>
                    <Divider orientation="vertical" flexItem />
                    <Stack spacing={0.5} alignItems="center">
                      <Typography variant="h5">{data.visits}</Typography>
                      <Typography color="secondary">Visits</Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <List component="nav" aria-label="main mailbox folders" sx={{ py: 0 }}>
                    <ListItem>
                      <ListItemIcon>
                        <MailOutlined />
                      </ListItemIcon>
                      <ListItemSecondaryAction>
                        <Typography align="right">{data.email}</Typography>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <PhoneOutlined />
                      </ListItemIcon>
                      <ListItemSecondaryAction>
                        <Typography align="right">
                          <NumberFormat displayType="text" format="+1 (###) ###-####" mask="_" defaultValue={data.contact} />
                        </Typography>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <EnvironmentOutlined />
                      </ListItemIcon>
                      <ListItemSecondaryAction>
                        <Typography align="right">{data.country}</Typography>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <LinkOutlined />
                      </ListItemIcon>
                      <ListItemSecondaryAction>
                        <Link align="right" href="https://google.com" target="_blank">
                          https://anshan.dh.url
                        </Link>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12} sm={7} md={8} lg={9}>
            <Stack spacing={2.5}>
              <MainCard title="Personal Details">
                <List sx={{ py: 0 }}>
                  <ListItem divider={!matchDownMD}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          <Typography color="secondary">Full Name</Typography>
                          <Typography>{data.fatherName}</Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          <Typography color="secondary">Father Name</Typography>
                          <Typography>
                            Mr. {data.firstName} {data.lastName}
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem divider={!matchDownMD}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          <Typography color="secondary">Country</Typography>
                          <Typography>{data.country}</Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          <Typography color="secondary">Zip Code</Typography>
                          <Typography>
                            <NumberFormat displayType="text" format="### ###" mask="_" defaultValue={data.contact} />
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem>
                    <Stack spacing={0.5}>
                      <Typography color="secondary">Address</Typography>
                      <Typography>{data.address}</Typography>
                    </Stack>
                  </ListItem>
                </List>
              </MainCard>
              <MainCard title="About me">
                <Typography color="secondary">
                  Hello, I’m {data.fatherName} {data.role} based in international company, {data.about}
                </Typography>
              </MainCard>
            </Stack>
          </Grid>
        </Grid>
      </TableCell>
    </TableRow>
  );
};

CustomerView.propTypes = {
  data: PropTypes.object
};

export default CustomerView;
