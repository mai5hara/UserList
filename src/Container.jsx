
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    root: {
        width: 600,
        marginBottom: 20,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Container(props) {
const user = props['userData']

const classes = useStyles();

    return (
        <div style={{ width: '100%' }}>
            <Box display="flex" justifyContent="center" p={1}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            USER ID : {user.userId}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            ID : {user.id}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            TITLE : {user.title}
                        </Typography>
                        <Typography variant="body2" component="p">
                            BODY : {user.body}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </div>
    )
}
