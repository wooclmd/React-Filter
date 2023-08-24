import React from "react";

const Table = ({ data }) => {
  return (
    <table style={{ textAlign: "left", borderSpacing: "15px" }}>
      <thead>
        <tr>
          <th style={{ width: "150px" }}>First Name</th>
          <th style={{ width: "150px" }}>Last Name</th>
          <th style={{ width: "150px" }}>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.id}>
            <td style={{ width: "150px" }}>{user.first_name}</td>
            <td style={{ width: "150px" }}>{user.last_name}</td>
            <td style={{ width: "150px" }}>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
