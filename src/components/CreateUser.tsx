import React from 'react';
import { gql, useMutation } from '@apollo/client';

const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($input: UserInput!) {
    createUser(input: $input) {
      email
      name
    }
  }
`;

const CreateUser: React.FC = ({}) => {
  const [createUser] = useMutation(CREATE_USER_MUTATION, {
    variables: {
      email: 'test@testtest.com',
      name: 'testNamesick',
    },
  });

  return (
    <>
      <div>{/* <button onClick={createUser}></button> */}</div>
    </>
  );
};

export default CreateUser;
