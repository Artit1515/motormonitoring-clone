export const baseUrl = ' http://54.66.21.117:8000';
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMotorData = async(id) => {
  const motorApi = `${baseUrl}/devices/get/motor_data`;
  const reqOption = {
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({
        motor_id: id
    })
  };
  try{
    const res = await fetch(motorApi, reqOption);
    if(res.ok){
      const data = await res.json();
      console.log(data)
      return data
    }
  }
  catch(err){
    console.log(err)
  }
};

// export const getLastData = createAsyncThunk(
//   '/devices/get/last_data',
//   async(body, thunkAPI) => {
//     const endpoint = `${baseUrl}/devices/get/last_data`;
//     try{
//       const response = await axios.post(endpoint, body);
//       return await response.data;
//     }catch(err){
//       return thunkAPI.rejectWithValue({error: err.message});
//     }
//   }
// )

export const getLastData = async(id) => {
  const motorApi = `${baseUrl}/devices/get/last_data`;
  const reqOption = {
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({
        motor_id: id
    })
  };
  try{
    const res = await fetch(motorApi, reqOption);
    if(res.ok){
      const data = await res.json();
      // console.log(data)
      return data
    }
  }
  catch(err){
    console.log(err)
  }
}

export const getMotorInfo = async(id) => {
  const motorApi = `${baseUrl}/devices/motor/find`;
  const reqOption = {
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({
        motor_id: id
    })
  };
  try{
    const res = await fetch(motorApi, reqOption);
    if(res.ok){
      const data = await res.json();
      console.log(data)
      return data
    }
  }
  catch(err){
    console.log(err)
  }
};

export const getRecords = async(motor_id) => {
  const motorApi = `${baseUrl}/devices/records`;
  const reqOption = {
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({
      motor_id: motor_id
    })
  };
  try{
    const res = await fetch(motorApi, reqOption);
    if(res.ok){
      const data = await res.json();
      console.log(data)
      return data
    }
  }
  catch(err){
    console.log(err)
  }
};

export const addMotor = async(body) => {
  const endpoint = `${baseUrl}/devices/motor/add`;
  const reqOption = {
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(body)
  };
  try{
    const res = await fetch(endpoint, reqOption);
    if(res.ok){
      const data = await res.json();
      console.log(data)
      return data
    }
  }
  catch(err){
    console.log(err)
  }
}

export const logout = () => {
  document.cookie = "token=;";
  // location.reload();
}
