const express = require('express');
const userModel = require('../../../models/user');

const getUserDetails = async (req,res,next) => {

    let { userId } = req.params;

    let user = await userModel.findById(userId).select('name , email');

    if(!user){
        return res.status(404).json({
                "status": false,
                "msg" : " no user found"
            }
        )
    }

    return res.status(200).json({
            "status": true,
            "msg" : " user fetched successfully",
            "data" : user
        }
    )
}

module.exports = {
    getUserDetails : getUserDetails
}