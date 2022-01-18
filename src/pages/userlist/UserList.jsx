import "./userlist.css";
import { DataGrid } from "@material-ui/data-grid";
import { Delete } from "@material-ui/icons";
// import { userRows } from "../../dummyData";
// import { Link } from "react-router-dom";
// import { useState } from "react";

export default function UserList() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'Username', width: 160, renderCell:(params)=>{
            return(
                <div className="userListUser">
                    <img className="userListimg" src={params.row.avatar} alt="" />
                    {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'transaction',
          headerName: 'Transaction',
          width: 160,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell:(params)=>{
              return(
              <>
            <button className="userListEdit">Edit</button>
            <Delete className="userListDelete" />
            </>
              )
          }
        },
        
      ];
      
      const rows = [
        { id: 1, username: 'Roses Snow', avatar:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", email: "roses@hotmail.com",status:"active" , transaction:"$120.00"},
        { id: 2, username: 'Roses Snow', avatar:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", email: "roses@hotmail.com",status:"active" , transaction:"$120.00"},
        { id: 3, username: 'Roses Snow', avatar:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", email: "roses@hotmail.com",status:"active" , transaction:"$120.00"},
        { id: 4, username: 'Roses Snow', avatar:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", email: "roses@hotmail.com",status:"active" , transaction:"$120.00"},
        { id: 5, username: 'Roses Snow', avatar:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", email: "roses@hotmail.com",status:"active" , transaction:"$120.00"},
        { id: 6, username: 'Roses Snow', avatar:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", email: "roses@hotmail.com",status:"active" , transaction:"$120.00"},
        { id: 7, username: 'Roses Snow', avatar:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", email: "roses@hotmail.com",status:"active" , transaction:"$120.00"},
        { id: 8, username: 'Roses Snow', avatar:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", email: "roses@hotmail.com",status:"active" , transaction:"$120.00"},
        { id: 9, username: 'Roses Snow', avatar:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", email: "roses@hotmail.com",status:"active" , transaction:"$120.00"},
        { id: 10, username: 'Roses Snow', avatar:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", email: "roses@hotmail.com",status:"active" , transaction:"$120.00"},

      ];

  return (
    <div className="userList">
      <DataGrid
        rows={rows}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}


