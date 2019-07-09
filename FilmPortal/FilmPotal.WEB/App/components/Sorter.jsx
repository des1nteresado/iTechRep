import React from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function Sorter(props) {
    const classes = useStyles();
    const [sortOrder, setSort] = React.useState('NameAsc');

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
      setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    function handleChange(event) {
        setSort(event.target.value);
        props.getFilms(0, event.target.value);
    }

    return (<FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
            Sort by
        </InputLabel>
        <Select
            value={sortOrder}
            onChange={handleChange}
            input={<OutlinedInput labelWidth={labelWidth} name="sort" id="outlined-age-simple" />}
        >
            <MenuItem value={'NameAsc'}>Name: A to Z</MenuItem>
            <MenuItem value={'NameDesc'}>Name: Z to A</MenuItem>
            <MenuItem value={'YearDesc'}>Year: Newest</MenuItem>
            <MenuItem value={'YearAsc'}>Year: Oldest</MenuItem>
            <MenuItem value={'MarkDesc'}>Rating: Highest</MenuItem>
            <MenuItem value={'MarkAsc'}>Rating: Lowest</MenuItem>
        </Select>
    </FormControl>
    )
}
