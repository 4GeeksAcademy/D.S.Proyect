import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Modal, Form, Stack } from "react-bootstrap";
import { FormControl, FormLabel, FormErrorMessage, Input, InputRightElement, InputGroup } from "@chakra-ui/react";

export const MyModal = ({ showModal, close }) => {
    const [show, setShow] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        console.log(errors.email);
    }

    return (
        <>
            <Modal show={showModal} onHide={close} size="md" rounded-4>
                <Modal.Header className="px-4" closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-4">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl className="mb-2" id="email" isInvalid={errors.email} isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input
                                type="email"
                                placeholder="name@example.com"
                                {...register("email", {
                                    required: true,
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "Invalid email format",
                                    },
                                })}
                            />
                            <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                        </FormControl>

                        <FormControl className="mb-3" id="password" isInvalid={errors.password} isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input
                                    type={show ? 'text' : 'password'}
                                    placeholder="Enter your password"
                                    {...register("password", {
                                        required: "Password is required.",
                                        minLength: {
                                            value: 8,
                                            message: "Password must be at least 8 characters.",
                                        },
                                        pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                                            message: "Password must contain at least one uppercase letter, one lowercase letter, and one number.",
                                        },
                                    })}
                                />
                                <InputRightElement width='3.5rem'>
                                    <Button h='1.00rem' size='sm' onClick={() => setShow(!show)} colorScheme='blue'>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                                <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
                        </FormControl>

                        <div className="d-flex justify-content-center align-items-center gap-2 w-100">
                            <box-icon name='log-in' animation='fade-left' color='#026619' ></box-icon>
                            <Button className="mb-2 d-flex flex-row justify-content-center align-items-center px-2" type="submit" variant="success">
                                <span>Sign Up!</span>
                            </Button>
                        </div>

                        <Stack gap={3} className="mt-2">
                            <hr />
                            <h6 className="text-center">Or use a third-party</h6>
                            <Button variant="outline-warning" className="p-3 d-flex flex-row justify-content-center align-items-center gap-3 w-100 ">
                                <box-icon name='amazon' type='logo' rotate='90' animation='tada' color='#ac5901' ></box-icon>
                                <span className="text-black">Sign up with Amazon</span>
                            </Button>
                            <Button variant="outline-primary" className="p-3 d-flex flex-row justify-content-center align-items-center gap-3 w-100">
                                <box-icon name='facebook' type='logo' rotate='90' animation='tada' color='#010ba1' ></box-icon>
                                <span>Sign up with Facebook</span>
                            </Button>
                            <Button variant="outline-info" className="p-3 d-flex flex-row justify-content-center align-items-center gap-3 w-100">
                                <box-icon name='telegram' type='logo' rotate='90' animation='tada' color='#067099' ></box-icon>
                                <span className="text-black">Sign up with Telegram</span>
                            </Button>
                        </Stack>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};
