import React from 'react';
import './TableUsers.css';

const TableUsers = ({ data, onEdit, onView, onDelete }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={item.id}
              className={index % 2 === 0 ? 'highlighted-row' : ''}
            >
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => onEdit(item.id)}>Edit</button>
                <button onClick={() => onView(item.id)}>Visualize</button>
                <button onClick={() => onDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableUsers;
