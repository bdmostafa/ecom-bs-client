import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from '../../Redux/User/UserActions';
import styled from 'styled-components';
import Form from 'antd/lib/form/Form';
import { Button, Input } from 'antd';

const Profile = () => {
  const user = useSelector((state) => state.users.user);

  const [isEdit, setIsEdit] = useState(false);

  return (
    <ProfileWrapper>
      {
        !isEdit ?
          (
            <TextBox>
              <TextLine>Name: <span>{user?.name} </span> </TextLine>
              <TextLine>Email: <span>{user?.email} </span> </TextLine>
              <TextLine>Role: <span>{user?.role} </span> </TextLine>
              <Button type="primary" onClick={() => setIsEdit(true)}>
                Edit Profile
              </Button>
            </TextBox>
          ) : (
            <>
            <p>edit option is under construction!</p>
            <Button type="primary" onClick={() => setIsEdit(false)}>
                Profile
            </Button>
            </>
          )
      }


    </ProfileWrapper>
  );
};

export default Profile;

const ProfileWrapper = styled.div`
padding: 25px;
display: flow-root;
text-align: center;
`;

const TextBox = styled.div`
display: inline-grid;
    max-height: 100vh;
    width: max-content;
`;

const TextLine = styled.h4`
border: 1px solid gray;
    padding: 5px;
    border-radius: 3px;
    width: initial;

span {
  font-weight: 500;
}
`;