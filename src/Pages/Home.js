import React, {useEffect} from 'react';
import {Button, Card, CardContent, Container, Grid, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

export const Home = () => {
    const dispatch = useDispatch()
    const login = useSelector(state => state.form.login)
    const password = useSelector(state => state.form.password)
    const disabled = useSelector(state => state.button.disabled)
    const history = useHistory()

    const toggleDisabledButton = () => {
        login === 'developer21' && password === '123456'
            ? dispatch({type: 'TOGGLE_DISABLED_BUTTON', payload: false})
            : dispatch({type: 'TOGGLE_DISABLED_BUTTON', payload: true})
    }

    useEffect(() => {
        toggleDisabledButton()
        console.log(disabled)
    }, [login, password])

    return (
        <Container style={{width: '100wh', height: '100vh'}}>
            <Grid container
                  height='100%'
                  justifyContent='center'
                  alignItems='center'>
                <Card>
                    <CardContent>
                        <form noValidate autoComplete='off'>
                            <Grid container flexDirection='column' alignItems='center' spacing={6}>
                                <Grid item>
                                    <TextField
                                        onChange={(e) => dispatch({type: 'CHECK_LOGIN_VALUE', payload: e.target.value})}
                                        id="email-textField"
                                        type='email'
                                        label="Логин"
                                    />
                                </Grid>

                                <Grid item>
                                    <TextField
                                        onChange={(e) => dispatch({type: 'CHECK_PASSWORD_VALUE', payload: e.target.value})}
                                        id="password-textField"
                                        type='password'
                                        label="Пароль"
                                    />
                                </Grid>

                                <Grid item>
                                    <Button
                                        variant="contained"
                                        type='submit'
                                        disabled={disabled}
                                        onClick={() => history.push('/profile')}
                                    >
                                        Войти
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Container>
    );
};