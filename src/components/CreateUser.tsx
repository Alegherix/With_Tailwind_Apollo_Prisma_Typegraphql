import React, { useState, useEffect } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import { CreateUserMutation } from '../generated/CreateUserMutation';

const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($input: UserInput!) {
    createUser(input: $input) {
      email
      name
    }
  }
`;

const GET_USERS_QUERY = gql`
  query GetUsersQuery {
    getUsers {
      id
      name
      email
    }
  }
`;

const CreateUser = () => {
  const { data, loading } = useQuery(GET_USERS_QUERY);

  const [formState, setFormState] = useState({
    email: '',
    name: '',
  });

  const [createUser] = useMutation<CreateUserMutation>(CREATE_USER_MUTATION, {
    variables: {
      email: formState.email,
      name: formState.name,
    },
    refetchQueries: [{ query: GET_USERS_QUERY }],
  });

  const handleCreate = async () => {
    await createUser({
      variables: {
        input: {
          email: formState.email,
          name: formState.name,
        },
      },
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleCreate();
  };

  return (
    <div className="mt-12 gap-4 flex flex-col max-w-screen-xl justify-center">
      <h2 className="text-2xl">Try creating a new user</h2>
      <form onSubmit={(e) => onSubmit(e)} className="flex flex-col w-80 gap-3">
        <input
          value={formState.name}
          onChange={(e) =>
            setFormState({
              ...formState,
              name: e.target.value,
            })
          }
          type="text"
          placeholder="Your name"
        />
        <input
          value={formState.email}
          onChange={(e) =>
            setFormState({
              ...formState,
              email: e.target.value,
            })
          }
          type="text"
          placeholder="Your email address"
        />

        <button className="pointer button border-2 border-black" type="submit">
          Create User
        </button>
      </form>
      <div>
        <>
          {loading && <p>loading...</p>}
          {!loading && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </>
      </div>
    </div>
  );
};

export default CreateUser;
