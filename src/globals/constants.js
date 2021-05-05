export const ScreenKey={
    Bill:'bill',
    HomeService:'homeService',
    Repair:'repair',
    TabHome:'tabHome',
    TabProfile:'tabProfile',
    ChooseApart:'chooseApart',
    Home:'home',
    Welcome:'welcome',
    SignIn:'signin',
    RepairService:'repairService',
    ChooseImage:'chooseImage',
    ChangeInfo:'changeInfo',
    NotifyManage:'notifyManage',
    NotifyDetailManage:'notifyDetailManage',
    TabNotify:'tabNotify',
    NotifyRepair:'notifyRepair',
    NotifyDetailRepair:'notifyDetailRepair',
    Intro:'introduce',
    ChooseImageHome:'chooseImageHome',
    Complain:'complain',
    Apart_Empty:'apart_Empty',
    DetailApart_Empty:'detailApart_Empty'


}
export const Service={
    Bill:'bill',
    Repair:'repair',
    NotifyRepair:'notifyRepair',
    Intro:'introduce'
}
export const Text_Size={
    Text:20,
    Text_title:25,
    Text_sum:22
}
export const URL="https://qlcc-api.herokuapp.com/";
import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{ useState } from 'react';
export default function ApartId (){
   const[apart,setApart]=useState();
   const [token1,setToken1]=useState();
    const getData = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const apartId = await AsyncStorage.getItem('apartId');
            if (token != null) {
               
                const _token = JSON.parse(token);
                const _apartId = JSON.parse(apartId);
               setApart(_apartId);
               setToken1(_token);
            }
           

        } catch (e) {
            // error reading value
        }
    }
    getData();
    return{
        apart,
        token1
    }
}