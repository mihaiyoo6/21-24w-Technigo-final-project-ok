import React, { useEffect } from "react";
import { useSelector, useDispatch, batch } from "react-redux";
import { useHistory } from "react-router-dom";

import { API_URL } from "../reusable/urls";

import sharings from "../reducers/sharings";


const SharingContainer = styled.div`
  background-color:#4838a8;
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;    
`

const SharingWrapper = styled.div`
  background-color:#ffffff;
  padding:10px;
  margin:30px;
  border-radius:20px;
  
`

const Title = styled.text`
  font-size:40px;
  color:#fff;
  margin:50px 30px;
  align-text:center;
`
const Sharing = styled.text`
  font-size: 20px;
  padding:40px;
`


const PositiveSharing = () => {
    const accessToken = useSelector((store) => store.user.accessToken);
    const sharingItems = useSelector(store => store.sharings.items)
    
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (!accessToken) {
          history.push("/signin");
        }
      }, [accessToken, history]);
    
      useEffect(() => {
        const options = {
          method:'GET',
          headers: {
            Authorization: accessToken
          }
        }
        
        fetch(API_URL('sharings'), options)
           .then(res => res.json())
           .then(data => {
              if (data.success) {
                batch(() => {
                  dispatch(sharings.actions.setSharings(data.thoughts));
                  dispatch(sharings.actions.setErrors(null));
                });
              } else {
                  dispatch(sharings.actions.setErrors(data));
              }
          });
      }, [accessToken, dispatch]); 

  
        return (
            <SharingContainer>
             <Title>Happy Thoughts for your daily life</Title>
                {sharingItems.map(sharing => (
                  <SharingWrapper key={sharing._id}>
                    <Sharing>
                      {sharing.message}
                    </Sharing>
                  </SharingWrapper>
                ))}
            </SharingContainer>
          )  
        };
 
export default PositiveSharing
